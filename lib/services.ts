export type ServiceIcon =
  | "stethoscope"
  | "syringe"
  | "baby"
  | "heart"
  | "apple"
  | "wind"
  | "scale"
  | "brain"
  | "activity";

export type ServiceFaq = { question: string; answer: string };

export type ServiceImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Service = {
  slug: string;
  title: string;
  navLabel: string;
  description: string;
  href: string;
  icon: ServiceIcon;
  eyebrow: string;
  summary: string;
  intro: string[];
  includes: string[];
  concerns: string[];
  whenToConsult: string[];
  expect: string[];
  faqs: ServiceFaq[];
  whatsappMessage: string;
  related: string[];
  seoTitle: string;
  seoDescription: string;
  image?: ServiceImage;
};

const sharedExpect = (focus: string) => [
  "A parent or caregiver stays with the child. You will be asked about symptoms, feeding, growth, medicines, and what has already been tried.",
  focus,
  "Findings are explained in everyday language. If a plan is appropriate, it is discussed with you, including what should prompt an earlier review or emergency care.",
  "The next step might be home guidance, a follow-up at this clinic, or advice to see another service. That decision depends on the child.",
];

export const services: Service[] = [
  {
    slug: "common-childhood-illnesses",
    title: "Common Childhood Illnesses",
    navLabel: "Common illnesses",
    description:
      "Consultations for fever, cough, cold, ear pain, vomiting, loose stools, and other everyday childhood illness.",
    href: "/services/common-childhood-illnesses",
    icon: "stethoscope",
    eyebrow: "Illness care",
    summary:
      "Tiny Totz Kids Clinic sees children for common illnesses such as fever, cough, cold, ear pain, vomiting, and loose stools. Dr. Shilpa Reddy T assesses the child and explains what to do next.",
    intro: [
      "Most childhood illnesses are familiar, and still unsettling when they happen in your own child. A paediatric consultation is a chance to sort out how unwell the child is and what needs attention now.",
      "Care at the clinic is based on the history you give and the examination. There is no promise of a same-day cure. Some illnesses settle with time and guidance. Others need closer follow-up.",
    ],
    includes: [
      "Fever, cough, and cold consultations",
      "Ear pain and throat complaints",
      "Vomiting, loose stools, and constipation",
      "Advice on warning signs to watch at home",
      "Follow-up when a child is not improving",
    ],
    concerns: [
      "Fever that is lasting or returning",
      "A cough that disturbs sleep or feeding",
      "Ear pulling with irritability",
      "Repeated loose stools or poor drinking",
      "A child who seems more tired than expected",
    ],
    whenToConsult: [
      "The illness is lasting longer than you expected, or it keeps coming back.",
      "Your child is drinking poorly, passing much less urine, or is unusually drowsy.",
      "There is fast breathing, chest indrawing, a rash with fever, or a seizure. Those need urgent care, not a wait for the evening clinic.",
    ],
    expect: sharedExpect(
      "The examination is matched to the complaint. For example, ears, throat, chest, and hydration may be checked when they are relevant.",
    ),
    faqs: [
      {
        question: "Can I bring my child for a fever consultation in the evening?",
        answer:
          "Yes, if your child is stable enough for an evening appointment. The clinic is open Monday to Saturday, 6:00 PM to 9:00 PM. If your child is limp, struggling to breathe, or not waking properly, go to emergency care instead of waiting.",
      },
      {
        question: "Will every cough need medicine?",
        answer:
          "No. Some coughs are watched, some need a specific plan, and a few need tests or referral. The decision is made after the child is seen. This page cannot choose a medicine for you.",
      },
    ],
    whatsappMessage:
      "Hello Tiny Totz Kids Clinic, I would like to book a consultation for my child’s illness.",
    related: ["child-allergy-asthma", "well-child-visits", "newborn-care"],
    seoTitle: "Childhood Illness Care in Puppalguda",
    seoDescription:
      "Paediatric consultations for fever, cough, cold, ear pain, vomiting and loose stools at Tiny Totz Kids Clinic, Puppalguda, with Dr. Shilpa Reddy T.",
    image: {
      src: "/images/services/common-illness-management.webp",
      alt: "Parent checking a toddler’s forehead for fever during childhood illness care at Tiny Totz Kids Clinic in Puppalguda, Hyderabad",
      width: 1024,
      height: 576,
    },
  },
  {
    slug: "child-vaccination",
    title: "Vaccination & Immunisation",
    navLabel: "Vaccination",
    description:
      "Age-appropriate immunisation guidance for infants, children, and adolescents, planned around the child’s health.",
    href: "/vaccination",
    icon: "syringe",
    eyebrow: "Prevention",
    summary:
      "Tiny Totz Kids Clinic provides child vaccination guidance and immunisation in Puppalguda. Vaccination schedules are advised according to the child’s age, health status and applicable pediatric recommendations.",
    intro: [
      "Vaccination is one of the most useful preventive visits in childhood. Parents often want to know which dose is due, what can wait, and how to prepare a nervous child.",
      "The clinic does not publish a fixed vaccine chart on this website. A chart goes out of date, and the right plan depends on the child’s age, health, and the doses already given. Bring the vaccination record if you have it.",
    ],
    includes: [
      "Review of vaccines already received",
      "Guidance on due and catch-up doses",
      "Immunisation during the consultation when appropriate",
      "Advice for the hours after a vaccine",
      "Planning the next visit",
    ],
    concerns: [
      "A missed or delayed dose",
      "Uncertainty about which vaccines are due",
      "A child who was unwell on the last vaccination date",
      "Questions before travel or school admission",
      "Worry about fever after a previous dose",
    ],
    whenToConsult: [
      "You are unsure what is due next, or the record has gaps.",
      "Your child is due for an infant, toddler, or school-age dose.",
      "Call ahead if your child has a high fever on the day. The visit may need to move.",
    ],
    expect: sharedExpect(
      "The record is reviewed first. Any vaccine given that day is explained, including common short-lived effects such as fever or a sore limb, and the signs that should make you call.",
    ),
    faqs: [
      {
        question: "Does Tiny Totz provide child vaccinations?",
        answer:
          "Yes. The clinic provides vaccination guidance and immunisation. The schedule is advised for the individual child. It is not a single list printed for every age.",
      },
      {
        question: "What should I bring to a vaccination visit?",
        answer:
          "Bring the vaccination card or any photos of it, a list of medicines, and your questions. A familiar comfort item can help younger children.",
      },
    ],
    whatsappMessage:
      "Hello Tiny Totz Kids Clinic, I would like to know more about child vaccination services.",
    related: ["newborn-care", "well-child-visits", "common-childhood-illnesses"],
    seoTitle: "Child Vaccination in Puppalguda",
    seoDescription:
      "Child vaccination and immunisation guidance in Puppalguda at Tiny Totz Kids Clinic. Schedules are advised for the child’s age and health with Dr. Shilpa Reddy T.",
    image: {
      src: "/images/services/child-vaccination.webp",
      alt: "Child receiving an arm vaccination during immunisation at Tiny Totz Kids Clinic in Puppalguda, Hyderabad",
      width: 1024,
      height: 682,
    },
  },
  {
    slug: "newborn-care",
    title: "Newborn Care",
    navLabel: "Newborn care",
    description:
      "Early checkups, feeding support, weight monitoring, jaundice assessment, and guidance for new parents.",
    href: "/newborn-care",
    icon: "baby",
    eyebrow: "First weeks",
    summary:
      "Tiny Totz Kids Clinic provides newborn care in Puppalguda, including checkups, feeding guidance, weight monitoring, jaundice assessment, and vaccination advice with Dr. Shilpa Reddy T.",
    intro: [
      "The first weeks with a newborn are full of small questions that feel large. A calm paediatric visit can sort feeding, weight, skin colour, sleep, and what is expected at this age.",
      "Parents are part of the consultation. Bring notes on feeds, wet nappies, and anything that has worried you since birth. Hospital discharge papers help when you have them.",
    ],
    includes: [
      "Newborn and early infancy checkups",
      "Feeding and breastfeeding support",
      "Weight monitoring",
      "Jaundice assessment",
      "Vaccination guidance",
      "A plan for the next review",
    ],
    concerns: [
      "Feeding that is taking too long or ending too quickly",
      "Fewer wet nappies than expected",
      "Increasing yellow colour of the skin or eyes",
      "Excessive sleepiness or a weak cry",
      "Questions about cord care, rashes, or stool colour",
    ],
    whenToConsult: [
      "You want a planned newborn checkup after coming home.",
      "Weight, feeding, or jaundice has been mentioned and you need a review.",
      "Seek urgent care the same day if a newborn is blue, struggling to breathe, very hot or cold, not waking to feed, or has a seizure. Do not wait for the evening clinic.",
    ],
    expect: sharedExpect(
      "Feeding, weight, and the newborn examination are discussed in a way parents can follow. Jaundice, if present, is assessed clinically and the need for a sooner review is made clear.",
    ),
    faqs: [
      {
        question: "Does Tiny Totz provide newborn care?",
        answer:
          "Yes. Newborn checkups, feeding guidance, breastfeeding support, weight monitoring, jaundice assessment, and vaccination guidance are part of care at the Puppalguda clinic.",
      },
      {
        question: "Can both parents attend?",
        answer:
          "Yes. A second caregiver is welcome. It helps when two people hear the feeding and follow-up plan.",
      },
    ],
    whatsappMessage:
      "Hello Tiny Totz Kids Clinic, I would like to know more about newborn care.",
    related: ["newborn-care", "child-vaccination", "child-nutrition"],
    seoTitle: "Newborn Care in Puppalguda",
    seoDescription:
      "Newborn checkups, feeding support, jaundice assessment and weight monitoring at Tiny Totz Kids Clinic in Puppalguda with Dr. Shilpa Reddy T.",
    image: {
      src: "/images/services/newborn-care.webp",
      alt: "Newborn baby resting on a soft blanket during newborn care at Tiny Totz Kids Clinic in Puppalguda, Hyderabad",
      width: 1024,
      height: 710,
    },
  },
  {
    slug: "well-child-visits",
    title: "Well-Child Visits",
    navLabel: "Well-child visits",
    description:
      "Routine checkups to follow growth, development, and preventive care when your child is well.",
    href: "/services/well-child-visits",
    icon: "heart",
    eyebrow: "Prevention",
    summary:
      "Well-child visits at Tiny Totz Kids Clinic are routine paediatric checkups for growth, development, and preventive care, including vaccination planning.",
    intro: [
      "A well-child visit is not only for illness. It is a planned look at how a child is growing, learning, eating, and coping with their stage of childhood.",
      "These visits also keep immunisation and the next checkup from drifting. Parents can raise a concern that did not feel urgent enough for a sick visit.",
    ],
    includes: [
      "Growth measurement and discussion",
      "Developmental questions matched to age",
      "Review of sleep, feeding, and daily routine",
      "Vaccination planning",
      "School and preschool readiness conversations when relevant",
    ],
    concerns: [
      "You are not sure the last checkup covered what it should",
      "A teacher or grandparent has mentioned a change",
      "You want a baseline before the school year",
      "Growth looks different from siblings",
      "You have questions you would rather not ask during a fever visit",
    ],
    whenToConsult: [
      "It has been a long gap since the last paediatric checkup.",
      "You want growth and development reviewed while your child is well.",
      "A sick visit is a better fit if there is a new fever, breathing trouble, or pain.",
    ],
    expect: sharedExpect(
      "Measurements are taken when appropriate and compared with the child’s own earlier record. You will be told what looks steady and what, if anything, needs a closer look.",
    ),
    faqs: [
      {
        question: "How often should my child have a health checkup?",
        answer:
          "Newborns are reviewed more often. Older infants, toddlers, and school-age children are seen at wider intervals, often alongside vaccination. The next date is suggested for your child rather than taken from a generic poster.",
      },
      {
        question: "Is a well-child visit useful if nothing seems wrong?",
        answer:
          "Yes. That is the point of the visit. It records growth, checks development for the age, and gives you a place to ask questions early.",
      },
    ],
    whatsappMessage:
      "Hello Tiny Totz Kids Clinic, I would like to book a well-child checkup.",
    related: ["child-nutrition", "developmental-assessment", "child-vaccination"],
    seoTitle: "Well-Child Visits in Puppalguda",
    seoDescription:
      "Routine child health checkups in Puppalguda for growth, development and preventive care at Tiny Totz Kids Clinic with Dr. Shilpa Reddy T.",
    image: {
      src: "/images/services/well-child-visits.webp",
      alt: "Paediatrician examining a young child’s throat during a well-child visit at Tiny Totz Kids Clinic in Puppalguda, Hyderabad",
      width: 1024,
      height: 683,
    },
  },
  {
    slug: "child-nutrition",
    title: "Nutrition & Growth",
    navLabel: "Nutrition & growth",
    description:
      "Growth reviews and practical feeding guidance for picky eating, faltering weight, and everyday nutrition questions.",
    href: "/nutrition-growth",
    icon: "apple",
    eyebrow: "Growth",
    summary:
      "Nutrition and growth consultations at Tiny Totz Kids Clinic look at a child’s measurements, intake, and health together. Advice is individual. It is not a generic diet plan from the internet.",
    intro: [
      "Parents usually notice growth at the table: a child who eats three foods, a toddler whose weight has slowed, or a school-age child whose appetite has changed.",
      "The clinic discusses nutrition in the context of age, growth, and health. Suggestions are practical for a household. They are not presented as a cure for an unrelated illness.",
    ],
    includes: [
      "Growth measurement and trend review",
      "Discussion of meals, milk, and snacks",
      "Picky eating and food refusal",
      "Concerns about low or rapid weight gain",
      "Guidance on what to review next",
    ],
    concerns: [
      "Weight or height that seems to have stalled",
      "A very limited set of accepted foods",
      "Excess juice, milk, or packaged snacks crowding out meals",
      "Tiredness or pallor you want assessed",
      "Uncertainty about portions for age",
    ],
    whenToConsult: [
      "Growth has changed over more than one month, or clothes have become clearly loose or tight.",
      "Mealtimes have become a daily conflict.",
      "Pair this visit with urgent care if there is dehydration, persistent vomiting, or a child who is too weak to drink.",
    ],
    expect: sharedExpect(
      "You will be asked what a usual day of eating looks like, not a perfect day. Suggestions are tied to that picture and to the growth chart.",
    ),
    faqs: [
      {
        question: "When should I worry about poor weight gain?",
        answer:
          "Ask for a review if weight has stopped rising as expected, feeding is a struggle, or your child seems less energetic. The cause is sorted out in clinic. It should not be guessed from a webpage.",
      },
      {
        question: "Do you give a printed diet for every child?",
        answer:
          "No. Feeding advice follows the child’s age, growth, and what the family can actually do. A single printed diet would not fit every child.",
      },
    ],
    whatsappMessage:
      "Hello Tiny Totz Kids Clinic, I would like to discuss my child’s growth and nutrition.",
    related: ["newborn-care", "well-child-visits", "obesity-puberty"],
    seoTitle: "Child Nutrition and Growth in Puppalguda",
    seoDescription:
      "Growth monitoring and child nutrition guidance in Puppalguda at Tiny Totz Kids Clinic. Consult Dr. Shilpa Reddy T about feeding, weight and everyday meals.",
    image: {
      src: "/images/services/nutrition-assessment.webp",
      alt: "Healthy baby with fresh fruits illustrating child nutrition and growth care at Tiny Totz Kids Clinic in Puppalguda, Hyderabad",
      width: 1024,
      height: 564,
    },
  },
  {
    slug: "child-allergy-asthma",
    title: "Allergies & Asthma",
    navLabel: "Allergies & asthma",
    description:
      "Assessment of wheezing, recurrent cough, dust and food concerns, and a plan parents can follow.",
    href: "/allergies-asthma",
    icon: "wind",
    eyebrow: "Breathing & allergy",
    summary:
      "Tiny Totz Kids Clinic assesses childhood wheezing, recurrent cough, and allergy concerns. A plan is discussed after the child is examined. This is not an emergency service for severe breathing difficulty.",
    intro: [
      "Repeated cough, night-time wheeze, and itchy skin or eyes are common reasons families ask for a paediatric review in Hyderabad’s dusty months and during weather changes.",
      "The aim is to understand the pattern: infection, allergy, asthma, or something else. Medicines and inhalers, when they are appropriate, are explained so a parent knows what they are for. Doses are never taken from this page.",
    ],
    includes: [
      "History of cough, wheeze, and triggers",
      "Clinical assessment of breathing concerns",
      "Discussion of dust, weather, and food-related symptoms",
      "Inhaler technique when a device is part of care",
      "A written or clearly explained follow-up plan when needed",
    ],
    concerns: [
      "Cough that returns every few weeks",
      "Wheeze with running, laughing, or at night",
      "Family worry about asthma",
      "Hives, swelling, or a suspected food reaction",
      "School absences because of breathing trouble",
    ],
    whenToConsult: [
      "The same cough or wheeze keeps returning after ordinary colds.",
      "You have been given an inhaler and want the plan reviewed.",
      "Go to emergency care if your child is breathing fast, unable to speak in sentences, sucking in at the chest, or turning blue. Do not wait for a clinic slot.",
    ],
    expect: sharedExpect(
      "Trigger patterns and previous treatments are reviewed. If an inhaler is advised, the technique is shown. You should leave knowing which symptoms mean come back and which mean emergency care.",
    ),
    faqs: [
      {
        question: "Do you see children with asthma and wheezing?",
        answer:
          "Yes. Wheezing and asthma concerns are assessed at the clinic, and a follow-up plan can be discussed. Severe breathing difficulty is an emergency and should not wait for the evening appointment.",
      },
      {
        question: "Can food allergy be confirmed from a description alone?",
        answer:
          "A description helps, but it is not a diagnosis. The consultation decides whether observation, avoidance advice, or further assessment is appropriate. Do not start strict diets for a child without that discussion.",
      },
    ],
    whatsappMessage:
      "Hello Tiny Totz Kids Clinic, I would like to know more about allergy and asthma care for my child.",
    related: ["common-childhood-illnesses", "well-child-visits", "newborn-care"],
    seoTitle: "Child Allergy and Asthma Care in Puppalguda",
    seoDescription:
      "Paediatric care for childhood wheezing, recurrent cough and allergy concerns at Tiny Totz Kids Clinic in Puppalguda with Dr. Shilpa Reddy T.",
    image: {
      src: "/images/services/allergies-asthma.webp",
      alt: "Young child with allergy symptoms during paediatric allergy and asthma care at Tiny Totz Kids Clinic in Puppalguda, Hyderabad",
      width: 724,
      height: 483,
    },
  },
  {
    slug: "obesity-puberty",
    title: "Obesity & Puberty Concerns",
    navLabel: "Weight & puberty",
    description:
      "Respectful consultations for weight concerns and puberty questions in older children and adolescents.",
    href: "/services/obesity-puberty",
    icon: "scale",
    eyebrow: "Older children",
    summary:
      "Older children and adolescents can be seen for weight concerns and puberty questions. The conversation is private, practical, and free of blame.",
    intro: [
      "Weight and puberty are sensitive subjects. Children pick up shame quickly, so these consultations are handled quietly and with the young person included in an age-appropriate way.",
      "The clinic looks at growth over time, health, mood, and daily habits. There is no promise of a target weight or a fixed timeline for puberty. The goal is a safe next step.",
    ],
    includes: [
      "Growth and weight trend review",
      "Discussion of meals, activity, and sleep",
      "Puberty questions from the child or parent",
      "Attention to mood and school stress when they come up",
      "Follow-up rather than a single lecture",
    ],
    concerns: [
      "Rapid weight gain or worry about weight",
      "Puberty that seems early or delayed to the family",
      "Period questions in older girls",
      "Teasing or avoidance of sport",
      "A child who does not want to talk about weight at home",
    ],
    whenToConsult: [
      "You want a private medical conversation rather than advice from relatives.",
      "Weight or puberty is affecting mood, school, or health.",
      "Seek urgent care for fainting, severe abdominal pain, or a young person who may be in immediate danger.",
    ],
    expect: sharedExpect(
      "Part of the visit may be with the parent, and part may give the older child room to speak. Advice is specific and respectful. Crash diets are not recommended from this page or in clinic as a shortcut.",
    ),
    faqs: [
      {
        question: "Will my child be blamed for their weight?",
        answer:
          "No. The conversation is about health, growth, and what the family can change together. Blame does not help a child follow a plan.",
      },
      {
        question: "Can puberty timing be judged online?",
        answer:
          "No. Families notice different things at different ages. A consultation can say whether a review, reassurance, or referral is appropriate.",
      },
    ],
    whatsappMessage:
      "Hello Tiny Totz Kids Clinic, I would like to book a consultation about my child’s growth.",
    related: ["child-nutrition", "well-child-visits", "developmental-assessment"],
    seoTitle: "Child Weight and Puberty Concerns in Puppalguda",
    seoDescription:
      "Respectful paediatric consultations for weight and puberty concerns at Tiny Totz Kids Clinic in Puppalguda with Dr. Shilpa Reddy T.",
    image: {
      src: "/images/services/obesity-puberty.webp",
      alt: "Child standing on a weight scale during obesity and puberty consultation at Tiny Totz Kids Clinic in Puppalguda, Hyderabad",
      width: 590,
      height: 393,
    },
  },
  {
    slug: "developmental-assessment",
    title: "Developmental Concerns",
    navLabel: "Development",
    description:
      "A careful look at milestones, speech, movement, and behaviour when parents are unsure.",
    href: "/developmental-care",
    icon: "brain",
    eyebrow: "Development",
    summary:
      "Developmental concerns can be discussed at Tiny Totz Kids Clinic. The visit looks at milestones for the child’s age and whether further assessment or referral should be considered.",
    intro: [
      "Parents often compare children and then wish they had not. A developmental visit replaces that worry with a structured conversation about what the child can do now.",
      "The clinic does not label a child from a website checklist. Some differences are within a wide normal range. Some need monitoring. Some need another professional. The visit is how that distinction starts.",
    ],
    includes: [
      "Discussion of movement, speech, social skills, and play",
      "Age-appropriate observation during the visit",
      "Review of hearing, birth history, and earlier concerns when relevant",
      "Guidance for what to practise or watch at home",
      "Discussion of referral if a specialist assessment is appropriate",
    ],
    concerns: [
      "Not yet sitting, walking, or using words at the age you expected",
      "Loss of a skill the child had before",
      "Little eye contact or response to name",
      "Very limited play or extreme frustration",
      "School feedback about attention or learning",
    ],
    whenToConsult: [
      "A skill seems late, or a skill has been lost.",
      "You have been told to wait and see, and you want a paediatric view.",
      "Loss of consciousness, a new weakness, or a seizure needs urgent assessment, not a routine development slot.",
    ],
    expect: sharedExpect(
      "You will be asked for examples from home, not only yes-or-no answers. If referral is suggested, the reason is explained. A single visit does not complete every developmental evaluation.",
    ),
    faqs: [
      {
        question: "Do you monitor developmental milestones?",
        answer:
          "Yes. Milestone questions are part of care at the clinic, including speech, movement, and social development. Further assessment is discussed when the history suggests it is needed.",
      },
      {
        question: "Should I wait until the next birthday to ask?",
        answer:
          "No. If you are worried, especially about lost skills, ask now. Waiting for a round age is not required.",
      },
    ],
    whatsappMessage:
      "Hello Tiny Totz Kids Clinic, I would like to discuss my child’s development.",
    related: ["well-child-visits", "seizure-developmental-care", "newborn-care"],
    seoTitle: "Child Development Concerns in Puppalguda",
    seoDescription:
      "Developmental discussions for speech, movement and milestones at Tiny Totz Kids Clinic in Puppalguda with paediatrician Dr. Shilpa Reddy T.",
    image: {
      src: "/images/services/developmental-concerns.webp",
      alt: "Young child with learning materials during developmental assessment at Tiny Totz Kids Clinic in Puppalguda, Hyderabad",
      width: 1006,
      height: 575,
    },
  },
  {
    slug: "seizure-developmental-care",
    title: "Seizure Evaluation",
    navLabel: "Seizure concerns",
    description:
      "Medical assessment of suspected seizures or blank spells, with clear advice on emergency care.",
    href: "/services/seizure-developmental-care",
    icon: "activity",
    eyebrow: "Episodes & spells",
    summary:
      "Suspected seizures should be assessed by a doctor. Tiny Totz Kids Clinic can review episodes that have settled. An active seizure, trouble breathing, or a child who is unresponsive needs emergency care immediately.",
    intro: [
      "A jerk, a blank stare, or a collapse is frightening, and families are often unsure whether it was a seizure. A consultation can take the history carefully, including a phone video if you have one and it is safe to have recorded.",
      "This clinic is not an emergency department. If a child is seizing now, struggling to breathe, injured, or not waking, call emergency services or go to the nearest emergency department. Do not put anything in the child’s mouth.",
    ],
    includes: [
      "History of the episode and what happened before and after",
      "Review of fever, development, and family concerns",
      "Examination appropriate to the history",
      "Discussion of whether urgent tests or referral are needed",
      "Advice on what to do if another episode occurs",
    ],
    concerns: [
      "A witnessed jerking episode",
      "Blank spells or unresponsiveness",
      "A seizure with fever",
      "Repeated episodes",
      "Uncertainty after a hospital visit",
    ],
    whenToConsult: [
      "An episode has ended and you need a paediatric review of what happened.",
      "You were discharged from emergency care and need follow-up.",
      "During an active seizure, first protect the child from injury, do not put anything in the mouth, and get emergency help.",
    ],
    expect: sharedExpect(
      "Timing, colour, movements, and recovery are the most useful details. You will be told whether this can be followed at the clinic or needs a hospital pathway. Not every twitch is a seizure, and not every seizure has the same plan.",
    ),
    faqs: [
      {
        question: "Should I come to the clinic during a seizure?",
        answer:
          "No. An active seizure needs emergency care. Come to the clinic for assessment after the child has recovered, or when a doctor has asked you to follow up.",
      },
      {
        question: "Is a video useful?",
        answer:
          "A short video can help the doctor see the movement, if it was safe to record. Stay with the child and get emergency help when the episode is still happening.",
      },
    ],
    whatsappMessage:
      "Hello Tiny Totz Kids Clinic, I would like to book a follow-up consultation after a suspected seizure.",
    related: ["developmental-assessment", "common-childhood-illnesses", "well-child-visits"],
    seoTitle: "Seizure Concerns in Children, Puppalguda",
    seoDescription:
      "Paediatric review of suspected seizures after the episode has settled, at Tiny Totz Kids Clinic in Puppalguda. Active seizures need emergency care.",
    image: {
      src: "/images/services/seizures-development.webp",
      alt: "Parent comforting a child in bed after a concerning episode, seizure evaluation support at Tiny Totz Kids Clinic in Puppalguda, Hyderabad",
      width: 1024,
      height: 682,
    },
  },
];

const bySlug = new Map(services.map((service) => [service.slug, service]));

export function getService(slug: string) {
  return bySlug.get(slug);
}

export function requireService(slug: string) {
  const service = getService(slug);
  if (!service) {
    throw new Error(`Missing service: ${slug}`);
  }
  return service;
}

export function relatedServices(service: Service) {
  return service.related
    .map((slug) => bySlug.get(slug))
    .filter((item): item is Service => Boolean(item));
}

export function servicePath(slug: string) {
  return getService(slug)?.href ?? "/services";
}
