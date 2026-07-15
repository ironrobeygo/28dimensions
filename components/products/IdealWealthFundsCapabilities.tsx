import {
  Users,
  ArrowLeftRight,
  UserCheck,
  BarChart3,
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
    icon: Users,
    title: "Customer Management",
    description:
      "Manage customer and account information with KYC controls, configurable risk profiling, family hierarchy and document tracking.",
    points: [
      "Customer & account maintenance",
      "Risk profiling",
      "KYC controls",
      "Document tracking",
    ],
  },
  {
    icon: ArrowLeftRight,
    title: "Customer Order Flow Management",
    description:
      "Capture customer investment orders and seamlessly route them to internal or third-party fund management modules for market trade execution.",
    points: [
      "Order capture",
      "Portfolio management orders",
      "Routing to internal or third-party fund management modules",
      "Trade execution workflow",
    ],
  },
  {
    icon: UserCheck,
    title: "Investor Servicing",
    description:
      "Support investor subscriptions, redemptions, SIPs, dividend processing, unitisation and related transaction workflows.",
    points: [
      "Subscription & redemption",
      "SIP processing",
      "Unitisation",
      "Investor transactions",
    ],
  },
  {
    icon: BarChart3,
    title: "Fund Management",
    description:
      "Automate front-, middle- and back-office investment operations, including portfolio management, dealing, settlements, corporate actions and multi-asset investment processing.",
    points: [
      "Portfolio management",
      "Dealing",
      "Corporate actions",
      "Multi-asset support",
    ],
  },
  {
    icon: Calculator,
    title: "NAV & Valuation",
    description:
      "Automate mark-to-market valuation, investment accounting, accruals, amortisation and daily NAV generation through configurable valuation rules.",
    points: [
      "Rule-based valuation",
      "MTM pricing",
      "NAV generation",
      "Investment accounting",
    ],
  },
  {
    icon: FileBarChart2,
    title: "Compliance, Reporting & Analytics",
    description:
      "Monitor investment limits and generate regulatory, compliance and MIS reports using built-in reporting and report-design functionality.",
    points: [
      "Regulatory reporting",
      "MIS reporting",
      "Compliance monitoring",
      "Configurable reports",
    ],
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
