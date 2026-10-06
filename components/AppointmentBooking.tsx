"use client";

import type { ReactNode } from "react";
import { btnPrimary, TrackedLink } from "@/components/TrackedLink";
import type { AnalyticsEvent } from "@/lib/analytics";
import { clinic } from "@/lib/clinic";

export function BookAppointmentButton({
  className = btnPrimary,
  event = "appointment_click",
  eventLabel = "book",
  children = "Book Appointment",
  ariaLabel,
  onBeforeOpen,
}: {
  className?: string;
  event?: AnalyticsEvent;
  eventLabel?: string;
  children?: ReactNode;
  ariaLabel?: string;
  onBeforeOpen?: () => void;
}) {
  return (
    <TrackedLink
      href={clinic.bookingUrl}
      event={event}
      eventLabel={eventLabel}
      className={className}
      ariaLabel={ariaLabel}
      onClick={onBeforeOpen}
    >
      {children}
    </TrackedLink>
  );
}
