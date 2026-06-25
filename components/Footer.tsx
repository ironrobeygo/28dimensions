"use client";

import { type MouseEvent } from "react";
import { Play, ChevronRight } from "lucide-react";
import Logomark from "./Logomark";
import { navLinks } from "@/lib/content";
import { smoothScrollTo } from "@/lib/smoothScroll";

export default function Footer() {
  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    smoothScrollTo(href);
  }

  return (
    <footer className="bg-brand-dark px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <div className="flex max-w-md flex-col items-center gap-3 sm:flex-row sm:items-center lg:items-center">
          <a href="#top" onClick={(e) => handleNavClick(e, "#top")} className="flex shrink-0 items-center gap-2 text-white">
            <Logomark size={20} />
            <span className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-tight">28D</span>
              <span className="text-[9px] font-medium tracking-[0.2em] text-white/60">
                28 DIMENSIONS
              </span>
            </span>
          </a>
          <p className="text-sm text-white">
            Building the connected future through intelligent systems,
            trusted partnerships, and sustainable impact.
          </p>
        </div>

        <nav className="hidden flex-wrap items-center justify-center gap-6 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-white/70 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="text-sm font-medium text-white/70 hover:text-white"
          >
            Contact Us
          </a>
        </nav>

        <nav className="grid w-full grid-cols-1 gap-y-3 border-t border-white/10 pt-6 text-left sm:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="flex items-center justify-between text-sm font-medium text-white/70 hover:text-white"
            >
              {link.label}
              <ChevronRight size={16} />
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="flex items-center justify-between text-sm font-medium text-white/70 hover:text-white"
          >
            Contact Us
            <ChevronRight size={16} />
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="LinkedIn"
            className="inline-flex size-9 items-center justify-center rounded-full border border-white/30 text-sm font-semibold text-white/80 hover:border-white hover:text-white"
          >
            in
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="inline-flex size-9 items-center justify-center rounded-full border border-white/30 text-white/80 hover:border-white hover:text-white"
          >
            <Play size={16} fill="currentColor" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} 28 Dimensions. All Rights Reserved.</p>
        <p>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="hover:text-white">
            Terms of Use
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
