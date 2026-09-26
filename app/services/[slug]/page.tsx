import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { ServiceView } from "@/components/ServiceView";
import { pageMetadata } from "@/lib/seo";
import { getService, services } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: service.href,
    image: service.image?.src,
    imageAlt: service.image?.alt,
  });
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  if (service.href !== `/services/${service.slug}`) {
    permanentRedirect(service.href);
  }
  return <ServiceView service={service} />;
}
