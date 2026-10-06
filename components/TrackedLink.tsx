"use client";

import Link from "next/link";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

type Props = {
  href: string;
  event?: AnalyticsEvent;
  eventLabel?: string;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
  onClick?: () => void;
};

export function TrackedLink({
  href,
  event,
  eventLabel,
  className,
  children,
  ariaLabel,
  onClick,
}: Props) {
  const handleClick = () => {
    onClick?.();
    if (event) trackEvent(event, eventLabel ? { label: eventLabel } : undefined);
  };

  const external =
    href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  if (external) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={className}
        onClick={handleClick}
        aria-label={ariaLabel}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

export const btn =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold tracking-[0.01em] transition-all duration-200";

export const btnPrimary = `${btn} bg-[var(--brand-coral)] text-white shadow-[0_12px_24px_rgba(241,91,98,0.2)] hover:-translate-y-0.5 hover:brightness-105`;
export const btnSecondary = `${btn} border border-[var(--brand-navy)]/18 bg-white text-[var(--brand-navy)] hover:-translate-y-0.5 hover:shadow-[0_12px_22px_rgba(37,38,74,0.08)]`;
export const btnNavy = `${btn} bg-[var(--brand-navy)] text-white hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(37,38,74,0.16)]`;
export const btnOutline = `${btn} border border-[var(--brand-coral)]/40 bg-white text-[var(--brand-text)] hover:border-[var(--brand-coral)] hover:text-[var(--brand-coral)]`;
export const btnTeal = `${btn} bg-[var(--brand-teal)] text-white hover:-translate-y-0.5 hover:shadow-[0_12px_22px_rgba(85,197,192,0.22)]`;
