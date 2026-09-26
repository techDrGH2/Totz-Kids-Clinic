import { addressInline, clinic } from "@/lib/clinic";

export type BlogCategory =
  | "Newborn Care"
  | "Vaccination"
  | "Child Nutrition"
  | "Child Development"
  | "Common Childhood Illnesses"
  | "Parenting Guidance"
  | "Allergies & Asthma";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "faq"; items: { question: string; answer: string }[] };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  author: string;
  /** Set only after Dr. Shilpa Reddy T has actually reviewed the article. */
  medicalReview: { reviewer: string; reviewedOn: string } | null;
  publishedOn: string;
  updatedOn: string;
  image: {
    src: string;
    alt: string;
  };
  relatedServices: string[];
  blocks: BlogBlock[];
};

export const blogCategories: BlogCategory[] = [
  "Newborn Care",
  "Vaccination",
  "Child Nutrition",
  "Child Development",
  "Common Childhood Illnesses",
  "Parenting Guidance",
  "Allergies & Asthma",
];

function wordsIn(post: BlogPost) {
  const text = post.blocks
    .map((block) => {
      if (block.type === "ul") return block.items.join(" ");
      if (block.type === "faq") {
        return block.items.map((item) => `${item.question} ${item.answer}`).join(" ");
      }
      return block.text;
    })
    .join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

export function readingTime(post: BlogPost) {
  return `${Math.max(3, Math.round(wordsIn(post) / 200))} min read`;
}

export function postWordCount(post: BlogPost) {
  return wordsIn(post);
}

export const posts: BlogPost[] = [
  {
    slug: "preparing-for-a-newborn-paediatric-visit",
    title: "How to prepare for your newborn’s paediatric visit",
    description:
      "A practical guide for the first clinic visit with a newborn in Puppalguda: what to carry, what to notice at home, feeding notes, and which symptoms should not wait for an evening appointment.",
    category: "Newborn Care",
    author: "Tiny Totz Kids Clinic",
    medicalReview: null,
    publishedOn: "2026-09-24",
    updatedOn: "2026-09-26",
    image: {
      src: "/images/clinic/newborn-care-paediatrician-puppalguda.webp",
      alt: "Newborn care consultation at Tiny Totz Kids Clinic in Puppalguda, Hyderabad",
    },
    relatedServices: ["newborn-care", "child-vaccination", "well-child-visits"],
    blocks: [
      {
        type: "p",
        text: "A newborn paediatric visit is a planned checkup soon after you come home from the hospital or birth centre. It is used to review feeding, weight, colour, breathing comfort, and the questions that fill the first weeks. At Tiny Totz Kids Clinic in Puppalguda, Hyderabad, these visits usually fit into evening hours so working parents can attend without leaving a daytime job mid-shift.",
      },
      {
        type: "p",
        text: "Preparation matters because new parents are tired. Memory of feeds, nappies, and medicine times is unreliable by evening. A short written note helps Dr. Shilpa Reddy T understand the last twenty-four hours instead of reconstructing it from half-remembered details. This article is general parent education. It does not replace an examination of your baby.",
      },
      {
        type: "h2",
        text: "What should you bring to a newborn paediatric visit?",
      },
      {
        type: "p",
        text: "Bring papers and notes that show what has already happened, not only what worries you today. Hospital discharge summaries, vaccination cards, and a feed diary reduce guesswork. If another relative gave a dose of medicine earlier, write the name and time so doses are not repeated by accident.",
      },
      {
        type: "ul",
        items: [
          "Hospital discharge summary, if you were given one",
          "Vaccination record or a clear photo of it",
          "A note of feed times and approximate amounts for the last day",
          "Wet and soiled nappy counts for the last twenty-four hours",
          "Any medicines already given, with exact times",
          "Birth weight and any later weights written down",
          "Your questions, even the ones that feel small or embarrassing",
        ],
      },
      {
        type: "h2",
        text: "What does a newborn checkup usually cover?",
      },
      {
        type: "p",
        text: "A newborn checkup looks at how the baby is handling the early days. Feeding pattern, weight trend, jaundice colour, breathing, and alertness are common themes. The visit is also the right time to ask what is ordinary in the first weeks and what should trigger a same-day call. It is not a promise that every worry will be finished in one conversation.",
      },
      {
        type: "p",
        text: "Parents often ask whether breastfeeding is “enough,” whether formula is needed, or whether the baby’s sleep is a problem. Those answers depend on the baby in the room. A calm explanation of wet nappies, stool pattern, and latch comfort is often more useful than a generic internet checklist copied from another country.",
      },
      {
        type: "h2",
        text: "How can you track feeding and nappies at home?",
      },
      {
        type: "p",
        text: "Write the time of each feed and whether it was breast, expressed milk, or formula. Note approximate duration or volume when you know it. Count wet nappies and soiled nappies separately. If stool colour changes abruptly, or wet nappies become rare, bring that detail to the visit or call sooner if the baby also seems unusually sleepy.",
      },
      {
        type: "p",
        text: "Families in Puppalguda, Manikonda, Narsingi, and Kokapet often share caregiving across grandparents and parents. One shared note on the phone prevents conflicting stories about how much the baby drank. Consistency of the history is part of safe newborn care.",
      },
      {
        type: "h2",
        text: "Which newborn symptoms should not wait for an evening clinic?",
      },
      {
        type: "p",
        text: "Tiny Totz Kids Clinic publishes evening consultations Monday to Saturday, 6:00 PM to 9:00 PM, and is closed on Sunday. Those hours suit many planned newborn reviews. They are not a substitute for emergency care.",
      },
      {
        type: "ul",
        items: [
          "The baby is struggling to breathe, has chest indrawing, or looks blue",
          "The baby will not wake for feeds or is unusually limp",
          "There are very few wet nappies compared with earlier days",
          "The baby feels very hot or unusually cold to touch",
          "There is a seizure or repeated unusual jerking",
          "Yellow colour is deepening quickly, especially with poor feeding",
        ],
      },
      {
        type: "p",
        text: "If you are unsure whether the baby is stable enough for an evening appointment, call the clinic first. It is safer to be directed to urgent care early than to travel across Hyderabad with a baby who is deteriorating.",
      },
      {
        type: "h2",
        text: "How should parents prepare for traffic and timing in Hyderabad?",
      },
      {
        type: "p",
        text: `The clinic is at ${addressInline()}. Allow buffer time from Financial District, Nanakramguda, Lanco Hills, or Khajaguda in the evening. Call ${clinic.phoneDisplay} to confirm the slot before you leave. A hungry or overtired newborn is harder to examine calmly, so a feed plan for the journey helps.`,
      },
      {
        type: "h2",
        text: "What questions are worth writing down?",
      },
      {
        type: "ul",
        items: [
          "Is feeding on track for this baby’s age and birth weight?",
          "When should we return for the next weight check?",
          "Which vaccines are due next, and what records are needed?",
          "What jaundice signs should make us seek care the same day?",
          "How do we manage night feeds without arguing over conflicting advice at home?",
        ],
      },
      {
        type: "h2",
        text: "How do breastfeeding and formula questions usually get handled?",
      },
      {
        type: "p",
        text: "Parents often arrive with pressure from relatives to switch feeding methods overnight. A newborn visit can separate latch discomfort, low wet-nappy counts, and normal cluster feeding from true feeding failure. The plan depends on examination and history, not on a single neighbour’s story. Bring notes on how long feeds last and whether the baby seems satisfied afterward.",
      },
      {
        type: "p",
        text: "If pumping, write approximate volumes and times. If formula is already in use, bring the tin name and scoop method you follow. Mixed feeding is common; clarity helps the paediatrician advise without guessing what is in the bottle.",
      },
      {
        type: "h2",
        text: "What about jaundice, colour, and skin concerns in the first weeks?",
      },
      {
        type: "p",
        text: "Yellow colour can be common in newborns and still needs context: age in days, feeding, stool colour, and energy. Deepening jaundice with poor feeding should not wait for a convenient evening if the baby looks worse. Photos in natural light can help if colour seems to change through the day, but they do not replace an in-person look when you are worried.",
      },
      {
        type: "p",
        text: "Rashes are frequent too. Fleeting newborn rashes differ from widespread red marks with fever or illness behaviour. Describe when the rash started and whether it blanches. Do not apply multiple creams before the visit unless already prescribed; that can hide the pattern the doctor needs to see.",
      },
      {
        type: "p",
        text: "Write the answers from clinic in your own words before you leave. Two caregivers hearing the same plan reduces midnight conflict. This page cannot diagnose your newborn or guarantee a specific outcome.",
      },
      {
        type: "faq",
        items: [
          {
            question: "Can both parents come to the newborn visit?",
            answer:
              "Yes. It helps when two caregivers hear the feeding plan and the warning signs that should trigger a call.",
          },
          {
            question: "How soon after discharge should a newborn be seen?",
            answer:
              "Timing depends on birth history, feeding, and jaundice risk. Ask at discharge and book promptly. Do not wait for a convenient weekend if the baby is feeding poorly.",
          },
          {
            question: "Should I wake a sleeping newborn for the appointment?",
            answer:
              "Follow the doctor’s guidance for the visit. Many newborns feed and settle during the consultation. Bring a comfort item and a feed plan for the journey.",
          },
          {
            question: "Where is Tiny Totz Kids Clinic?",
            answer: `Tiny Totz Kids Clinic is at ${addressInline()}. Call ${clinic.phoneDisplay}. Hours: ${clinic.hours.summary}.`,
          },
          {
            question: "Is this article medical advice for my baby?",
            answer:
              "No. It is general education. Your newborn’s plan is decided after history and examination in clinic.",
          },
        ],
      },
    ],
  },
  {
    slug: "questions-before-a-vaccination-visit",
    title: "Questions worth asking before a vaccination visit",
    description:
      "What parents in Puppalguda and Hyderabad can clarify before a child vaccination appointment, without relying on an outdated printed schedule.",
    category: "Vaccination",
    author: "Tiny Totz Kids Clinic",
    medicalReview: null,
    publishedOn: "2026-09-24",
    updatedOn: "2026-09-26",
    image: {
      src: "/images/services/child-vaccination-puppalguda.webp",
      alt: "Child vaccination visit with a paediatrician at Tiny Totz Kids Clinic in Puppalguda, Hyderabad",
    },
    relatedServices: ["child-vaccination", "well-child-visits", "common-childhood-illnesses"],
    blocks: [
      {
        type: "p",
        text: "A vaccination visit is a preventive appointment where due doses are reviewed against your child’s age, health, and previous record. The smoothest visits start with the card in hand and specific questions written down. At Tiny Totz Kids Clinic in Puppalguda, immunisation guidance is planned for the individual child rather than copied from a one-size chart on a website.",
      },
      {
        type: "p",
        text: "Parents often arrive with screenshots from school groups or older printed schedules from another clinic. Those sources can be incomplete. The right plan depends on what was already given, whether doses were delayed by illness, and whether any medical reason requires a different timing. This guide helps you prepare. It does not replace a consultation with Dr. Shilpa Reddy T.",
      },
      {
        type: "h2",
        text: "Which questions should you ask during a vaccination visit?",
      },
      {
        type: "p",
        text: "Ask questions that force a clear plan for today and the next visit. Vague questions like “Is the schedule complete?” are harder to answer than “Which doses are due today, and which can wait?” Write the answers before you leave so grandparents and school forms get the same information.",
      },
      {
        type: "ul",
        items: [
          "Which doses are due today, and which can wait?",
          "What was missed, and is a catch-up plan appropriate?",
          "What is common after this vaccine, such as fever or a sore leg?",
          "Which symptoms should make me call or seek urgent care?",
          "When should the next vaccination visit be?",
          "Do we need to update the school or daycare record after today?",
        ],
      },
      {
        type: "h2",
        text: "Why does this website not publish a fixed vaccine chart?",
      },
      {
        type: "p",
        text: "Vaccination schedules are advised according to the child’s age, health status, and applicable paediatric recommendations. A chart printed for everyone becomes wrong for the child who started late, was unwell on a due date, or received doses elsewhere. Website charts also go out of date. Bring the vaccination card instead of relying on a screenshot.",
      },
      {
        type: "p",
        text: "If doses were given in another city or hospital, bring those records. Catch-up planning is safer when the history is complete. Guessing from memory increases the risk of repeating a dose unnecessarily or missing one that still matters.",
      },
      {
        type: "h2",
        text: "What if your child is unwell on vaccination day?",
      },
      {
        type: "p",
        text: "Call before you travel. A mild running nose may still allow the visit. A high fever, breathing difficulty, or a child who looks seriously unwell may mean vaccination should move. That decision belongs to the doctor who can hear how your child is today, not to a general article or a WhatsApp forward.",
      },
      {
        type: "p",
        text: "Tiny Totz Kids Clinic consults Monday to Saturday, 6:00 PM to 9:00 PM. If your child needs urgent illness care rather than a preventive vaccine slot, say so when you call so the visit type is clear.",
      },
      {
        type: "h2",
        text: "How can you prepare a nervous child for immunisation?",
      },
      {
        type: "p",
        text: "Honest, simple language helps older toddlers and school-age children. Say that a quick injection may sting briefly and that you will stay with them. Bring a comfort item. Avoid long scary stories from relatives in the waiting area. After the vaccine, follow the clinic’s advice on fever care and activity for the evening.",
      },
      {
        type: "p",
        text: "Families travelling from Manikonda, Kokapet, Financial District, or Narsingi should plan traffic buffer so the child is not exhausted before the visit. A calm child is easier to position safely for vaccination.",
      },
      {
        type: "h2",
        text: "What should you watch for after a vaccine?",
      },
      {
        type: "p",
        text: "Mild fever, fussiness, or soreness at the injection site can occur and are discussed in clinic for the specific vaccines given. Ask which symptoms are expected and which are not. Persistent inconsolable crying, difficulty breathing, a widespread rash with unwell behaviour, or a child who will not wake needs urgent care rather than waiting for the next evening slot.",
      },
      {
        type: "ul",
        items: [
          "Note the vaccine names written on the record before you leave",
          "Ask whether paracetamol guidance applies to this visit",
          "Keep the clinic phone number easy to find overnight",
          "Do not start leftover antibiotics “just in case” after a vaccine",
        ],
      },
      {
        type: "h2",
        text: "How does vaccination fit with well-child visits?",
      },
      {
        type: "p",
        text: `Vaccination days are often good moments to ask about growth, feeding, and development, if the child is well enough. If the evening queue is full of fever visits, ask specifically for a preventive slot. The clinic is at ${addressInline()}. Call ${clinic.phoneDisplay} to book.`,
      },
      {
        type: "h2",
        text: "What records should schools and daycares receive?",
      },
      {
        type: "p",
        text: "Many schools ask for an updated immunisation summary. Ask the clinic which doses were given today and whether a stamp or printed note is available. Photograph the card before laminating or filing it away. If a previous clinic used different brand names, keep both records together so catch-up planning stays accurate.",
      },
      {
        type: "p",
        text: "Do not rely on memory for admission forms. Incomplete forms delay school joining and lead to rushed vaccination decisions. A calm preventive visit is safer than a last-minute queue pressed by an admission deadline. If you are changing cities within Telangana or returning to Hyderabad after months away, gather every card before the first Puppalguda appointment so catch-up planning starts with facts.",
      },
      {
        type: "h2",
        text: "How should families handle conflicting advice from relatives?",
      },
      {
        type: "p",
        text: "Relatives sometimes discourage vaccines or recommend delaying everything until a child is “stronger.” Bring those concerns into the consultation as clear questions. A paediatrician can explain what is due, what can wait, and what should not be delayed without a medical reason. WhatsApp forwards are not a substitute for the child’s own record. If fear of fever after vaccination is the main worry, ask for a written after-care note before you leave the clinic.",
      },
      {
        type: "p",
        text: "This page is educational. It cannot choose doses for your child or guarantee that every vaccine reaction will be mild.",
      },
      {
        type: "faq",
        items: [
          {
            question: "Does Tiny Totz provide child vaccinations?",
            answer:
              "Yes. Immunisation and vaccination guidance are available at the Puppalguda clinic. The plan is made for the individual child after reviewing the record.",
          },
          {
            question: "Can I vaccinate if my child has a cold?",
            answer:
              "Sometimes yes, sometimes no. Call first and describe fever, breathing, and energy. The doctor decides based on how the child is that day.",
          },
          {
            question: "What if we missed vaccines while travelling?",
            answer:
              "Bring every record you have. A catch-up plan can be discussed in clinic. Do not restart a full schedule from memory without the card.",
          },
          {
            question: "Do you publish an online vaccine timetable?",
            answer:
              "No. Fixed website charts go out of date and do not fit every child. Bring the vaccination record to the appointment instead.",
          },
          {
            question: "Where do I book a vaccination visit?",
            answer: `Call ${clinic.phoneDisplay} or use the appointment page. Clinic hours are ${clinic.hours.summary}.`,
          },
        ],
      },
    ],
  },
  {
    slug: "talking-about-your-childs-growth",
    title: "How growth is discussed in a child health visit",
    description:
      "What paediatric growth monitoring covers at Tiny Totz Kids Clinic in Puppalguda, and when poor weight gain or a sudden change is worth booking.",
    category: "Child Nutrition",
    author: "Tiny Totz Kids Clinic",
    medicalReview: null,
    publishedOn: "2026-09-24",
    updatedOn: "2026-09-26",
    image: {
      src: "/images/clinic/paediatric-consultation-room-puppalguda.webp",
      alt: "Paediatric consultation room at Tiny Totz Kids Clinic in Puppalguda, Hyderabad",
    },
    relatedServices: ["child-nutrition", "well-child-visits", "obesity-puberty"],
    blocks: [
      {
        type: "p",
        text: "Growth monitoring in a child health visit is a review of weight, height, and how those numbers change over time for your child. It is not a single judgement based on one afternoon on a relative’s weighing scale. At Tiny Totz Kids Clinic in Puppalguda, growth is discussed as a pattern that includes feeding, recent illness, activity, and development.",
      },
      {
        type: "p",
        text: "Parents often come because clothes fit differently, school comments worried them, or family members compared the child with a cousin. A useful visit separates concern that needs medical review from noise that does not. This article explains how to prepare. It cannot diagnose the reason for poor weight gain or decide a diet plan online.",
      },
      {
        type: "h2",
        text: "What helps a growth conversation in clinic?",
      },
      {
        type: "p",
        text: "Bring earlier measurements whenever you have them. Hospital, previous clinic, and school health records help show the trend. Describe meals in plain language rather than perfect calorie counts. Mention recent diarrhoea, vomiting, poor drinking, or long fever weeks, because illness can stall weight temporarily.",
      },
      {
        type: "ul",
        items: [
          "Any previous clinic or hospital measurements",
          "A plain description of meals, milk, and snacks across a normal day",
          "Recent illness, especially repeated diarrhoea or poor drinking",
          "Whether mealtimes have become a daily battle",
          "Sleep pattern and school or preschool stress if relevant",
          "Your main question, stated simply: weight, height, appetite, or all three",
        ],
      },
      {
        type: "h2",
        text: "How is growth assessed without shaming the child?",
      },
      {
        type: "p",
        text: "Good paediatric growth talks are respectful. Older children and adolescents hear careful language. Crash diets, public weighing jokes, and sudden food bans recommended by relatives are not safe shortcuts. Dr. Shilpa Reddy T focuses on health, not on comparing siblings in the waiting room.",
      },
      {
        type: "p",
        text: "For younger children, appetite battles often mix medical and behavioural themes. The visit may look at portion patterns, milk volume, grazing on biscuits, and whether illness is interrupting intake. Not every picky eater needs a laboratory test on the first visit. Not every thin-looking child is underfed.",
      },
      {
        type: "h2",
        text: "When should you book a growth review?",
      },
      {
        type: "p",
        text: "Book a growth review if weight has stalled, clothes hang differently over months, or feeding is a daily source of fear. Also book a routine well-child visit even when growth seems fine. That visit is how a baseline is kept so future changes are easier to interpret.",
      },
      {
        type: "p",
        text: "Seek sooner review if weight loss is rapid, the child is drinking poorly, urine output drops, or fatigue is marked. Evening clinic hours suit many planned reviews, but urgent dehydration or breathing difficulty should not wait for a convenient Puppalguda slot.",
      },
      {
        type: "h2",
        text: "What about overweight concerns and puberty questions?",
      },
      {
        type: "p",
        text: "Concerns about excess weight or early puberty need a calm, age-appropriate discussion. Restrictive adult diet trends are not automatically suitable for growing children. A paediatric plan may involve food quality, activity, sleep, and follow-up rather than a sudden extreme programme.",
      },
      {
        type: "p",
        text: "If school bullying or body comments are part of the story, say so. Emotional context changes how advice is framed. Related services at the clinic include nutrition and growth visits and obesity or puberty concern reviews when those themes dominate.",
      },
      {
        type: "h2",
        text: "How do local families in Hyderabad west use growth visits?",
      },
      {
        type: "p",
        text: `Parents from Puppalguda, Manikonda, Narsingi, Kokapet, Khajaguda, and Lanco Hills often book evening appointments after school. The clinic is at ${addressInline()}. Call ${clinic.phoneDisplay}. Hours: ${clinic.hours.summary}. Ask for a growth or well-child slot so the visit is not absorbed into an acute fever queue.`,
      },
      {
        type: "h2",
        text: "What should you avoid doing based on online advice alone?",
      },
      {
        type: "ul",
        items: [
          "Do not start adult fat-loss powders or unverified supplements for a child",
          "Do not force large volumes of milk to “fix” thinness without guidance",
          "Do not skip meals as a weight plan for school-age children",
          "Do not ignore repeated vomiting or diarrhoea while only chasing calories",
        ],
      },
      {
        type: "h2",
        text: "How do illness weeks affect weight and height discussions?",
      },
      {
        type: "p",
        text: "A child who had repeated diarrhoea or long fever may temporarily flatten on the growth curve. That context belongs in the history. Bring dates of illness and any hospital notes. Chasing weight with force-feeding during recovery can create mealtime battles without solving the underlying issue.",
      },
      {
        type: "p",
        text: "After recovery, a follow-up measurement helps show whether catch-up is starting. One home-scale reading the week after a stomach illness is rarely enough to declare a long-term problem. Patterns across visits matter more than a single anxious afternoon. Families in Puppalguda and Manikonda often rebook two to four weeks later when illness has settled so the trend is clearer.",
      },
      {
        type: "h2",
        text: "What should caregivers agree on before the appointment?",
      },
      {
        type: "p",
        text: "If grandparents, parents, and a nanny all feed the child, write a shared list of what is offered between breakfast and bedtime. Conflicting stories waste consultation time. Agree on the main question before you enter: appetite, weight, height, or mealtime behaviour. Online charts and influencer tips cannot see your child’s trend line. Bring that shared list to Tiny Totz Kids Clinic so advice fits the real household, not an ideal day that never happens.",
      },
      {
        type: "p",
        text: "Growth decisions belong in clinic after history and measurement. Outcomes depend on the cause and are not guaranteed by any single visit. If you leave with a follow-up date, keep it-trends are clearer when measurements happen on the same clinic scale.",
      },
      {
        type: "faq",
        items: [
          {
            question: "Can poor weight gain be explained online?",
            answer:
              "No. It can come from intake, illness, absorption issues, or other medical causes. Assessment uses history and the growth trend in clinic.",
          },
          {
            question: "How often should growth be checked?",
            answer:
              "Newborns and infants are checked more often. Older children are reviewed at wider intervals, often with well-child or vaccination visits. Your paediatrician suggests the next interval.",
          },
          {
            question: "Should I put my child on a diet because a relative commented?",
            answer:
              "No. Book a proper review instead of starting a restrictive plan from family pressure. Growing children need careful, respectful guidance.",
          },
          {
            question: "Do you discuss picky eating?",
            answer:
              "Yes, within nutrition and growth visits. Bring a realistic description of what is eaten across a few days, not only the worst meal.",
          },
          {
            question: "Is one low reading on a home scale enough to panic?",
            answer:
              "One reading is not a full pattern. Trends across visits matter more. If the child is unwell or urine output is poor, seek care promptly rather than waiting for another scale reading.",
          },
        ],
      },
    ],
  },
  {
    slug: "what-happens-at-a-well-child-visit",
    title: "What happens at a well-child visit",
    description:
      "A parent’s guide to routine child health checkups in Puppalguda: growth, development, vaccines, sleep, and the questions worth saving for a visit when your child is well.",
    category: "Parenting Guidance",
    author: "Tiny Totz Kids Clinic",
    medicalReview: null,
    publishedOn: "2026-09-24",
    updatedOn: "2026-09-26",
    image: {
      src: "/images/clinic/clinic-exterior.webp",
      alt: "Tiny Totz Kids Clinic in Puppalguda, Hyderabad",
    },
    relatedServices: ["well-child-visits", "developmental-assessment", "child-vaccination"],
    blocks: [
      {
        type: "p",
        text: "A well-child visit is a planned paediatric checkup when your child is not acutely ill. It is where growth, development, feeding or school life, and prevention are given proper time. Sick visits focus on today’s fever or cough. Well visits protect the longer story of how your child is growing.",
      },
      {
        type: "p",
        text: "At Tiny Totz Kids Clinic in Puppalguda, Hyderabad, well-child appointments are especially useful in the evening for families balancing school and work. Dr. Shilpa Reddy T uses the visit to measure, listen, and answer the questions parents save for a calmer day. This guide explains what to expect. It is not a certificate that a child will never become ill.",
      },
      {
        type: "h2",
        text: "What is usually covered in a well-child visit?",
      },
      {
        type: "p",
        text: "Most well visits include growth measurements and a discussion of how those numbers compare with earlier visits. Development for age-movement, speech, play, and behaviour-is reviewed in a practical way. Sleep, feeding, and preschool or school life often appear in the same conversation. Vaccines due at that age are checked against the record.",
      },
      {
        type: "ul",
        items: [
          "Weight, height, and comparison with earlier measurements",
          "Development for age: movement, words, play, and behaviour",
          "Sleep, feeding, and school or preschool life",
          "Vaccines that are due, if any",
          "Vision or hearing concerns you have noticed at home",
          "Your questions, written down so they are not forgotten",
        ],
      },
      {
        type: "h2",
        text: "How is a well-child visit different from a sick visit?",
      },
      {
        type: "p",
        text: "A sick visit answers today’s illness. A well visit protects next month’s baseline. Mixing both in one rushed evening slot often short-changes prevention. If your child has high fever or breathing difficulty, that needs illness care or emergency pathways first. A well visit can be rebooked for another day.",
      },
      {
        type: "p",
        text: "Ask for a well-child appointment specifically when you book. That helps the clinic avoid squeezing a developmental conversation into a fever queue. Parents from Manikonda, Narsingi, Kokapet, and Financial District often prefer evening well visits after school pickup.",
      },
      {
        type: "h2",
        text: "How often should children have health checkups?",
      },
      {
        type: "p",
        text: "Newborns and young infants are seen more often because feeding and weight change quickly. Older children are reviewed at wider gaps, often near vaccination dates or school transitions. The next interval is suggested for your child during the visit rather than copied from a generic calendar online.",
      },
      {
        type: "p",
        text: "If development concerns appear between planned visits-lost skills, very limited eye contact, or speech that worries preschool teachers-do not wait for the next annual idea of a checkup. Book sooner and describe the concern clearly.",
      },
      {
        type: "h2",
        text: "What should you prepare before you arrive?",
      },
      {
        type: "ul",
        items: [
          "Vaccination card or a clear photo",
          "Previous growth numbers if you have them",
          "A short list of sleep, feeding, or school questions",
          "Notes from teachers if behaviour or attention is the theme",
          "Any medicines or supplements used regularly",
        ],
      },
      {
        type: "p",
        text: "Two caregivers attending helps when advice must be followed at home by more than one adult. Write the plan in plain language before you leave so WhatsApp forwards from relatives do not overwrite it overnight.",
      },
      {
        type: "h2",
        text: "What a well-child visit is not",
      },
      {
        type: "p",
        text: "It is not proof that a child will avoid every infection that season. It is not the right slot for a child who is struggling to breathe, having a seizure, or cannot be woken. Those situations need urgent care. Tiny Totz Kids Clinic is not an emergency department.",
      },
      {
        type: "p",
        text: `Published consultation time is Monday to Saturday, 6:00 PM to 9:00 PM. The clinic is at ${addressInline()}. Call ${clinic.phoneDisplay} to book a well-child visit and confirm before you travel across Hyderabad traffic.`,
      },
      {
        type: "h2",
        text: "How do vaccines and development fit into the same appointment?",
      },
      {
        type: "p",
        text: "When the child is well, vaccination review and developmental questions can share one visit. When the child is febrile or miserable, vaccine doses may be deferred and the developmental talk shortened. Honesty about how the child is today leads to a safer plan than forcing every agenda item into one evening.",
      },
      {
        type: "h2",
        text: "What development themes should parents mention early?",
      },
      {
        type: "p",
        text: "Mention lost skills, very limited eye contact, speech that worries teachers, or play that seems stuck compared with peers. Bring school notes if they exist. Early, specific examples help more than a vague sense that “something is off.” A well visit can start that conversation; a focused developmental follow-up may be needed later. Write two or three concrete examples from the past fortnight so the discussion stays practical.",
      },
      {
        type: "p",
        text: "Do not wait for an annual idea of a checkup if concerns are escalating. Book sooner and say that development is the reason for the visit so the slot is protected from an unrelated fever queue.",
      },
      {
        type: "h2",
        text: "How can parents use the visit to reduce conflicting home advice?",
      },
      {
        type: "p",
        text: "Write the agreed plan for sleep, feeding, screens, or school anxiety before you leave. Share it with every caregiver in the house. Related pages on this site cover vaccination, newborn care, nutrition and growth, and developmental concerns if one theme needs deeper follow-up later. Evening booking helps parents from Kokapet, Narsingi, and Financial District attend without missing a full workday.",
      },
      {
        type: "p",
        text: "This article remains general education and cannot replace an examination. Outcomes depend on the child’s condition and are not guaranteed by a single well-child visit. Bring your written questions so the evening appointment stays focused on what matters most to your family.",
      },
      {
        type: "faq",
        items: [
          {
            question: "How often should children have health checkups?",
            answer:
              "Newborns are seen more often. Older children are reviewed at wider gaps, often near vaccination dates. The next interval is suggested for your child during the visit.",
          },
          {
            question: "Can I combine vaccines with a well-child visit?",
            answer:
              "Often yes if the child is well. If fever or significant illness is present, vaccination timing may change. Ask when you book.",
          },
          {
            question: "Should I bring my child when they have a cold?",
            answer:
              "For a planned well visit, call first. A mild cold may still allow some discussion; a miserable febrile child may need a sick visit instead.",
          },
          {
            question: "What if I am worried about speech or behaviour?",
            answer:
              "Write examples from home and school. Book a visit focused on development rather than waiting for an annual idea of a checkup.",
          },
          {
            question: "How do I book at Tiny Totz Kids Clinic?",
            answer: `Call ${clinic.phoneDisplay} or use the appointment page. Ask specifically for a well-child slot. Hours: ${clinic.hours.summary}.`,
          },
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(new Date(`${iso}T00:00:00+05:30`));
}
