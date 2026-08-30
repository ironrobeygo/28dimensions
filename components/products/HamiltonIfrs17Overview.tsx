export default function HamiltonIfrs17Overview() {
  return (
    <section className="relative overflow-hidden bg-brand-dark px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Overview
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
            Modeling Insurance Contracts as a Structured Economic Engine
          </h2>
        </div>

        <div className="flex flex-col gap-4 text-sm text-white/60">
          <p>
            IFRS 17 replaces IFRS 4 and establishes principles for recognition, measurement,
            presentation and disclosure of insurance contracts. The standard is demanding
            because insurance contracts combine financial-instrument and service-contract
            features, often with cash flows that are uncertain, long dated and highly variable.
          </p>
          <p>
            Hamilton&apos;s Contract Economics Modeling frames the core model around a group of
            contracts, identified through dimensions such as portfolio type, annual cohort and
            profitability group. Within the contract boundary, it determines which expected cash
            flows belong in fulfilment cash flows and therefore influence measurement of the
            contractual service margin (CSM).
          </p>
          <p>
            Expected inflows include premiums and related remeasurement or derecognition
            effects; expected outflows include claims, acquisition costs, claim handling costs
            and other expenses. Discounting converts future values to present values and unwinds
            interest; risk adjustment captures compensation for non-financial risk; CSM
            allocation recognizes unearned profit as services are provided.
          </p>
        </div>
      </div>
    </section>
  );
}
