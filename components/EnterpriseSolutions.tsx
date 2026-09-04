import Image from "next/image";
import Link from "next/link";
import { Check, Users, Handshake, ArrowRight } from "lucide-react";
import { enterprisePartners, type EnterpriseProduct } from "@/lib/content";
import Logomark from "@/components/Logomark";

const colorStyles: Record<EnterpriseProduct["color"], { icon: string; ring: string; check: string; link: string }> = {
  green: {
    icon: "bg-emerald-500/10 text-emerald-400",
    ring: "ring-emerald-400/20",
    check: "text-emerald-400",
    link: "text-emerald-400",
  },
  orange: {
    icon: "bg-brand-orange/10 text-brand-orange",
    ring: "ring-brand-orange/20",
    check: "text-brand-orange",
    link: "text-brand-orange",
  },
  purple: {
    icon: "bg-purple-500/10 text-purple-400",
    ring: "ring-purple-400/20",
    check: "text-purple-400",
    link: "text-purple-400",
  },
  blue: {
    icon: "bg-blue-500/10 text-blue-400",
    ring: "ring-blue-400/20",
    check: "text-blue-400",
    link: "text-blue-400",
  },
};

export default function EnterpriseSolutions() {
  return (
    <section
      id="enterprise-solutions"
      className="relative overflow-hidden bg-brand-dark px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      {/*
        Preserves the pre-rename `#enterprise-solution` deep link (e.g. any
        existing external bookmark) as a working alias for the canonical
        `#enterprise-solutions` id above — same scroll position, no dangling
        anchor. See PRD.md/ARCHITECTURE.md and DEO-33's acceptance criteria.
      */}
      <span id="enterprise-solution" className="sr-only" aria-hidden="true" />
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
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
          Our Enterprise Solutions
        </p>
        <h2 className="mt-2 text-center text-2xl font-bold text-white sm:text-3xl">
          Global Technology Partners. Delivered in the Philippines.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white/60">
          28Dimensions partners with world-class technology companies to deliver specialized
          solutions that help enterprises modernize, comply, and grow.
        </p>

        <div className="mt-12 space-y-16">
          {enterprisePartners.map((partner) => (
            <div key={partner.slug}>
              {/*
                Below sm, px/gap shrink so the fixed-size "28 DIMENSIONS"
                lockup and divider don't eat the whole row — that space goes
                to the partner logo instead of forcing it to collapse to an
                unreadable sliver. sm+ restores the original px-8/gap-6.
              */}
              <div className="mx-auto flex w-fit max-w-full items-center gap-3 rounded-2xl border border-white/10 px-4 py-4 sm:gap-6 sm:px-8">
                <div className="flex shrink-0 items-center gap-3">
                  <Logomark size={36} />
                  <span className="text-lg font-bold tracking-wide text-white">
                    28 <span className="block text-xs font-semibold tracking-[0.2em] text-white/60">DIMENSIONS</span>
                  </span>
                </div>
                <div className="h-10 w-px shrink-0 bg-white/10" />
                {partner.logo ? (
                  // max-h-9 (not a fixed h-9) caps the logo at today's 36px
                  // desktop height while leaving both dimensions on "auto",
                  // so the browser scales width and height together from the
                  // image's intrinsic aspect ratio instead of stretching it.
                  // min-w-0 lets this flex item actually shrink below that
                  // size instead of overflowing the pill on narrow viewports
                  // (the "28 DIMENSIONS" lockup and divider stay shrink-0, so
                  // they hold their size and the logo alone absorbs the
                  // squeeze). object-contain is a no-op at the exact aspect
                  // ratio but guards against ever cropping or distorting it.
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={partner.logoWidth ?? 1463}
                    height={partner.logoHeight ?? 329}
                    className="h-auto max-h-9 w-auto max-w-full min-w-0 shrink object-contain"
                  />
                ) : (
                  <span className="text-lg font-bold tracking-wide text-white">{partner.name}</span>
                )}
              </div>

              <p className="mt-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
                {partner.name}
              </p>
              <h3 className="mt-1 text-center text-xl font-bold text-white">{partner.tagline}</h3>

              {/*
                Column count follows product count so each partner's cards
                lay out evenly: Hamilton's 4 IFRS modules sit 4-across on
                desktop (2x2 on tablet, 1-up on mobile), while Credence's 3
                keep their original 3-across desktop layout.
              */}
              <div
                className={`mt-8 grid grid-cols-1 gap-6 ${
                  partner.products.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "lg:grid-cols-3"
                }`}
              >
                {partner.products.map((product) => {
                  const Icon = product.icon;
                  const styles = colorStyles[product.color];
                  const cardClassName = `relative flex flex-col rounded-2xl border border-white/10 bg-brand-dark-soft p-6 ring-1 transition ${styles.ring} ${
                    product.href !== "#" ? "hover:border-white/20" : ""
                  }`;
                  const cardContent = (
                    <>
                      {product.badge && (
                        <span className="absolute left-6 top-6 rounded-full bg-blue-500 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                          {product.badge}
                        </span>
                      )}

                      <span
                        className={`mx-auto mb-4 mt-8 flex size-14 items-center justify-center rounded-full ${styles.icon}`}
                      >
                        <Icon size={26} />
                      </span>

                      <h3 className="text-center text-lg font-bold text-white">{product.title}</h3>
                      <p className="mt-1 text-center text-xs text-white/50">{product.subtitle}</p>
                      <p className="mt-4 text-center text-sm text-white/60">{product.description}</p>

                      <ul className="mt-6 space-y-3">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-white/70">
                            <Check size={16} className={`mt-0.5 shrink-0 ${styles.check}`} />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {product.href !== "#" && (
                        <span
                          className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${styles.link}`}
                        >
                          Learn More
                          <ArrowRight size={14} />
                        </span>
                      )}
                    </>
                  );

                  return product.href === "#" ? (
                    <div key={product.title} className={cardClassName}>
                      {cardContent}
                    </div>
                  ) : (
                    <Link key={product.title} href={product.href} className={cardClassName}>
                      {cardContent}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 grid w-full grid-cols-1 gap-6 rounded-2xl border border-white/10 p-6 sm:w-4/5 sm:grid-cols-[3fr_2fr] sm:divide-x sm:divide-white/10">
          <div className="flex items-center gap-4 sm:pr-6">
            <Users size={48} className="shrink-0 text-brand-orange" />
            <p className="text-sm text-white/70">
              <span className="block">28Dimensions provides end-to-end services including solution consulting,</span>
              <span className="block">implementation, systems integration, data migration,</span>
              <span className="block">training and ongoing support.</span>
            </p>
          </div>
          <div className="flex items-center gap-4 sm:pl-6">
            <Handshake size={48} className="shrink-0 text-brand-orange" />
            <p className="text-sm text-white/70">
              <span className="block font-semibold text-brand-orange">Your Transformation Partner.</span>
              <span className="text-white">Proven Solutions. Trusted Delivery.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
