import { Layers, RefreshCw, TrendingUp, FileBarChart2, type LucideIcon } from "lucide-react";

type Capability = {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
};

const capabilities: Capability[] = [
  {
    icon: Layers,
    title: "Measurement & Scheduling",
    description:
      "Calculates present-value lease liabilities, right-of-use asset values, interest accretion, depreciation or amortisation, payment schedules, accruals and portfolio-level movements.",
    points: [
      "Present-value lease liability calculation",
      "ROU asset & depreciation scheduling",
      "Portfolio-level movement tracking",
    ],
  },
  {
    icon: RefreshCw,
    title: "Remeasurement & Modification",
    description:
      "Refreshes balances when terms, payments, discount assumptions, scope or timing change, including partial derecognition where modifications reduce the leased asset or obligation.",
    points: [
      "Term & payment change handling",
      "Discount-rate remeasurement",
      "Partial derecognition on modification",
    ],
  },
  {
    icon: TrendingUp,
    title: "Predictive Accounting",
    description:
      "Projects future statement of financial position and profit-or-loss effects before final postings, supporting management insight into asset, debt, expense and cash-flow impacts.",
    points: [
      "Forward-looking balance sheet & P&L views",
      "Asset, debt & expense projection",
      "Cash-flow impact insight",
    ],
  },
  {
    icon: FileBarChart2,
    title: "Sub-Ledger & Reporting Flow",
    description:
      "Prepares traceable lease accounting records and journal-ready posting streams for the general ledger, reconciliation, management reporting and compliance disclosures.",
    points: [
      "Traceable lease accounting records",
      "GL-ready posting streams",
      "Compliance disclosure outputs",
    ],
  },
];

export default function HamiltonIfrs16Capabilities() {
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
          From Lease Events to Accounting Outcomes
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
