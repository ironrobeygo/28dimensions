# Deployment Incident: 28dimensions.com Site Down After Redeploy

## Summary

After uploading new build files for the `feat/new-product` branch, the production
site (28dimensions.com) went down, returning `503 Service Unavailable` and later
`502 Bad Gateway` / `Proxy Error`. The app was crash-looping under PM2 (600+ restarts
within minutes). Root cause was a combination of an incomplete build upload, a
platform-mismatched `node_modules`, corrupted directory permissions from a
Windows-built zip, a duplicate PM2 process, and a wrong `PORT` env var. Resolved by
rebuilding natively for Linux, repackaging with the correct manifest files, fixing
permissions, removing the duplicate process, and explicitly setting `PORT=3001`.

## Environment

- App: Next.js 16.2.9 (`output: "standalone"`), deployed as a self-hosted Node
  process (not Vercel).
- Server: VPS (`vmi1812931`), Ubuntu, x86_64, user `dimensions`, app root
  `/home/dimensions/public_html`.
- Process manager: PM2 (run under the `dimensions` user, not `root` — this caused
  early confusion since `pm2` appeared "not found" when checked as `root`).
- Reverse proxy: Apache, proxying to `localhost:3001`.
- Deploy method: manual file upload via FileZilla (no CI/CD, no Vercel/Docker).

## Timeline of Issues and Fixes

### 1. Site down: `503 Service Unavailable`

**Symptom:** After uploading a partial `.next` folder (only `server/` and
`static/`), the site returned a 503 from Apache.

**Troubleshooting:**
- Checked `pm2 logs 28d` → found:
  `Error: Could not find a production build in the './.next' directory.`

**Root cause:** `next start` / the standalone `server.js` requires `BUILD_ID` and
several manifest files (`routes-manifest.json`, `required-server-files.json`,
`prerender-manifest.json`, etc.) at the top level of `.next`, not just the
`server/` and `static/` subfolders.

**Fix:** Repackaged the deploy archive to include the full set of required files:
`BUILD_ID`, `app-path-routes-manifest.json`, `build-manifest.json`,
`export-marker.json`, `fallback-build-manifest.json`, `images-manifest.json`,
`next-minimal-server.js.nft.json`, `next-server.js.nft.json`, `package.json`,
`prerender-manifest.json`, `required-server-files.js`,
`required-server-files.json`, `routes-manifest.json`, plus `server/` and
`static/`.

### 2. Files missing after a manual cleanup attempt

**Symptom:** A file manager screenshot showed `.env`, `server.js`, `package.json`,
`node_modules`, and `.well-known` missing from `public_html` — apparently moved
into a `backup` folder during an earlier cleanup attempt.

**Fix:** Restored files from `backup/` individually (e.g.
`mv backup/node_modules .`) rather than deleting/recreating them, since
`.well-known` (SSL/domain verification) could not be safely regenerated.

### 3. Crash loop: alternating "no build found" and WASM OOM errors

**Symptom:** `pm2 list` showed restart count climbing rapidly (uptime always
`0s`, restarts in the hundreds/thousands within minutes). Logs alternated
between:
```
Error: Could not find a production build in the './.next' directory.
Unhandled Rejection: RangeError: WebAssembly.instantiate(): Out of memory
```

**Troubleshooting:**
- Confirmed server RAM was not the issue (`free -h` showed 13GB free).
- Ran the app directly in the foreground (`pm2 stop 28d; node server.js`) to
  bypass PM2's fast-restart loop and see the undistorted error.
- Checked `node_modules/@next/` — found only `env`, missing the native
  `@next/swc-linux-x64-*` binary entirely.

**Root cause:** The `node_modules` that had been restored from `backup/` was
incomplete for the Linux (x86_64) server platform — Next.js was falling back to
the much more memory-hungry WASM version of its SWC compiler, which
intermittently hit an internal WASM memory ceiling and crashed.

**Fix (initial):** `rm -rf node_modules && npm install --omit=dev` directly on the
server to get a native Linux-correct install.

### 4. Confirmed the real fix required a full redeploy from a Linux-native build

**Root cause (deeper):** The local development machine is Windows/WSL, and
`npm run build` run from Windows-mounted paths produced build/dependency
artifacts inconsistent with the Linux server. Building via `npm.cmd` on Windows
also failed outright with UNC path errors when the project lived on a
`\\wsl.localhost\...` path.

**Fix:** Ran the build and a fresh `npm ci --omit=dev` natively inside WSL Ubuntu
(matching Node v22.23.1, same as the server) instead of via Windows npm. This
produced a `node_modules` with the correct `@next/swc-linux-x64-gnu` native
binary.

