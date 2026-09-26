import Link from "next/link";
import { MapPin } from "lucide-react";
import { btnNavy } from "@/components/TrackedLink";
import { areas, nearbyAreaNames } from "@/lib/locations";

export function AreasWeServe() {
  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(85,197,192,0.1),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(233,142,174,0.08),transparent_30%),linear-gradient(180deg,#ffffff_0%,#fff9f5_55%,#f7f8ff_100%)]"
      aria-labelledby="areas-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-10 left-[8%] h-36 w-36 rounded-full bg-[rgba(255,200,61,0.1)] blur-3xl" />
        <div className="absolute right-[10%] bottom-8 h-40 w-40 rounded-full bg-[rgba(85,197,192,0.1)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <span className="soft-pill">Around the clinic</span>
            <h2
              id="areas-heading"
              className="mt-4 font-serif text-3xl text-navy md:text-5xl"
            >
              Paediatric care near you in Hyderabad
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-muted">
              The clinic is in Puppalguda. Families from nearby neighbourhoods
              come here for consultations. These are not additional branches.
            </p>
            <Link href="/areas-we-serve" className={`${btnNavy} mt-7 w-fit`}>
              See areas we serve
            </Link>
          </div>

          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {nearbyAreaNames.map((name) => {
              const page = areas.find((area) => area.name === name);
              const isClinic = name === "Puppalguda";
              const body = (
                <span
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border px-3.5 py-4 text-sm font-medium text-navy transition ${
                    isClinic
                      ? "border-teal/35 bg-teal-soft shadow-[0_12px_28px_rgba(85,197,192,0.12)]"
                      : "border-line/80 bg-white/85 shadow-[0_10px_24px_rgba(37,38,74,0.04)] hover:border-teal/35 hover:bg-teal-soft/60"
                  }`}
                >
                  {isClinic ? (
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal via-[#ffc83d] to-coral"
                    />
                  ) : null}
                  <span className="flex items-start gap-2">
                    {isClinic ? (
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden />
                    ) : null}
                    <span>
                      {name}
                      {isClinic ? (
                        <span className="mt-1 block text-xs font-normal text-teal">
                          Clinic location
                        </span>
                      ) : null}
                    </span>
                  </span>
                </span>
              );
              return (
                <li key={name}>
                  {page ? (
                    <Link href={`/areas-we-serve/${page.slug}`} className="block h-full">
                      {body}
                    </Link>
                  ) : (
                    body
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
