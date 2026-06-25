import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-brand-dark">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative isolate flex h-[600px] flex-col justify-end overflow-hidden px-4 py-12 sm:px-10 sm:py-16 lg:px-16">
          <Image
            src="/assets/who-we-are/who-we-are-section-left.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="-z-10 object-cover"
          />
          <div className="-z-10 absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Who We Are
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              A Trusted Partner in Nation-Building
            </h2>
            <p className="mt-4 text-sm text-white/70">
              28 Dimensions bridges governments, enterprises, investors, and
              global technology leaders to deliver complex technology
              programs that improve the lives of citizens and strengthen
              industries.
            </p>
          </div>
        </div>

        <div className="relative isolate flex h-[600px] flex-col justify-end overflow-hidden px-4 py-12 sm:px-10 sm:py-16 lg:px-16">
          <Image
            src="/assets/who-we-are/who-we-are-section-right.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="-z-10 object-cover"
          />
          <div className="-z-10 absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Our Purpose
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Connecting Technology. Empowering People.
            </h2>
            <p className="mt-4 text-sm text-white/70">
              Every project we deliver is designed to create meaningful
              change—connecting people to opportunities and improving lives
              across the Philippines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
