import Link from "next/link";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { BookAppointmentButton } from "@/components/AppointmentBooking";
import { Logo } from "@/components/Logo";
import { addressLines, clinic, medicalDisclaimer } from "@/lib/clinic";
import { doctor } from "@/lib/doctor";
import { footerCareNav, footerExploreNav, legalNav } from "@/lib/navigation";

const visitLines = [
  `${addressLines()[1]}, ${addressLines()[2]}`,
  `${addressLines()[3]}, ${addressLines()[4]}`,
  `${addressLines()[5]}, ${addressLines()[6]}`,
];

export function Footer() {
  return (
    <footer className="site-footer text-white">
      <div
        aria-hidden
        className="h-1 bg-gradient-to-r from-teal via-[#ffc83d]/70 to-coral"
      />

      <div className="mx-auto max-w-6xl px-5 pt-12 pb-10 md:pt-14 md:pb-12">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.85fr_0.95fr_1.15fr] lg:gap-8">
          <div>
            <Link href="/" className="inline-block">
              <Logo
                className="h-14 w-auto"
                alt={`${clinic.name} logo - paediatric clinic in Puppalguda, Hyderabad`}
              />
            </Link>
            <p className="mt-1 text-sm font-medium tracking-[0.04em] text-teal">
              {clinic.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/72">
              Paediatric consultations in {clinic.address.area},{" "}
              {clinic.address.city}, with {doctor.name}. Quiet, focused visits
              for newborns through school age.
            </p>
            <p className="mt-3 text-sm text-white/55">
              {doctor.qualificationsInline}
            </p>
            <BookAppointmentButton
              eventLabel="footer"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-coral px-5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:brightness-105"
            >
              Book Appointment
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </BookAppointmentButton>
          </div>

          <FooterColumn title="Explore">
            <ul className="space-y-2.5 text-sm text-white/72">
              {footerExploreNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Care">
            <ul className="space-y-2.5 text-sm text-white/72">
              {footerCareNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Visit the clinic" accent="coral">
            <address
              className="not-italic"
              itemScope
              itemType="https://schema.org/MedicalClinic"
            >
              <meta itemProp="name" content={clinic.name} />
              <ContactRow icon={<MapPin className="h-4 w-4" aria-hidden />} label="Address">
                <a
                  className="transition hover:text-white"
                  href={clinic.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <span itemProp="streetAddress" className="block">
                    {visitLines[0]}
                  </span>
                  <span className="block">
                    <span itemProp="addressLocality">{clinic.address.area}</span>
                    {", "}
                    <span itemProp="addressRegion">{clinic.address.city}</span>
                  </span>
                  <span className="block">
                    <span itemProp="addressRegion">{clinic.address.state}</span>{" "}
                    <span itemProp="postalCode">{clinic.address.postalCode}</span>
                  </span>
                  <meta itemProp="addressCountry" content={clinic.address.countryCode} />
                </a>
              </ContactRow>

              <div className="mt-4 space-y-3.5">
                <ContactRow icon={<Phone className="h-4 w-4" aria-hidden />} label="Phone">
                  <a
                    className="font-semibold text-white transition hover:text-teal-soft"
                    href={`tel:${clinic.phoneTel}`}
                    itemProp="telephone"
                  >
                    {clinic.phoneDisplay}
                  </a>
                </ContactRow>
                <ContactRow icon={<Mail className="h-4 w-4" aria-hidden />} label="Email">
                  <a
                    className="break-all transition hover:text-white"
                    href={`mailto:${clinic.email}`}
                    itemProp="email"
                  >
                    {clinic.email}
                  </a>
                </ContactRow>
                <ContactRow icon={<Clock className="h-4 w-4" aria-hidden />} label="Hours">
                  <span>
                    {clinic.hours.summary}
                    <span className="mt-0.5 block text-white/50">
                      {clinic.hours.closed} closed
                    </span>
                  </span>
                </ContactRow>
              </div>
            </address>
          </FooterColumn>
        </div>

        <p className="mt-10 max-w-3xl border-t border-white/10 pt-6 text-xs leading-5 text-white/45">
          {medicalDisclaimer}
        </p>
      </div>

      <div className="site-footer-bar border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
          <div className="flex flex-col gap-3 sm:items-end">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p>
              Developed by{" "}
              <a
                href="https://www.techdr.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/70 transition hover:text-teal"
              >
                TechDR
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
  accent = "teal",
}: {
  title: string;
  children: ReactNode;
  accent?: "teal" | "coral";
}) {
  return (
    <div>
      <h2 className="font-serif text-lg text-white">{title}</h2>
      <span
        aria-hidden
        className={`mt-2.5 block h-0.5 w-8 ${accent === "coral" ? "bg-coral" : "bg-teal"}`}
      />
      <div className="mt-5">{children}</div>
    </div>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md bg-white/10 text-teal">
        {icon}
      </span>
      <div className="min-w-0 text-sm leading-5 text-white/75">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-white/45 uppercase">
          {label}
        </p>
        <div className="mt-0.5">{children}</div>
      </div>
    </div>
  );
}
