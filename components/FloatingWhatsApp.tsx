"use client";

import { whatsappMessages, whatsappUrl } from "@/lib/whatsapp";
import { TrackedLink } from "@/components/TrackedLink";

export function FloatingWhatsApp() {
  return (
    <TrackedLink
      href={whatsappUrl(whatsappMessages.general)}
      event="whatsapp_click"
      eventLabel="floating"
      ariaLabel="WhatsApp Tiny Totz Kids Clinic"
      className="fixed bottom-5 left-5 z-30 hidden h-12 items-center gap-2 rounded-full bg-teal px-4 text-sm font-semibold text-white shadow-lg hover:bg-navy md:inline-flex"
    >
      WhatsApp
    </TrackedLink>
  );
}
