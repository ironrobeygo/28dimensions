import {
  Layers,
  BarChart3,
  ShieldCheck,
  MonitorSmartphone,
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
    icon: Layers,
    title: "End-to-End Investment Management",
    description:
      "Supports pre-deal analysis, real-time portfolio positions, cash-flow tracking, profitability monitoring, dealing, settlements, corporate actions, MTM valuation, accounting and NAV generation.",
    points: [
      "Integrated front, middle and back office",
      "Multi-asset investment operations",
    ],
  },
  {
    icon: BarChart3,
    title: "FundSense Business Intelligence",
    description:
      "FundSense brings together data from multiple sources and supports interactive analysis, visualisation and collaborative decision-making.",
    points: ["Drag-and-drop data exploration", "Personalised analytical views"],
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Risk",
    description:
      "A configurable framework for monitoring investment limits, business validations and risk reporting.",
    points: [
      "Pre- and post-trade compliance monitoring",
      "Support for IFRS, GIPS, FATCA and AMLA requirements",
    ],
  },
  {
    icon: MonitorSmartphone,
    title: "Omnichannel Access",
    description:
      "Provides a unified experience through browsers, smartphones and other supported channels, helping authorised users access information and platform functions.",
    points: ["Browser and smartphone access", "Automated email and SMS alerts for critical events"],
  },
  {
    icon: Calculator,
    title: "Valuation, Accounting & NAV",
    description:
      "Supports mark-to-market valuation, investment accounting, accruals, amortisation, corporate actions and NAV calculation.",
    points: ["Rule-based valuation", "Automated accounting and NAV processing"],
  },
  {
    icon: FileBarChart2,
    title: "Reporting & Analytics",
    description:
      "Provides client reports, regulatory and compliance reports, MIS reporting and configurable report-design capabilities.",
    points: ["Built-in report designer", "Portfolio and investment analysis"],
  },
];

export default function IdealWealthFundsCapabilities() {
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
