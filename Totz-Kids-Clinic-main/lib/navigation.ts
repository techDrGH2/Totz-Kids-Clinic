import { clinic } from "@/lib/clinic";

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/doctor", label: "Doctor" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerExploreNav = [
  { href: "/about", label: "About" },
  { href: "/doctor", label: "Doctor" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
  { href: clinic.bookingUrl, label: "Book Appointment" },
] as const;

export const footerCareNav = [
  { href: "/vaccination", label: "Vaccination" },
  { href: "/newborn-care", label: "Newborn Care" },
  { href: "/child-health", label: "Child Health" },
  { href: "/nutrition-growth", label: "Nutrition & Growth" },
  { href: "/allergies-asthma", label: "Allergies & Asthma" },
  { href: "/developmental-care", label: "Developmental Care" },
] as const;

/** Combined footer links for sitemap-style use */
export const footerNav = [...footerExploreNav, ...footerCareNav] as const;

export const legalNav = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/medical-disclaimer", label: "Medical Disclaimer" },
] as const;
