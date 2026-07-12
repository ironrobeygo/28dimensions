type IndustryRow = {
  industry: string;
  support: string;
};

const industries: IndustryRow[] = [
  {
    industry: "Large Corporates",
    support:
      "Centralises cash, liquidity, investments, funding and treasury reporting across subsidiaries, currencies and business units.",
  },
  {
    industry: "NBFCs",
    support:
      "Supports non-bank treasury operations, investment management, borrowing, liquidity forecasting, accounting and risk monitoring.",
  },
  {
    industry: "Insurance Companies",
    support:
      "Consolidates investment, liquidity and treasury information across entities while supporting multi-currency operations and risk oversight.",
  },
  {
    industry: "Provident Funds",
    support:
      "Supports investment tracking, accruals, accounting, liquidity planning and treasury reporting for managed fund operations.",
  },
  {
    industry: "Asset Management Companies",
    support:
      "Provides centralised cash management, investment tracking, funding visibility and treasury reporting across portfolios and entities.",
  },
];

export default function CashtreaIndustries() {
  return (
    <section className="relative overflow-hidden bg-brand-dark px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
          Industries We Serve
        </p>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="w-1/4 px-6 py-4 text-sm font-bold text-brand-orange">
                  Industry
                </th>
                <th className="px-6 py-4 text-sm font-bold text-brand-orange">
                  How Cashtrea Treasury Management Supports It
                </th>
              </tr>
            </thead>
            <tbody>
              {industries.map(({ industry, support }, index) => (
                <tr
                  key={industry}
                  className={index !== industries.length - 1 ? "border-b border-white/10" : ""}
                >
                  <td className="px-6 py-4 align-top">
                    <span className="text-sm font-semibold text-white">{industry}</span>
                  </td>
                  <td className="px-6 py-4 align-top text-sm text-white/60">{support}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
