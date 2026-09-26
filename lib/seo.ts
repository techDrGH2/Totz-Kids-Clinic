import type { Metadata } from "next";
import { clinic, siteUrl } from "@/lib/clinic";
import { posts } from "@/lib/blog";
import { areas } from "@/lib/locations";
import { services } from "@/lib/services";

export function absoluteUrl(path: string) {
  if (path === "/") return `${siteUrl}/`;
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalised}`;
}

const defaultOgImage = {
  url: absoluteUrl("/opengraph-image"),
  width: 1200,
  height: 630,
  alt: `${clinic.name} - paediatrician and child healthcare in ${clinic.address.area}, ${clinic.address.city}`,
} as const;

export const seoKeywords = [
  "pediatrician in Puppalguda",
  "paediatrician in Hyderabad",
  "paediatrician in Puppalguda",
  "child specialist in Puppalguda",
  "child specialist in Hyderabad",
  "newborn care clinic Hyderabad",
  "kids vaccination clinic Hyderabad",
  "kids vaccination clinic Puppalguda",
  "child health clinic Puppalguda",
  "allergies and asthma child clinic Hyderabad",
  "nutrition growth clinic for children Hyderabad",
  "Tiny Totz Kids Clinic",
  "Dr. Shilpa Reddy T",
  clinic.name,
];

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** Use when the title should ignore the layout template. */
  absoluteTitle?: boolean;
  index?: boolean;
  /** Absolute or site-relative image path for OG/Twitter cards. */
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  keywords?: string[];
};

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  index = true,
  image,
  imageAlt,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  keywords = seoKeywords,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image
    ? {
        url: image.startsWith("http") ? image : absoluteUrl(image),
        width: 1200,
        height: 630,
        alt: imageAlt ?? title,
      }
    : defaultOgImage;

  return {
    metadataBase: new URL(siteUrl),
    title: absoluteTitle ? { absolute: title } : title,
    description,
    applicationName: clinic.name,
    authors: (authors ?? [clinic.name]).map((name) => ({
      name,
      url: siteUrl,
    })),
    creator: clinic.name,
    publisher: clinic.name,
    category: "Health",
    keywords,
    referrer: "origin-when-cross-origin",
    alternates: {
      canonical: url,
      languages: {
        "en-IN": url,
        "x-default": url,
      },
    },
    robots: index
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : { index: false, follow: false },
    openGraph: {
      title,
      description,
      url,
      siteName: clinic.name,
      locale: "en_IN",
      type,
      images: [ogImage],
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime,
            authors: authors ?? [clinic.name],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
    appleWebApp: {
      capable: true,
      title: clinic.shortName,
      statusBarStyle: "default",
    },
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
    other: {
      "geo.region": "IN-TG",
      "geo.placename": `${clinic.address.area}, ${clinic.address.city}, ${clinic.address.state}`,
      "geo.position": `${clinic.maps.geo.latitude};${clinic.maps.geo.longitude}`,
      ICBM: `${clinic.maps.geo.latitude}, ${clinic.maps.geo.longitude}`,
      "theme-color": "#25264a",
      "msapplication-TileColor": "#25264a",
      "og:email": clinic.email,
      "og:phone_number": clinic.phoneDisplay,
      "og:street-address": clinic.address.streetAddress,
      "og:locality": clinic.address.city,
      "og:region": clinic.address.state,
      "og:postal-code": clinic.address.postalCode,
      "og:country-name": clinic.address.country,
    },
  };
}

export function indexablePaths() {
  const staticPaths = [
    "/",
    "/about",
    "/doctor",
    "/services",
    "/vaccination",
    "/newborn-care",
    "/child-health",
    "/allergies-asthma",
    "/nutrition-growth",
    "/developmental-care",
    "/areas-we-serve",
    "/faq",
    "/gallery",
    "/blog",
    "/contact",
    "/appointment",
    "/privacy",
    "/terms",
    "/medical-disclaimer",
  ];

  const dynamicPaths = [
    ...services.map((service) => service.href),
    ...areas.map((area) => `/areas-we-serve/${area.slug}`),
    ...posts.map((post) => `/blog/${post.slug}`),
  ];

  return [...new Set([...staticPaths, ...dynamicPaths])];
}
