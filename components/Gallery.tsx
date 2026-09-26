import { ClinicPhoto } from "@/components/ClinicPhoto";

const shots = [
  {
    src: "/images/doctor/dr-shilpa-reddy.webp",
    fallbackSrc: "/images/doctor/dr-shilpa-reddy-paediatrician-puppalguda.svg",
    alt: "Dr. Shilpa Reddy T, paediatrician at Tiny Totz Kids Clinic in Puppalguda, Hyderabad",
    caption: "Dr. Shilpa Reddy T",
    width: 800,
    height: 1000,
  },
  {
    src: "/images/clinic/clinic-exterior.webp",
    fallbackSrc: "/images/clinic/tiny-totz-kids-clinic-puppalguda.svg",
    alt: "Exterior view of Tiny Totz Kids Clinic at DNS Business Hub in Puppalguda, Hyderabad",
    caption: "The clinic at DNS Business Hub",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/clinic/paediatric-consultation-room-puppalguda.webp",
    fallbackSrc: "/images/clinic/paediatric-consultation-room-puppalguda.svg",
    alt: "Paediatric consultation room at Tiny Totz Kids Clinic in Puppalguda, Hyderabad",
    caption: "Consultation room",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/clinic/newborn-care-paediatrician-puppalguda.webp",
    fallbackSrc: "/images/clinic/newborn-care-paediatrician-puppalguda.svg",
    alt: "Newborn care consultation at Tiny Totz Kids Clinic in Puppalguda, Hyderabad",
    caption: "Newborn visits",
    width: 1200,
    height: 800,
  },
];

export function Gallery({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section aria-labelledby={showHeading ? "gallery-heading" : undefined}>
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        {showHeading ? (
          <div className="max-w-2xl">
            <p className="eyebrow">Clinic</p>
            <h2 id="gallery-heading" className="mt-3 font-serif text-3xl text-navy md:text-4xl">
              The clinic
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Real photographs of Dr. Shilpa Reddy T and the consultation rooms
              will replace these labelled placeholders. Stock photos are not used
              in their place.
            </p>
          </div>
        ) : null}
        <ul className={`grid gap-4 sm:grid-cols-2 ${showHeading ? "mt-10" : ""}`}>
          {shots.map((shot) => (
            <li key={shot.caption} className="border border-line bg-mist">
              <ClinicPhoto
                src={shot.src}
                fallbackSrc={shot.fallbackSrc}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                className="aspect-[3/2] h-auto w-full object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
                label={shot.caption}
              />
              <p className="px-4 py-3 text-sm text-navy">{shot.caption}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
