type Reason = {
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    title: "Unified & Integrated",
    description:
      "One platform for cash, liquidity, investments, FX, funding and risk across the enterprise.",
  },
  {
    title: "Real-Time Visibility",
    description:
      "Consolidated, real-time view of cash positions, exposures and commitments.",
  },
  {
    title: "Operational Efficiency",
    description:
      "Automation and standardised workflows reduce manual effort and spreadsheet dependence.",
  },
  {
    title: "Scalable & Flexible",
    description:
      "Built to support multi-entity, multi-currency and multi-asset requirements.",
  },
];

export default function CashtreaWhy() {
  return (
    <section className="relative overflow-hidden bg-brand-dark px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
          Why Cashtrea Treasury Management
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
