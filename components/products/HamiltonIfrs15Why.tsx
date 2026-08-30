type Reason = {
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    title: "Reduced Spreadsheet Dependency",
    description: "Reduces spreadsheet dependency in applying IFRS 15 revenue logic at scale.",
  },
  {
    title: "Unified Reporting Logic",
    description: "Applies unified reporting logic across entities, regions, ledgers and standards.",
  },
  {
    title: "Clear Audit Trail",
    description:
      "Provides a clear audit trail from contract terms and business events to accounting outcomes and disclosures.",
  },
  {
    title: "Computational Bridge",
    description:
      "Acts as the computational bridge between customer-contract economics and enterprise revenue accounting.",
  },
];

export default function HamiltonIfrs15Why() {
  return (
    <section className="relative overflow-hidden bg-brand-dark px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
          Why IFRS 15 CEM
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
