import Link from "next/link";
import { BookAppointmentButton } from "@/components/AppointmentBooking";
import { btnNavy, btnOutline, TrackedLink } from "@/components/TrackedLink";
import { clinic } from "@/lib/clinic";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-5 py-20 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-serif text-4xl text-navy">Looking for something?</h1>
      <p className="mt-4 text-base leading-7 text-muted">
        That page is not on the {clinic.name} website. You can go back home, book a
        visit, or call the clinic.
      </p>
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link href="/" className={btnNavy}>
          Go Home
        </Link>
        <BookAppointmentButton eventLabel="404" className={btnOutline}>
          Book Appointment
        </BookAppointmentButton>
        <TrackedLink
          href={`tel:${clinic.phoneTel}`}
          event="call_click"
          eventLabel="404"
          className={btnOutline}
        >
          Call Clinic
        </TrackedLink>
      </div>
    </section>
  );
}
