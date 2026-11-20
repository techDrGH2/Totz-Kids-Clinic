import { trustStats } from "@/lib/clinic";

export function TrustStats() {
  return (
    <section aria-label="Clinic highlights" className="border-b border-line bg-paper">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
        {trustStats.map((stat, index) => (
          <div
            key={stat.id}
            className={`px-5 py-5 ${index % 2 === 1 ? "border-l border-line" : ""} ${
              index >= 2 ? "border-t border-line md:border-t-0" : ""
            } ${index > 0 ? "md:border-l md:border-line" : ""}`}
          >
            <dt className="font-serif text-3xl text-navy">{stat.value}</dt>
            <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
