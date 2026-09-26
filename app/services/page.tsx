import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ServiceCard } from "@/components/ServiceCard";
import { pageMetadata } from "@/lib/seo";
import { webPageSchema } from "@/lib/schema";
import { services } from "@/lib/services";

export const metadata: Metadata = pageMetadata({
  title: "Paediatric Services in Puppalguda, Hyderabad",
  description:
    "Paediatric services at Tiny Totz Kids Clinic in Puppalguda: newborn care, vaccination, illness visits, nutrition, allergies, asthma, development and well-child checkups.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/services",
          name: "Paediatric Services in Puppalguda, Hyderabad",
          description: "Child healthcare services at Tiny Totz Kids Clinic.",
        })}
      />
      <header className="border-b border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
          <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />
          <p className="eyebrow">Services</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl text-navy md:text-5xl">
            Paediatric services in Puppalguda, Hyderabad
          </h1>
          <p className="mt-5 max-w-3xl border-l-2 border-teal pl-4 text-lg leading-8">
            Tiny Totz Kids Clinic offers paediatric consultations for newborns, infants,
            children and adolescents. Each service page explains what the visit covers
            and when to seek urgent care instead.
          </p>
        </div>
      </header>
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </>
  );
}
