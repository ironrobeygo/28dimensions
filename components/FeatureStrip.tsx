import { features } from "@/lib/content";

export default function FeatureStrip() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 mx-auto -mt-12 -mb-12 max-w-7xl rounded-2xl bg-white p-6 shadow-xl sm:-mt-16 sm:-mb-16 sm:p-8 lg:-mt-20 lg:-mb-20">
        <div className="grid grid-cols-1 divide-y divide-neutral-200 sm:grid-cols-2 sm:gap-8 sm:divide-y-0 lg:grid-cols-5 lg:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex items-center gap-4 py-4 text-left first:pt-0 last:pb-0 sm:flex-col sm:items-center sm:gap-0 sm:py-0 sm:text-center"
              >
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-brand-orange text-brand-orange sm:mb-3">
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-brand-dark">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
