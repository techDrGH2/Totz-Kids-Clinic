import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

function exists(src: string) {
  return src.startsWith("http://") || src.startsWith("https://")
    ? true
    : fs.existsSync(path.join(process.cwd(), "public", src.replace(/^\//, "")));
}

type Props = {
  src: string;
  fallbackSrc?: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
  label?: string;
};

export function ClinicPhoto({
  src,
  fallbackSrc,
  alt,
  width,
  height,
  priority = false,
  className = "",
  sizes = "(min-width: 768px) 480px, 100vw",
  label = "Clinic photograph",
}: Props) {
  if (exists(src)) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className={className}
      />
    );
  }

  if (fallbackSrc && exists(fallbackSrc)) {
    return (
      <Image
        src={fallbackSrc}
        alt={alt}
        width={width}
        height={height}
        unoptimized
        priority={priority}
        className={className}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex h-full w-full flex-col justify-between bg-navy p-6 text-white ${className}`}
    >
      <p className="text-xs font-semibold tracking-[0.16em] text-white/70 uppercase">
        {label}
      </p>
      <p className="font-serif text-3xl leading-tight">Photograph to be added</p>
    </div>
  );
}