### 5. Full "from scratch" redeploy

Decided to wipe the deployment (excluding `.well-known`, which is
server/SSL-managed and not reproducible from the repo) and redeploy everything:
`.next` (full), `public`, `server.js` (from `.next/standalone/server.js`),
`package.json`, `.env`, and a production-only `node_modules` — all bundled into
one archive built from the WSL-native build.

### 6. Zip archive broke on symlinks

**Symptom:** PowerShell's `Compress-Archive` failed with
`Could not find a part of the path '...node_modules\.bin\next'`.

**Root cause:** `node_modules/.bin/*` entries are Unix symlinks, which
`Compress-Archive` cannot read from a Windows/WSL network-mounted path.

**Fix:** Removed the (non-essential, CLI-only) `.bin` symlinks from the staged
folder before zipping — `server.js` requires modules directly and doesn't need
them.

### 7. Extracted files unreadable — `Permission denied`

**Symptom:** After extracting the new archive, `ls node_modules/@next/` gave
`Permission denied` even though the owner was correctly `dimensions`.

**Root cause:** Directories inside the zip lost their execute bit during
compression on Windows (`drw-r--r--`, mode 644, instead of `drwxr-xr-x`, mode
755). Without the execute bit, a directory can't be traversed/listed even by its
owner.

**Fix:**
```bash
find . -type d -exec chmod 755 {} \;
find . -type f -exec chmod 644 {} \;
chmod +x server.js
```

### 8. `EACCES` scandir error on `public/assets/...`

**Symptom:** Same permission issue, this time surfacing in `public/` when Next.js
tried to scan an assets subfolder.

**Fix:** Same recursive `chmod` fix above, applied across the whole deploy
(not just `node_modules`).

### 9. Duplicate PM2 process

**Symptom:** After several restart attempts, `pm2 list` showed **two** entries
both named `28d` (different PM2-tracked versions), likely both competing for the
same port.

**Fix:**
```bash
pm2 delete all
pm2 start server.js --name 28d
```

### 10. App running but site still unreachable — wrong port

**Symptom:** Fresh single instance was stable (no crash loop, restarts = 0), but
`curl http://localhost:3001` still refused the connection, while Apache expects
the app on port 3001.

**Root cause:** Running `server.js` with no `PORT` env var defaults to port
**3000**. The previous long-running instance had `PORT=3001` set via a saved PM2
env dump; that got lost when `pm2 delete all` was run in step 9.

**Fix:**
```bash
pm2 delete 28d
PORT=3001 pm2 start server.js --name 28d
pm2 save
```

## Final Resolution

1. Built the app natively inside WSL Ubuntu (Node v22.23.1, matching the server),
   not via Windows npm.
2. Packaged a complete deploy bundle: full `.next` (with `BUILD_ID` and all
   manifests), `public/`, `server.js`, `package.json`, `.env`, and a
   production-only `node_modules` with the correct `@next/swc-linux-x64-gnu`
   binary — symlinks stripped before zipping.
3. On the server: wiped `public_html` (except `.well-known`), extracted the
   bundle, and recursively fixed permissions (`755` dirs, `644` files, `+x` on
   `server.js`).
4. Removed the duplicate PM2 process and started a single clean instance with
   `PORT=3001` explicitly set, then `pm2 save`d the config.
5. Verified `curl -I http://localhost:3001` returns `200` and the app no longer
   restarts.

## Lessons / Follow-ups

- **Never build/zip on Windows for a Linux deploy target.** Native binaries
  (SWC, sharp) and directory permissions do not survive the round trip
  correctly. Build inside WSL (or better, directly on the server / in CI).
- **`node_modules` should be installed on the target platform**, not copied from
  a different OS/architecture.
- **PM2 env vars (like `PORT`) are not persisted automatically** — always
  `pm2 save` after configuring a process, and prefer an `ecosystem.config.js`
  file (checked into the deploy bundle) over ad-hoc `PORT=3001 pm2 start ...`
  so the port config isn't lost on `pm2 delete`.
- **Avoid `pm2 delete all`** when only one app needs fixing — it wipes
  saved env vars for every process on the box.
- **`.well-known` and other server-managed files must never be deleted** during
  a "wipe and redeploy" — they aren't reproducible from the repo.
- Consider adding a minimal `ecosystem.config.js` to the repo defining `PORT`,
  `cwd`, and restart limits, so future deploys don't rely on manually
  re-typing env vars into `pm2 start`.
