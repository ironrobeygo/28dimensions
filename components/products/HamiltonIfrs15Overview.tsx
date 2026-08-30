export default function HamiltonIfrs15Overview() {
  return (
    <section className="relative overflow-hidden bg-brand-dark px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Overview
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
            Operationalizing the Five-Step Revenue Recognition Model
          </h2>
        </div>

        <div className="flex flex-col gap-4 text-sm text-white/60">
          <p>
            IFRS 15&apos;s five-step model requires an entity to identify the contract, identify
            performance obligations, determine the transaction price, allocate that price to
            performance obligations, and recognize revenue when or as those obligations are
            satisfied.
          </p>
          <p>
            Under Hamilton&apos;s Contract Economics Modeling, those steps become structured
            calculation drivers rather than spreadsheet judgments — covering standalone selling
            price determination, delivery and billing consideration types, variable
            consideration, experience adjustments, predictive revenue, time value of money, cost
            recognition and contract asset/liability netting.
          </p>
          <p>
            At inception, the engine establishes baseline contract economics — obligations,
            pricing, allocation, expected revenue, expected cost, margin, billing plan and
            financial statement effects — then captures modifications, fulfilment, billing,
            returns and reclassifications with full traceability through to final settlement.
          </p>
        </div>
      </div>
    </section>
  );
}
