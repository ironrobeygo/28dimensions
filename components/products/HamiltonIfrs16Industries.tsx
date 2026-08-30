type IndustryRow = {
  industry: string;
  support: string;
};

const industries: IndustryRow[] = [
  {
    industry: "Telecommunications",
    support:
      "Manages right-of-use asset and lease liability measurement across network infrastructure and site lease portfolios.",
  },
  {
    industry: "Energy & Resources",
    support:
      "Applies lease liability and ROU measurement to equipment, land and facility leases across capital-intensive operations.",
  },
  {
    industry: "Financial Services",
    support:
      "Supports lease portfolio measurement, remeasurement and disclosure across office and equipment leases.",
  },
  {
    industry: "Retail",
    support:
      "Tracks store and site lease portfolios through measurement, index-linked remeasurement and disclosure reporting.",
  },
  {
    industry: "Consumer Goods",
    support:
      "Applies ROU asset and lease liability tracking across warehouse, facility and equipment leases.",
  },
  {
    industry: "Manufacturing",
    support:
      "Supports measurement and remeasurement of plant, equipment and facility lease portfolios.",
  },
  {
    industry: "Logistics",
    support:
      "Manages lease liability and ROU measurement across fleet, warehouse and facility lease portfolios.",
  },
];

export default function HamiltonIfrs16Industries() {
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
                  How IFRS 16 CEM Supports It
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
