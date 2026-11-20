import { clinic } from "@/lib/clinic";

export function whatsappUrl(message: string) {
  return `https://wa.me/${clinic.phoneWhatsApp}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  general:
    "Hello Tiny Totz Kids Clinic, I would like to book a pediatric consultation for my child.",
  vaccination:
    "Hello Tiny Totz Kids Clinic, I would like to know more about child vaccination services.",
  newborn:
    "Hello Tiny Totz Kids Clinic, I would like to know more about newborn care.",
  appointment:
    "Hello Tiny Totz Kids Clinic, I would like to book a pediatric consultation for my child.",
} as const;
