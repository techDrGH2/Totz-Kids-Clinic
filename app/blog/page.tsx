import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { blogCategories, formatDate, posts, readingTime } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Parent Guides from the Clinic",
  description:
    "Educational articles for parents from Tiny Totz Kids Clinic on newborn visits, vaccination questions, growth and well-child checkups.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-line bg-[linear-gradient(135deg,rgba(255,249,245,1),rgba(247,248,255,1))]">
        <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
          <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />

          <div className="section-surface mt-6 rounded-[2rem] p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="soft-pill">Parent education</span>
              <span className="inline-flex items-center rounded-full border border-line bg-white/80 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted">
                Evidence-based guidance
              </span>
            </div>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <h1 className="font-serif text-4xl text-navy md:text-5xl">
                  Parent guides from the clinic
                </h1>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
                  Practical notes from the clinic. They are general education, not a personal
                  medical review, unless an article says it was reviewed.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-line bg-[rgba(255,255,255,0.82)] p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-coral">
                  Good questions, calmer decisions
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  <div>
                    <p className="text-2xl font-semibold text-navy">{posts.length}</p>
                    <p className="text-sm text-muted">Helpful guides</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-navy">7</p>
                    <p className="text-sm text-muted">Care topics</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-navy">1:1</p>
                    <p className="text-sm text-muted">Clinic-first advice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-teal">
            Topics
          </h2>
          <ul className="flex flex-wrap gap-2">
            {blogCategories.map((category) => (
              <li
                key={category}
                className="rounded-full border border-line bg-white/70 px-3 py-1.5 text-sm text-navy shadow-sm"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="feature-card group block overflow-hidden rounded-[1.75rem] p-0"
                aria-label={`Read ${post.title}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-5 md:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-[rgba(85,197,192,0.12)] px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-teal">
                      {post.category}
                    </span>
                    <span className="text-[0.68rem] font-medium uppercase tracking-[0.12em] text-muted">
                      {formatDate(post.publishedOn)}
                    </span>
                  </div>

                  <h2 className="mt-4 font-serif text-2xl leading-tight text-navy transition-colors group-hover:text-teal md:text-[2rem]">
                    {post.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-muted md:text-[0.96rem]">
                    {post.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
                      {readingTime(post)}
                    </p>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-lg text-navy transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
