import { addressInline, clinic } from "@/lib/clinic";

export type AreaFaq = { question: string; answer: string };

export type AreaPage = {
  slug: string;
  name: string;
  /** True only for the neighbourhood where the clinic building stands. */
  clinicIsHere: boolean;
  seoTitle: string;
  seoDescription: string;
  headline: string;
  summary: string;
  sections: { heading: string; paragraphs: string[] }[];
  faqs: AreaFaq[];
};

const phone = clinic.phoneDisplay;
const address = addressInline();
const hours = clinic.hours.summary;

export const nearbyAreaNames = [
  "Puppalguda",
  "Manikonda",
  "Lanco Hills",
  "Khajaguda",
  "Langer House",
  "Narsingi",
  "Kokapet",
  "Financial District",
  "Nanakramguda",
] as const;

export const areas: AreaPage[] = [
  {
    slug: "puppalguda",
    name: "Puppalguda",
    clinicIsHere: true,
    seoTitle: "Paediatrician in Puppalguda",
    seoDescription:
      `Tiny Totz Kids Clinic is at ${address}. Call ${phone}. Consult Dr. Shilpa Reddy T, Monday to Saturday evenings.`,
    headline: "Paediatric care in Puppalguda",
    summary:
      `Tiny Totz Kids Clinic is at ${address}. Call ${phone}.`,
    sections: [
      {
        heading: "Finding the clinic",
        paragraphs: [
          `The address is ${address}. The clinic is inside DNS Business Hub, not a street-level shop. Call ${phone} if you need help finding C Block.`,
          `Evening consultations are published as ${hours}. Sunday is closed. If you are new to the building, call ${phone} when you arrive and the clinic can help you with the floor.`,
        ],
      },
      {
        heading: "What families come in for",
        paragraphs: [
          "Parents from Puppalguda book newborn checks, vaccinations, fever visits, growth reviews, and questions about cough, feeding, or development. Dr. Shilpa Reddy T is the consultant paediatrician and pediatric intensivist.",
          "Bring the child’s previous prescriptions and vaccination record when you have them. The visit is more useful when the history is in the room rather than remembered later.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where exactly is Tiny Totz Kids Clinic in Puppalguda?",
        answer:
          `The address is ${address}. Call ${phone}.`,
      },
      {
        question: "What time does the Puppalguda clinic open?",
        answer: `The published hours are ${hours}. Sunday is closed. Call or WhatsApp ${phone} to confirm a slot before you travel.`,
      },
    ],
  },
  {
    slug: "manikonda",
    name: "Manikonda",
    clinicIsHere: false,
    seoTitle: "Paediatrician for Families in Manikonda",
    seoDescription:
      "Families in Manikonda can consult Dr. Shilpa Reddy T at Tiny Totz Kids Clinic in Puppalguda. There is no Manikonda branch. Evening hours are Monday to Saturday.",
    headline: "Paediatric consultations for families from Manikonda",
    summary:
      "Tiny Totz Kids Clinic does not have a branch in Manikonda. Families who live in Manikonda are seen at the Puppalguda clinic in DNS Business Hub.",
    sections: [
      {
        heading: "One clinic, a short trip from Manikonda",
        paragraphs: [
          "Manikonda is a busy residential neighbourhood beside Puppalguda. Parents often look for a child specialist after school or after work, which is why the evening clinic is a practical option.",
          "The drive depends on traffic around the Manikonda junction and the approach to Puppalguda. Leave a little extra time for parking and for reaching the 2nd floor of C Block. If you are unsure of the building, WhatsApp the clinic before you start.",
        ],
      },
      {
        heading: "Visits families from Manikonda commonly book",
        paragraphs: [
          "The same services are available to every family: newborn care, vaccination guidance, illness consultations, growth and feeding reviews, and developmental questions. Living in Manikonda does not change the clinical visit. It only changes the journey.",
          "Book ahead. Walk-in time cannot be promised in a three-hour evening clinic, especially in school-term months when cough and fever visits cluster.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is there a Tiny Totz branch in Manikonda?",
        answer:
          `No. There is one clinic, at ${address}. Call ${phone}. Families from Manikonda travel there for consultations.`,
      },
      {
        question: "Can I book an evening visit after work in Manikonda?",
        answer: `Yes. Published hours are ${hours}. Call or WhatsApp ${phone} and ask for a time that works with your drive.`,
      },
    ],
  },
  {
    slug: "lanco-hills",
    name: "Lanco Hills",
    clinicIsHere: false,
    seoTitle: "Paediatric Care for Lanco Hills Families",
    seoDescription:
      "Parents from Lanco Hills visit Tiny Totz Kids Clinic in nearby Puppalguda for paediatric consultations with Dr. Shilpa Reddy T. The clinic is not inside Lanco Hills.",
    headline: "Child healthcare for families from Lanco Hills",
    summary:
      "Tiny Totz Kids Clinic is not inside Lanco Hills. It is nearby, at DNS Business Hub in Puppalguda, and families from Lanco Hills attend that clinic.",
    sections: [
      {
        heading: "Why Lanco Hills families use this clinic",
        paragraphs: [
          "Lanco Hills is a residential community close to Puppalguda. Parents looking for a paediatrician often want somewhere they can reach in the evening without crossing the city.",
          "The clinic’s published hours are after typical office time, Monday to Saturday. That suits a parent returning from the Financial District side who still wants the child seen the same day, when the child is well enough for a clinic rather than emergency care.",
        ],
      },
      {
        heading: "Planning the visit",
        paragraphs: [
          `The address is ${address}. Call ${phone}.`,
          "For a first vaccination or newborn visit, message the clinic with the child’s age so the appointment length is realistic. Do not assume a vaccine is given before the record is checked.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is the clinic located inside Lanco Hills?",
        answer:
          "No. The clinic is in Puppalguda at DNS Business Hub. Families living in Lanco Hills travel to that address.",
      },
      {
        question: "Which paediatric services can we book?",
        answer:
          "Newborn care, vaccination guidance, illness visits, nutrition and growth reviews, allergy and asthma concerns, and developmental questions are all arranged at the same Puppalguda clinic.",
      },
    ],
  },
  {
    slug: "khajaguda",
    name: "Khajaguda",
    clinicIsHere: false,
    seoTitle: "Paediatrician for Families near Khajaguda",
    seoDescription:
      "Tiny Totz Kids Clinic serves families from Khajaguda at its Puppalguda clinic. There is no Khajaguda branch. Dr. Shilpa Reddy T consults on Monday to Saturday evenings.",
    headline: "Paediatric visits for families from Khajaguda",
    summary:
      "There is no Tiny Totz Kids Clinic in Khajaguda. Families from Khajaguda are welcome at the Puppalguda clinic, a short local journey to DNS Business Hub.",
    sections: [
      {
        heading: "Khajaguda to Puppalguda",
        paragraphs: [
          "Khajaguda sits among the residential pockets between the outer ring areas and Puppalguda. Parents here often search for a child specialist who is close enough for a fever visit and consistent enough for vaccines and growth checks.",
          `Use one address only: ${address}. Call ${phone}.`,
        ],
      },
      {
        heading: "What to arrange before you leave Khajaguda",
        paragraphs: [
          "Confirm the time on WhatsApp or by phone. Evening slots run from 6:00 PM to 9:00 PM, Monday to Saturday. A confirmed time is kinder to a febrile child than a long wait.",
          "Carry a list of current medicines, including inhalers and fever syrups already given that day, with the times. That detail changes the consultation more than a general description does.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you have a clinic in Khajaguda?",
        answer:
          "No. Consultations happen only at Tiny Totz Kids Clinic in Puppalguda. Families from Khajaguda travel to DNS Business Hub.",
      },
      {
        question: "How do I book from Khajaguda?",
        answer: `Call or WhatsApp ${phone}, or send the appointment form. Mention that you are travelling from Khajaguda if you need help judging the timing.`,
      },
    ],
  },
  {
    slug: "narsingi",
    name: "Narsingi",
    clinicIsHere: false,
    seoTitle: "Paediatrician for Families in Narsingi",
    seoDescription:
      "Families in Narsingi visit Dr. Shilpa Reddy T at Tiny Totz Kids Clinic in Puppalguda for child healthcare. The clinic does not have a Narsingi location.",
    headline: "Child healthcare for families from Narsingi",
    summary:
      "Tiny Totz Kids Clinic is in Puppalguda, not in Narsingi. Families from Narsingi attend the DNS Business Hub clinic for paediatric consultations.",
    sections: [
      {
        heading: "Travelling from Narsingi",
        paragraphs: [
          "Narsingi lies along the western side of Hyderabad, towards the Outer Ring Road. The clinic is not on that road. It is in Puppalguda, so plan the trip as a drive into Puppalguda rather than a stop along the ORR.",
          "Evening traffic can add time. If your child has fast breathing, is unusually drowsy, or is having a seizure, do not spend that time travelling to a routine clinic. Use emergency care.",
        ],
      },
      {
        heading: "Care once you arrive",
        paragraphs: [
          "The consultation is with Dr. Shilpa Reddy T, consultant paediatrician and pediatric intensivist. Parents from Narsingi use the clinic for the same reasons as local families: newborn checks, vaccines, illness, allergies, growth, and development.",
          "There is no second branch to choose. Booking the Puppalguda clinic is the whole process. The published hours are Monday to Saturday, 6:00 PM to 9:00 PM.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Tiny Totz Kids Clinic in Narsingi?",
        answer:
          "No. The clinic is in Puppalguda at DNS Business Hub. Narsingi families are seen at that address.",
      },
      {
        question: "Where can I find a child specialist if I live in Narsingi?",
        answer:
          "One option is Tiny Totz Kids Clinic in neighbouring Puppalguda. Dr. Shilpa Reddy T provides paediatric consultations there. Call +91 7815933120 to book.",
      },
    ],
  },
  {
    slug: "kokapet",
    name: "Kokapet",
    clinicIsHere: false,
    seoTitle: "Paediatric Care for Families from Kokapet",
    seoDescription:
      "Parents from Kokapet can book Dr. Shilpa Reddy T at Tiny Totz Kids Clinic in Puppalguda. There is no Kokapet branch. Confirm the evening slot before travelling.",
    headline: "Paediatric appointments for families from Kokapet",
    summary:
      "Tiny Totz Kids Clinic does not sit in Kokapet. Families from Kokapet who choose this clinic travel to Puppalguda, to DNS Business Hub, for the consultation.",
    sections: [
      {
        heading: "A planned trip, not a local branch",
        paragraphs: [
          "Kokapet is further around the western residential belt than Manikonda or Puppalguda. It is still a journey many families make for a doctor they already know, especially for vaccines and follow-up, but it should be planned.",
          "Confirm the appointment before you leave. The clinic consults in a published evening window, 6:00 PM to 9:00 PM, Monday to Saturday. Arriving without a time at the end of clinic may mean the visit cannot be fitted in.",
        ],
      },
      {
        heading: "What the visit covers",
        paragraphs: [
          "The clinical work is the same as for a family next door to the clinic: assessment, explanation, and a plan when one is appropriate. Distance does not add a different set of services, and the clinic does not offer home visits as a published service.",
          "If you are comparing clinics closer to Kokapet, that is reasonable. Parents who still prefer this clinic usually do so because they want to continue with Dr. Shilpa Reddy T. Call the clinic if you want to know whether an evening slot is realistic for your drive.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is there a Tiny Totz clinic in Kokapet?",
        answer:
          "No. The only clinic is in Puppalguda. Families from Kokapet are seen there after booking.",
      },
      {
        question: "Should I confirm my slot before driving from Kokapet?",
        answer: `Yes. Message or call ${phone} so the evening time is held. The published hours are ${hours}.`,
      },
    ],
  },
];

export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}
