import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";

export default function HamiltonIfrs9Header() {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "url('/assets/patterns/network.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center right",
          backgroundSize: "cover",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, var(--color-brand-dark) 40%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 sm:pt-24 sm:pb-20 lg:px-8 lg:pt-28 lg:pb-24">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-white/50">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link href="/#enterprise-solutions" className="text-brand-orange transition hover:text-brand-orange-dark">
            Enterprise Solutions
          </Link>
          <ChevronRight size={12} />
          <span className="text-white/70">IFRS 9</span>
        </nav>

        <div className="mt-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Hamilton Contract Economics Modeling
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60">
            <span>Powered by</span>
            <span className="font-semibold text-white">Hamilton Prima Indonesia</span>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
            IFRS 9
          </h1>
          <p className="mt-4 text-lg font-semibold text-white">
            Financial Instruments
          </p>
          <p className="mt-4 text-sm text-white/60">
            IFRS 9 governs classification and measurement of financial assets, financial
            liabilities and certain contracts to buy or sell non-financial items. Hamilton&apos;s
            Contract Economics Modeling converts instrument economics into consistent
            classification, measurement, impairment and disclosure outcomes across large
            portfolios.
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
    </section>
  );
}
