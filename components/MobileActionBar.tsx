"use client";

import { Phone } from "lucide-react";
import { BookAppointmentButton } from "@/components/AppointmentBooking";
import { clinic } from "@/lib/clinic";
import { whatsappMessages, whatsappUrl } from "@/lib/whatsapp";
import { TrackedLink } from "@/components/TrackedLink";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-3">
        <TrackedLink
          href={`tel:${clinic.phoneTel}`}
          event="call_click"
          eventLabel="mobile-bar"
          className="flex min-h-14 flex-col items-center justify-center gap-0.5 text-[11px] font-semibold tracking-wide text-navy"
        >
          <Phone className="h-4 w-4" aria-hidden />
          CALL
        </TrackedLink>
        <TrackedLink
          href={whatsappUrl(whatsappMessages.general)}
          event="whatsapp_click"
          eventLabel="mobile-bar"
          className="flex min-h-14 flex-col items-center justify-center gap-0.5 border-x border-line text-[11px] font-semibold tracking-wide text-teal"
        >
          <span aria-hidden className="text-sm leading-none">
            WA
          </span>
          WHATSAPP
        </TrackedLink>
        <BookAppointmentButton
          eventLabel="mobile-bar"
          className="flex min-h-14 items-center justify-center bg-coral px-2 text-center text-[11px] font-semibold tracking-wide text-white"
        >
          BOOK APPOINTMENT
        </BookAppointmentButton>
      </div>
    </div>
  );
}
