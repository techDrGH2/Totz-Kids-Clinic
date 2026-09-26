import { clinic } from "@/lib/clinic";

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  source: string;
};

/**
 * Comments previously published on tinytotzclinic.com.
 * They are parent feedback, not independently re-verified here, and they are
 * not marked up as review structured data.
 */
export const testimonials: Testimonial[] = [
  {
    id: "ritika-agarwal",
    quote:
      "We are truly thankful to Dr. Shilpa Reddy for the incredible care she provided to our newborn. Her calm demeanor and sound advice made our parenting journey much easier. The clinic is very child-friendly and hygienic.",
    name: "Ritika Agarwal",
    source: "Published on the clinic website",
  },
  {
    id: "manish-verma",
    quote:
      "Dr. Shilpa is extremely gentle and patient with children. My son used to be terrified of hospitals, but now he walks into her clinic with a smile. Her personalized care and knowledge are unmatched.",
    name: "Manish Verma",
    source: "Published on the clinic website",
  },
  {
    id: "sneha-kapoor",
    quote:
      "From vaccination schedules to diet advice, Dr. Shilpa has guided us every step of the way. She is approachable, knowledgeable, and always reassuring. I highly recommend her to all parents.",
    name: "Sneha Kapoor",
    source: "Published on the clinic website",
  },
  {
    id: "rahul-deshmukh",
    quote:
      "Excellent pediatric care! Dr. Shilpa not only treated our child’s fever effectively but also made sure we understood the root cause and prevention. Her attention to detail is commendable.",
    name: "Rahul Deshmukh",
    source: "Published on the clinic website",
  },
  {
    id: "priyanka-rao",
    quote:
      "I brought my daughter in with recurring cold and cough. Dr. Shilpa’s holistic approach and thorough diagnosis helped us get lasting relief. We are very happy with the care received.",
    name: "Priyanka Rao",
    source: "Published on the clinic website",
  },
  {
    id: "vikram-jaiswal",
    quote:
      "We have been visiting Dr. Shilpa for over two years now. She has always been available during emergencies and follows up even after consultations. Truly the best pediatrician in town!",
    name: "Vikram Jaiswal",
    source: "Published on the clinic website",
  },
];

export const testimonialIntro =
  "Hear from parents about their experiences with Dr. Shilpa Reddy and the care provided at Tiny Totz Kids Clinic.";

/** Provenance only. These comments are not a verified Google rating or review count. */
export const testimonialNote = `Previously published on the ${clinic.name} website. These are parent comments about paediatric care in ${clinic.address.area}, ${clinic.address.city}, not a live Google review feed.`;
