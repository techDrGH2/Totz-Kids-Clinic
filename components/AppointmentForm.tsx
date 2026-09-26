"use client";

import { useState, type FormEvent } from "react";
import { requestAppointment } from "@/app/appointment/actions";
import { trackEvent } from "@/lib/analytics";
import {
  appointmentReasons,
  appointmentTimes,
  appointmentWhatsAppMessage,
  validateAppointment,
  type AppointmentInput,
} from "@/lib/appointment";
import { btnNavy, btnOutline, TrackedLink } from "@/components/TrackedLink";
import { clinic } from "@/lib/clinic";
import { whatsappMessages, whatsappUrl } from "@/lib/whatsapp";

const empty: AppointmentInput = {
  parentName: "",
  childName: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  reason: "",
  note: "",
};

export function AppointmentForm({
  mode = "server",
  onWhatsAppRedirect,
}: {
  mode?: "server" | "whatsapp";
  onWhatsAppRedirect?: () => void;
} = {}) {
  const [values, setValues] = useState<AppointmentInput>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof AppointmentInput, string>>>({});
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState<
    | { kind: "whatsapp"; message: string; href: string }
    | { kind: "sent" }
    | null
  >(null);

  function update<K extends keyof AppointmentInput>(key: K, value: AppointmentInput[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(null);

    if (mode === "whatsapp") {
      const validationErrors = validateAppointment(values);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setErrors({});
      trackEvent("contact_form_submit", { label: "appointment-popup" });
      trackEvent("whatsapp_click", { label: "appointment-popup" });
      const href = whatsappUrl(appointmentWhatsAppMessage(values));
      onWhatsAppRedirect?.();
      window.location.assign(href);
      return;
    }

    setPending(true);
    const response = await requestAppointment(values);
    setPending(false);

    if (response.status === "invalid") {
      setErrors(response.errors);
      return;
    }

    setErrors({});
    trackEvent("contact_form_submit", { label: "appointment" });

    if (response.result.ok) {
      setResult({ kind: "sent" });
      setValues(empty);
      return;
    }

    setResult({
      kind: "whatsapp",
      message: response.result.message,
      href: response.result.whatsappHref,
    });
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <Field
        id="parentName"
        label="Parent / guardian name"
        autoComplete="name"
        value={values.parentName}
        error={errors.parentName}
        onChange={(value) => update("parentName", value)}
      />
      <Field
        id="childName"
        label="Child’s name"
        value={values.childName}
        error={errors.childName}
        onChange={(value) => update("childName", value)}
      />
      <Field
        id="phone"
        label="Phone number"
        type="tel"
        autoComplete="tel"
        value={values.phone}
        error={errors.phone}
        onChange={(value) => update("phone", value)}
      />
      <Field
        id="email"
        label="Email (optional)"
        type="email"
        autoComplete="email"
        value={values.email}
        error={errors.email}
        onChange={(value) => update("email", value)}
      />
      <Field
        id="date"
        label="Preferred date"
        type="date"
        value={values.date}
        error={errors.date}
        onChange={(value) => update("date", value)}
      />
      <div>
        <label htmlFor="time" className="text-sm font-semibold text-navy">
          Preferred time
        </label>
        <select
          id="time"
          name="time"
          value={values.time}
          onChange={(event) => update("time", event.target.value)}
          className="mt-1 w-full border border-line bg-white px-3 py-3 text-base"
          aria-invalid={Boolean(errors.time)}
          aria-describedby={errors.time ? "time-error" : undefined}
        >
          <option value="">Select a time</option>
          {appointmentTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {errors.time ? (
          <p id="time-error" className="mt-1 text-sm text-coral">
            {errors.time}
          </p>
        ) : (
          <p className="mt-1 text-xs text-muted">Evening clinic hours are 6:00 PM - 9:00 PM.</p>
        )}
      </div>
      <div>
        <label htmlFor="reason" className="text-sm font-semibold text-navy">
          Reason for visit
        </label>
        <select
          id="reason"
          name="reason"
          value={values.reason}
          onChange={(event) => update("reason", event.target.value)}
          className="mt-1 w-full border border-line bg-white px-3 py-3 text-base"
          aria-invalid={Boolean(errors.reason)}
          aria-describedby={errors.reason ? "reason-error" : "reason-hint"}
        >
          <option value="">Select a reason</option>
          {appointmentReasons.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
        {errors.reason ? (
          <p id="reason-error" className="mt-1 text-sm text-coral">
            {errors.reason}
          </p>
        ) : (
          <p id="reason-hint" className="mt-1 text-xs text-muted">
            A short reason is enough. Detailed medical history can wait for the consultation.
          </p>
        )}
      </div>
      <div>
        <label htmlFor="note" className="text-sm font-semibold text-navy">
          Short note (optional)
        </label>
        <textarea
          id="note"
          name="note"
          maxLength={160}
          rows={3}
          value={values.note}
          onChange={(event) => update("note", event.target.value)}
          className="mt-1 w-full border border-line bg-white px-3 py-3 text-base"
          aria-invalid={Boolean(errors.note)}
          aria-describedby={errors.note ? "note-error" : undefined}
        />
        {errors.note ? (
          <p id="note-error" className="mt-1 text-sm text-coral">
            {errors.note}
          </p>
        ) : null}
      </div>

      <button type="submit" className={btnNavy} disabled={pending}>
        {mode === "whatsapp"
          ? "Continue on WhatsApp"
          : pending
            ? "Checking…"
            : "Request appointment"}
      </button>

      {mode === "whatsapp" ? (
        <p className="text-sm leading-6 text-muted">
          After you submit, WhatsApp opens with your details ready to send to{" "}
          {clinic.phoneDisplay}.
        </p>
      ) : null}

      {result?.kind === "sent" ? (
        <p className="border border-teal/30 bg-teal-soft p-4 text-sm leading-6 text-navy" role="status">
          Your request was sent to the clinic’s booking connection. The clinic will confirm the time.
          If you do not hear back, call {clinic.phoneDisplay}.
        </p>
      ) : null}

      {result?.kind === "whatsapp" ? (
        <div className="border border-line bg-sand p-4 text-sm leading-6" role="status">
          <p>{result.message}</p>
          <TrackedLink
            href={result.href}
            event="whatsapp_click"
            eventLabel="appointment-form"
            className={`${btnNavy} mt-3`}
          >
            Send request on WhatsApp
          </TrackedLink>
        </div>
      ) : null}

      {mode === "server" ? (
        <div className="flex flex-col gap-2 border-t border-line pt-4 sm:flex-row">
          <TrackedLink
            href={`tel:${clinic.phoneTel}`}
            event="call_click"
            eventLabel="appointment-form"
            className={btnOutline}
          >
            Call {clinic.phoneDisplay}
          </TrackedLink>
          <TrackedLink
            href={whatsappUrl(whatsappMessages.appointment)}
            event="whatsapp_click"
            eventLabel="appointment-form-general"
            className={btnOutline}
          >
            WhatsApp the clinic
          </TrackedLink>
        </div>
      ) : null}
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
}: {
  id: keyof AppointmentInput;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-navy">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-1 w-full border border-line bg-white px-3 py-3 text-base"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-sm text-coral">
          {error}
        </p>
      ) : null}
    </div>
  );
}
