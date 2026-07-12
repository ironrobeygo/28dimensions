type IndustryRow = {
  industry: string;
  support: string;
};

const industries: IndustryRow[] = [
  {
    industry: "Asset Management",
    support:
      "Manage investment portfolios across multiple asset classes with integrated front-, middle- and back-office workflows covering pre-deal analysis, dealing, compliance, settlements, valuation, accounting, NAV processing and reporting.",
  },
  {
    industry: "Custody Management",
    support:
      "Support custody operations from client onboarding and account setup through securities safekeeping, transaction settlement, corporate actions, confirmations, fees and integrations with core banking systems.",
  },
  {
    industry: "Pension Funds",
    support:
      "Manage contributions, income distribution, withdrawals and retirement benefits across single- and multi-employer provident-fund structures.",
  },
  {
    industry: "Insurance",
    support:
      "Support multi-asset investment operations, valuation, accounting, NAV processing, exposure monitoring and regulatory reporting.",
  },
  {
    industry: "Trust Banking",
    support:
      "Unify the management of UITFs, institutional portfolios and investment management accounts on a single platform. Support client onboarding, risk profiling, discretionary and non-discretionary mandates, multi-asset portfolio management, compliance monitoring, valuation, settlements and reporting.",
  },
];

export default function IdealWealthFundsIndustries() {
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
                  How iDeal Wealth and Fund Management Supports You
                </th>
              </tr>
            </thead>
            <tbody>
              {industries.map(({ industry, support }, index) => (
                <tr
                  key={industry}
                  className={index !== industries.length - 1 ? "border-b border-white/10" : ""}
                >
                  <td className="px-6 py-4 align-top text-sm font-semibold text-white">
                    {industry}
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
