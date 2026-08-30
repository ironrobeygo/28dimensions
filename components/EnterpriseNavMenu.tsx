"use client";

import { useEffect, useRef, useState, type FocusEvent, type KeyboardEvent } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { enterprisePartners } from "@/lib/content";

// Shared trigger label — the underlying `navLinks` entry in `lib/content.ts`
// still carries its legacy singular "Enterprise Solution" label/children
// (Credence-only) from before this menu became partner-grouped; this
// component intentionally renders its own label and pulls partner/product
// data straight from `enterprisePartners` instead, per DEO-35 scope (no
// changes to the `lib/content.ts` data model).
const TRIGGER_LABEL = "Enterprise Solutions";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange";

type EnterpriseNavMenuProps = {
  active: boolean;
  onNavigate: () => void;
};

/** Desktop mega-menu: a button-triggered disclosure panel grouping products by partner. */
export function EnterpriseNavMenuDesktop({ active, onNavigate }: EnterpriseNavMenuProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [open]);

  function closeAndFocusTrigger() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  function handleTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      requestAnimationFrame(() => {
        panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
      });
    } else if (event.key === "Escape" && open) {
      event.preventDefault();
      closeAndFocusTrigger();
    }
  }

  function handlePanelKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeAndFocusTrigger();
    }
  }

  // Closes the menu once keyboard focus leaves the trigger+panel entirely
  // (e.g. Tab past the last product link), so it doesn't stay visually open
  // over unrelated page content while focus has moved on.
  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    if (!containerRef.current?.contains(event.relatedTarget as Node | null)) {
      setOpen(false);
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={handleBlur}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="enterprise-solutions-menu"
        onClick={() => setOpen((value) => !value)}
        onKeyDown={handleTriggerKeyDown}
        className={`relative flex items-center gap-1 rounded-sm py-1 text-sm font-medium transition ${focusRing} ${
          active ? "text-white" : "text-white/80 hover:text-white"
        }`}
      >
        {TRIGGER_LABEL}
        <ChevronDown size={14} className={`transition ${open ? "rotate-180" : ""}`} />
        {active && <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-brand-orange" />}
      </button>

      <div
        id="enterprise-solutions-menu"
        ref={panelRef}
        aria-label={TRIGGER_LABEL}
        onKeyDown={handlePanelKeyDown}
        className={`absolute left-1/2 top-full z-10 w-[640px] max-w-[90vw] -translate-x-1/2 pt-3 transition ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 gap-6 rounded-xl border border-white/10 bg-brand-dark p-6 shadow-lg sm:grid-cols-2">
          {enterprisePartners.map((partner) => (
            <div key={partner.slug}>
              <p className="px-1 text-xs font-semibold uppercase tracking-[0.15em] text-brand-orange">
                {partner.name}
              </p>
              <ul className="mt-3 flex flex-col gap-1">
                {partner.products.map((product) => (
                  <li key={product.href}>
                    <Link
                      href={product.href}
                      onClick={() => {
                        setOpen(false);
                        onNavigate();
                      }}
                      className={`block rounded-md px-1 py-1.5 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white ${focusRing}`}
                    >
                      {product.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Mobile: a two-level nested accordion — Enterprise Solutions > partner > products. */
export function EnterpriseNavMenuMobile({ active, onNavigate }: EnterpriseNavMenuProps) {
  const [open, setOpen] = useState(false);
  const [openPartners, setOpenPartners] = useState<Set<string>>(new Set());

  function togglePartner(slug: string) {
    setOpenPartners((current) => {
      const next = new Set(current);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }
      return next;
    });
  }

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="enterprise-solutions-mobile-panel"
        onClick={() => setOpen((value) => !value)}
        className={`flex w-full items-center justify-between rounded-md border-b-2 px-3 py-3 text-sm font-medium transition ${focusRing} ${
          active
            ? "border-brand-orange text-white"
            : "border-transparent text-white/80 hover:bg-white/5 hover:text-white"
        }`}
      >
        {TRIGGER_LABEL}
        <ChevronDown size={16} className={`transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div id="enterprise-solutions-mobile-panel" className="ml-3 flex flex-col gap-1 border-l border-white/10 pl-3">
          {enterprisePartners.map((partner) => {
            const partnerOpen = openPartners.has(partner.slug);
            const panelId = `enterprise-solutions-mobile-${partner.slug}`;
            return (
              <div key={partner.slug} className="py-1">
                <button
                  type="button"
                  aria-expanded={partnerOpen}
                  aria-controls={panelId}
                  onClick={() => togglePartner(partner.slug)}
                  className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/60 transition hover:bg-white/5 hover:text-white/90 ${focusRing}`}
                >
                  {partner.name}
                  <ChevronRight size={14} className={`transition ${partnerOpen ? "rotate-90" : ""}`} />
                </button>
                {partnerOpen && (
                  <div id={panelId} className="ml-3 flex flex-col gap-1 border-l border-white/10 pl-3">
                    {partner.products.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        onClick={onNavigate}
                        className={`rounded-md px-3 py-2 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white ${focusRing}`}
                      >
                        {product.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
