import type { Metadata } from "next";
import Link from "next/link";
import { Clock, MapPin, Phone, Stethoscope } from "lucide-react";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { BookAppointmentButton } from "@/components/AppointmentBooking";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ClinicGlance } from "@/components/ClinicGlance";
import { ContactSection } from "@/components/ContactSection";
import { DoctorProfile } from "@/components/DoctorProfile";
import { JsonLd } from "@/components/JsonLd";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { btnNavy, btnPrimary } from "@/components/TrackedLink";
import { addressInline, clinic, trustStats } from "@/lib/clinic";
import { doctor } from "@/lib/doctor";
import { pageMetadata } from "@/lib/seo";
import { webPageSchema } from "@/lib/schema";
import { services } from "@/lib/services";

export const metadata: Metadata = pageMetadata({
  title: "About Tiny Totz Kids Clinic | Paediatrician in Puppalguda",
  description:
    "About Tiny Totz Kids Clinic in Puppalguda, Hyderabad. Child-centred paediatric consultations with Dr. Shilpa Reddy T for newborns, children and adolescents.",
  path: "/about",
  absoluteTitle: true,
});

const visitSteps = [
  {
    title: "Listen first",
    text: "The visit starts with what you have noticed at home - how long it has lasted, and what you have already tried.",
  },
  {
    title: "Examine with care",
    text: "Examination follows the history, at a pace that helps a child settle rather than rush the room.",
  },
  {
    title: "Explain clearly",
    text: "You leave knowing what was found, what to watch for, when to return, and when emergency care is safer.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/about",
          name: "About Tiny Totz Kids Clinic",
          description:
            "About the paediatric clinic in Puppalguda and how consultations are run.",
        })}
      />

      <header className="relative overflow-hidden border-b border-line bg-[radial-gradient(circle_at_12%_20%,rgba(85,197,192,0.14),transparent_34%),radial-gradient(circle_at_88%_10%,rgba(233,142,174,0.12),transparent_32%),linear-gradient(165deg,#f3fbfb_0%,#fff9f5_48%,#ffffff_100%)]">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-10 right-[14%] h-36 w-36 rounded-full bg-[rgba(255,200,61,0.12)] blur-3xl" />
          <div className="absolute bottom-0 left-[8%] h-40 w-40 rounded-full bg-[rgba(85,197,192,0.1)] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 py-12 md:py-16">
          <Breadcrumbs items={[{ name: "About", href: "/about" }]} />
          <p className="eyebrow mt-6">About {clinic.shortName}</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-[1.08] text-navy md:text-5xl lg:text-[3.35rem]">
            A paediatric clinic built around calm, clear care
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            {clinic.name} in {clinic.address.area}, {clinic.address.city}, offers
            child-centred consultations with {doctor.name} -{" "}
            {doctor.role.toLowerCase()}.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BookAppointmentButton eventLabel="about-hero" className={btnPrimary}>
              Book an Appointment
            </BookAppointmentButton>
            <Link href="/doctor" className={btnNavy}>
              Meet {doctor.name}
            </Link>
          </div>
        </div>
      </header>

      <section
        aria-label="Clinic highlights"
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
        aria-labelledby="clinic-story-heading"
      >
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-start md:gap-12 md:py-20">
          <div>
            <span className="soft-pill">The clinic</span>
            <h2
              id="clinic-story-heading"
              className="mt-4 max-w-xl font-serif text-3xl text-navy md:text-4xl"
            >
              Child-centred paediatric care in Puppalguda
            </h2>
            <div className="prose-clinic mt-5 max-w-xl text-base leading-7 text-ink">
              <p>
                Parents come for newborn checks, vaccinations, everyday illness,
                growth questions, and the worries that do not fit a single label.
                The room is meant to feel steady. Children are included in the
                visit at a level that matches their age.
              </p>
              <p>
                {doctor.name} combines paediatric expertise with plain
                explanations, so families leave knowing what matters next -
                without rushed advice or vague promises.
              </p>
              <p>
                Nothing on this website promises a particular outcome. Children
                improve on different timelines, and some concerns need another
                service.
              </p>
            </div>
          </div>

          <aside className="section-surface relative rounded-[1.75rem] p-6 md:p-7">
            <span
              aria-hidden
              className="mb-5 block h-1 w-12 rounded-full bg-gradient-to-r from-teal via-[#ffc83d] to-coral"
            />
            <h3 className="font-serif text-2xl text-navy">Visit essentials</h3>
            <ul className="mt-5 space-y-4">
              <li className="flex gap-3">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-teal-soft text-teal">
                  <MapPin className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-bold tracking-[0.14em] text-muted uppercase">
                    Location
                  </p>
                  <p className="mt-1 text-sm leading-6 text-ink">
                    {clinic.address.area}, {clinic.address.city}
                    <span className="mt-1 block text-muted">{addressInline()}</span>
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
              <li className="flex gap-3">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-mist text-navy">
                  <Stethoscope className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-bold tracking-[0.14em] text-muted uppercase">
                    Doctor
                  </p>
                  <p className="mt-1 text-sm leading-6 text-ink">
                    {doctor.name}
                    <span className="mt-1 block text-muted">
                      {doctor.qualificationsInline}
                    </span>
                  </p>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[radial-gradient(circle_at_bottom_right,rgba(85,197,192,0.1),transparent_30%),linear-gradient(180deg,#fff9f5_0%,#ffffff_60%,#f7f8ff_100%)]"
        aria-labelledby="consult-heading"
      >
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="max-w-2xl">
            <span className="soft-pill">The visit</span>
            <h2
              id="consult-heading"
              className="mt-4 font-serif text-3xl text-navy md:text-4xl"
            >
              How consultations run
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Every appointment follows a simple structure so parents feel heard
              and children feel safe.
            </p>
          </div>

          <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
            {visitSteps.map((step, index) => (
              <li key={step.title} className="relative">
                <p className="font-serif text-4xl text-teal/35">
                  0{index + 1}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-navy">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="border-y border-line bg-white"
        aria-labelledby="philosophy-heading"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="max-w-2xl">
            <span className="soft-pill">Practice principles</span>
            <h2
              id="philosophy-heading"
              className="mt-4 font-serif text-3xl text-navy md:text-4xl"
            >
              What guides the practice
            </h2>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {doctor.philosophy.map((item, index) => (
              <li key={item} className="border-l-2 border-teal pl-5">
                <p className="text-xs font-bold tracking-[0.16em] text-coral uppercase">
                  0{index + 1}
                </p>
                <p className="mt-3 text-base leading-7 text-ink">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WhyChooseUs />
      <DoctorProfile showClinicLink={false} />

      <section
        className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(255,200,61,0.1),transparent_28%),linear-gradient(180deg,#ffffff_0%,#fff9f5_100%)]"
        aria-labelledby="about-services-heading"
      >
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="soft-pill">Care offered</span>
              <h2
                id="about-services-heading"
                className="mt-4 font-serif text-3xl text-navy md:text-4xl"
              >
                Paediatric services at the clinic
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">
                From newborn care to school-age concerns - consultations stay
                focused on the child in the room.
              </p>
            </div>
            <Link href="/services" className={`${btnNavy} w-fit shrink-0`}>
              View all services
            </Link>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 9).map((service) => (
              <li key={service.slug}>
                <Link
                  href={service.href}
                  className="group flex items-center justify-between gap-3 border-b border-line/80 py-3.5 text-sm font-semibold text-navy transition hover:border-teal/40 hover:text-teal"
                >
                  <span>{service.title}</span>
                  <span
                    aria-hidden
                    className="text-teal transition group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClinicGlance />
      <ContactSection />
      <AppointmentCTA
        heading="Book a visit at the Puppalguda clinic"
        text="Call, WhatsApp, or send an appointment request. The clinic confirms the time."
        eventLabel="about-cta"
      />
    </>
  );
}
