export default function HamiltonIfrs9Overview() {
  return (
    <section className="relative overflow-hidden bg-brand-dark px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Overview
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
            Operationalizing Classification, Measurement &amp; Expected Credit Loss
          </h2>
        </div>

        <div className="flex flex-col gap-4 text-sm text-white/60">
          <p>
            IFRS 9 requires recognition when an entity becomes party to the contractual
            provisions of a financial instrument, with initial measurement at fair value and
            directly attributable transaction costs reflected when the instrument is not
            measured at fair value through profit or loss.
          </p>
          <p>
            Under Hamilton&apos;s Contract Economics Modeling, each financial instrument becomes
            a living economic model — contractual provisions, principal and interest terms,
            repayment schedules, transaction costs, embedded features and credit-risk attributes
            are retained as structured drivers rather than disconnected spreadsheet inputs.
          </p>
          <p>
            At initial recognition, the engine supports fair-value measurement, transaction-cost
            treatment and classification based on business model and contractual cash-flow
            characteristics — producing amortised cost, FVOCI or FVTPL categorisation that
            drives valuation, income recognition, balance sheet presentation and disclosure
            logic.
          </p>
        </div>
      </div>
    </section>
  );
}
