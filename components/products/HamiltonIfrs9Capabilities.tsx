import { TrendingUp, Calculator, ShieldCheck, FileBarChart2, type LucideIcon } from "lucide-react";

type Capability = {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
};

const capabilities: Capability[] = [
  {
    icon: TrendingUp,
    title: "Economic Modeling",
    description:
      "Projects contractual cash flows, effective interest effects, amortised cost schedules, fair-value-sensitive outcomes and credit-risk exposure over time.",
    points: [
      "Contractual cash flow projection",
      "Effective interest & amortised cost schedules",
      "Fair-value & credit-risk exposure modelling",
    ],
  },
  {
    icon: Calculator,
    title: "Accounting Calculation",
    description:
      "Translates classification and event outcomes into measurement updates, impairment movements, gain or loss effects and period-end balances.",
    points: [
      "Measurement updates",
      "Impairment movements",
      "Period-end balance calculation",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Expected Credit Loss (ECL)",
    description:
      "Links instrument-level cash flows to exposure, probability, loss severity and timing assumptions across compulsory technical, compulsory economic and optional management-overlay model layers.",
    points: [
      "Technical expected-loss models",
      "Forward-looking economic assumptions",
      "Governed management overlays",
    ],
  },
  {
    icon: FileBarChart2,
    title: "Predictive Accounting & Reporting",
    description:
      "Uses expected events to show future accounting impacts before actual postings, producing traceable sub-ledger documents for general ledger integration and regulatory reporting.",
    points: [
      "Predictive P&L, capital & risk visibility",
      "Traceable sub-ledger documents",
      "General ledger integration",
    ],
  },
];

export default function HamiltonIfrs9Capabilities() {
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
          From Events to Accounting Outcomes
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
