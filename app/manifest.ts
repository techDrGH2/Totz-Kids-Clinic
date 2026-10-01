import type { MetadataRoute } from "next";
import { clinic, siteUrl } from "@/lib/clinic";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: clinic.name,
    short_name: clinic.shortName,
    description: `${clinic.name} - paediatrician and child healthcare in ${clinic.address.area}, ${clinic.address.city}`,
    start_url: "/",
    display: "standalone",
    background_color: "#fff9f5",
    theme_color: "#25264a",
    lang: "en-IN",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
