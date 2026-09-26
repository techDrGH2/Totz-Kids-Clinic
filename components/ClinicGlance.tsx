import { clinic } from "@/lib/clinic";
import { clinicGlance } from "@/lib/schema";

export function ClinicGlance() {
  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(233,142,174,0.09),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(85,197,192,0.1),transparent_30%),linear-gradient(180deg,#fff9f5_0%,#ffffff_55%,#f7f8ff_100%)]"
      aria-labelledby="glance-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-12 right-[12%] h-36 w-36 rounded-full bg-[rgba(255,200,61,0.1)] blur-3xl" />
        <div className="absolute bottom-8 left-[8%] h-40 w-40 rounded-full bg-[rgba(85,197,192,0.1)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="soft-pill">At a glance</span>
          <h2
            id="glance-heading"
            className="mt-4 font-serif text-3xl text-navy md:text-5xl"
          >
            Clinic facts
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            A short factual summary of who consults, where, and how to get in touch.
          </p>
        </div>

        <div className="section-surface relative mt-8 overflow-hidden rounded-[1.75rem] p-5 md:p-7">
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal via-[#ffc83d] to-coral"
          />
          <dl className="divide-y divide-line/80">
            {clinicGlance.map((row) => (
              <div
                key={row.label}
                className="grid gap-1 py-3.5 first:pt-1 last:pb-1 sm:grid-cols-[11rem_1fr] sm:items-start sm:gap-8"
              >
                <dt className="text-sm font-semibold tracking-[0.02em] text-teal">
                  {row.label}
                </dt>
                <dd className="text-sm leading-6 text-ink">
                  {row.label === "Phone" ? (
                    <a
                      href={`tel:${clinic.phoneTel}`}
                      className="font-medium text-navy transition hover:text-teal"
                    >
                      {row.value}
                    </a>
                  ) : row.label === "Email" ? (
                    <a
                      href={`mailto:${clinic.email}`}
                      className="break-all font-medium text-navy transition hover:text-teal"
                    >
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
