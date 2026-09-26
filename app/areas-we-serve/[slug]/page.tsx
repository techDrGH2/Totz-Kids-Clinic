import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { BookAppointmentButton } from "@/components/AppointmentBooking";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { addressInline, clinic } from "@/lib/clinic";
import { areas, getArea } from "@/lib/locations";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, webPageSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return pageMetadata({
    title: area.seoTitle,
    description: area.seoDescription,
    path: `/areas-we-serve/${area.slug}`,
  });
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: `/areas-we-serve/${area.slug}`,
          name: area.seoTitle,
          description: area.seoDescription,
        })}
      />
      <JsonLd data={faqSchema(area.faqs)} />
      <header className="border-b border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
          <Breadcrumbs
            items={[
              { name: "Areas we serve", href: "/areas-we-serve" },
              { name: area.name, href: `/areas-we-serve/${area.slug}` },
            ]}
          />
          <p className="eyebrow">{area.clinicIsHere ? "Clinic neighbourhood" : "Nearby families"}</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl text-navy md:text-5xl">
            {area.headline}
          </h1>
          <p className="mt-5 max-w-3xl border-l-2 border-teal pl-4 text-lg leading-8">
            {area.summary}
          </p>
        </div>
      </header>
      <article className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="prose-clinic text-base leading-7">
            {area.sections.map((section) => (
              <section key={section.heading} className="mt-8 first:mt-0">
                <h2 className="font-serif text-3xl text-navy">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
            <h2 className="mt-10 font-serif text-3xl text-navy">Services at this clinic</h2>
            <p className="mt-4">
              Families from {area.name} can book{" "}
              <Link className="font-semibold text-teal" href="/newborn-care">
                newborn care
              </Link>
              ,{" "}
              <Link className="font-semibold text-teal" href="/vaccination">
                vaccination
              </Link>
              ,{" "}
              <Link className="font-semibold text-teal" href="/child-health">
                child health visits
              </Link>{" "}
              and the wider{" "}
              <Link className="font-semibold text-teal" href="/services">
                paediatric services
              </Link>{" "}
              list. All of them happen in Puppalguda.
            </p>
          </div>
          <aside className="h-fit border border-line p-5">
            <h2 className="font-serif text-2xl text-navy">Appointment</h2>
            <p className="mt-3 text-sm leading-6">
              {clinic.name}
              <br />
              {addressInline()}
              <br />
              {clinic.phoneDisplay}
            </p>
            <p className="mt-3 text-sm">{clinic.hours.summary}</p>
            <BookAppointmentButton
              eventLabel="area-aside"
              className="mt-4 inline-block font-semibold text-teal"
            >
              Book an appointment
            </BookAppointmentButton>
            <p className="mt-2">
              <Link href="/contact" className="text-sm font-semibold text-teal">
                Directions and contact
              </Link>
            </p>
          </aside>
        </div>
      </article>
      <FAQ items={area.faqs} heading={`Questions from ${area.name}`} id={`${area.slug}-faq`} />
      <AppointmentCTA
        heading={
          area.clinicIsHere
            ? "Book at the Puppalguda clinic"
            : `Travelling from ${area.name}?`
        }
        text="Confirm a Monday to Saturday evening slot before you leave home."
        eventLabel={area.slug}
      />
    </>
  );
}
