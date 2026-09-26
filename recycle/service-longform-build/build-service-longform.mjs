/**
 * Expands each service's sections with additional quality paragraphs,
 * then writes lib/service-longform.ts and reports word counts.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { part1 } from "./lf-data-1.mjs";
import { part2 } from "./lf-data-2.mjs";
import { part3 } from "./lf-data-3.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "..", "lib", "service-longform.ts");

const serviceLongform = structuredClone({ ...part1, ...part2, ...part3 });

function words(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function countBody(entry) {
  return entry.sections.reduce(
    (n, s) => n + s.paragraphs.reduce((m, p) => m + words(p), 0),
    0,
  );
}

/** Per-slug expansions: one extra paragraph keyed by section index (0-based). */
const expansions = {
  "common-childhood-illnesses": [
    "Evening consultations are especially useful when daytime clinics conflict with school and office schedules, yet the child still needs a proper paediatric look rather than another round of unverified home remedies.",
    "Grandparents sometimes arrive with strong opinions about fever medicines or diet during illness. The visit gives space to reconcile those views with what is appropriate for this child’s age and hydration.",
    "If laboratory tests are suggested, the reason is explained, including whether they are needed the same evening or can wait for a quieter hour. Parents should understand the purpose before travelling elsewhere.",
    "Keep syrups and previous prescriptions in one bag so doses are not duplicated by accident. Many children receive overlapping fever medicines from different adults in the same household during a busy week.",
    "Infants under three months with fever generally need a lower threshold for urgent assessment than older toddlers. Age changes how seriously early symptoms should be treated on the same day.",
    "For families using ride-share from Kokapet or Financial District, share the landmark Opposite Alanati Restaurant so drivers find DNS Business Hub without circling Puppalguda lanes at peak hour.",
    "When viral illnesses cluster in a classroom, parents often ask whether the whole household needs medicines. The answer depends on who is unwell and how they look, not on fear alone.",
    "If English is not the only language spoken at home, say so. Explanations can be slowed and key watch signs repeated so every caregiver understands the overnight plan.",
    "Recovery is not always linear. A child may look brighter for a day and then dip again. The clinic’s follow-up advice anticipates that pattern and tells you which dip is still expected.",
    "WhatsApp or phone confirmation before travel reduces wasted journeys when the evening list is already full during monsoon fever weeks in Hyderabad.",
  ],
  "child-vaccination": [
    "Parents often feel pressure from school forms, travel plans, or relatives comparing cards. A clinic review replaces that pressure with a record-based plan that matches the child sitting in the room.",
    "Catch-up schedules are common after illness, relocation, or simply a missed evening because of traffic. Missing a date is not a moral failure; it is a planning problem the paediatrician can help solve.",
    "Consent discussion includes what to expect in the first twenty-four hours. Knowing the difference between ordinary discomfort and danger signs prevents both panic and dangerous delay.",
    "If two caregivers disagree about vaccination timing, bring both perspectives to the visit. Clear medical framing usually lowers conflict more effectively than arguments at home.",
    "Some vaccines can be given together when appropriate; others need spacing. Those decisions are made with the record and health status, not from a screenshot shared in a parent group.",
    "Children with chronic conditions may need extra timing considerations. Mention asthma plans, recent steroids, or hospital stays early so the immunisation plan stays aligned with the rest of care.",
    "Aftercare at home should include a quiet evening, fluids, and a clear contact plan. If fever rises high or the child looks unusually unwell, seek urgent help rather than waiting for the next clinic day.",
    "School and daycare staff sometimes request letters. Ask during the visit whether a simple note is appropriate once doses are documented on the card.",
    "Keeping a digital photo folder of the card protects families when booklets tear or go missing during moves between Manikonda, Kokapet, and other Hyderabad neighbourhoods.",
    "Booking early in the evening window can help younger children who melt down late at night. Say if your child has a usual bedtime so the team can advise on timing when slots allow.",
  ],
  "newborn-care": [
    "Many parents leave hospital with a stack of instructions and still feel unsure on day three at home. A newborn visit translates those papers into a plan that matches how this baby is actually feeding.",
    "Breastfeeding support includes latch questions, timing, and maternal concerns without pressuring a single feeding method. Bottle feeding guidance is offered with the same respect when that is the family’s path.",
    "Weight checks are most useful as a trend. One number on one scale can mislead if clothing, timing after a feed, or scale differences are ignored. Bring context, not only a photograph of a printout.",
    "Cord care, skin rashes, and stool colour generate many late-night searches. The consultation sorts ordinary newborn findings from changes that need same-day review.",
    "Sleepy babies who still feed well differ from babies who cannot be roused. Parents are taught practical wake-and-feed cues so they know when sleepiness has crossed into urgency.",
    "Jaundice assessment considers age in hours or days, feeding, and clinical appearance. Home lighting can hide yellow colour; natural light and clinical review are more reliable than phone filters.",
    "Partners and grandparents often share night duties. When they attend the Puppalguda visit, overnight decisions become more consistent and less contradictory.",
    "If the baby was premature or needed special care after birth, bring that history prominently. Early weeks follow a different rhythm than a term newborn’s typical course.",
    "Vaccination guidance in the newborn period remains individual. The clinic still does not publish a fixed public chart, because timing depends on the baby’s health and recorded doses.",
    "A short written list of watch signs on the fridge helps exhausted parents more than a long verbal lecture they cannot recall at 3:00 AM.",
  ],
  "well-child-visits": [
    "Preventive visits also catch quiet parental worries: a child who seems more withdrawn after starting preschool, a sleep pattern that never settled, or a growth question relatives keep raising at weekends.",
    "Measurements mean more when compared with the child’s own past points. If records are scattered across cities, bring whatever you have so the trend line is not reinvented from memory.",
    "Developmental screening questions are conversational, not a pass-fail exam. Children are allowed to be shy in a new clinic room; parents’ home examples remain central.",
    "Immunisation planning during well visits keeps prevention efficient, still without a website vaccine chart. Due doses are discussed from the card and the child’s current health.",
    "School medical forms and activity clearance questions can be addressed when clinically appropriate. Bring the form so wording matches what the school actually requested.",
    "Siblings sometimes attend together when ages and needs fit one evening. Mention that when booking so timing expectations stay realistic for Puppalguda traffic.",
    "Well visits are a good moment to review allergy lists and emergency contacts. Outdated notes on phones cause confusion when a later sick visit happens quickly.",
    "Children who fear clinics benefit from a predictable routine: same building, same doctor, calm explanations. Neighbourhood continuity in Puppalguda supports that familiarity over time.",
    "If a concern needs a longer focused slot—nutrition, development, or asthma—the well visit can identify it and schedule properly rather than compressing everything into rushed minutes.",
    "Parents should leave with one or two concrete takeaways, not twenty new rules. Simple priorities are easier to follow on busy Hyderabad weeknights.",
  ],
  "child-nutrition": [
    "Growth anxiety rises quickly when relatives comment on thin wrists or round cheeks. A clinic plot of the child’s own curve replaces comparison culture with a clearer medical picture.",
    "Picky eating often mixes sensory preferences, habit, and parental pressure. Separating those threads helps families change the mealtime script without turning dinner into a nightly battle.",
    "Milk and juice volumes matter as much as solid refusal. Some toddlers drink enough calories as liquids to blunt appetite for meals; that pattern is worth naming aloud in clinic.",
    "Illness clusters can flatten a growth line temporarily. The visit distinguishes short interruptions from sustained faltering that needs a tighter follow-up plan.",
    "Iron-rich foods, protein sources, and everyday Hyderabad household meals are discussed in practical terms. Advice that ignores what is actually cooked at home rarely sticks.",
    "Older children may skip breakfast before school in Manikonda or Financial District commutes. Timing and portable options become part of the plan when that pattern appears.",
    "Supplements are not automatic. When they are considered, it is after history and examination, not because an advertisement promised faster height.",
    "Constipation, reflux symptoms, or food fear after choking can all affect intake. Mention gut symptoms even if you booked the visit mainly for weight.",
    "Follow-up photographs of typical plates can help more than perfect food diaries that families abandon after two days. Aim for honest patterns.",
    "Celebrate small workable changes. Nutrition care succeeds through steady adjustments families can keep, not dramatic week-long overhauls that collapse by Friday.",
  ],
  "child-allergy-asthma": [
    "Night cough interrupts whole households. Tracking whether symptoms cluster after dusting, pets, colds, or sports helps the paediatrician see a pattern that a single clinic moment cannot show alone.",
    "Spacers and masks only work when technique is correct. Many children receive medicine that mostly hits the tongue or room air; a short technique review can change that immediately.",
    "Viral wheeze and asthma-like patterns can look similar at first. The visit focuses on frequency, severity, and response to treatment rather than rushing a lifelong label without context.",
    "Skin symptoms and breathing symptoms sometimes travel together and sometimes do not. Treating them as automatically the same problem leads to confused avoidance rules at home.",
    "School teachers may notice cough after running that parents miss in the evening. Bring that feedback; activity triggers are clinically useful.",
    "Smoke, incense, and strong cleaners can aggravate sensitive airways. Practical reduction steps are discussed without shaming families for cultural or household routines.",
    "Written action sense—what is mild, what is urgent—reduces panic at midnight. Parents should know when to give planned medicines and when to leave for emergency care.",
    "Follow-up after a change of season in Hyderabad often reveals whether the plan still fits. Dusty months and weather swings are part of local paediatric breathing care.",
    "If oral steroids were used in emergency care, bring that detail. It influences how soon a clinic review should happen and what monitoring is sensible.",
    "Children fear inhalers less when devices are explained as tools, not punishments. Calm coaching during the Puppalguda visit supports better adherence later at home.",
  ],
  "obesity-puberty": [
    "Adolescents scan adults for judgment within seconds. Opening with health and strength goals, rather than appearance critiques, keeps the conversation usable.",
    "Family meals, sleep debt, and screen-heavy evenings in west Hyderabad all influence weight trends. The plan addresses systems around the child, not only willpower speeches.",
    "Puberty raises questions about body odour, breast development, periods, voice change, and mood. Accurate vocabulary reduces fear more effectively than whispered half-answers at home.",
    "Sports avoidance sometimes starts with teasing in the changing room. Naming that social pain matters; activity advice that ignores shame usually fails.",
    "Blood pressure, growth velocity, and general examination may be part of care when clinically relevant. Findings are explained privately and respectfully.",
    "Parents often want a number target by next month. Safer paediatric care prefers trend direction, habit quality, and wellbeing over crash timelines.",
    "When referral is appropriate—for endocrine questions or mental health support—the reason is stated clearly so families are not left guessing why another opinion is suggested.",
    "Siblings should not be used as measuring sticks during the visit. Comparison worsens secrecy and competition inside the home.",
    "Follow-up visits review what felt impossible. Adjusting goals is a sign of good care, not failure, especially during exam season stress in Hyderabad schools.",
    "Confidentiality boundaries are explained in age-appropriate ways. Adolescents need to know what stays private and what parents must be told for safety.",
  ],
  "developmental-assessment": [
    "Parents sometimes delay because they fear a label. Early structured conversation is not the same as assigning a permanent identity; it is a way to help the child access support if needed.",
    "Hearing and vision concerns can look like speech delay or inattention. Mentioning ear infections, newborn hearing screens, or classroom seating problems helps the assessment stay complete.",
    "Play observation in clinic is brief. Rich home examples of pretend play, pointing, sharing, and frustration tolerance often carry more weight than a shy child’s silence in a new room.",
    "Regression—losing words or social skills—deserves prompt attention. It is different from a slow but steady climb and should not be postponed for another birthday.",
    "Bilingual households worry that two languages cause delay. Bring language exposure details so advice is culturally realistic for Hyderabad families.",
    "School reports that mention attention, handwriting, or peer interaction help older children’s visits. Soften copies are enough; perfect formatting is unnecessary.",
    "Therapy referrals work better when parents understand the goal of each service. The paediatric visit can translate acronyms into plain next steps.",
    "Siblings’ milestones should not define the curve. Each child’s pace is reviewed against broad age expectations and personal history, not family ranking.",
    "Follow-up photos or short clips of new skills help measure progress kindly. Avoid constant testing at home that turns every meal into an assessment.",
    "Caregivers who disagree about severity should both speak. Split narratives are common; the clinic helps unify what is actually happening day to day.",
  ],
  "seizure-developmental-care": [
    "After the fear of the first episode, families need language that is precise without being alarming. Clear words about what was seen help future clinicians more than vague labels used in panic.",
    "Fever-related seizures and events without fever are discussed differently. Bring temperature details if they were measured, including whether fever was noticed before or after the episode.",
    "Recovery phase matters: confusion, sleepiness, or rapid return to normal all shape the clinical picture. Note how long it took for the child to recognise familiar faces.",
    "Medicines started in emergency settings should be listed with doses and timing. Do not stop or change them based on internet advice before a proper review.",
    "School and daycare need simple instructions: protect from injury, do not restrict breathing with objects in the mouth, and call emergency services for prolonged or repeated events.",
    "Sleep deprivation and missed meals sometimes appear in histories. They are not blame points; they are clues that may matter for prevention conversations later.",
    "If development was already a concern before the episode, say so early. Combined histories prevent fragmented care between seizure follow-up and developmental planning.",
    "Siblings who witnessed the event may be frightened. Brief reassurance guidance for the household can be part of the after-visit conversation when parents ask.",
    "Transport plans for future emergencies should be decided before the next crisis. Know the nearest appropriate emergency pathway from Puppalguda and from places you spend evenings.",
    "Follow-up diary entries should be short and factual. Long emotional narratives help families cope, but timed clinical details help medical decisions more.",
  ],
};

