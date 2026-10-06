import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Phone } from "lucide-react";
import { Analytics } from "@/components/Analytics";
import { BookAppointmentButton } from "@/components/AppointmentBooking";
import { DeferredChrome } from "@/components/DeferredChrome";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { TrackedLink } from "@/components/TrackedLink";
import { clinic, siteUrl } from "@/lib/clinic";
import {
  medicalClinicSchema,
  physicianSchema,
  websiteSchema,
} from "@/lib/schema";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tiny Totz Kids Clinic | Paediatrician in Puppalguda, Hyderabad",
    template: "%s | Tiny Totz Kids Clinic",
  },
  description:
    "Tiny Totz Kids Clinic provides paediatric care in Puppalguda, Hyderabad, including newborn care, vaccinations, child health checkups, nutrition, allergies, asthma and developmental care with Dr. Shilpa Reddy T.",
  applicationName: clinic.name,
  authors: [{ name: clinic.name, url: siteUrl }],
  creator: clinic.name,
  publisher: clinic.name,
  category: "Health",
  keywords: [
    "paediatrician in Puppalguda",
    "pediatrician in Hyderabad",
    "child specialist in Hyderabad",
    "newborn care doctor in Hyderabad",
    "kids vaccination clinic Puppalguda",
    "Tiny Totz Kids Clinic",
    "Dr. Shilpa Reddy T",
    clinic.name,
  ],
  alternates: {
    canonical: `${siteUrl}/`,
    languages: {
      "en-IN": `${siteUrl}/`,
      "x-default": `${siteUrl}/`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: clinic.name,
    title: "Tiny Totz Kids Clinic | Paediatrician in Puppalguda, Hyderabad",
    description:
      "Trusted paediatric care in Puppalguda, Hyderabad for newborn care, vaccination, growth, allergy, asthma and developmental support.",
    url: `${siteUrl}/`,
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `${clinic.name} - paediatrician in Puppalguda, Hyderabad`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiny Totz Kids Clinic | Paediatrician in Puppalguda, Hyderabad",
    description:
      "Trusted paediatric care in Puppalguda, Hyderabad for newborn care, vaccination, growth, allergy, asthma and developmental support.",
    images: [`${siteUrl}/opengraph-image`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  appleWebApp: {
    capable: true,
    title: clinic.shortName,
    statusBarStyle: "default",
  },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": `${clinic.address.area}, ${clinic.address.city}, ${clinic.address.state}`,
    "geo.position": `${clinic.maps.geo.latitude};${clinic.maps.geo.longitude}`,
    ICBM: `${clinic.maps.geo.latitude}, ${clinic.maps.geo.longitude}`,
    "theme-color": "#25264a",
    "msapplication-TileColor": "#25264a",
    "og:email": clinic.email,
    "og:phone_number": clinic.phoneDisplay,
    "og:street-address": clinic.address.streetAddress,
    "og:locality": clinic.address.city,
    "og:region": clinic.address.state,
    "og:postal-code": clinic.address.postalCode,
    "og:country-name": clinic.address.country,
  },
  ...(googleVerification ? { verification: { google: googleVerification } } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-IN"
      className={montserrat.variable}
    >
      <body className="min-h-screen bg-[var(--brand-cream)] font-sans text-[var(--brand-text)] antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-white focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <JsonLd data={websiteSchema()} />
        <JsonLd data={medicalClinicSchema()} />
        <JsonLd data={physicianSchema()} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <div className="fixed right-5 bottom-5 z-40 hidden flex-col items-end gap-3 md:flex">
            <TrackedLink
              href={`tel:${clinic.phoneTel}`}
              event="call_click"
              eventLabel="sticky-cta"
              ariaLabel={`Call ${clinic.phoneDisplay}`}
              className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-coral)] text-white shadow-[0_18px_35px_rgba(241,91,98,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105"
            >
              <Phone className="h-6 w-6" aria-hidden />
            </TrackedLink>
            <BookAppointmentButton
              eventLabel="sticky-cta"
              ariaLabel="Book appointment"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-navy)] px-5 py-3 text-sm font-extrabold tracking-[0.08em] text-white shadow-[0_18px_35px_rgba(37,38,74,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_40px_rgba(37,38,74,0.26)]"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-base">
                ✦
              </span>
              Book Appointment
            </BookAppointmentButton>
        </div>
        <DeferredChrome />
        <Analytics />
      </body>
    </html>
  );
}
