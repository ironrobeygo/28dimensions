import {
  Wallet,
  TrendingUp,
  Landmark,
  ArrowLeftRight,
  Calculator,
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
    icon: Wallet,
    title: "Cash-Flow Management",
    description:
      "Consolidate cash positions across departments, subsidiaries and business units.",
    points: [
      "Bank balance & fund transfer monitoring",
      "Short-term liquidity planning",
    ],
  },
  {
    icon: TrendingUp,
    title: "Investment Management",
    description:
      "Manage the end-to-end lifecycle of surplus cash investments across a wide range of instruments.",
    points: ["Investment performance tracking", "Risk limit monitoring"],
  },
  {
    icon: Landmark,
    title: "Funding & Borrowing",
    description:
      "Assess funding requirements and manage borrowing through commercial paper issuance, corporate bonds and credit facilities.",
    points: ["Multiple interest rate structures", "Amortisation & settlement calendars"],
  },
  {
    icon: ArrowLeftRight,
    title: "Foreign Exchange & Hedging",
    description:
      "Manage FX exposures and hedging activities as part of integrated treasury operations.",
    points: ["FX dealing & remittances", "Currency notes & demand drafts"],
  },
  {
    icon: Calculator,
    title: "Accounting & Accruals",
    description:
      "Track treasury investments, calculate accruals and process accounting vouchers.",
    points: ["Centralised data repository", "Complete treasury records"],
  },
  {
    icon: FileBarChart2,
    title: "Risk Limits & Reporting",
    description:
      "Monitor treasury risk limits and exposures across entities and instruments.",
    points: ["Detailed reports & dashboards", "Decision-making & compliance support"],
  },
];

export default function CashtreaCapabilities() {
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
          Core Capabilities
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