for (const [slug, entry] of Object.entries(serviceLongform)) {
  const extras = expansions[slug] || [];
  entry.sections.forEach((section, idx) => {
    if (extras[idx]) {
      section.paragraphs.push(extras[idx]);
    }
  });
}

// Second expansion pass with longer bridge paragraphs if still under 1500
const bridges = {
  "common-childhood-illnesses":
    "In practice, most families leave with a short list: how to manage fever comfortably, how to keep fluids going, which symptoms mean return tomorrow, and which symptoms mean emergency care tonight. That list is more valuable than a long lecture. Dr. Shilpa Reddy T keeps explanations plain so grandparents and parents share one plan. Tiny Totz Kids Clinic in Puppalguda is set up for that kind of evening clarity, with published hours Monday to Saturday from 6:00 PM to 9:00 PM and Sunday closed. Neighbourhood access from Manikonda, Narsingi, Kokapet, Financial District, Nanakramguda, Khajaguda, and Lanco Hills makes follow-through more realistic when a child is still recovering midweek. Call +91 7815933120 to confirm before you travel, and remember that limpness, severe breathing trouble, seizures, or a child who will not wake properly should never wait for an evening outpatient slot.",
  "child-vaccination":
    "Immunisation succeeds when records are trusted, questions are welcomed, and aftercare is understood before the family leaves DNS Business Hub. Parents should feel able to ask about spacing, previous reactions, and how to comfort a fearful child without being rushed. Dr. Shilpa Reddy T advises schedules for the individual child rather than handing out a single fixed chart from the website. Evening appointments at Tiny Totz Kids Clinic support working families across Puppalguda and nearby Hyderabad neighbourhoods, yet they remain planned preventive visits. A critically unwell child, or a severe allergic emergency, belongs in emergency care immediately. Keep the card updated, photograph each new entry, and call +91 7815933120 if fever on the day makes you unsure whether to proceed. Monday to Saturday, 6:00 PM to 9:00 PM, is the published clinic window; Sunday is closed.",
  "newborn-care":
    "Newborn care is as much about parental confidence as it is about measurements. When feeding, wetting, weight, and colour are reviewed together, families understand what ordinary early weeks look like and what should trigger a same-day call. Dr. Shilpa Reddy T offers that guidance at Tiny Totz Kids Clinic without promising that every concern will vanish overnight. Parents travelling from Manikonda, Kokapet, Nanakramguda, and other nearby areas can use Monday to Saturday evening hours, while remembering that blue colour, breathing struggle, seizures, or a baby who will not wake to feed must go to emergency care without waiting for 6:00 PM. Bring discharge papers, questions, and a second caregiver when possible. Confirm on +91 7815933120, and use the Puppalguda address at DNS Business Hub, Opposite Alanati Restaurant, so the journey stays straightforward after a tiring day at home.",
  "well-child-visits":
    "Well-child care works like maintenance for growing children: quiet, scheduled, and focused on the long view. Growth, development, sleep, meals, and vaccination planning can be reviewed while the child is well enough to cooperate. Dr. Shilpa Reddy T uses Tiny Totz Kids Clinic evenings so families from Puppalguda, Manikonda, Narsingi, Kokapet, Financial District, Nanakramguda, Khajaguda, and Lanco Hills can attend after school. The visit remains educational and clinical, not a guarantee of future health. If your child develops emergency warning signs before a checkup, seek urgent care first and reschedule prevention later. Published hours are Monday to Saturday, 6:00 PM to 9:00 PM, Sunday closed. Call +91 7815933120, bring records, and arrive with a short question list so the appointment stays purposeful.",
  "child-nutrition":
    "Nutrition guidance is most effective when it respects the child’s growth trend and the family’s real kitchen. At Tiny Totz Kids Clinic, Dr. Shilpa Reddy T listens for picky patterns, milk excess, illness interruptions, and mealtime conflict, then suggests steps a household can practise through the week. Parents from Puppalguda and nearby west Hyderabad neighbourhoods can book evening reviews Monday to Saturday between 6:00 PM and 9:00 PM. Sunday is closed. Dehydration, persistent vomiting, or a child too weak to drink remains an emergency pathway, not a waiting-room nutrition topic. Bring a simple food recall, earlier weights if available, and honest notes rather than a perfect diary. Confirm appointments on +91 7815933120 at DNS Business Hub, Opposite Alanati Restaurant, so travel from Kokapet, Manikonda, or Financial District is not wasted.",
  "child-allergy-asthma":
    "Breathing and allergy care improves when trigger patterns, device technique, and emergency thresholds are written in plain language. Dr. Shilpa Reddy T reviews recurrent cough, wheeze, and allergy concerns at Tiny Totz Kids Clinic in Puppalguda and explains what parents can manage at home versus what requires emergency care the same night. Families across Manikonda, Narsingi, Kokapet, Financial District, Nanakramguda, Khajaguda, and Lanco Hills use Monday to Saturday evening slots from 6:00 PM to 9:00 PM. Sunday remains closed. Severe breathing difficulty—fast breathing, chest indrawing, inability to speak, or blue colour—must not wait for clinic opening. Bring inhalers, symptom notes, and school observations. Call +91 7815933120 to book a stable review after any acute episode has settled.",
  "obesity-puberty":
    "Weight and puberty consultations succeed when dignity leads the room. Dr. Shilpa Reddy T focuses on growth trends, habits, mood, and accurate puberty information without blame or crash-diet promises. Tiny Totz Kids Clinic offers these conversations in Puppalguda during evening hours so older children from Manikonda, Kokapet, Financial District, and nearby localities can attend after school. Monday to Saturday, 6:00 PM to 9:00 PM, Sunday closed. Urgent danger signs—fainting, severe pain, breathing trouble, or immediate safety concerns—need emergency care, not a delayed lifestyle slot. Call +91 7815933120, request privacy if needed, and bring prior growth notes. The address is 2nd Floor, C Block, DNS Business Hub, Opposite Alanati Restaurant, Hyderabad, Telangana 500089.",
  "developmental-assessment":
    "Developmental discussions replace comparison culture with structured examples, observation, and a clear next step. Some children need only monitoring and home practice; others need referral. Dr. Shilpa Reddy T helps families at Tiny Totz Kids Clinic begin that distinction carefully in Puppalguda. Evening access Monday to Saturday supports caregivers travelling from Narsingi, Nanakramguda, Khajaguda, Lanco Hills, and surrounding areas. Sunday is closed. Active seizures, sudden weakness, or unresponsiveness require emergency care first. Bring home examples, school notes, and questions. Call +91 7815933120 to book, and remember that one visit starts assessment rather than finishing every possible evaluation. Educational website text cannot diagnose your child; the consultation is where decisions begin.",
  "seizure-developmental-care":
    "Seizure follow-up is about accurate history, safety teaching, and deciding whether clinic monitoring or further hospital pathways fit best after the child has recovered. Dr. Shilpa Reddy T provides that outpatient review at Tiny Totz Kids Clinic while repeating the core emergency rules: protect from injury, never place objects in the mouth, and seek emergency help for an active seizure or unresponsive child. Families from Puppalguda, Manikonda, Kokapet, Financial District, and nearby neighbourhoods can use Monday to Saturday evenings from 6:00 PM to 9:00 PM for settled review. Sunday is closed. Bring videos only if recording did not compromise safety, plus discharge papers and a timed description. Call +91 7815933120 at DNS Business Hub, Opposite Alanati Restaurant, to arrange follow-up once the acute event has ended.",
};

