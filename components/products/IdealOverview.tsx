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
            iDEAL Integrated Treasury is an integrated treasury management solution
            designed for banks and financial institutions. It supports treasury
            operations across foreign exchange, money markets, fixed income,
            derivatives, equities, mutual funds and other financial products.
          </p>
          <p>
            The platform connects front-, middle- and back-office processes
            while providing integrated risk management, decision-support tools,
            customer foreign exchange workflows, reporting and data visualisation.
          </p>
          <p>
            Designed for scalable treasury operations, iDEAL provides integrated
            processing, consolidated visibility and operational control across
            multiple treasury functions.
          </p>
        </div>
      </div>
    </section>
  );
}
