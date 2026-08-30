type Reason = {
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    title: "Strategic Transparency",
    description: "A \"System of Economic Truth\" for the entire contract lifecycle.",
  },
  {
    title: "Automated Economic Accuracy",
    description:
      "Every contract data point is automatically modeled to support complex global reporting frameworks and strategic financial oversight.",
  },
  {
    title: "Audit-Ready Integrity",
    description: "Immutable data trails that accelerate financial inspections.",
  },
  {
    title: "Business Agility",
    description:
      "Lower total cost of ownership with proactive risk detection and predictive insights.",
  },
];

export default function HamiltonEngineWhy() {
  return (
    <section className="relative overflow-hidden bg-brand-dark px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
          Why Hamilton Engine
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