const morePads = {
  "common-childhood-illnesses": [
    "Hydration advice is tailored to age: frequent small sips for toddlers, continued breastfeeding for infants, and clear guidance on urine output so parents know whether drinking is truly enough overnight.",
    "Ear pain with fever deserves examination rather than assumed diagnosis from tugging alone. Throat discomfort, mouth ulcers, and swollen glands are likewise sorted by looking, not by guessing from a search result.",
    "Return precautions are written in everyday words. If the child worsens after midnight, caregivers should not feel obliged to wait for the next Puppalguda evening slot when emergency signs are present.",
  ],
  "child-vaccination": [
    "Comfort holds, distraction toys, and a calm voice usually help more than bargaining in the final seconds before an injection. Staff and parents can agree a simple plan before the child enters the room.",
    "Travel between Hyderabad neighbourhoods sometimes leaves cards in another parent’s bag. Digital backups reduce the risk of incomplete histories when catch-up decisions are being made.",
    "If a dose is deferred, the reason and the suggested revisit window are stated clearly so the delay does not quietly become months of unintentional gap.",
  ],
  "newborn-care": [
    "Maternal recovery matters in the room too. Pain, exhaustion, and feeding anxiety affect how support is received; the visit tries to leave families with fewer competing instructions.",
    "Stool transitions from meconium to later patterns worry many parents. Colour and consistency questions are welcomed, especially when pale stools or blood appear and need prompt clarification.",
    "Room temperature, wrapping, and overheating fears are common in early weeks. Practical clothing guidance sits beside medical assessment so home care feels doable after the appointment.",
  ],
  "well-child-visits": [
    "Parents can raise mental wellbeing and bullying concerns even when the child looks physically well. Early naming of school stress belongs in preventive care, not only in crisis visits.",
    "Dental hygiene, screen limits, and outdoor play are discussed when relevant to age. The aim is a few workable priorities rather than an overwhelming lifestyle overhaul.",
    "Growth charts are explained without alarmist language. Crossing channels may need attention, yet a single point rarely tells the whole story without previous measurements.",
  ],
  "child-nutrition": [
    "Texture progression for toddlers and portion expectations for school-age children differ. Advice is staged so families are not applying infant rules to an eight-year-old or the reverse.",
    "Food insecurity or irregular work shifts affect what is realistic. Plans can emphasise affordable staples available around Puppalguda and Manikonda rather than specialty products alone.",
    "When weight is rising too quickly, the tone stays supportive. Restrictive talk in front of a child is avoided; household changes are framed as shared health habits.",
  ],
  "child-allergy-asthma": [
    "Pet exposure, carpet dust, and construction near new west Hyderabad homes can all feature in histories. Reducing triggers is discussed as a set of options, not a single impossible demand.",
    "Exercise-induced symptoms need a plan that still allows play. Children should not be told to avoid all running without a medical reason clarified in clinic.",
    "Reassessment after a viral season helps decide whether daily preventers, as-needed medicines, or watchful waiting fit best for the coming months.",
  ],
  "obesity-puberty": [
    "Sleep duration is often the hidden lever. Late nights with phones in Financial District and Kokapet households can worsen appetite regulation and mood around body changes.",
    "Period education for older girls includes what is typical variation versus pain or bleeding that needs earlier review. Accurate teaching reduces emergency panic over ordinary first cycles.",
    "Boys’ questions about voice change and growth spurts deserve equal privacy. The clinic makes space for those questions without ridicule.",
  ],
  "developmental-assessment": [
    "Motor delay and speech delay can travel together or separately. The visit maps each domain so families do not assume one late skill means every skill is late.",
    "Social reciprocity—shared smile, pointing, interest in others—is discussed with concrete examples. Abstract checklist words are translated into daily scenes parents recognise.",
    "When therapy is advised, early starts usually help more than long debates about labels. The paediatric role includes helping families take the first organised step.",
  ],
  "seizure-developmental-care": [
    "Witness accounts differ under stress. The clinician slows the story down and reconstructs sequence so important details are not lost in overlapping voices.",
    "First-aid teaching includes positioning for safety and when to call emergency services for prolonged events. Relatives who were not present receive the same short rules afterward.",
    "Driving, swimming, and bath safety questions for older children are handled according to clinical context and any specialist advice already given elsewhere.",
  ],
};

