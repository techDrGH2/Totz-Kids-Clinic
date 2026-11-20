import type { Metadata } from "next";
import { ServiceView } from "@/components/ServiceView";
import { pageMetadata } from "@/lib/seo";
import { requireService } from "@/lib/services";

const service = requireService("newborn-care");

export const metadata: Metadata = pageMetadata({
  title: service.seoTitle,
  description: service.seoDescription,
  path: service.href,
});

export default function NewbornCarePage() {
  return <ServiceView service={service} />;
}
