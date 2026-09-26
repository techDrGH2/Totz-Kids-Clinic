import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Paediatric FAQs for Parents",
  description:
    "Answers about vaccinations, newborn care, feeding, allergies, growth and the location of Tiny Totz Kids Clinic in Puppalguda.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/faq",
          name: "Frequently asked questions",
          description: "Parent questions about Tiny Totz Kids Clinic.",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <header className="border-b border-line bg-mist">
        <div className="mx-auto max-w-3xl px-5 py-10 md:py-14">
          <Breadcrumbs items={[{ name: "FAQs", href: "/faq" }]} />
          <h1 className="font-serif text-4xl text-navy md:text-5xl">
            Questions parents ask before they visit
          </h1>
          <p className="mt-4 text-lg leading-8 text-muted">
            Direct answers about the clinic, the doctor, and when a child should be seen.
            These are general. They are not a diagnosis for your child.
          </p>
        </div>
      </header>
      <FAQ items={faqs} heading="Clinic questions" id="faq-page-heading" tone="plain" />
    </>
  );
}
