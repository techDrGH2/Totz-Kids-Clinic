import { Phone } from "lucide-react";
import { BookAppointmentButton } from "@/components/AppointmentBooking";
import { ClinicPhoto } from "@/components/ClinicPhoto";
import { btnPrimary, btnSecondary, TrackedLink } from "@/components/TrackedLink";
import { clinic } from "@/lib/clinic";
import { doctor } from "@/lib/doctor";

const heroImage = {
  src: "/images/doctor/hero-paediatric-care.webp",
  alt: `Smiling toddler on an exam chair during a paediatric checkup at ${clinic.name} in Puppalguda, Hyderabad`,
  width: 1024,
  height: 682,
} as const;

export function Hero() {
  return (
    <section className="hero-stage" aria-labelledby="hero-heading">
      <div className="hero-atmosphere" aria-hidden>
        <span className="hero-orb hero-orb-teal" />
        <span className="hero-orb hero-orb-coral" />
        <span className="hero-orb hero-orb-sand" />
        <span className="hero-ring" />
        <span className="hero-arc" />
      </div>

      <div className="hero-grid">
        <div className="hero-copy rise">
          <p className="hero-brand">
            {clinic.shortName}
            <span className="hero-brand-accent"> Kids Clinic</span>
          </p>

          <p className="hero-tagline">{clinic.tagline}</p>

          <h1 id="hero-heading" className="hero-title">
            Paediatric care in Puppalguda, Hyderabad
          </h1>

          <p className="hero-lead">
            Calm consultations with {doctor.name} for newborns through school age -
            evening visits that fit around family life.
          </p>

          <div className="hero-actions">
            <BookAppointmentButton eventLabel="hero" className={btnPrimary}>
              Book an Appointment
            </BookAppointmentButton>
            <TrackedLink
              href={`tel:${clinic.phoneTel}`}
              event="call_click"
              eventLabel="hero"
              className={btnSecondary}
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {clinic.phoneDisplay}
            </TrackedLink>
          </div>
        </div>

        <div className="hero-visual rise" style={{ animationDelay: "140ms" }}>
          <div className="hero-visual-glow" aria-hidden />
          <div className="hero-visual-frame">
            <ClinicPhoto
              src={heroImage.src}
              alt={heroImage.alt}
              width={heroImage.width}
              height={heroImage.height}
              priority
              className="hero-visual-photo"
              sizes="(min-width: 1024px) 48vw, (min-width: 768px) 50vw, 100vw"
              label="Clinic photograph"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
