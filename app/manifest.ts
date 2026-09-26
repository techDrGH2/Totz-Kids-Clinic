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
        src: "/images/favicon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/favicon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
