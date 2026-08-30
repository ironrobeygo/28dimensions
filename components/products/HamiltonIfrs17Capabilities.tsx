import { Layers, Calculator, TrendingUp, FileBarChart2, type LucideIcon } from "lucide-react";

type Capability = {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
};

const capabilities: Capability[] = [
  {
    icon: Layers,
    title: "Fulfilment Cash-Flow Modeling",
    description:
      "Calculates risk-adjusted present values from expected inflows and outflows, reflecting current assumptions and observable information where applicable.",
    points: [
      "Expected premium & claims inflow/outflow modelling",
      "Discounting & time value of money",
      "Risk adjustment for non-financial risk",
    ],
  },
  {
    icon: Calculator,
    title: "CSM & Profitability Logic",
    description:
      "Computes initial contractual service margin, remeasurement impacts, CSM release through coverage units, and immediate recognition of losses when a group is or becomes onerous.",
    points: [
      "Initial CSM computation",
      "CSM release through coverage units",
      "Onerous-contract loss recognition",
    ],
  },
  {
    icon: TrendingUp,
    title: "Predictive Accounting",
    description:
      "Projects future balance sheet and profit-or-loss impacts before final postings, including future revenue, expense, interest, amortisation and reclassification effects.",
    points: [
      "Forward-looking balance sheet & P&L views",
      "Interest accretion & amortisation projection",
      "Current/non-current reclassification",
    ],
  },
  {
    icon: FileBarChart2,
    title: "Sub-Ledger & Reporting Flow",
    description:
      "Prepares traceable accounting documents and posting streams for general ledger integration, reconciliation, financial reporting and mandatory quantitative disclosures.",
    points: [
      "Traceable accounting documents",
      "GL integration & reconciliation",
      "Mandatory quantitative disclosures",
    ],
  },
];

export default function HamiltonIfrs17Capabilities() {
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
          From Insurance Events to Accounting Outcomes
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