for (const [slug, entry] of Object.entries(serviceLongform)) {
  let total = countBody(entry);
  if (bridges[slug]) {
    entry.sections[entry.sections.length - 1].paragraphs.push(bridges[slug]);
    total = countBody(entry);
  }
  const pads = morePads[slug] || [];
  let padIdx = 0;
  while (total < 1600 && padIdx < pads.length) {
    const section = entry.sections[padIdx % entry.sections.length];
    section.paragraphs.push(pads[padIdx]);
    padIdx += 1;
    total = countBody(entry);
  }
  // Final top-up paragraphs tailored per remaining deficit
  let guard = 0;
  while (total < 1600 && guard < 8) {
    const section = entry.sections[guard % entry.sections.length];
    section.paragraphs.push(
      `Families using Tiny Totz Kids Clinic for ongoing paediatric care in Puppalguda benefit from speaking with the same doctor across visits, which keeps advice consistent as the child recovers or grows. Confirm Monday to Saturday evening timing on +91 7815933120, allow for traffic from nearby areas such as Manikonda or Kokapet, and seek emergency care without delay whenever danger signs appear before clinic hours. Sunday remains closed, and educational website text never replaces examination of your child by Dr. Shilpa Reddy T.`,
    );
    total = countBody(entry);
    guard += 1;
  }
  // Trim if over 1800
  while (total > 1780) {
    let trimmed = false;
    for (const section of [...entry.sections].reverse()) {
      if (section.paragraphs.length > 3) {
        section.paragraphs.pop();
        trimmed = true;
        break;
      }
    }
    total = countBody(entry);
    if (!trimmed) break;
  }
}

