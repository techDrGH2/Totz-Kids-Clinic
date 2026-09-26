import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Gallery } from "@/components/Gallery";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Clinic Gallery",
  description:
    "Photographs of Dr. Shilpa Reddy T and Tiny Totz Kids Clinic in Puppalguda will be published here. Placeholders mark where each real image belongs.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <header className="border-b border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
          <Breadcrumbs items={[{ name: "Gallery", href: "/gallery" }]} />
          <h1 className="font-serif text-4xl text-navy md:text-5xl">Clinic gallery</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
            These frames are reserved for photographs of the doctor and the clinic.
            They are labelled so a stock image is never mistaken for Dr. Shilpa Reddy T.
          </p>
        </div>
      </header>
      <Gallery showHeading={false} />
    </>
  );
}
