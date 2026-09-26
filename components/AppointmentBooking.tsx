"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { X } from "lucide-react";
import { AppointmentForm } from "@/components/AppointmentForm";
import { btnPrimary } from "@/components/TrackedLink";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";
import { clinic } from "@/lib/clinic";

type BookingContextValue = {
  open: () => void;
  close: () => void;
};

const AppointmentBookingContext = createContext<BookingContextValue | null>(null);

export function useAppointmentBooking() {
  const ctx = useContext(AppointmentBookingContext);
  if (!ctx) {
    throw new Error("useAppointmentBooking must be used within AppointmentBookingProvider");
  }
  return ctx;
}

export function AppointmentBookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  return (
    <AppointmentBookingContext.Provider value={{ open, close }}>
      {children}
      <AppointmentModal open={isOpen} onClose={close} />
    </AppointmentBookingContext.Provider>
  );
}

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
  const { open } = useAppointmentBooking();

  return (
    <button
      type="button"
      className={className}
      aria-label={ariaLabel}
      onClick={() => {
        onBeforeOpen?.();
        trackEvent(event, { label: eventLabel });
        open();
      }}
    >
      {children}
    </button>
  );
}

function AppointmentModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const titleId = useId();
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
    <div className="fixed inset-0 z-[60]" role="presentation">
      <button
        type="button"
        className="absolute inset-0 bg-navy/50 backdrop-blur-[2px]"
        aria-label="Close appointment form"
        onClick={onClose}
      />
      <div className="pointer-events-none absolute inset-0 flex items-end justify-center p-3 sm:items-center sm:p-6">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="pointer-events-auto max-h-[min(92vh,44rem)] w-full max-w-lg overflow-y-auto rounded-[1.5rem] border border-line bg-paper shadow-[0_28px_60px_rgba(37,38,74,0.28)]"
        >
          <div className="sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-line bg-paper/95 px-5 py-4 backdrop-blur">
            <div>
              <h2 id={titleId} className="font-serif text-2xl text-navy">
                Book an appointment
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted">
                Fill the form and we will open WhatsApp to {clinic.phoneDisplay}.
              </p>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-md text-navy hover:bg-mist"
              aria-label="Close"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>
          <div className="px-5 py-5">
            <AppointmentForm mode="whatsapp" onWhatsAppRedirect={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
}
