import type { BlogPost } from "@/lib/blog";
import { posts } from "@/lib/blog";
import { addressInline, clinic, siteUrl } from "@/lib/clinic";
import { doctor } from "@/lib/doctor";
import { faqs, type FaqItem } from "@/lib/faqs";
import { nearbyAreaNames } from "@/lib/locations";
import { absoluteUrl } from "@/lib/seo";
import { services, type Service } from "@/lib/services";

export type Crumb = { name: string; href: string };

function clean<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

export function jsonLdScript(data: unknown) {
  const json = JSON.stringify(clean(data)).replace(/</g, "\\u003c");
  return json;
}

export function breadcrumbSchema(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function medicalClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "MedicalOrganization", "LocalBusiness"],
    "@id": `${siteUrl}/#clinic`,
    name: clinic.name,
    alternateName: clinic.shortName,
    url: siteUrl,
    telephone: clinic.phoneDisplay,
    email: clinic.email,
    image: absoluteUrl("/images/doctor/hero-paediatric-care.webp"),
    logo: absoluteUrl("/images/tiny-totz-kids-clinic-logo.webp"),
    medicalSpecialty: ["Pediatric", "Pediatric Intensive Care"],
    description: `${clinic.name} provides paediatric care in ${clinic.address.area}, ${clinic.address.city}, including newborn care, vaccination guidance, child health checkups, nutrition, allergies, asthma and developmental care with ${doctor.name}.`,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.streetAddress,
      addressLocality: clinic.address.city,
      addressRegion: clinic.address.state,
      postalCode: clinic.address.postalCode,
      addressCountry: clinic.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinic.maps.geo.latitude,
      longitude: clinic.maps.geo.longitude,
    },
    areaServed: nearbyAreaNames.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    openingHoursSpecification: clinic.hours.specification.map((block) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: block.days,
      opens: block.opens,
      closes: block.closes,
    })),
    availableService: services.map((service) => ({
      "@type": "MedicalProcedure",
      name: service.title,
      description: service.description,
      url: absoluteUrl(service.href),
    })),
    employee: { "@id": `${siteUrl}/#physician` },
    hasMap: clinic.maps.searchUrl,
    slogan: clinic.tagline,
    priceRange: clinic.priceRange,
    currenciesAccepted: clinic.currenciesAccepted,
    paymentAccepted: clinic.paymentAccepted,
    knowsLanguage: [...clinic.languages],
    ...(clinic.socialLinks.length
      ? { sameAs: clinic.socialLinks.map((link) => link.href) }
      : {}),
  };
}

export function physicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${siteUrl}/#physician`,
    name: doctor.name,
    honorificPrefix: doctor.honorific,
    url: absoluteUrl("/doctor"),
    telephone: clinic.phoneDisplay,
    medicalSpecialty: ["Pediatric", "Pediatric Intensive Care"],
    image: absoluteUrl(doctor.image.src),
    description: `${doctor.name} is a ${doctor.role} at ${clinic.name} in ${clinic.address.area}, ${clinic.address.city}. Qualifications: ${doctor.qualificationsInline}.`,
    worksFor: { "@id": `${siteUrl}/#clinic` },
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.streetAddress,
      addressLocality: clinic.address.city,
      addressRegion: clinic.address.state,
      postalCode: clinic.address.postalCode,
      addressCountry: clinic.address.countryCode,
    },
    hasCredential: doctor.qualifications.map((name) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name,
    })),
    availableService: services.map((service) => ({
      "@type": "MedicalProcedure",
      name: service.title,
      url: absoluteUrl(service.href),
    })),
    knowsAbout: [
      "Newborn care",
      "Childhood vaccination",
      "Child health checkups",
      "Pediatric allergies and asthma",
      "Growth and nutrition",
      "Developmental concerns",
    ],
    knowsLanguage: [...clinic.languages],
  };
}

