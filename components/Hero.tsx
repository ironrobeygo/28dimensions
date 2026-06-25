"use client";

import { type MouseEvent } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Logomark from "./Logomark";
import { smoothScrollTo } from "@/lib/smoothScroll";

export default function Hero() {
  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    smoothScrollTo(href);
  }

  return (
    <section
      id="top"
      className="relative flex min-h-[66.67vh] items-center overflow-hidden bg-brand-dark pb-16 pt-24 sm:pb-20 sm:pt-28"
    >
      <div className="absolute inset-0 grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
        <div className="relative">
          <Image
            src="/assets/hero/hero-image-left.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-right lg:object-right"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/40 to-brand-dark/90 lg:bg-gradient-to-r lg:from-brand-dark/80 lg:via-brand-dark/10 lg:to-transparent" />
        </div>
        <div className="relative">
          <Image
            src="/assets/hero/hero-image-right.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-left lg:object-left"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-brand-dark/40 to-brand-dark/90 lg:bg-gradient-to-l lg:from-brand-dark/80 lg:via-brand-dark/10 lg:to-transparent" />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <div className="max-w-md text-center lg:text-left">
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Intelligence That Protects{" "}
              <span className="text-brand-orange">Systems.</span>
            </h1>
            <p className="mt-4 text-base text-white/70">
              We design, build, and operate mission-critical systems that
              power nations forward.
            </p>
            <a
              href="#who-we-are"
              onClick={(e) => handleNavClick(e, "#who-we-are")}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-orange"
            >
              Discover 28D
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="relative flex shrink-0 items-center justify-center">
            <Logomark size={270} className="sm:size-[330px]" />
            <span className="absolute text-2xl font-bold text-white sm:text-3xl">
              28D
            </span>
          </div>

          <div className="max-w-md text-center lg:text-left">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Infrastructure That Improves{" "}
              <span className="text-brand-orange">Lives.</span>
            </h2>
            <p className="mt-4 text-base text-white/70">
              From digital identity to smart mobility, we build solutions
              that create better opportunities for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
