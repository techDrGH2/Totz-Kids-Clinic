import Link from "next/link";
import { clinic } from "@/lib/clinic";
import { doctor } from "@/lib/doctor";
import { paediatricCitations } from "@/lib/schema";
import { formatDate } from "@/lib/blog";

export function MedicalByline({
  topic,
  reviewedOn = clinic.contentReviewedOn,
}: {
  topic: string;
  reviewedOn?: string;
}) {
  return (
    <aside className="mt-10 rounded-2xl border border-line bg-mist/80 p-5 text-sm leading-6 text-ink">
      <p>
        <span className="font-semibold text-navy">Written for parents about {topic}</span>{" "}
        at {clinic.name}, {clinic.address.area}, {clinic.address.city}.
      </p>
      <p className="mt-2">
        Clinical guidance by{" "}
        <Link href="/doctor" className="font-semibold text-teal hover:text-navy">
          {doctor.name}
        </Link>
        , {doctor.qualificationsInline}, {doctor.role}.
      </p>
      <p className="mt-2 text-muted">
        Last reviewed:{" "}
        <time dateTime={reviewedOn}>{formatDate(reviewedOn)}</time>
      </p>
    </aside>
  );
}

export function AuthoritativeCitations() {
  return (
    <aside className="mt-8 rounded-2xl border border-line bg-paper p-5">
      <h2 className="font-serif text-xl text-navy">Authoritative references</h2>
      <p className="mt-2 text-sm leading-6 text-muted">
        General child-health guidance used for educational context. Your child’s
        plan is decided in clinic.
      </p>
      <ul className="mt-3 space-y-2 text-sm">
        {paediatricCitations.map((item) => (
          <li key={item.url}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal hover:text-navy"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
