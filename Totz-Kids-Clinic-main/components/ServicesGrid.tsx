import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/services";

export function ServicesGrid({
  heading = "Comprehensive child healthcare",
  intro = "From newborn care and vaccinations to common childhood illnesses, growth monitoring and developmental concerns.",
}: {
  heading?: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(255,200,61,0.12),transparent_25%),linear-gradient(180deg,#fff9f5_0%,#f7f8ff_100%)]" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="soft-pill">Services</span>
          <h2 id="services-heading" className="mt-4 font-serif text-3xl text-navy md:text-5xl">
            {heading}
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted">{intro}</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
