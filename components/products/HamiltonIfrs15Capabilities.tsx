import { TrendingUp, ArrowLeftRight, FileText, FileBarChart2, type LucideIcon } from "lucide-react";

type Capability = {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
};

const capabilities: Capability[] = [
  {
    icon: TrendingUp,
    title: "Revenue Modeling",
    description:
      "Projects revenue using time-based recognition, delivery quantity, percentage of completion, cost-plus logic, coverage units, or externally calculated revenue-recognition inputs.",
    points: [
      "Time-based & percentage-of-completion recognition",
      "Delivery-quantity & cost-plus logic",
      "Coverage-unit based projection",
    ],
  },
  {
    icon: ArrowLeftRight,
    title: "Allocation & Remeasurement",
    description:
      "Uses standalone selling price and transaction-price allocation to distribute consideration across performance obligations, refreshing schedules as quantities, costs or modifications change.",
    points: [
      "SSP & transaction-price allocation",
      "Schedule refresh on modification",
      "Variable consideration handling",
    ],
  },
  {
    icon: FileText,
    title: "Accounting Outputs",
    description:
      "Derives revenue, cost, contract asset/liability, billed and unbilled revenue, time value, impairment or onerous effects, and reclassifications.",
    points: [
      "Contract asset/liability tracking",
      "Billed vs. unbilled revenue",
      "Onerous-contract & impairment effects",
    ],
  },
  {
    icon: FileBarChart2,
    title: "Posting & Reporting Flow",
    description:
      "Prepares traceable sub-ledger records and journal-ready streams for the general ledger, management reporting, reconciliation and IFRS 15 disclosures.",
    points: [
      "Traceable sub-ledger records",
      "General ledger integration",
      "IFRS 15 disclosure outputs",
    ],
  },
];

export default function HamiltonIfrs15Capabilities() {
  return (
    <section className="relative overflow-hidden bg-brand-dark px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage: "url('/assets/patterns/network.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
          From Business Events to Revenue Outcomes
        </p>

        <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {capabilities.map(({ icon: Icon, title, description, points }) => (
            <div key={title} className="flex flex-col gap-4 bg-brand-dark-soft p-6 sm:p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                <Icon size={20} strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-bold text-white">{title}</h3>
              <p className="text-sm text-white/60">{description}</p>
              <ul className="flex flex-col gap-2 pt-2">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-white/60">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-orange" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
