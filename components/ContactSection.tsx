import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { BookAppointmentButton } from "@/components/AppointmentBooking";
import { btnNavy, btnOutline, TrackedLink } from "@/components/TrackedLink";
import { addressLines, clinic } from "@/lib/clinic";
import { whatsappMessages, whatsappUrl } from "@/lib/whatsapp";

export function ContactSection() {
  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(85,197,192,0.1),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(233,142,174,0.09),transparent_30%),linear-gradient(180deg,#ffffff_0%,#fff9f5_55%,#f7f8ff_100%)]"
      aria-labelledby="location-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-10 left-[8%] h-36 w-36 rounded-full bg-[rgba(255,200,61,0.1)] blur-3xl" />
        <div className="absolute right-[10%] bottom-8 h-40 w-40 rounded-full bg-[rgba(85,197,192,0.1)] blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2 md:items-stretch md:gap-10 md:py-20">
        <div className="section-surface relative flex flex-col rounded-[1.75rem] p-6 md:p-7">
          <span
            aria-hidden
            className="mb-5 block h-1 w-12 rounded-full bg-gradient-to-r from-teal via-[#ffc83d] to-coral"
          />
          <span className="soft-pill">Visit</span>
          <h2
            id="location-heading"
            className="mt-4 font-serif text-3xl text-navy md:text-5xl"
          >
            The clinic in Puppalguda
          </h2>

          <address className="mt-6 space-y-1 text-base leading-7 text-ink not-italic">
            {addressLines().map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>

          <dl className="mt-6 space-y-3.5 text-sm">
            <div className="flex gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-teal-soft text-teal">
                <Phone className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <dt className="font-semibold text-navy">Phone and WhatsApp</dt>
                <dd>
                  <a className="transition hover:text-teal" href={`tel:${clinic.phoneTel}`}>
                    {clinic.phoneDisplay}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-teal-soft text-teal">
                <Mail className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <dt className="font-semibold text-navy">Email</dt>
                <dd>
                  <a
                    className="break-all transition hover:text-teal"
                    href={`mailto:${clinic.email}`}
                  >
                    {clinic.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-teal-soft text-teal">
                <Clock className="h-4 w-4" aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <dt className="font-semibold text-navy">Opening hours</dt>
                <dd className="mt-1">
                  <dl className="space-y-1">
                    {clinic.hours.lines.map((line) => (
                      <div
                        key={line.label}
                        className="flex justify-between gap-4 border-b border-line/80 py-1.5 last:border-0"
                      >
                        <span>{line.label}</span>
                        <span className="font-medium text-navy">{line.value}</span>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-2 text-sm text-muted">{clinic.hours.note}</p>
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <TrackedLink
              href={clinic.maps.directionsUrl}
              event="directions_click"
              eventLabel="contact"
              className={btnNavy}
            >
              Get Directions
            </TrackedLink>
            <TrackedLink
              href={`tel:${clinic.phoneTel}`}
              event="call_click"
              eventLabel="contact"
              className={btnOutline}
            >
              Call Clinic
            </TrackedLink>
            <TrackedLink
              href={whatsappUrl(whatsappMessages.general)}
              event="whatsapp_click"
              eventLabel="contact"
              className={btnOutline}
            >
              WhatsApp
            </TrackedLink>
            <BookAppointmentButton eventLabel="contact" className={btnOutline}>
              Book Appointment
            </BookAppointmentButton>
          </div>
        </div>

        <div className="relative min-h-80">
          <div
            aria-hidden
            className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-teal/20 via-[#ffc83d]/12 to-coral/20 blur-[1px]"
          />
          <div className="relative h-full min-h-80 overflow-hidden rounded-[1.75rem] border border-white/70 bg-white p-2 shadow-[0_18px_40px_rgba(37,38,74,0.08)]">
            <div className="relative h-full min-h-[18rem] overflow-hidden rounded-[1.35rem] bg-mist md:min-h-full">
              <iframe
                title="Map showing DNS Business Hub, Puppalguda, where Tiny Totz Kids Clinic is located"
                src={clinic.maps.embedUrl}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <TrackedLink
                href={clinic.maps.searchUrl}
                event="directions_click"
                eventLabel="contact-map"
                className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-line bg-white/95 px-3 py-1.5 text-xs font-semibold text-navy shadow-sm transition hover:border-teal hover:text-teal"
              >
                <MapPin className="h-3.5 w-3.5 text-teal" aria-hidden />
                Open in Maps
              </TrackedLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
