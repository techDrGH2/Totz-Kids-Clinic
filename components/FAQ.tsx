import type { FaqItem } from "@/lib/faqs";

export function FAQ({
  items,
  heading = "Questions parents ask",
  intro,
  id = "faq-heading",
  tone = "mist",
}: {
  items: FaqItem[];
  heading?: string;
  intro?: string;
  id?: string;
  tone?: "mist" | "plain";
}) {
  const splitIndex = Math.min(5, items.length);
  const columns = [items.slice(0, splitIndex), items.slice(splitIndex)];

  return (
    <section
      className={tone === "mist" ? "bg-mist" : "bg-paper"}
      aria-labelledby={id}
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
        <p className="eyebrow">FAQ</p>
        <h2 id={id} className="mt-3 font-serif text-3xl text-navy md:text-4xl">
          {heading}
        </h2>
        {intro ? <p className="mt-4 text-base leading-7 text-muted">{intro}</p> : null}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {columns.map((column, columnIndex) =>
            column.length ? (
              <div
                key={columnIndex}
                className="rounded-[1.5rem] border border-line bg-white/80 p-4 shadow-sm md:p-5"
              >
                {column.map((item) => (
                  <details
                    key={item.question}
                    className="group border-b border-line py-1 last:border-b-0"
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3 text-left text-base font-semibold text-navy marker:content-none [&::-webkit-details-marker]:hidden">
                      <span itemProp="name">{item.question}</span>
                      <span
                        aria-hidden
                        className="shrink-0 text-teal transition group-open:rotate-180"
                      >
                        ▾
                      </span>
                    </summary>
                    <div
                      className="pb-4 text-sm leading-7 text-muted"
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <p itemProp="text">{item.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            ) : null,
          )}
        </div>
      </div>
    </section>
  );
}
