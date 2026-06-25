import { services } from "@/lib/content";

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-brand-dark px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
          What We Do
        </p>
        <h2 className="mt-2 text-center text-2xl font-bold text-white sm:text-3xl">
          End-to-End Solutions. Built for Impact.
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-6 lg:gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="flex flex-col items-center text-center">
                <span className="mb-4 inline-flex size-14 items-center justify-center rounded-xl border-2 border-brand-orange text-brand-orange">
                  <Icon size={26} />
                </span>
                <h3 className="text-sm font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-1 text-xs text-white/60">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
