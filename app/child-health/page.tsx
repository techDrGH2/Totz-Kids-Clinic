import type { Metadata } from "next";
import Link from "next/link";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { BookAppointmentButton } from "@/components/AppointmentBooking";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";
import { addressInline, clinic } from "@/lib/clinic";
import { doctor } from "@/lib/doctor";
import { faqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, webPageSchema } from "@/lib/schema";
import { getService } from "@/lib/services";

const links = [
  "common-childhood-illnesses",
  "well-child-visits",
  "child-nutrition",
  "child-allergy-asthma",
  "developmental-assessment",
]
  .map((slug) => getService(slug))
  .filter((service) => service !== undefined);

const pageFaqs = faqs.filter((item) =>
  [
    "When should my child see a paediatrician?",
    "Can you help with frequent cough and cold?",
    "How often should children have health checkups?",
    "Do you monitor developmental milestones?",
  ].includes(item.question),
);

export const metadata: Metadata = pageMetadata({
  title: "Child Health Care in Puppalguda",
  description:
    "Child health checkups, illness consultations and growth reviews at Tiny Totz Kids Clinic in Puppalguda with Dr. Shilpa Reddy T.",
  path: "/child-health",
});

export default function ChildHealthPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/child-health",
          name: "Child Health Care in Puppalguda",
          description: "Paediatric child health consultations at Tiny Totz Kids Clinic.",
        })}
      />
      <JsonLd data={faqSchema(pageFaqs)} />
      <header className="border-b border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
          <Breadcrumbs items={[{ name: "Child Health", href: "/child-health" }]} />
          <p className="eyebrow">Child health</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl text-navy md:text-5xl">
            Child health care in Puppalguda
          </h1>
          <p className="mt-5 max-w-3xl border-l-2 border-teal pl-4 text-lg leading-8">
            {clinic.name} provides child health consultations for infants, children and
            adolescents. {doctor.name} sees children for routine checkups and for illness
            that needs a paediatric review.
          </p>
        </div>
      </header>
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="prose-clinic text-base leading-7">
            <h2 className="font-serif text-3xl text-navy">Routine checkups</h2>
            <p className="mt-4">
              A well-child visit records growth, asks about development for the child’s
              age, and keeps vaccination planning from slipping. It is also the visit
              where a parent can raise a question that never felt urgent enough during
              a fever.
            </p>
            <h2 className="mt-8 font-serif text-3xl text-navy">When a child is unwell</h2>
            <p className="mt-4">
              Fever, cough, ear pain, vomiting and loose stools are assessed in clinic
              when the child is stable enough to attend. The visit explains what to
              watch at home. It does not promise that the illness will end that night.
            </p>
            <p>
              Fast breathing, a child who is hard to wake, a seizure, or a purple rash
              needs emergency care. Do not hold those for the evening clinic.
            </p>
            <h2 className="mt-8 font-serif text-3xl text-navy">Where to start</h2>
            <ul className="mt-4 space-y-3">
              {links.map((service) => (
                <li key={service.slug}>
                  <Link href={service.href} className="font-semibold text-teal">
                    {service.title}
                  </Link>
                  <span className="mt-1 block text-sm text-muted">{service.description}</span>
                </li>
              ))}
            </ul>
            <MedicalDisclaimer className="mt-8" />
          </div>
          <aside className="h-fit border border-line bg-sand p-5">
            <h2 className="font-serif text-2xl text-navy">Clinic hours</h2>
            <p className="mt-3 text-sm leading-6">
              {clinic.hours.summary}. Sunday is closed. {clinic.hours.note}
            </p>
            <p className="mt-4 text-sm leading-6">
              {addressInline()}. Call {clinic.phoneDisplay}.
            </p>
            <BookAppointmentButton
              eventLabel="child-health-aside"
              className="mt-4 inline-block font-semibold text-teal"
            >
              Book a child health visit
            </BookAppointmentButton>
          </aside>
        </div>
      </section>
      <FAQ items={pageFaqs} heading="Child health questions" tone="plain" id="child-health-faq" />
      <AppointmentCTA eventLabel="child-health" />
    </>
  );
}
