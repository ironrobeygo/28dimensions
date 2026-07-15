module.exports = {
  apps: [
    {
      name: "28d",
      cwd: "/home/dimensions/public_html",
      script: "server.js",
      env: {
        PORT: 3001,
        NODE_ENV: "production",
      },
    },
    {
      name: "28d-staging",
      cwd: "/home/dimensions/public_html/staging",
      script: "server.js",
      env: {
        PORT: 3002,
        NODE_ENV: "production",
      },
    },
  ],
};
