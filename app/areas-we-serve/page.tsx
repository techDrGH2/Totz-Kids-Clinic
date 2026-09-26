import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { addressInline, clinic } from "@/lib/clinic";
import { pageMetadata } from "@/lib/seo";
import { webPageSchema } from "@/lib/schema";
import { areas, nearbyAreaNames } from "@/lib/locations";

export const metadata: Metadata = pageMetadata({
  title: "Areas We Serve from Puppalguda",
  description:
    "Tiny Totz Kids Clinic is in Puppalguda and sees families from Manikonda, Lanco Hills, Khajaguda, Narsingi, Kokapet and nearby Hyderabad neighbourhoods.",
  path: "/areas-we-serve",
});

export default function AreasPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/areas-we-serve",
          name: "Areas served by Tiny Totz Kids Clinic",
          description: "Neighbourhoods whose families visit the Puppalguda clinic.",
        })}
      />
      <header className="border-b border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
          <Breadcrumbs items={[{ name: "Areas we serve", href: "/areas-we-serve" }]} />
          <h1 className="mt-3 max-w-3xl font-serif text-4xl text-navy md:text-5xl">
            Families we see from around western Hyderabad
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8">
            There is one clinic, at {addressInline()}. Call {clinic.phoneDisplay}.
            Families from nearby neighbourhoods travel to that address. The names
            below are not branch locations.
          </p>
        </div>
      </header>
      <section className="mx-auto max-w-6xl px-5 py-14">
        <ul className="grid gap-4 md:grid-cols-2">
          {areas.map((area) => (
            <li key={area.slug} className="border border-line p-5">
              <h2 className="font-serif text-2xl text-navy">{area.name}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{area.summary}</p>
              <Link
                href={`/areas-we-serve/${area.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-teal"
              >
                {area.clinicIsHere ? "Clinic location details" : `Visiting from ${area.name}`}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm leading-6 text-muted">
          The clinic also sees families from{" "}
          {nearbyAreaNames
            .filter((name) => !areas.some((area) => area.name === name))
            .join(", ")}
          . Separate pages are not published for those neighbourhoods, so the same
          clinic description is not repeated under every name.
        </p>
      </section>
    </>
  );
}
