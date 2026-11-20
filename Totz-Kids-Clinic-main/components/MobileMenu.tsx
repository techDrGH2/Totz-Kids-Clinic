"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { BookAppointmentButton } from "@/components/AppointmentBooking";
import { mainNav } from "@/lib/navigation";
import { addressInline, clinic } from "@/lib/clinic";
import { whatsappMessages, whatsappUrl } from "@/lib/whatsapp";
import { btnNavy, btnOutline, TrackedLink } from "@/components/TrackedLink";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 xl:hidden" role="presentation">
      <button
        type="button"
        className="absolute inset-0 bg-navy/40"
        aria-label="Close menu"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className="site-menu-panel absolute inset-y-0 right-0 flex w-[min(100%,22rem)] flex-col shadow-xl"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <p className="font-serif text-lg text-navy">Menu</p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="grid h-11 w-11 place-items-center rounded-md text-navy hover:bg-mist"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-3" aria-label="Mobile">
          <ul>
            {mainNav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="block rounded-md px-3 py-3 text-base text-navy hover:bg-mist"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="grid gap-2 border-t border-line p-4">
          <p className="text-sm leading-6 text-muted">{addressInline()}</p>
          <BookAppointmentButton
            eventLabel="mobile-menu"
            className={btnNavy}
            onBeforeOpen={onClose}
          >
            Book Appointment
          </BookAppointmentButton>
          <TrackedLink
            href={`tel:${clinic.phoneTel}`}
            event="call_click"
            eventLabel="mobile-menu"
            className={btnOutline}
          >
            Call {clinic.phoneDisplay}
          </TrackedLink>
          <TrackedLink
            href={whatsappUrl(whatsappMessages.general)}
            event="whatsapp_click"
            eventLabel="mobile-menu"
            className={btnOutline}
          >
            WhatsApp
          </TrackedLink>
        </div>
      </div>
    </div>
  );
}
