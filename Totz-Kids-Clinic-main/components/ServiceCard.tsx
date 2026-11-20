import Image from "next/image";
import Link from "next/link";
import { ServiceIconMark } from "@/components/ServiceIconMark";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.href}
      className="feature-card group flex h-full flex-col overflow-hidden rounded-[1.75rem] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(37,38,74,0.08)]"
      aria-label={`Learn more about ${service.title}`}
    >
      {service.image ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-mist">
          <Image
            src={service.image.src}
            alt={service.image.alt}
            width={service.image.width}
            height={service.image.height}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            quality={70}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-soft text-teal shadow-sm">
            <ServiceIconMark name={service.icon} />
          </div>
          <span className="rounded-full border border-line bg-white/80 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-navy/70">
            Care
          </span>
        </div>
        <h3 className="mt-5 font-serif text-2xl text-navy group-hover:text-teal">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted">{service.description}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal transition group-hover:text-navy">
          Learn more
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
