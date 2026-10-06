import type { Metadata } from "next";
import { AppointmentForm } from "@/components/AppointmentForm";
import { BookAppointmentButton } from "@/components/AppointmentBooking";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { btnPrimary } from "@/components/TrackedLink";
import { addressInline, clinic } from "@/lib/clinic";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Book a Paediatric Appointment",
  description:
    `Request a paediatric appointment at Tiny Totz Kids Clinic, ${addressInline()}. Call ${clinic.phoneDisplay}.`,
  path: "/appointment",
});

export default function AppointmentPage() {
  return (
    <>
      <header className="border-b border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
          <Breadcrumbs items={[{ name: "Appointment", href: "/appointment" }]} />
          <h1 className="font-serif text-4xl text-navy md:text-5xl">Book an appointment</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
            Choose a date and time for a consultation with Dr. Shilpa Reddy T.
            You can also send a WhatsApp request to {clinic.phoneDisplay}.
          </p>
          <BookAppointmentButton eventLabel="appointment-page" className={`${btnPrimary} mt-6`}>
            Book Appointment
          </BookAppointmentButton>
        </div>
      </header>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1fr_18rem]">
          <AppointmentForm mode="whatsapp" />
        <aside className="h-fit border border-line bg-sand p-5 text-sm leading-6">
          <h2 className="font-serif text-2xl text-navy">Before you submit</h2>
          <p className="mt-3">{addressInline()}</p>
          <p className="mt-3">
            <a className="font-semibold text-teal" href={`tel:${clinic.phoneTel}`}>
              {clinic.phoneDisplay}
            </a>
          </p>
          <p className="mt-3">{clinic.hours.summary}. Sunday is closed.</p>
          <p className="mt-3">{clinic.hours.note}</p>
          <p className="mt-3">
            If your child is struggling to breathe, is unresponsive, or is having a
            seizure, use emergency care rather than this form.
          </p>
        </aside>
      </section>
    </>
  );
}
