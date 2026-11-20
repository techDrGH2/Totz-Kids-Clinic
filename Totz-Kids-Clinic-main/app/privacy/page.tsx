import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { clinic } from "@/lib/clinic";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${clinic.name} handles information submitted through this website.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-12">
      <Breadcrumbs items={[{ name: "Privacy Policy", href: "/privacy" }]} />
      <h1 className="font-serif text-4xl text-navy">Privacy policy</h1>
      <div className="prose-clinic mt-6 text-base leading-7">
        <p>
          {clinic.name} uses this website to share clinic information and to receive
          appointment requests. This page describes that use in plain language. It is
          not a substitute for legal advice.
        </p>
        <h2 className="mt-8 font-serif text-2xl text-navy">What you may send</h2>
        <p className="mt-3">
          The appointment form asks for a parent or guardian’s name, the child’s name,
          a phone number, an optional email, a preferred date and time, a short reason
          for the visit, and an optional note. Please do not include detailed medical
          history in the note.
        </p>
        <h2 className="mt-8 font-serif text-2xl text-navy">How a request is delivered</h2>
        <p className="mt-3">
          If a booking connection has been configured by the clinic, the request is sent
          to that connection. If it has not, the website asks you to send the same
          request on WhatsApp or to call {clinic.phoneDisplay}. The site does not create
          an account for you.
        </p>
        <h2 className="mt-8 font-serif text-2xl text-navy">Analytics</h2>
        <p className="mt-3">
          Analytics and tag-manager tools load only when the clinic adds its own
          measurement IDs. They are not shipped with placeholder IDs.
        </p>
        <h2 className="mt-8 font-serif text-2xl text-navy">Contact</h2>
        <p className="mt-3">
          Questions about information you have sent can be emailed to {clinic.email} or
          asked by phone.
        </p>
      </div>
    </article>
  );
}
