import {
  Layers,
  ShieldCheck,
  BarChart3,
  Globe2,
  FileBarChart2,
  type LucideIcon,
} from "lucide-react";

type Capability = {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
};

const capabilities: Capability[] = [
  {
    icon: Layers,
    title: "Integrated Treasury Operations",
    description: "Supports all treasury activities across RBU and FCBU.",
    points: [
      "Money markets",
      "Repo & reverse repo",
      "Government securities",
      "Bonds, swaps, futures",
      "Equities & mutual funds",
      "Interbank & FX products",
      "Consolidated EOD trial balance",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Risk Management",
    description: "Comprehensive market and counterparty risk management.",
    points: [
      "RiskMark for market risk & VaR",
      "Portfolio valuation & MTM",
      "Counterparty limit monitoring",
      "Investment limit engine",
    ],
  },
  {
    icon: BarChart3,
    title: "Decision Support & Analytics",
    description: "Actionable insights for smarter, faster decisions.",
    points: [
      "Pre-deal analysis",
      "What-if scenario analysis",
      "Interest rate term structure analysis",
      "Cash flow forecasting",
      "Stop-loss monitoring",
      "Turnover & profitability analysis",
    ],
  },
  {
    icon: Globe2,
    title: "FX & Customer Workflows",
    description: "End-to-end customer foreign exchange capabilities.",
    points: [
      "Direct to customer FX dealing",
      "Inward remittance reconciliation",
      "Currency notes, TT outward",
      "Travellers cheques & demand drafts",
    ],
  },
  {
    icon: FileBarChart2,
    title: "Reporting & Data Visualisation",
    description: "Interactive reporting and visual analytics.",
    points: [
      "Consolidated exposure reporting",
      "Drill-down & ad-hoc reporting",
      "Personalised dashboards",
      "Drag-and-drop data visualisation",
    ],
  },
];

export default function IdealCapabilities() {
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
          Comprehensive Capabilities
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
