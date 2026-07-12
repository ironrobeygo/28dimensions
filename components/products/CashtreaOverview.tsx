export default function CashtreaOverview() {
  return (
    <section className="relative overflow-hidden bg-brand-dark px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Overview
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
            Centralised Treasury Control Across the Enterprise
          </h2>
        </div>

        <div className="flex flex-col gap-4 text-sm text-white/60">
          <p>
            Cashtrea Treasury Management is designed to manage the treasury operations of corporates and
            non-bank financial institutions.
          </p>
          <p>
            It consolidates surplus and deficit information from business units, monitors
            bank balances and fund transfers, supports short-term liquidity planning,
            manages investment activity and provides structured workflows for funding and
            borrowing.
          </p>
          <p>
            With off-the-shelf modules and automation, Cashtrea Treasury Management reduces dependence on
            spreadsheet-based MIS and accounting processes while delivering real-time
            visibility and stronger control.
          </p>
        </div>
      </div>
    </section>
  );
}
