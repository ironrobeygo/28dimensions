export default function IdealWealthFundsOverview() {
  return (
    <section className="relative overflow-hidden bg-brand-dark px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Overview
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
            A Complete Investment Management Platform
          </h2>
        </div>

        <div className="flex flex-col gap-4 text-sm text-white/60">
          <p>
            iDeal Wealth and Fund Management is a modular and unified platform supporting
            front-, middle- and back-office investment management operations.
          </p>
          <p>
            It brings together pre-deal analysis, portfolio and cash-position
            monitoring, dealing, compliance, settlements, corporate actions,
            mark-to-market valuation, accounting and NAV generation within one
            solution.
          </p>
          <p>
            The platform can be deployed as a standalone implementation,
            integrated with an institution&apos;s existing infrastructure or
            delivered as a cloud-hosted application. It supports multi-entity,
            multi-currency and multi-country operations.
          </p>
        </div>
      </div>
    </section>
  );
}
