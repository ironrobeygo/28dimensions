export default function HamiltonEngineOverview() {
  return (
    <section className="relative overflow-hidden bg-brand-dark px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Overview
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
            From Financial Blind Spots to a System of Economic Truth
          </h2>
        </div>

        <div className="flex flex-col gap-4 text-sm text-white/60">
          <p>
            Modern corporations face financial blind spots caused by manual processes and rigid
            systems, limiting their ability to manage complex client fulfilment and multi-layered
            contractual obligations — resulting in significant financial exposure.
          </p>
          <p>
            Hamilton Engine builds a complete economic profile for every contract, capturing
            revenues, cost structures, funding constraints and cash flows across its entire
            lifecycle to establish a clear view of the contract&apos;s true economic reality.
          </p>
          <p>
            By integrating other economic information such as inflation, currency fluctuations
            and labour cost changes, the engine projects P&amp;L impacts and balance sheet
            positions before execution. A &quot;Self-Audit&quot; logic with immutable data trails
            ensures future balances mathematically reconcile to zero, detecting financial gaps
            months before they hit the general ledger.
          </p>
        </div>
      </div>
    </section>
  );
}
