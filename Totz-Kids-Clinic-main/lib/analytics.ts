export const analyticsEvents = [
  "appointment_click",
  "call_click",
  "whatsapp_click",
  "directions_click",
  "contact_form_submit",
  "service_page_cta",
  "doctor_profile_cta",
] as const;

export type AnalyticsEvent = (typeof analyticsEvents)[number];

type Gtag = (...args: unknown[]) => void;

export function trackEvent(
  name: AnalyticsEvent,
  params?: Record<string, string>,
) {
  if (typeof window === "undefined") return;

  const win = window as Window & {
    dataLayer?: Record<string, unknown>[];
    gtag?: Gtag;
  };

  win.dataLayer = win.dataLayer ?? [];
  win.dataLayer.push({ event: name, ...params });
  win.gtag?.("event", name, params);
}
