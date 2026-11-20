import type { MetadataRoute } from "next";
import { absoluteUrl, indexablePaths } from "@/lib/seo";

function priorityFor(path: string): number {
  if (path === "/") return 1;
  if (path === "/appointment" || path === "/contact" || path === "/doctor") {
    return 0.9;
  }
  if (
    path === "/services" ||
    path === "/vaccination" ||
    path === "/newborn-care" ||
    path === "/child-health" ||
    path === "/allergies-asthma" ||
    path === "/nutrition-growth" ||
    path === "/developmental-care" ||
    path.startsWith("/services/")
  ) {
    return 0.85;
  }
  if (path === "/blog" || path.startsWith("/blog/")) return 0.75;
  if (path === "/areas-we-serve" || path.startsWith("/areas-we-serve/")) {
    return 0.7;
  }
  if (path === "/privacy" || path === "/terms" || path === "/medical-disclaimer") {
    return 0.3;
  }
  return 0.6;
}

function changeFrequencyFor(
  path: string,
): NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]> {
  if (path === "/") return "weekly";
  if (path === "/blog" || path.startsWith("/blog/")) return "weekly";
  if (path === "/privacy" || path === "/terms" || path === "/medical-disclaimer") {
    return "yearly";
  }
  return "monthly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return indexablePaths().map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: changeFrequencyFor(path),
    priority: priorityFor(path),
  }));
}
