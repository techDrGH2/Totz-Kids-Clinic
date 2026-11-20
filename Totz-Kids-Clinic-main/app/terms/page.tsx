import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";
import { clinic } from "@/lib/clinic";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description: `Terms for using the ${clinic.name} website and appointment request form.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-12">
      <Breadcrumbs items={[{ name: "Terms", href: "/terms" }]} />
      <h1 className="font-serif text-4xl text-navy">Terms of use</h1>
      <div className="prose-clinic mt-6 text-base leading-7">
        <p>
          This website belongs to {clinic.name}. It describes the clinic, the doctor,
          and how to request a consultation. Using the site means you have read these
          terms.
        </p>
        <h2 className="mt-8 font-serif text-2xl text-navy">Appointments</h2>
        <p className="mt-3">
          A form submission or WhatsApp message is a request, not a confirmed booking.
          The visit is confirmed when the clinic agrees a time. Published hours are{" "}
          {clinic.hours.summary}.
        </p>
        <h2 className="mt-8 font-serif text-2xl text-navy">Medical information</h2>
        <div className="mt-3">
          <MedicalDisclaimer />
        </div>
        <h2 className="mt-8 font-serif text-2xl text-navy">Emergency</h2>
        <p className="mt-3">
          Do not use this website, the form, or WhatsApp for a child who is struggling
          to breathe, unresponsive, or having a seizure. Use emergency services.
        </p>
      </div>
    </article>
  );
}
