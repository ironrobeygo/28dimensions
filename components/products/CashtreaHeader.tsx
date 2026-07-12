import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight } from "lucide-react";

export default function CashtreaHeader() {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src="/assets/hero/ideal-hero-image-2.jpg"
          alt="Laptop displaying the Cashtrea Treasury Management platform"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, var(--color-brand-dark) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-brand-dark) 0%, transparent 25%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 sm:pt-24 sm:pb-16 lg:px-8 lg:pt-28 lg:pb-16">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-white/50">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link href="/#our-products" className="text-brand-orange transition hover:text-brand-orange-dark">
            Products
          </Link>
          <ChevronRight size={12} />
          <span className="text-white/70">Cashtrea Treasury Management</span>
        </nav>

        <div className="mt-8 max-w-md lg:max-w-lg">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Our Product
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Cashtrea Treasury Management
          </h1>
          <p className="mt-4 text-lg font-semibold text-white">
            Unified Corporate Treasury Management Platform
          </p>
          <p className="mt-4 text-sm text-white/60">
            A comprehensive treasury solution for corporates and NBFCs to manage cash,
            liquidity, investments, foreign exchange, funding and borrowing across multiple
            subsidiaries, currencies and asset classes.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-orange-dark"
            >
              Request a Demo
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="relative h-56 w-full sm:h-72 lg:hidden">
        <Image
          src="/assets/hero/ideal-hero-image-2.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