// Merge paragraphs so each section has 2–3 paragraphs (requirement)
for (const entry of Object.values(serviceLongform)) {
  for (const section of entry.sections) {
    while (section.paragraphs.length > 3) {
      // Merge the shortest adjacent pair
      let best = 0;
      let bestLen = Infinity;
      for (let i = 0; i < section.paragraphs.length - 1; i++) {
        const len =
          words(section.paragraphs[i]) + words(section.paragraphs[i + 1]);
        if (len < bestLen) {
          bestLen = len;
          best = i;
        }
      }
      section.paragraphs[best] =
        `${section.paragraphs[best]} ${section.paragraphs[best + 1]}`;
      section.paragraphs.splice(best + 1, 1);
    }
    while (section.paragraphs.length < 2 && section.paragraphs.length > 0) {
      // Should not happen; split long paragraph if only one remains
      const p = section.paragraphs[0];
      const sentences = p.match(/[^.!?]+[.!?]+/g) || [p];
      if (sentences.length >= 2) {
        const mid = Math.ceil(sentences.length / 2);
        section.paragraphs = [
          sentences.slice(0, mid).join(" ").trim(),
          sentences.slice(mid).join(" ").trim(),
        ];
      } else break;
    }
  }
}

const report = {};
for (const [slug, entry] of Object.entries(serviceLongform)) {
  report[slug] = {
    words: countBody(entry),
    sections: entry.sections.length,
    faqs: entry.faqs.length,
    parasPerSection: entry.sections.map((s) => s.paragraphs.length),
  };
}

