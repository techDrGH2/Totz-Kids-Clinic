import type { Metadata } from "next";
import { ServiceView } from "@/components/ServiceView";
import { pageMetadata } from "@/lib/seo";
import { requireService } from "@/lib/services";

const service = requireService("developmental-assessment");

export const metadata: Metadata = pageMetadata({
  title: service.seoTitle,
  description: service.seoDescription,
  path: service.href,
});

export default function DevelopmentalCarePage() {
  return <ServiceView service={service} />;
}
