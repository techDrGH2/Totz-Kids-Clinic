import Link from "next/link";
import { ClinicPhoto } from "@/components/ClinicPhoto";
import { btnNavy, TrackedLink } from "@/components/TrackedLink";
import { clinic } from "@/lib/clinic";
import { doctor } from "@/lib/doctor";

export function DoctorProfile({
  compact = false,
  showClinicLink = true,
}: {
  compact?: boolean;
  showClinicLink?: boolean;
}) {
  const bio = compact ? doctor.biography.slice(0, 2) : doctor.biography;

  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(233,142,174,0.1),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(85,197,192,0.1),transparent_30%),linear-gradient(180deg,#fff9f5_0%,#ffffff_50%,#f7f8ff_100%)]"
      aria-labelledby="doctor-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-12 right-[8%] h-40 w-40 rounded-full bg-[rgba(255,200,61,0.1)] blur-3xl" />
        <div className="absolute bottom-10 left-[6%] h-44 w-44 rounded-full bg-[rgba(85,197,192,0.1)] blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 md:grid-cols-[0.85fr_1.15fr] md:gap-10 md:py-20">
        <div className="relative mx-auto w-full max-w-md md:mx-0">
          <div
            aria-hidden
            className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-teal/25 via-[#ffc83d]/15 to-coral/25 blur-[1px]"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white p-2 shadow-[0_18px_40px_rgba(37,38,74,0.08)]">
            <div className="overflow-hidden rounded-[1.35rem] bg-navy">
              <ClinicPhoto
                src={doctor.image.src}
                fallbackSrc={doctor.image.fallbackSrc}
                alt={doctor.image.alt}
                width={doctor.image.width}
                height={doctor.image.height}
                className="h-auto w-full object-cover"
                sizes="(min-width: 768px) 380px, 100vw"
                label="Doctor photograph"
              />
            </div>
          </div>
          <p className="mt-3 text-center text-xs tracking-[0.04em] text-muted md:text-left">
            {doctor.portraitCaption}
          </p>
        </div>

        <div className="section-surface relative rounded-[1.75rem] p-6 md:p-8" itemScope itemType="https://schema.org/Physician">
          <meta itemProp="telephone" content={clinic.phoneDisplay} />
          <meta itemProp="url" content="/doctor" />
          <span
            aria-hidden
            className="mb-5 block h-1 w-12 rounded-full bg-gradient-to-r from-teal via-[#ffc83d] to-coral"
          />
          <span className="soft-pill">The doctor</span>
          <h2
            id="doctor-heading"
            className="mt-4 font-serif text-3xl text-navy md:text-5xl"
            itemProp="name"
          >
            Meet {doctor.name}
          </h2>
          <p className="mt-3 text-sm font-semibold tracking-[0.12em] text-teal uppercase">
            {doctor.qualificationsInline}
          </p>
          <p className="mt-1 text-base font-medium text-navy" itemProp="jobTitle">
            {doctor.role}
          </p>
          <meta itemProp="medicalSpecialty" content="Pediatrics" />

          <ul className="mt-5 flex flex-wrap gap-2">
            {doctor.qualifications.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line bg-white/80 px-3 py-1 text-[11px] font-semibold tracking-[0.06em] text-navy uppercase"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="prose-clinic mt-5 max-w-xl text-base leading-7 text-ink">
            {bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">{doctor.experienceNote}</p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <TrackedLink
              href="/doctor"
              event="doctor_profile_cta"
              eventLabel="doctor-section"
              className={btnNavy}
            >
              View doctor profile
            </TrackedLink>
            {!compact && showClinicLink ? (
              <Link
                href="/about"
                className="text-sm font-semibold text-teal transition hover:text-navy"
              >
                Read about the clinic
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
