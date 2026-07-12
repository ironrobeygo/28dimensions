"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import Logomark from "./Logomark";
import { navLinks } from "@/lib/content";
import { smoothScrollTo } from "@/lib/smoothScroll";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const pathname = usePathname();

  function isLinkActive(href: string, children?: { href: string }[]) {
    if (children) {
      return children.some((child) => pathname === child.href || pathname.startsWith(`${child.href}/`));
    }
    if (href.startsWith("#")) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    setIsOpen(false);
    if (!href.startsWith("#")) return;
    event.preventDefault();
    smoothScrollTo(href);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        isScrolled || isOpen
          ? "bg-brand-dark/95 backdrop-blur supports-[backdrop-filter]:bg-brand-dark/80"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-white">
          <Logomark size={52} />
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-[0.15em] text-white">28</span>
            <span className="text-[9px] font-medium tracking-[0.2em] text-white">DIMENSIONS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href, link.children);
            return link.children ? (
              <div key={link.href} className="group relative">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative flex items-center gap-1 py-1 text-sm font-medium transition ${
                    active ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  <ChevronDown size={14} className="transition group-hover:rotate-180" />
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-brand-orange" />
                  )}
                </a>
                <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="min-w-[220px] rounded-lg border border-white/10 bg-brand-dark py-2 shadow-lg">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-1 text-sm font-medium transition ${
                  active ? "text-white" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-brand-orange" />
                )}
              </a>
            );
          })}
        </nav>

        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="hidden items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-orange-dark md:inline-flex"
        >
          Contact Us
          <ArrowRight size={16} />
        </a>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-brand-dark md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href, link.children);
              return link.children ? (
                <div key={link.href}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileGroup((current) => (current === link.href ? null : link.href))
                    }
                    className={`flex w-full items-center justify-between rounded-md border-b-2 px-3 py-3 text-sm font-medium transition ${
                      active
                        ? "border-brand-orange text-white"
                        : "border-transparent text-white/80 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition ${openMobileGroup === link.href ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openMobileGroup === link.href && (
                    <div className="ml-3 flex flex-col gap-1 border-l border-white/10 pl-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="rounded-md px-3 py-2 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`rounded-md border-b-2 px-3 py-3 text-sm font-medium transition ${
                    active
                      ? "border-brand-orange text-white"
                      : "border-transparent text-white/80 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-orange-dark"
            >
              Contact Us
              <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
