type IndustryRow = {
  industry: string;
  support: string;
};

const industries: IndustryRow[] = [
  {
    industry: "Insurance Carriers",
    support:
      "Applies group-of-contracts measurement, discounting, risk adjustment and CSM allocation across life, general and health insurance portfolios.",
  },
  {
    industry: "Reinsurance",
    support:
      "Extends contract boundary and fulfilment cash-flow modelling to reinsurance held and ceded contracts, including reinsurance effects and experience adjustments.",
  },
  {
    industry: "Bancassurance & Financial Services",
    support:
      "Supports insurance-linked and unit-linked contract measurement within broader financial services and banking-distributed insurance products.",
  },
];

export default function HamiltonIfrs17Industries() {
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
                  How IFRS 17 CEM Supports It
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
