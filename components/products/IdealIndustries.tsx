import { Landmark, Building2, type LucideIcon } from "lucide-react";

type IndustryRow = {
  icon: LucideIcon;
  industry: string;
  support: string;
};

const industries: IndustryRow[] = [
  {
    icon: Landmark,
    industry: "Banking",
    support:
      "Supports integrated front-, middle- and back-office treasury operations including dealing, settlements, risk management, compliance, accounting and reporting across all asset classes.",
  },
  {
    icon: Building2,
    industry: "Investment Banks",
    support:
      "Enables multi-asset trading, derivatives, real-time MTM, counterparty limits, valuation and settlement with enhanced risk monitoring and decision support.",
  },
  {
    icon: Landmark,
    industry: "Financial Institutions",
    support:
      "Provides a unified treasury platform for position monitoring, cash and liquidity management, mark-to-market valuation, regulatory compliance and performance reporting.",
  },
];

export default function IdealIndustries() {
  return (
    <section className="relative overflow-hidden bg-brand-dark px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
          Industries We Serve
        </p>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="w-1/4 px-6 py-4 text-sm font-bold text-brand-orange">
                  Industry
                </th>
                <th className="px-6 py-4 text-sm font-bold text-brand-orange">
                  How iDeal Integrated Treasury Supports It
                </th>
              </tr>
            </thead>
            <tbody>
              {industries.map(({ icon: Icon, industry, support }, index) => (
                <tr
                  key={industry}
                  className={index !== industries.length - 1 ? "border-b border-white/10" : ""}
                >
                  <td className="px-6 py-4 align-top">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                        <Icon size={18} strokeWidth={1.75} />
                      </div>
                      <span className="text-sm font-semibold text-white">{industry}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 align-top text-sm text-white/60">{support}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
