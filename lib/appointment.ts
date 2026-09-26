export type AppointmentInput = {
  parentName: string;
  childName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  reason: string;
  note: string;
};

export type AppointmentResult =
  | { ok: true; channel: "webhook" }
  | { ok: false; channel: "whatsapp"; whatsappHref: string; message: string };

const reasons = [
  "Fever or illness",
  "Vaccination",
  "Newborn concern",
  "Feeding or breastfeeding",
  "Growth or nutrition",
  "Allergy or breathing",
  "Development",
  "Well-child visit",
  "Skin concern",
  "Other",
] as const;

export const appointmentReasons = reasons;

export function validateAppointment(input: AppointmentInput) {
  const errors: Partial<Record<keyof AppointmentInput, string>> = {};

  if (input.parentName.trim().length < 2) {
    errors.parentName = "Enter the parent or guardian’s name.";
  }
  if (input.childName.trim().length < 2) {
    errors.childName = "Enter the child’s name.";
  }

  const digits = input.phone.replace(/\D/g, "");
  const local = digits.startsWith("91") && digits.length > 10 ? digits.slice(-10) : digits;
  if (!/^[6-9]\d{9}$/.test(local)) {
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  }

  if (input.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    errors.email = "Enter a valid email, or leave it blank.";
  }

  if (!input.date) {
    errors.date = "Choose a preferred date.";
  } else {
    const chosen = new Date(`${input.date}T12:00:00+05:30`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (Number.isNaN(chosen.getTime()) || chosen < today) {
      errors.date = "Choose today or a future date.";
    } else if (chosen.getDay() === 0) {
      errors.date = "The clinic is closed on Sunday. Choose Monday to Saturday.";
    }
  }

  if (!input.time) {
    errors.time = "Choose a preferred time.";
  }

  if (!reasons.includes(input.reason as (typeof reasons)[number])) {
    errors.reason = "Choose a reason for the visit.";
  }

  if (input.note.length > 160) {
    errors.note = "Keep the note under 160 characters.";
  }

  return errors;
}

export function appointmentWhatsAppMessage(input: AppointmentInput) {
  const lines = [
    "Hello Tiny Totz Kids Clinic, I would like to request a pediatric appointment.",
    `Parent/guardian: ${input.parentName.trim()}`,
    `Child: ${input.childName.trim()}`,
    `Phone: ${input.phone.trim()}`,
    input.email.trim() ? `Email: ${input.email.trim()}` : "",
    `Preferred date: ${input.date}`,
    `Preferred time: ${input.time}`,
    `Reason: ${input.reason}`,
    input.note.trim() ? `Note: ${input.note.trim()}` : "",
  ].filter(Boolean);

  return lines.join("\n");
}

export const appointmentTimes = [
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
] as const;
