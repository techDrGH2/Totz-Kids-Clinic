import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
  alt?: string;
};

export function Logo({
  className = "h-14 w-auto",
  priority = false,
  alt = "Tiny Totz Kids Clinic logo - paediatric clinic in Puppalguda, Hyderabad",
}: LogoProps) {
  return (
    <Image
      src="/images/tiny-totz-kids-clinic-logo.webp"
      alt={alt}
      width={420}
      height={200}
      priority={priority}
      sizes="160px"
      className={className}
    />
  );
}
