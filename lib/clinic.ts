/**
 * Single source for clinic facts. Update phone, hours, address, and
 * published figures here - do not copy them into page components.
 *
 * Hours: the clinic website publishes Monday-Saturday, 6:00 PM-9:00 PM.
 * A third-party listing has shown Monday-Friday only. Confirm before changing.
 *
 * Review figures: the previous website published 12+ years, a 5.0 Google
 * rating, and 80+ reviews. A rebuild note mentioned 90+ reviews. The values
 * below follow the clinic’s own published site. They are display copy only
 * and are intentionally excluded from review structured data.
 */

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://tinytotzclinic.com"
).replace(/\/$/, "");

export const medicalDisclaimer =
  "Information on this website is provided for general educational purposes and does not replace professional medical consultation.";

export const clinic = {
  name: "Tiny Totz Kids Clinic",
  shortName: "Tiny Totz",
  tagline: "Paediatrician & Child Healthcare",
  specialty: "Paediatrics",
  phoneDisplay: "+91 7815933120",
  phoneTel: "+917815933120",
  phoneWhatsApp: "917815933120",
  email: "tinytotzkidsofficial@gmail.com",
  website: siteUrl,
  address: {
    floor: "2nd Floor, C Block",
    building: "DNS Business Hub",
    landmark: "Opposite Alanati Restaurant",
    plusCode: "C928+935",
    streetAddress:
      "2nd Floor, C Block, DNS Business Hub, C928+935, Opposite Alanati Restaurant, Puppalguda",
    area: "Puppalguda",
    city: "Hyderabad",
    state: "Telangana",
    postalCode: "500089",
    country: "India",
    countryCode: "IN",
  },
  hours: {
    summary: "Monday-Saturday, 6:00 PM - 9:00 PM",
    closed: "Sunday",
    lines: [
      { label: "Monday - Saturday", value: "6:00 PM - 9:00 PM" },
      { label: "Sunday", value: "Closed" },
    ],
    specification: [
      {
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "18:00",
        closes: "21:00",
      },
    ],
    note: "Please call or WhatsApp to confirm before you visit.",
  },
  maps: {
    query:
      "2nd Floor, C Block, DNS Business Hub, C928+935, Opposite Alanati Restaurant, Puppalguda, Hyderabad, Telangana 500089",
    /** Approximate coordinates for DNS Business Hub, Puppalguda (Plus Code C928+935). */
    geo: {
      latitude: 17.4053,
      longitude: 78.3908,
    },
    get directionsUrl() {
      return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
        "Tiny Totz Kids Clinic, 2nd Floor, C Block, DNS Business Hub, C928+935, Opposite Alanati Restaurant, Puppalguda, Hyderabad, Telangana 500089",
      )}`;
    },
    get embedUrl() {
      return `https://maps.google.com/maps?q=${encodeURIComponent(
        clinic.maps.query,
      )}&z=16&output=embed`;
    },
    get searchUrl() {
      return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        "Tiny Totz Kids Clinic, 2nd Floor, C Block, DNS Business Hub, C928+935, Opposite Alanati Restaurant, Puppalguda, Hyderabad 500089",
      )}`;
    },
  },
  /** Languages used in consultations when helpful for parents. */
  languages: ["English", "Telugu", "Hindi"] as const,
  /** Content review stamp for service pages (update when clinical copy is reviewed). */
  contentReviewedOn: "2026-09-24",
  /**
   * Display-only figures from the clinic’s published site.
   * Do not put these in AggregateRating schema until a live GMB count is verified.
   */
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Card, UPI",
  /** Search link only. A verified Google Business profile URL was not available. */
  googleReviewsUrl:
    "https://www.google.com/search?q=Tiny+Totz+Kids+Clinic+Puppalguda+reviews",
  /** Add profile URLs only after the clinic confirms them. */
  socialLinks: [] as { label: string; href: string }[],
} as const;

export const trustStats = [
  { id: "experience", value: "12+", label: "Years of Experience" },
  { id: "rating", value: "5.0", label: "Google Rating" },
  { id: "reviews", value: "80+", label: "Patient Reviews" },
  { id: "role", value: "Pediatric", label: "Intensivist" },
] as const;

export function addressLines() {
  return [
    clinic.name,
    clinic.address.floor,
    clinic.address.building,
    clinic.address.plusCode,
    clinic.address.landmark,
    `${clinic.address.area}, ${clinic.address.city}`,
    `${clinic.address.state} ${clinic.address.postalCode}`,
  ];
}

export function addressInline() {
  return `${clinic.address.floor}, ${clinic.address.building}, ${clinic.address.plusCode}, ${clinic.address.landmark}, ${clinic.address.area}, ${clinic.address.city}, ${clinic.address.state} ${clinic.address.postalCode}`;
}
