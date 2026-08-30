import Image from "next/image";

type ProductHeroImageProps = {
  src: string;
  alt: string;
};

/**
 * Full-bleed hero background image for Hamilton/product header sections.
 * Desktop only — paired with <ProductHeroMobileImage> for the mobile layout.
 * Shared so each product header doesn't duplicate the image + overlay stack.
 */
export function ProductHeroImage({ src, alt }: ProductHeroImageProps) {
  return (
    <div className="absolute inset-0 hidden lg:block">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/65" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, var(--color-brand-dark) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-brand-dark) 0%, transparent 25%)",
        }}
      />
    </div>
  );
}

/**
 * Mobile counterpart to <ProductHeroImage> — a fixed-height image strip
 * shown below the header copy on small/medium screens.
 */
export function ProductHeroMobileImage({ src }: { src: string }) {
  return (
    <div className="relative h-56 w-full sm:h-72 lg:hidden">
      <Image src={src} alt="" fill sizes="100vw" className="object-cover" />
    </div>
  );
}
