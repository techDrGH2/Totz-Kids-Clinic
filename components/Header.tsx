"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { BookAppointmentButton } from "@/components/AppointmentBooking";
import { Logo } from "@/components/Logo";
import { MobileMenu } from "@/components/MobileMenu";
import { btnPrimary, btnSecondary, TrackedLink } from "@/components/TrackedLink";
import { clinic } from "@/lib/clinic";
import { mainNav } from "@/lib/navigation";
import { whatsappMessages, whatsappUrl } from "@/lib/whatsapp";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-40 border-b border-white/10 text-white">
      <div className="site-header-top hidden border-b border-white/10 md:block">
        <div className="mx-auto flex max-w-6xl items-center px-5 py-1.5 text-xs text-white/80">
          <p className="min-w-0 leading-5">
            {clinic.address.area}, {clinic.address.city}
            <span className="mx-2 text-white/40">·</span>
            <a className="hover:text-white" href={`tel:${clinic.phoneTel}`}>
              {clinic.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-3 px-4 sm:px-5">
        <Link href="/" className="shrink-0">
          <Logo
            priority
            alt={`${clinic.name} logo - paediatric clinic in Puppalguda, Hyderabad`}
            className="h-14 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-x-1 xl:flex" aria-label="Primary">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="site-nav-link text-[13px] font-medium text-white/85"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <TrackedLink
            href={`tel:${clinic.phoneTel}`}
            event="call_click"
            eventLabel="header"
            className={btnSecondary}
          >
            Call Now
          </TrackedLink>
          <BookAppointmentButton eventLabel="header" className={btnPrimary}>
            Book Appointment
          </BookAppointmentButton>
        </div>

        <div className="flex items-center gap-1 xl:hidden">
          <TrackedLink
            href={`tel:${clinic.phoneTel}`}
            event="call_click"
            eventLabel="header-mobile"
            ariaLabel={`Call ${clinic.phoneDisplay}`}
            className="grid h-11 w-11 place-items-center rounded-md hover:bg-white/10"
          >
            <Phone className="h-5 w-5" aria-hidden />
          </TrackedLink>
          <TrackedLink
            href={whatsappUrl(whatsappMessages.general)}
            event="whatsapp_click"
            eventLabel="header-mobile"
            ariaLabel="WhatsApp the clinic"
            className="grid h-11 w-11 place-items-center rounded-md hover:bg-white/10"
          >
            <WhatsAppGlyph />
          </TrackedLink>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-md hover:bg-white/10"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" aria-hidden />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </div>
      <div id="mobile-menu">
        <MobileMenu open={open} onClose={() => setOpen(false)} />
      </div>
    </header>
  );
}

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden fill="currentColor">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.4a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 14.55c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.14-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.2-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.28.64-.41 1.02-.41.12 0 .23 0 .33.01.3.01.45.03.65.5.24.58.82 2 .89 2.15.07.14.12.32.02.5-.09.2-.14.31-.28.48-.14.16-.29.36-.42.48-.14.14-.28.28-.12.54.16.26.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.26.14.42.12.58-.07.16-.2.67-.78.85-1.05.18-.26.36-.22.6-.13.24.08 1.54.72 1.8.86.26.13.44.2.5.31.07.12.07.67-.17 1.35z" />
    </svg>
  );
}
