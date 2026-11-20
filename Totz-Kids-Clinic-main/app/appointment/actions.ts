"use server";

import { clinic } from "@/lib/clinic";
import {
  appointmentWhatsAppMessage,
  validateAppointment,
  type AppointmentInput,
  type AppointmentResult,
} from "@/lib/appointment";
import { whatsappUrl } from "@/lib/whatsapp";

async function deliverAppointment(input: AppointmentInput): Promise<AppointmentResult> {
  const webhook = process.env.APPOINTMENT_WEBHOOK_URL;
  const message = appointmentWhatsAppMessage(input);

  if (!webhook) {
    return {
      ok: false,
      channel: "whatsapp",
      whatsappHref: whatsappUrl(message),
      message:
        "Online booking is not connected yet. Send this request on WhatsApp or call the clinic so the time can be confirmed.",
    };
  }

  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      clinic: clinic.name,
      ...input,
      submittedAt: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    return {
      ok: false,
      channel: "whatsapp",
      whatsappHref: whatsappUrl(message),
      message:
        "The booking connection did not respond. Please send the request on WhatsApp or call the clinic.",
    };
  }

  return { ok: true, channel: "webhook" };
}

export async function requestAppointment(input: AppointmentInput) {
  const errors = validateAppointment(input);
  if (Object.keys(errors).length > 0) {
    return { status: "invalid" as const, errors };
  }

  const result = await deliverAppointment(input);
  return { status: "ok" as const, errors: {}, result };
}

