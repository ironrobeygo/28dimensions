type IndustryRow = {
  industry: string;
  support: string;
};

const industries: IndustryRow[] = [
  {
    industry: "Telecommunications",
    support:
      "Applies contract economics modelling and predictive accounting to complex, multi-layered service contracts and regulatory reporting obligations.",
  },
  {
    industry: "Energy & Resources",
    support:
      "Provides audit-ready contract economics and predictive P&L visibility across long-term, capital-intensive agreements.",
  },
  {
    industry: "Financial Services",
    support:
      "Extends contract economics modelling and Self-Audit reconciliation to complex financial instrument and lending contracts.",
  },
  {
    industry: "Retail",
    support:
      "Delivers economic transparency and predictive accounting across high-volume client fulfilment contracts.",
  },
  {
    industry: "Consumer Goods",
    support:
      "Models cost structures, funding constraints and cash flows across multi-layered supply and distribution contracts.",
  },
  {
    industry: "Manufacturing",
    support:
      "Supports economic profiling and predictive accounting for complex production and fulfilment agreements.",
  },
  {
    industry: "Logistics",
    support:
      "Applies immutable, audit-ready contract economics to intricate multi-party logistics and service obligations.",
  },
];

export default function HamiltonEngineIndustries() {
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
                  How Hamilton Engine Supports It
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
