import { Layers, BarChart3, Cpu, type LucideIcon } from "lucide-react";

type Capability = {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
};

const capabilities: Capability[] = [
  {
    icon: Layers,
    title: "Contract Economics Modeling",
    description:
      "Goes beyond automation by building a complete economic profile for every contract — capturing revenues, cost structures, funding constraints and cash flows across its entire lifecycle.",
    points: [
      "Revenue & cost structure modelling",
      "Funding constraints & cash flow tracking",
      "True economic reality per contract",
    ],
  },
  {
    icon: BarChart3,
    title: "Predictive Accounting Engine",
    description:
      "Automatically projects P&L impacts and balance sheet positions by simulating the full contract lifecycle, integrating inflation, currency and labour cost changes.",
    points: [
      "Full contract lifecycle simulation",
      "Inflation, FX & labour cost integration",
      "Anticipates profit, risk & cash flow before execution",
    ],
  },
  {
    icon: Cpu,
    title: "Agentic AI Integration",
    description:
      "Acts as a sophisticated Accounting Simulation Engine, providing an early-warning system by mapping the entire contract lifecycle into the future.",
    points: [
      "'Self-Audit' logic with immutable data trails",
      "Future balances reconcile to zero",
      "Detects financial gaps months before the general ledger",
    ],
  },
];

export default function HamiltonEngineCapabilities() {
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
          What We Do
        </p>

        <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
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
