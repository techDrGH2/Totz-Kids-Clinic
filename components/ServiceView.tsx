import Image from "next/image";
import Link from "next/link";
import { BookAppointmentButton } from "@/components/AppointmentBooking";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import {
  AuthoritativeCitations,
  MedicalByline,
} from "@/components/MedicalByline";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";
import { btnNavy, btnOutline, TrackedLink } from "@/components/TrackedLink";
import { addressInline, clinic } from "@/lib/clinic";
import { doctor } from "@/lib/doctor";
import {
  faqSchema,
  medicalProcedureSchema,
  relatedPostsForService,
  serviceGlanceItems,
  webPageSchema,
} from "@/lib/schema";
import { getServiceLongform } from "@/lib/service-longform";
import { relatedServices, type Service } from "@/lib/services";
import { whatsappUrl } from "@/lib/whatsapp";

export function ServiceView({ service }: { service: Service }) {
  const related = relatedServices(service);
  const relatedPosts = relatedPostsForService(service.slug);
  const longform = getServiceLongform(service.slug);
  const faqs = longform
    ? [...service.faqs, ...longform.faqs]
    : service.faqs;
  const glance = serviceGlanceItems(service);

  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: service.href,
          name: service.seoTitle,
          description: service.seoDescription,
        })}
      />
      <JsonLd data={medicalProcedureSchema(service)} />
      <JsonLd data={faqSchema(faqs)} />
      <article>
        <header className="border-b border-line bg-mist">
          <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
            <Breadcrumbs
              items={[
                { name: "Services", href: "/services" },
                { name: service.title, href: service.href },
              ]}
            />
            <p className="eyebrow">{service.eyebrow}</p>
            <h1 className="mt-3 max-w-3xl font-serif text-4xl text-navy md:text-5xl">
              {service.title} in {clinic.address.area}, {clinic.address.city}
            </h1>
            <p className="mt-5 max-w-3xl border-l-2 border-teal pl-4 text-lg leading-8 text-ink">
              {service.summary}
            </p>
          </div>
        </header>

        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-12 md:grid-cols-[1fr_18rem] md:py-16">
          <div className="prose-clinic max-w-3xl text-base leading-7">
            {service.image ? (
              <figure className="mb-8 overflow-hidden rounded-2xl border border-line bg-mist">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  width={service.image.width}
                  height={service.image.height}
                  priority
                  sizes="(min-width: 768px) 42rem, 100vw"
                  className="h-auto w-full object-cover"
                />
              </figure>
            ) : null}

            <section
              aria-label="At a glance"
              className="mb-8 rounded-2xl border border-line bg-sand/60 p-5"
            >
              <h2 className="font-serif text-2xl text-navy">At a glance</h2>
              <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                {glance.map((item) => (
                  <div key={item.label} className="rounded-xl bg-white/80 p-3">
                    <dt className="text-[11px] font-bold tracking-[0.14em] text-muted uppercase">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-navy">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {service.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <h2 className="mt-10 font-serif text-2xl text-navy">
              What can this paediatric visit include?
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-ink">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="mt-10 font-serif text-2xl text-navy">
              Which concerns do parents usually bring?
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-ink">
              {service.concerns.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="mt-10 font-serif text-2xl text-navy">
              When should you consult a paediatrician?
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-ink">
              {service.whenToConsult.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="mt-10 font-serif text-2xl text-navy">
              What happens during your visit?
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-ink">
              {service.expect.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>

            {longform?.sections.map((section) => (
              <section key={section.heading} className="mt-10">
                <h2 className="font-serif text-2xl text-navy">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <MedicalByline topic={service.title.toLowerCase()} />
            <AuthoritativeCitations />

            <div className="mt-10 border border-line bg-sand p-5">
              <h2 className="font-serif text-2xl text-navy">
                Who is the paediatrician for this service?
              </h2>
              <p className="mt-3">
                {doctor.name}, {doctor.qualificationsInline}, is the{" "}
                {doctor.role.toLowerCase()} at {clinic.name}. This service is
                part of her paediatric consultations in {clinic.address.area},{" "}
                {clinic.address.city} {clinic.address.postalCode}.
              </p>
              <Link href="/doctor" className="mt-3 inline-block font-semibold text-teal">
                View doctor profile
              </Link>
            </div>

            <div className="mt-8">
              <h2 className="font-serif text-2xl text-navy">
                Where is Tiny Totz Kids Clinic located?
              </h2>
              <p className="mt-3">
                {clinic.name}, {addressInline()}. Phone{" "}
                <a className="font-semibold text-teal" href={`tel:${clinic.phoneTel}`}>
                  {clinic.phoneDisplay}
                </a>
                . {clinic.hours.summary}. {clinic.hours.note}
              </p>
            </div>
          </div>

          <aside className="h-fit border border-line bg-paper p-5 md:sticky md:top-28">
            <h2 className="font-serif text-xl text-navy">Book this visit</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Evening consultations, {clinic.hours.summary}.
            </p>
            <div className="mt-4 grid gap-2">
              <BookAppointmentButton
                event="service_page_cta"
                eventLabel={service.slug}
                className={btnNavy}
              >
                Book Appointment
              </BookAppointmentButton>
              <TrackedLink
                href={whatsappUrl(service.whatsappMessage)}
                event="whatsapp_click"
                eventLabel={service.slug}
                className={btnOutline}
              >
                WhatsApp
              </TrackedLink>
              <TrackedLink
                href={`tel:${clinic.phoneTel}`}
                event="call_click"
                eventLabel={service.slug}
                className={btnOutline}
              >
                Call clinic
              </TrackedLink>
            </div>
          </aside>
        </div>

        <FAQ
          id={`${service.slug}-faq`}
          heading={`Questions about ${service.title.toLowerCase()}`}
          items={faqs}
          tone="plain"
        />

        <section className="border-t border-line bg-mist">
          <div className="mx-auto max-w-6xl px-5 py-12">
            <h2 className="font-serif text-2xl text-navy">Related care</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={item.href}
                    className="block border border-line bg-paper p-4 hover:border-teal"
                  >
                    <span className="font-serif text-lg text-navy">{item.title}</span>
                    <span className="mt-2 block text-sm leading-6 text-muted">
                      {item.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {relatedPosts.length ? (
              <>
                <h2 className="mt-10 font-serif text-2xl text-navy">
                  Related parent guides
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {relatedPosts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="block border border-line bg-paper p-4 hover:border-teal"
                      >
                        <span className="font-serif text-lg text-navy">{post.title}</span>
                        <span className="mt-2 block text-sm leading-6 text-muted">
                          {post.description}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            <MedicalDisclaimer className="mt-8 max-w-3xl" />
          </div>
        </section>
      </article>
    </>
  );
}
