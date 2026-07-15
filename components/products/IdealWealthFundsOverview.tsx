export default function IdealWealthFundsOverview() {
  return (
    <section className="relative overflow-hidden bg-brand-dark px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Overview
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
            Unified Wealth Management Platform
          </h2>
        </div>

        <div className="flex flex-col gap-4 text-sm text-white/60">
          <p>
            iDEAL Wealth &amp; Funds Management is a modular, holistic investment
            management platform that unifies front-, middle- and back-office
            operations for financial institutions. It supports wealth management,
            trust banking, custody, asset management, insurance, pension funds and
            family offices through a single integrated platform.
          </p>
          <p>
            Built with a modular architecture, the platform can be deployed as a
            standalone solution or integrated with existing infrastructure. It
            supports multi-entity, multi-currency and multi-country operations and
            is cloud-ready for enterprise deployment.
          </p>
        </div>
      </div>
    </section>
  );
}
