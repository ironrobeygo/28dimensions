export default function IdealOverview() {
  return (
    <section className="relative overflow-hidden bg-brand-dark px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Overview
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
            End-to-End Treasury Operations. Intelligent Decisions. Measurable Impact.
          </h2>
        </div>

        <div className="flex flex-col gap-4 text-sm text-white/60">
          <p>
            iDeal Integrated Treasury is a comprehensive bank treasury management platform that
            supports the complete treasury management requirements of banks
            and financial institutions.
          </p>
          <p>
            From money markets to foreign exchange, fixed income to
            derivatives, iDeal Integrated Treasury unifies front-, middle- and back-office
            workflows on a single platform with integrated risk management,
            decision support and reporting.
          </p>
          <p>
            The platform is proven at scale, delivering straight-through
            processing, real-time visibility and operational excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
