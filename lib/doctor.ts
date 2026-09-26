import { clinic } from "@/lib/clinic";

/**
 * Only credentials stated by the clinic are included.
 * Do not add hospital affiliations, awards, publications, or memberships here
 * unless the clinic has verified them.
 */
export const doctor = {
  name: "Dr. Shilpa Reddy T",
  givenName: "Shilpa Reddy T",
  honorific: "Dr.",
  qualifications: ["MBBS", "DNB Pediatrics", "IDPCCM"],
  qualificationsInline: "MBBS, DNB Pediatrics, IDPCCM",
  role: "Consultant Paediatrician & Pediatric Intensivist",
  image: {
    src: "/images/doctor/dr-shilpa-reddy.webp",
    fallbackSrc: "/images/doctor/dr-shilpa-reddy-paediatrician-puppalguda.svg",
    alt: "Portrait of Dr. Shilpa Reddy T, consultant paediatrician and pediatric intensivist at Tiny Totz Kids Clinic in Puppalguda, Hyderabad",
    width: 900,
    height: 1100,
  },
  experienceNote:
    "The clinic publishes more than 12 years of paediatric experience for Dr. Shilpa Reddy T.",
  portraitCaption: `${clinic.name} · ${clinic.address.area}`,
  areasOfCare: [
    "Newborn and infant care",
    "Childhood illness consultations",
    "Vaccination guidance",
    "Growth and nutrition discussions",
    "Allergy and asthma concerns",
    "Developmental questions",
    "Feeding and breastfeeding support",
    "Well-child checkups",
  ],
  biography: [
    "Dr. Shilpa Reddy T is the consultant paediatrician and pediatric intensivist at Tiny Totz Kids Clinic in Puppalguda, Hyderabad. Her qualifications, as published by the clinic, are MBBS, DNB Pediatrics and IDPCCM.",
    "Consultations are arranged so parents can talk through what they are noticing at home. That may include feeding, sleep, fever, cough, growth, immunisation, or development. The visit stays focused on the child in the room, with time for questions.",
    "Newborn and infant care is a regular part of the practice, including feeding guidance, weight checks, and early health concerns. Preventive visits are used to look at growth and development and to plan the next checkup.",
    "When a child is unwell, the consultation covers the history, an appropriate examination, and a clear explanation of what to watch for. Parents leave with practical guidance. Outcomes depend on the child’s condition and are not guaranteed.",
  ],
  philosophy: [
    "Children do better when the room feels calm and the explanation is plain.",
    "Parents should understand why a step is suggested, not only what to do next.",
    "The same clinic and the same doctor make follow-up easier to continue.",
  ],
} as const;
