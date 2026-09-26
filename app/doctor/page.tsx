import type { Metadata } from "next";
import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { BookAppointmentButton } from "@/components/AppointmentBooking";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ClinicPhoto } from "@/components/ClinicPhoto";
import { JsonLd } from "@/components/JsonLd";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";
import { btnNavy, btnPrimary, btnSecondary, TrackedLink } from "@/components/TrackedLink";
import { addressInline, clinic, trustStats } from "@/lib/clinic";
import { doctor } from "@/lib/doctor";
import { pageMetadata } from "@/lib/seo";
import { physicianSchema, webPageSchema } from "@/lib/schema";

const title =
  "Dr. Shilpa Reddy T - Paediatrician & Pediatric Intensivist in Puppalguda";

export const metadata: Metadata = pageMetadata({
  title,
  description:
    "Dr. Shilpa Reddy T, MBBS, DNB Pediatrics, IDPCCM, is the consultant paediatrician and pediatric intensivist at Tiny Totz Kids Clinic in Puppalguda, Hyderabad.",
  path: "/doctor",
  absoluteTitle: true,
});

export default function DoctorPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/doctor",
          name: title,
          description:
            "Professional profile of Dr. Shilpa Reddy T at Tiny Totz Kids Clinic, Puppalguda.",
        })}
      />
      <JsonLd data={physicianSchema()} />

      <article>
        <header className="relative overflow-hidden border-b border-line bg-[radial-gradient(circle_at_12%_20%,rgba(85,197,192,0.14),transparent_34%),radial-gradient(circle_at_88%_10%,rgba(233,142,174,0.12),transparent_32%),linear-gradient(165deg,#f3fbfb_0%,#fff9f5_48%,#ffffff_100%)]">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute top-10 right-[14%] h-36 w-36 rounded-full bg-[rgba(255,200,61,0.12)] blur-3xl" />
            <div className="absolute bottom-0 left-[8%] h-40 w-40 rounded-full bg-[rgba(85,197,192,0.1)] blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-5 py-12 md:py-16">
            <Breadcrumbs items={[{ name: "Doctor", href: "/doctor" }]} />
            <p className="eyebrow mt-6">Consultant paediatrician</p>
            <h1 className="mt-3 max-w-4xl font-serif text-4xl leading-[1.08] text-navy md:text-5xl lg:text-[3.25rem]">
              {doctor.name}
            </h1>
            <p className="mt-3 max-w-2xl font-serif text-xl text-navy/80 md:text-2xl">
              {doctor.role}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">
              {doctor.qualificationsInline} · Consulting at {clinic.name},{" "}
              {clinic.address.area}, {clinic.address.city}.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <BookAppointmentButton eventLabel="doctor-hero" className={btnPrimary}>
                Book with {doctor.name}
              </BookAppointmentButton>
              <TrackedLink
                href={`tel:${clinic.phoneTel}`}
                event="call_click"
                eventLabel="doctor-hero"
                className={btnSecondary}
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call {clinic.phoneDisplay}
              </TrackedLink>
            </div>
          </div>
        </header>

        <section
          aria-label="Professional highlights"
          className="border-b border-line bg-paper"
        >
          <dl className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {trustStats.map((stat, index) => (
              <div
                key={stat.id}
                className={`px-5 py-5 ${index % 2 === 1 ? "border-l border-line" : ""} ${
                  index >= 2 ? "border-t border-line md:border-t-0" : ""
                } ${index > 0 ? "md:border-l md:border-line" : ""}`}
              >
                <dt className="font-serif text-3xl text-navy">{stat.value}</dt>
                <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(233,142,174,0.08),transparent_28%),linear-gradient(180deg,#ffffff_0%,#fff9f5_55%,#f7f8ff_100%)]"
          aria-labelledby="doctor-profile-heading"
        >
          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:items-start md:gap-12 md:py-20">
            <div className="relative mx-auto w-full max-w-md md:mx-0 md:sticky md:top-28">
              <div
                aria-hidden
                className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-teal/25 via-[#ffc83d]/15 to-coral/25 blur-[1px]"
              />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white p-2 shadow-[0_18px_40px_rgba(37,38,74,0.08)]">
                <div className="overflow-hidden rounded-[1.35rem] bg-mist">
                  <ClinicPhoto
                    src={doctor.image.src}
                    fallbackSrc={doctor.image.fallbackSrc}
                    alt={doctor.image.alt}
                    width={doctor.image.width}
                    height={doctor.image.height}
                    priority
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 768px) 400px, 100vw"
                    label="Doctor photograph"
                  />
                </div>
              </div>
              <p className="mt-3 text-center text-sm text-muted md:text-left">
                {doctor.portraitCaption}
              </p>
              <p className="mt-2 text-center text-sm leading-6 text-muted md:text-left">
                {doctor.experienceNote}
              </p>
            </div>

            <div>
              <span className="soft-pill">Professional profile</span>
              <h2
                id="doctor-profile-heading"
                className="mt-4 font-serif text-3xl text-navy md:text-4xl"
              >
                About {doctor.name}
              </h2>

              <ul className="mt-5 flex flex-wrap gap-2">
                {doctor.qualifications.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-white/80 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.06em] text-navy uppercase"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="prose-clinic mt-6 max-w-xl text-base leading-7 text-ink">
                {doctor.biography.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <p className="mt-6 max-w-xl text-sm leading-6 text-muted">
                Qualifications listed here are those published by the clinic:{" "}
                {doctor.qualificationsInline}. Hospital posts, awards and
                memberships are not listed unless the clinic has verified them
                for this page.
              </p>
            </div>
          </div>
        </section>

        <section
          className="relative overflow-hidden bg-[radial-gradient(circle_at_bottom_right,rgba(85,197,192,0.1),transparent_30%),linear-gradient(180deg,#fff9f5_0%,#ffffff_60%,#f7f8ff_100%)]"
          aria-labelledby="care-areas-heading"
        >
          <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
            <div className="max-w-2xl">
              <span className="soft-pill">Clinical focus</span>
              <h2
                id="care-areas-heading"
                className="mt-4 font-serif text-3xl text-navy md:text-4xl"
              >
                Areas of clinical care
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">
                Consultations cover the concerns parents bring most often -
                from the newborn weeks through school age.
              </p>
            </div>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {doctor.areasOfCare.map((area) => (
                <li
                  key={area}
                  className="flex items-start gap-3 border-b border-line/80 py-3.5 text-sm font-semibold text-navy"
                >
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-teal"
                  />
                  {area}
                </li>
              ))}
            </ul>

            <Link href="/services" className={`${btnNavy} mt-8 w-fit`}>
              View paediatric services
            </Link>
          </div>
        </section>

        <section
          className="border-y border-line bg-white"
          aria-labelledby="philosophy-heading"
        >
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <div className="max-w-2xl">
              <span className="soft-pill">Approach</span>
              <h2
                id="philosophy-heading"
                className="mt-4 font-serif text-3xl text-navy md:text-4xl"
              >
                Consultation philosophy
              </h2>
            </div>
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {doctor.philosophy.map((item, index) => (
                <li key={item} className="border-l-2 border-coral pl-5">
                  <p className="text-xs font-bold tracking-[0.16em] text-teal uppercase">
                    0{index + 1}
                  </p>
                  <p className="mt-3 text-base leading-7 text-ink">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(255,200,61,0.1),transparent_28%),linear-gradient(180deg,#ffffff_0%,#fff9f5_100%)]"
          aria-labelledby="consult-here-heading"
        >
          <div className="relative mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:items-stretch md:gap-10 md:py-20">
            <div className="flex flex-col">
              <span className="soft-pill">Where to consult</span>
              <h2
                id="consult-here-heading"
                className="mt-4 font-serif text-3xl text-navy md:text-4xl"
              >
                Consultations at {clinic.shortName}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted">
                {doctor.name} consults at {clinic.name} in{" "}
                {clinic.address.area}. Evening visits are arranged so families
                can come after school or work.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <BookAppointmentButton eventLabel="doctor-consult" className={btnPrimary}>
                  Book Appointment
                </BookAppointmentButton>
                <Link href="/about" className={btnNavy}>
                  About the clinic
                </Link>
                <Link href="/contact" className={btnSecondary}>
                  Clinic address
                </Link>
              </div>

              <MedicalDisclaimer className="mt-8 max-w-xl" />
            </div>

            <aside className="section-surface relative flex flex-col rounded-[1.75rem] p-6 md:p-7">
              <span
                aria-hidden
                className="mb-5 block h-1 w-12 rounded-full bg-gradient-to-r from-teal via-[#ffc83d] to-coral"
              />
              <h3 className="font-serif text-2xl text-navy">Clinic details</h3>
              <ul className="mt-5 space-y-4">
                <li className="flex gap-3">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-teal-soft text-teal">
                    <MapPin className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-[0.14em] text-muted uppercase">
                      Address
                    </p>
                    <p className="mt-1 text-sm leading-6 text-ink">
                      {addressInline()}
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[var(--brand-soft-pink)] text-coral">
                    <Clock className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-[0.14em] text-muted uppercase">
                      Hours
                    </p>
                    <p className="mt-1 text-sm leading-6 text-ink">
                      {clinic.hours.summary}
                      <span className="mt-1 block text-muted">
                        {clinic.hours.closed} closed
                      </span>
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[var(--brand-soft-yellow)] text-navy">
                    <Phone className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-[0.14em] text-muted uppercase">
                      Phone
                    </p>
                    <a
                      href={`tel:${clinic.phoneTel}`}
                      className="mt-1 block text-sm font-semibold text-navy transition hover:text-teal"
                    >
                      {clinic.phoneDisplay}
                    </a>
                  </div>
                </li>
              </ul>
            </aside>
          </div>
        </section>
      </article>

      <AppointmentCTA
        heading={`Book a consultation with ${doctor.name}`}
        text={`Evening paediatric visits at ${clinic.name}, ${clinic.address.area}. Call or send an appointment request.`}
        eventLabel="doctor-cta"
      />
    </>
  );
}
