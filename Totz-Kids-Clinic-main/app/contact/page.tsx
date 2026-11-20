import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactSection } from "@/components/ContactSection";
import { JsonLd } from "@/components/JsonLd";
import { addressInline, clinic } from "@/lib/clinic";
import { medicalClinicSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `Contact Paediatric Clinic in ${clinic.address.area} | Tiny Totz Kids Clinic`,
  description: `Contact Tiny Totz Kids Clinic at ${addressInline()}. Call ${clinic.phoneDisplay}. Evening paediatric consultations ${clinic.hours.summary}.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/contact",
          name: `Contact ${clinic.name}`,
          description: `Phone, WhatsApp, email, map and hours for ${clinic.name} in ${clinic.address.area}.`,
        })}
      />
      <JsonLd data={medicalClinicSchema()} />
      <header className="border-b border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
          <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
          <h1 className="font-serif text-4xl text-navy md:text-5xl">
            Contact Tiny Totz Kids Clinic in {clinic.address.area}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
            {clinic.name} is at {addressInline()}. Call {clinic.phoneDisplay} to speak
            with the clinic, or send an appointment request. Consultations are{" "}
            {clinic.hours.summary}.
          </p>
        </div>
      </header>
      <ContactSection />
    </>
  );
}
