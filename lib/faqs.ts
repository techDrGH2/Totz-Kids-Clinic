import { addressInline, clinic } from "@/lib/clinic";
import { doctor } from "@/lib/doctor";

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "Who is the paediatrician at Tiny Totz Kids Clinic?",
    answer:
      "Dr. Shilpa Reddy T is the consultant paediatrician and pediatric intensivist at Tiny Totz Kids Clinic. Her qualifications, as published by the clinic, are MBBS, DNB Pediatrics and IDPCCM.",
  },
  {
    question: "When should my child see a paediatrician?",
    answer:
      "Book a visit for persistent fever, breathing difficulty, poor feeding, poor weight gain, repeated illness, or a developmental concern. Also come for newborn checks, vaccinations, and routine health visits even when your child seems well. If your child is hard to wake, struggling to breathe, or having a seizure, seek emergency care first.",
  },
  {
    question: "Do you provide child vaccinations?",
    answer:
      "Yes. Tiny Totz Kids Clinic provides vaccination guidance and immunisation for children. Vaccination schedules are advised according to the child’s age, health status and applicable pediatric recommendations. A fixed schedule is not published on this website.",
  },
  {
    question: "Do you provide newborn care?",
    answer:
      "Yes. Newborn care at the clinic includes checkups, feeding and breastfeeding guidance, weight monitoring, jaundice assessment, and vaccination advice. Call promptly if a newborn is feeding poorly, very sleepy, or looking more yellow.",
  },
  {
    question: "Can you help with feeding problems?",
    answer:
      "Yes. Parents can discuss breastfeeding, bottle feeding, weaning, and a child who is refusing feeds. The consultation looks at growth and the feeding history. It does not replace urgent care if a baby is dehydrated or too sleepy to feed.",
  },
  {
    question: "Can you help with frequent cough and cold?",
    answer:
      "Yes. Frequent cough and cold can be assessed at the clinic. The visit looks for infection, allergy, asthma, or another cause that needs a different plan. One visit does not promise that the cough will stop immediately.",
  },
  {
    question: "Do you manage childhood allergies and asthma?",
    answer:
      "Yes. Dust allergy, food concerns, wheezing, and recurrent cough can be discussed with Dr. Shilpa Reddy T. Care is planned around the child’s history and examination. Emergency breathing difficulty needs urgent medical care, not a routine evening slot.",
  },
  {
    question: "When should I be concerned about poor weight gain?",
    answer:
      "Ask for a growth review if weight has stalled, clothes are getting looser, or feeding has become a daily struggle. The clinic plots growth and talks through feeding, illness, and next steps. Poor weight gain has many causes, so the visit is an assessment, not a diagnosis made online.",
  },
  {
    question: "Do you monitor developmental milestones?",
    answer:
      "Yes. Developmental questions are part of paediatric care here, including movement, speech, social interaction, and behaviour. If a concern needs a specialist assessment, that can be discussed during the visit.",
  },
  {
    question: "How often should children have health checkups?",
    answer:
      "Newborns are usually seen more often in the early weeks. After that, well-child visits are spaced through infancy, the toddler years, and school age, and are also timed with vaccination visits. Dr. Shilpa Reddy T can suggest the next interval for your child.",
  },
  {
    question: "Where is Tiny Totz Kids Clinic located?",
    answer:
      `${clinic.name} is at ${addressInline()}. Call ${clinic.phoneDisplay}. It is one clinic. Families also travel from Manikonda, Narsingi, Kokapet, and nearby neighbourhoods.`,
  },
  {
    question: "Is there a paediatrician near Puppalguda, Hyderabad?",
    answer:
      `Yes. ${doctor.name} consults at ${clinic.name} in Puppalguda, Hyderabad (${addressInline()}). Evening appointments run ${clinic.hours.summary}. Call ${clinic.phoneDisplay} to book.`,
  },
  {
    question: "How can I book an appointment?",
    answer:
      `Call ${clinic.phoneDisplay}, or use the appointment form on this website. The clinic is at ${addressInline()}. The form collects a preferred time. Until an online booking system is connected, the clinic confirms the visit by phone or WhatsApp. Consultations are published as Monday to Saturday, 6:00 PM to 9:00 PM.`,
  },
];

export function faqByQuestion(question: string) {
  return faqs.find((item) => item.question === question);
}
