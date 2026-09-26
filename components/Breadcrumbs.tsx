import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ name: "Home", href: "/" }, ...items];

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <nav aria-label="Breadcrumb" className="mb-5">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
          {trail.map((item, index) => {
            const last = index === trail.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 ? (
                  <span aria-hidden className="text-line">
                    /
                  </span>
                ) : null}
                {last ? (
                  <span aria-current="page" className="text-navy">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-teal">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
