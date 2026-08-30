type IndustryRow = {
  industry: string;
  support: string;
};

const industries: IndustryRow[] = [
  {
    industry: "Telecommunications",
    support:
      "Decomposes multi-element service and bundled contracts into performance obligations for consistent revenue recognition.",
  },
  {
    industry: "Energy & Resources",
    support:
      "Applies transaction-price allocation and percentage-of-completion recognition to long-term delivery contracts.",
  },
  {
    industry: "Financial Services",
    support:
      "Supports revenue recognition and contract asset/liability tracking for fee-based service contracts.",
  },
  {
    industry: "Retail",
    support:
      "Models variable consideration, returns and billing events across high-volume customer contracts.",
  },
  {
    industry: "Consumer Goods",
    support:
      "Applies performance-obligation and billing-event tracking across distribution and supply agreements.",
  },
  {
    industry: "Manufacturing",
    support:
      "Supports percentage-of-completion and cost-plus revenue recognition for production contracts.",
  },
  {
    industry: "Logistics",
    support:
      "Tracks fulfilment, billing and modification events across multi-party service contracts for consistent revenue recognition.",
  },
];

export default function HamiltonIfrs15Industries() {
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
                  How IFRS 15 CEM Supports It
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
