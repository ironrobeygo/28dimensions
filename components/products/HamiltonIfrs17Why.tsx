type Reason = {
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    title: "Automation & Consistency",
    description:
      "Provides automation and consistency across a standard whose calculations are interdependent and sensitive to assumptions.",
  },
  {
    title: "Traceability & Governance",
    description: "Preserves the link from contract event to accounting result with full governance.",
  },
  {
    title: "Scalability",
    description: "Scales across portfolios, cohorts and profitability groups without manual exception handling.",
  },
  {
    title: "Aligned Actuarial & Accounting Activity",
    description: "Aligns actuarial and accounting activity to reduce spreadsheet dependence.",
  },
];

export default function HamiltonIfrs17Why() {
  return (
    <section className="relative overflow-hidden bg-brand-dark px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
          Why IFRS 17 CEM
        </p>

        <div className="mt-8 grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {reasons.map(({ title, description }) => (
            <div key={title} className="flex flex-col gap-3 py-6 first:pt-0 sm:px-8 sm:py-0 sm:first:pl-0">
              <h3 className="text-base font-bold text-white">{title}</h3>
              <p className="text-sm text-white/60">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
