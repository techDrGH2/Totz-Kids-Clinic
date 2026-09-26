import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Medical Disclaimer",
  description:
    "Educational information on the Tiny Totz Kids Clinic website does not replace a consultation with a paediatrician.",
  path: "/medical-disclaimer",
});

export default function DisclaimerPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-12">
      <Breadcrumbs items={[{ name: "Medical Disclaimer", href: "/medical-disclaimer" }]} />
      <h1 className="font-serif text-4xl text-navy">Medical disclaimer</h1>
      <div className="prose-clinic mt-6 text-base leading-7">
        <MedicalDisclaimer />
        <p className="mt-4">
          Pages about illness, vaccination, feeding, growth, allergy, development and
          skin describe the kind of care discussed in clinic. They do not diagnose a
          child, choose a medicine, or promise recovery.
        </p>
        <p className="mt-4">
          Vaccination timing is advised for the individual child. A universal schedule
          is intentionally not published here.
        </p>
        <p className="mt-4">
          If a child is seriously unwell, contact emergency services or the nearest
          emergency department. Then let the clinic know if a follow-up is needed.
        </p>
      </div>
    </article>
  );
}
