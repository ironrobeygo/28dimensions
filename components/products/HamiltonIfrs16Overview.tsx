export default function HamiltonIfrs16Overview() {
  return (
    <section className="relative overflow-hidden bg-brand-dark px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Overview
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
            From Lease Contracts to Dynamic Balance Sheet Outcomes
          </h2>
        </div>

        <div className="flex flex-col gap-4 text-sm text-white/60">
          <p>
            IFRS 16 requires lessees to recognize assets and liabilities arising from leases.
            Lease accounting is a lifecycle modelling problem — lease terms, payment schedules,
            discount rates, renewal and termination options, index changes, modifications,
            impairments, accruals and settlements must be translated into dynamic outcomes.
          </p>
          <p>
            At commencement, the engine establishes lease term, fixed and variable payments,
            incentives, initial direct costs, discount-rate assumptions, currency and ledger
            context, right-of-use asset value and lease liability. For lessors, it supports
            classification of arrangements and governs lease income, receivables, residual
            exposure and disclosure obligations.
          </p>
          <p>
            Because lease portfolios are operationally volatile, contract creation,
            reassessment, modification, index-linked payment updates, renewal decisions and
            early termination are captured as governed events with a traceable link back to the
            contract and the accounting rule set.
          </p>
        </div>
      </div>
    </section>
  );
}
