"use client";

import { Phone } from "lucide-react";
import { clinic } from "@/lib/clinic";
import { TrackedLink } from "@/components/TrackedLink";

export function FloatingCall() {
  return (
    <TrackedLink
      href={`tel:${clinic.phoneTel}`}
      event="call_click"
      eventLabel="floating"
      ariaLabel={`Call ${clinic.phoneDisplay}`}
      className="fixed bottom-5 left-5 z-30 hidden h-12 w-12 items-center justify-center rounded-full bg-navy text-white shadow-lg hover:bg-teal md:inline-flex"
    >
      <Phone className="h-5 w-5" aria-hidden />
    </TrackedLink>
  );
}
