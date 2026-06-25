import Image from "next/image";

type LogomarkProps = {
  size?: number;
  className?: string;
};

export default function Logomark({ size = 96, className }: LogomarkProps) {
  return (
    <Image
      src="/assets/hero/LOGO-removebg-preview.png"
      alt="28 Dimensions logomark"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}
