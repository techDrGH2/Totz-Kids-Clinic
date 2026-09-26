import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { AreasWeServe } from "@/components/AreasWeServe";
import { ClinicGlance } from "@/components/ClinicGlance";
import { ContactSection } from "@/components/ContactSection";
import { DoctorProfile } from "@/components/DoctorProfile";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { HowWeHelp } from "@/components/HowWeHelp";
import { JsonLd } from "@/components/JsonLd";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Testimonials } from "@/components/Testimonials";
import { TrustStats } from "@/components/TrustStats";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { btnNavy } from "@/components/TrackedLink";
import { addressInline, clinic } from "@/lib/clinic";
import { doctor } from "@/lib/doctor";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, homeFaqs, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Tiny Totz Kids Clinic | Paediatrician in Puppalguda, Hyderabad",
  description:
    "Tiny Totz Kids Clinic provides paediatric care in Puppalguda, Hyderabad, including newborn care, vaccinations, child health checkups, nutrition, allergies, asthma and developmental care with Dr. Shilpa Reddy T.",
  path: "/",
  absoluteTitle: true,
  image: "/images/doctor/hero-paediatric-care.webp",
  imageAlt:
    "Paediatric care at Tiny Totz Kids Clinic with Dr. Shilpa Reddy T in Puppalguda, Hyderabad",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/",
          name: "Paediatrician in Puppalguda, Hyderabad | Tiny Totz Kids Clinic",
          description:
            "Paediatric clinic in Puppalguda led by Dr. Shilpa Reddy T, offering newborn care, vaccination guidance and child health consultations.",
        })}
      />
      <JsonLd data={faqSchema(homeFaqs())} />
      <Hero />
      <TrustStats />

      <section
        className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(233,142,174,0.1),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(85,197,192,0.1),transparent_30%),linear-gradient(180deg,#fff9f5_0%,#ffffff_55%,#f7f8ff_100%)]"
        aria-labelledby="clinic-intro-heading"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-16 right-[12%] h-40 w-40 rounded-full bg-[rgba(255,200,61,0.12)] blur-3xl" />
          <div className="absolute -bottom-20 left-[8%] h-44 w-44 rounded-full bg-[rgba(85,197,192,0.12)] blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:items-stretch md:gap-10 md:py-20">
          <div className="flex flex-col">
            <span className="soft-pill">The clinic</span>
            <h2
              id="clinic-intro-heading"
              className="mt-4 max-w-xl font-serif text-3xl text-navy md:text-5xl"
            >
              A trusted paediatrician in Puppalguda, Hyderabad
            </h2>
            <div className="prose-clinic mt-5 max-w-xl text-base leading-7 text-ink">
              <p>
                {clinic.name} provides child-centred pediatric care for newborns,
                infants, children and adolescents. {doctor.name} combines paediatric
                expertise with a calm, approachable consultation for parents and children.
              </p>
              <p>
                The clinic is at {addressInline()}. Call {clinic.phoneDisplay}.
                Evening appointments run {clinic.hours.summary.toLowerCase()}, so a
                visit can often follow the school day or the end of work.
              </p>
            </div>
            <Link href="/doctor" className={`${btnNavy} mt-7 w-fit`}>
              Meet {doctor.name}
            </Link>
          </div>

          <aside className="section-surface relative flex flex-col rounded-[1.75rem] p-6 md:p-7">
            <span
              aria-hidden
              className="mb-4 block h-1 w-12 rounded-full bg-gradient-to-r from-teal via-[#ffc83d] to-coral"
            />
            <h3 className="font-serif text-2xl text-navy md:text-[1.7rem]">
              Who is the paediatrician in Puppalguda?
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              {doctor.name} consults at {clinic.name}, {addressInline()}. Call{" "}
              {clinic.phoneDisplay}. She is a consultant paediatrician and pediatric
              intensivist ({doctor.qualificationsInline}).
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                { href: "/newborn-care", label: "Newborn care" },
                { href: "/vaccination", label: "Vaccination guidance" },
                { href: "/child-health", label: "Child health checkups" },
                { href: "/faq", label: "Parent questions" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between rounded-xl border border-line/80 bg-white/70 px-3.5 py-2.5 text-sm font-semibold text-navy transition hover:border-teal/40 hover:bg-teal-soft"
                  >
                    <span>{item.label}</span>
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
          </aside>
        </div>
      </section>

      <ServicesGrid />
      <WhyChooseUs />
      <DoctorProfile compact />
      <HowWeHelp />

      <section
        className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(255,200,61,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(233,142,174,0.1),transparent_30%),linear-gradient(180deg,#fff8df_0%,#fff9f5_55%,#ffffff_100%)]"
        aria-labelledby="newborn-heading"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-8 right-[12%] h-36 w-36 rounded-full bg-[rgba(85,197,192,0.12)] blur-3xl" />
          <div className="absolute bottom-6 left-[8%] h-40 w-40 rounded-full bg-[rgba(241,91,98,0.08)] blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2 md:items-stretch md:gap-10 md:py-20">
          <div className="flex flex-col">
            <span className="soft-pill">Newborns</span>
            <h2
              id="newborn-heading"
              className="mt-4 font-serif text-3xl text-navy md:text-5xl"
            >
              Gentle care for newborns
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-ink">
              Early visits cover the questions that fill the first weeks: feeding,
              weight, colour, sleep, and what needs a doctor rather than reassurance
              from relatives.
            </p>
            <ul className="mt-6 grid gap-2.5 text-sm text-navy sm:grid-cols-2">
              {[
                "Newborn checkups",
                "Feeding guidance",
                "Breastfeeding support",
                "Jaundice assessment",
                "Weight monitoring",
                "Vaccination guidance",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-line/70 bg-white/70 px-3.5 py-2.5 shadow-[0_8px_18px_rgba(37,38,74,0.03)]"
                >
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-coral align-middle" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/newborn-care" className={`${btnNavy} mt-7 w-fit`}>
              Explore newborn care
            </Link>
          </div>

          <aside className="section-surface relative flex flex-col justify-center rounded-[1.75rem] p-6 md:p-7">
            <span
              aria-hidden
              className="mb-4 block h-1 w-12 rounded-full bg-gradient-to-r from-coral via-[#ffc83d] to-teal"
            />
            <h3 className="font-serif text-2xl text-navy md:text-[1.7rem]">
              When a newborn should be seen sooner
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Poor feeding, unusual sleepiness, or increasing yellow colour should
              not wait for a convenient slot. Call the clinic, and use emergency
              care if the baby is struggling to breathe or cannot be woken.
            </p>
          </aside>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(85,197,192,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(233,142,174,0.08),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f7f8ff_50%,#fff9f5_100%)]"
        aria-labelledby="vaccination-heading"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-10 left-[10%] h-36 w-36 rounded-full bg-[rgba(255,200,61,0.1)] blur-3xl" />
          <div className="absolute right-[8%] bottom-8 h-40 w-40 rounded-full bg-[rgba(85,197,192,0.1)] blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:py-20">
          <div>
            <span className="soft-pill">Prevention</span>
            <h2
              id="vaccination-heading"
              className="mt-4 max-w-xl font-serif text-3xl text-navy md:text-5xl"
            >
              Vaccination and immunisation for children
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-ink">
              The clinic provides age-appropriate vaccination guidance and immunisation.
              Vaccination schedules are advised according to the child’s age, health
              status and applicable pediatric recommendations.
            </p>
            <p className="mt-3 max-w-xl text-base leading-7 text-muted">
              Bring the vaccination record. A single chart is not published here,
              because the right dose depends on the child.
            </p>

            <ul className="mt-6 grid gap-2.5 text-sm text-navy sm:grid-cols-2">
              {[
                "Age-appropriate guidance",
                "Catch-up dose review",
                "Record-based planning",
                "After-vaccine advice",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-line/70 bg-white/75 px-3.5 py-2.5 shadow-[0_8px_18px_rgba(37,38,74,0.03)]"
                >
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-teal align-middle" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/vaccination" className={`${btnNavy} mt-7 w-fit`}>
              View vaccination services
            </Link>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-teal/20 via-[#ffc83d]/12 to-coral/20 blur-[1px]"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white p-2 shadow-[0_18px_40px_rgba(37,38,74,0.08)]">
              <div className="overflow-hidden rounded-[1.35rem]">
                <Image
                  src="/images/services/child-vaccination.webp"
                  alt="Child receiving vaccination at Tiny Totz Kids Clinic, paediatric immunisation in Puppalguda, Hyderabad"
                  width={1024}
                  height={682}
                  sizes="(min-width: 768px) 420px, 100vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
            <aside className="section-surface relative mt-4 rounded-2xl p-5">
              <span
                aria-hidden
                className="mb-3 block h-1 w-10 rounded-full bg-gradient-to-r from-teal via-[#ffc83d] to-coral"
              />
              <h3 className="font-serif text-xl text-navy">Before you visit</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Bring the vaccination card or a clear photo of it, and mention any recent
                fever so the right dose can be planned calmly.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ
        items={homeFaqs()}
        intro="Short answers to the questions parents ask before they call. More are on the FAQ page."
      />
      <div className="bg-mist px-5 pb-12 text-center">
        <Link href="/faq" className="text-sm font-semibold text-teal hover:text-navy">
          Read all parent questions
        </Link>
      </div>
      <AreasWeServe />
      <ClinicGlance />
      <ContactSection />
      <AppointmentCTA />
    </>
  );
}
