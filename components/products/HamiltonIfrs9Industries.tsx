type IndustryRow = {
  industry: string;
  support: string;
};

const industries: IndustryRow[] = [
  {
    industry: "Telecommunications",
    support:
      "Applies IFRS 9 classification and ECL modelling to trade receivables and financing arrangements within complex service agreements.",
  },
  {
    industry: "Energy & Resources",
    support:
      "Supports classification, measurement and ECL calculation for financing and receivable exposures in capital-intensive contracts.",
  },
  {
    industry: "Financial Services",
    support:
      "Operationalizes classification, measurement and expected credit loss modelling across large loan and investment portfolios.",
  },
  {
    industry: "Retail",
    support:
      "Models expected credit loss and amortised cost schedules for consumer financing and trade receivable exposures.",
  },
  {
    industry: "Consumer Goods",
    support:
      "Supports classification and ECL modelling for trade receivables across distribution and supply contracts.",
  },
  {
    industry: "Manufacturing",
    support:
      "Applies amortised cost and ECL modelling to financing and receivable exposures tied to production contracts.",
  },
  {
    industry: "Logistics",
    support:
      "Extends classification, measurement and impairment modelling to receivables and financing arrangements across logistics contracts.",
  },
];

export default function HamiltonIfrs9Industries() {
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
                  How IFRS 9 CEM Supports It
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