export function medicalProcedureSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${absoluteUrl(service.href)}#procedure`,
    name: service.title,
    description: service.summary,
    url: absoluteUrl(service.href),
    procedureType: "https://schema.org/TherapeuticProcedure",
    howPerformed: service.expect.join(" "),
    preparation: `Bring questions and relevant records to ${clinic.name} in ${clinic.address.area}. ${clinic.hours.note}`,
    followup:
      "Follow the return advice given in clinic. Seek emergency care for breathing difficulty, seizures, or a child who will not wake.",
    relevantSpecialty: {
      "@type": "MedicalSpecialty",
      name: "Pediatrics",
    },
    performer: {
      "@type": "Physician",
      "@id": `${siteUrl}/#physician`,
      name: doctor.name,
      url: absoluteUrl("/doctor"),
    },
    statusQuo: service.includes.slice(0, 4).join("; "),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: clinic.name,
    url: siteUrl,
    description: `${clinic.name} is a paediatric clinic in ${clinic.address.area}, ${clinic.address.city}.`,
    publisher: { "@id": `${siteUrl}/#clinic` },
    inLanguage: "en-IN",
  };
}

export function webPageSchema(input: {
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(input.path)}#webpage`,
    url: absoluteUrl(input.path),
    name: input.name,
    description: input.description,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#clinic` },
    inLanguage: "en-IN",
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalWebPage", "Article"],
    headline: post.title,
    description: post.description,
    image: absoluteUrl(post.image.src),
    datePublished: post.publishedOn,
    dateModified: post.updatedOn,
    author: {
      "@type": "Organization",
      name: clinic.name,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: clinic.name,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/tiny-totz-kids-clinic-logo.webp"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}`),
    },
    articleSection: post.category,
    about: { "@id": `${siteUrl}/#clinic` },
    ...(post.medicalReview
      ? {
          reviewedBy: {
            "@type": "Person",
            name: post.medicalReview.reviewer,
            url: absoluteUrl("/doctor"),
          },
        }
      : {}),
  };
}

/** Posts that list this service in relatedServices (semantic cluster links). */
export function relatedPostsForService(serviceSlug: string, limit = 3) {
  return posts
    .filter((post) => post.relatedServices.includes(serviceSlug))
    .slice(0, limit);
}

export const paediatricCitations = [
  {
    name: "WHO - Child health",
    url: "https://www.who.int/health-topics/child-health",
  },
  {
    name: "Indian Academy of Pediatrics (IAP)",
    url: "https://iapindia.org/",
  },
  {
    name: "Ministry of Health & Family Welfare, India",
    url: "https://www.mohfw.gov.in/",
  },
] as const;

export function serviceGlanceItems(service: Service) {
  return [
    { label: "Care type", value: service.eyebrow },
    { label: "Doctor", value: `${doctor.name} · ${doctor.qualificationsInline}` },
    {
      label: "Clinic",
      value: `${clinic.name}, ${clinic.address.area}, ${clinic.address.city} ${clinic.address.postalCode}`,
    },
    { label: "Hours", value: clinic.hours.summary },
    { label: "Phone", value: clinic.phoneDisplay },
    { label: "Languages", value: clinic.languages.join(", ") },
  ] as const;
}

export function homeFaqs() {
  return faqs.slice(0, 8);
}

export const clinicGlance = [
  { label: "Clinic", value: clinic.name },
  { label: "Specialty", value: clinic.specialty },
  { label: "Doctor", value: doctor.name },
  { label: "Role", value: doctor.role },
  { label: "Qualification", value: doctor.qualificationsInline },
  {
    label: "Location",
    value: `${clinic.address.area}, ${clinic.address.city}`,
  },
  { label: "Address", value: addressInline() },
  { label: "Phone", value: clinic.phoneDisplay },
  { label: "Email", value: clinic.email },
  { label: "Hours", value: clinic.hours.summary },
  { label: "Languages", value: clinic.languages.join(", ") },
] as const;