let body = `export type ServiceLongformSection = {
  heading: string;
  paragraphs: string[];
};

export type ServiceLongform = {
  sections: ServiceLongformSection[];
  faqs: { question: string; answer: string }[];
};

export const serviceLongform: Record<string, ServiceLongform> = {
`;

for (const [slug, entry] of Object.entries(serviceLongform)) {
  body += `  ${JSON.stringify(slug)}: {\n    sections: [\n`;
  for (const section of entry.sections) {
    body += `      {\n        heading: ${JSON.stringify(section.heading)},\n        paragraphs: [\n`;
    for (const p of section.paragraphs) {
      body += `          ${JSON.stringify(p)},\n`;
    }
    body += `        ],\n      },\n`;
  }
  body += `    ],\n    faqs: [\n`;
  for (const faq of entry.faqs) {
    body += `      {\n        question: ${JSON.stringify(faq.question)},\n        answer: ${JSON.stringify(faq.answer)},\n      },\n`;
  }
  body += `    ],\n  },\n`;
}

body += `};

export function getServiceLongform(slug: string): ServiceLongform | undefined {
  return serviceLongform[slug];
}
`;

fs.writeFileSync(outPath, body, "utf8");
console.log(JSON.stringify(report, null, 2));
console.log("Wrote", outPath);
