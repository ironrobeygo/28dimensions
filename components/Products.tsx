import Image from "next/image";
import Link from "next/link";
import { Check, Users, Handshake, ArrowRight } from "lucide-react";
import { products, type Product } from "@/lib/content";
import Logomark from "@/components/Logomark";

const colorStyles: Record<Product["color"], { icon: string; ring: string; check: string; link: string }> = {
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
};

export default function Products() {
  return (
    <section
      id="enterprise-solution"
      className="relative overflow-hidden bg-brand-dark px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
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
          Our Enterprise Solution
        </p>
        <h2 className="mt-2 text-center text-2xl font-bold text-white sm:text-3xl">
          Enterprise Financial Solutions by Credence Analytics
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white/60">
          28Dimensions partners with Credence Analytics to deliver best-in-class enterprise
          financial platforms for banks, insurers, wealth managers, asset managers, and financial
          institutions.
        </p>

        <div className="mx-auto mt-8 flex w-fit items-center gap-6 rounded-2xl border border-white/10 px-8 py-4">
          <div className="flex items-center gap-3">
            <Logomark size={36} />
            <span className="text-lg font-bold tracking-wide text-white">
              28 <span className="block text-xs font-semibold tracking-[0.2em] text-white/60">DIMENSIONS</span>
            </span>
          </div>
          <div className="h-10 w-px bg-white/10" />
          <Image
            src="/assets/enterprise-solution/credence-analytics-logo.png"
            alt="Credence Analytics logo"
            width={1463}
            height={329}
            className="h-9 w-auto"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {products.map((product) => {
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

        <div className="mx-auto mt-8 grid w-full grid-cols-1 gap-6 rounded-2xl border border-white/10 p-6 sm:w-4/5 sm:grid-cols-[3fr_2fr] sm:divide-x sm:divide-white/10">
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
