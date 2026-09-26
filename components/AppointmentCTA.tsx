import { BookAppointmentButton } from "@/components/AppointmentBooking";
import { btnOutline, btnPrimary, btnSecondary, TrackedLink } from "@/components/TrackedLink";
import { clinic } from "@/lib/clinic";
import { doctor } from "@/lib/doctor";
import { whatsappMessages, whatsappUrl } from "@/lib/whatsapp";

export function AppointmentCTA({
  heading = "Looking for a paediatrician in Puppalguda?",
  text = `Book a consultation with ${doctor.name} at ${clinic.name}.`,
  whatsappMessage = whatsappMessages.general,
  eventLabel = "final-cta",
}: {
  heading?: string;
  text?: string;
  whatsappMessage?: string;
  eventLabel?: string;
}) {
  return (
    <section className="mx-3 mb-3 overflow-hidden rounded-[2rem] bg-navy text-white shadow-[0_25px_60px_rgba(37,38,74,0.18)] md:mx-6 md:mb-6" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <h2 id="cta-heading" className="max-w-2xl font-serif text-3xl md:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-8 text-white/80">{text}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <BookAppointmentButton eventLabel={eventLabel} className={btnPrimary}>
            Book Appointment
          </BookAppointmentButton>
          <TrackedLink
            href={`tel:${clinic.phoneTel}`}
            event="call_click"
            eventLabel={eventLabel}
            className={btnSecondary}
          >
            Call {clinic.phoneDisplay}
          </TrackedLink>
          <TrackedLink
            href={whatsappUrl(whatsappMessage)}
            event="whatsapp_click"
            eventLabel={eventLabel}
            className={btnOutline}
          >
            WhatsApp
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
