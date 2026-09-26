import type { Metadata } from "next";
import { ServiceView } from "@/components/ServiceView";
import { pageMetadata } from "@/lib/seo";
import { requireService } from "@/lib/services";

const service = requireService("child-vaccination");

export const metadata: Metadata = pageMetadata({
  title: service.seoTitle,
  description: service.seoDescription,
  path: service.href,
});

export default function VaccinationPage() {
  return <ServiceView service={service} />;
}
