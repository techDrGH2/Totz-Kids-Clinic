import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { BookAppointmentButton } from "@/components/AppointmentBooking";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ClinicPhoto } from "@/components/ClinicPhoto";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import {
  AuthoritativeCitations,
  MedicalByline,
} from "@/components/MedicalByline";
import { MedicalDisclaimer } from "@/components/MedicalDisclaimer";
import {
  formatDate,
  getPost,
  posts,
  readingTime,
  type BlogBlock,
} from "@/lib/blog";
import { clinic } from "@/lib/clinic";
import { doctor } from "@/lib/doctor";
import { pageMetadata } from "@/lib/seo";
import { articleSchema, faqSchema } from "@/lib/schema";
import { getService } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: `${post.title} | ${clinic.name}`,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    image: post.image.src,
    imageAlt: post.image.alt,
    publishedTime: post.publishedOn,
    modifiedTime: post.updatedOn,
    authors: [doctor.name, clinic.name],
    absoluteTitle: true,
  });
}

function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const faqBlock = post.blocks.find(
    (block): block is Extract<BlogBlock, { type: "faq" }> => block.type === "faq",
  );
  const related = post.relatedServices
    .map((serviceSlug) => getService(serviceSlug))
    .filter((service) => service !== undefined);
  const toc = post.blocks.filter(
    (block): block is Extract<BlogBlock, { type: "h2" }> => block.type === "h2",
  );

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      {faqBlock ? <JsonLd data={faqSchema(faqBlock.items)} /> : null}
      <article>
        <header className="service-hero border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
            <Breadcrumbs
              items={[
                { name: "Blog", href: "/blog" },
                { name: post.title, href: `/blog/${post.slug}` },
              ]}
            />

            <div className="section-surface mt-6 rounded-[2rem] p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="soft-pill">{post.category}</span>
                <span className="rounded-full border border-line bg-white/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
                  {readingTime(post)}
                </span>
              </div>

              <div className="mt-6 max-w-3xl">
                <h1 className="font-serif text-4xl text-navy md:text-5xl">{post.title}</h1>
                <p className="mt-4 text-sm text-muted md:text-base">
                  By{" "}
                  <Link href="/doctor" className="font-semibold text-teal hover:text-navy">
                    {doctor.name}
                  </Link>{" "}
                  · <time dateTime={post.publishedOn}>{formatDate(post.publishedOn)}</time>
                  {" · "}
                  Updated <time dateTime={post.updatedOn}>{formatDate(post.updatedOn)}</time>
                </p>
                {post.medicalReview ? (
                  <p className="mt-3 text-sm font-semibold text-navy">
                    Medically reviewed by {post.medicalReview.reviewer} on{" "}
                    <time dateTime={post.medicalReview.reviewedOn}>
                      {formatDate(post.medicalReview.reviewedOn)}
                    </time>
                  </p>
                ) : (
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                    This article has not been marked as medically reviewed. Please confirm
                    anything that concerns your child with {doctor.name} during a consultation.
                  </p>
                )}
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-[1fr_18rem] md:py-14">
          <div className="space-y-6">
            <div className="feature-card overflow-hidden rounded-[1.75rem] p-3 md:p-4">
              <ClinicPhoto
                src={post.image.src}
                alt={post.image.alt}
                width={1200}
                height={800}
                priority
                sizes="(min-width: 768px) 720px, 100vw"
                label="Article photograph"
                className="aspect-[3/2] h-auto w-full rounded-[1.4rem] object-cover"
              />
            </div>

            {toc.length >= 2 ? (
              <nav
                aria-label="Table of contents"
                className="section-surface rounded-[1.75rem] p-5 md:p-6"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-coral">
                  In this guide
                </p>
                <ol className="mt-3 space-y-2 text-sm">
                  {toc.map((item) => (
                    <li key={item.text}>
                      <a
                        href={`#${slugifyHeading(item.text)}`}
                        className="font-semibold text-navy hover:text-teal"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}

            <div className="section-surface rounded-[1.75rem] p-6 md:p-8">
              <div className="prose-clinic text-base leading-7 text-ink">
                {post.blocks.map((block, index) => {
                  if (block.type === "h2") {
                    return (
                      <h2
                        key={block.text}
                        id={slugifyHeading(block.text)}
                        className="mt-8 scroll-mt-28 font-serif text-2xl text-navy first:mt-0"
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "ul") {
                    return (
                      <ul key={index} className="mt-4 grid gap-3 pl-5">
                        {block.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 rounded-2xl border border-line bg-white/80 p-3 text-sm leading-6 text-ink"
                          >
                            <span
                              className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-coral"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.type === "p") {
                    return (
                      <p key={block.text} className="mt-4">
                        {block.text}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>
              <MedicalByline topic={post.category.toLowerCase()} reviewedOn={post.updatedOn} />
              <AuthoritativeCitations />
            </div>

            <div className="section-surface rounded-[1.75rem] p-6 md:p-8">
              <MedicalDisclaimer className="max-w-3xl" />
            </div>
          </div>

          <aside className="space-y-5">
            <div className="section-surface rounded-[1.75rem] p-5 md:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-coral">
                Need help?
              </p>
              <h2 className="mt-3 font-serif text-2xl text-navy">Speak with the clinic</h2>
              <div className="mt-4 grid gap-2.5">
                <BookAppointmentButton
                  eventLabel="blog-sidebar"
                  className="inline-flex items-center justify-center rounded-full bg-navy px-4 py-3 text-sm font-semibold text-white hover:bg-[#1c1f3d]"
                >
                  Book appointment
                </BookAppointmentButton>
                <Link
                  href="/doctor"
                  className="inline-flex items-center justify-center rounded-full border border-line bg-white px-4 py-3 text-sm font-semibold text-navy hover:border-teal"
                >
                  Meet {doctor.name}
                </Link>
              </div>
            </div>

            <div className="section-surface rounded-[1.75rem] p-5 md:p-6">
              <h3 className="font-serif text-2xl text-navy">Related services</h3>
              <ul className="mt-4 space-y-3">
                {related.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={service.href}
                      className="block rounded-2xl border border-line bg-white/80 p-3 text-sm font-semibold text-navy transition-colors hover:border-teal hover:text-teal"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/doctor"
                    className="block rounded-2xl border border-line bg-white/80 p-3 text-sm font-semibold text-navy transition-colors hover:border-teal hover:text-teal"
                  >
                    {doctor.name}
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        {faqBlock ? (
          <FAQ
            items={faqBlock.items}
            heading="Questions in this guide"
            id={`${post.slug}-faq`}
          />
        ) : null}
      </article>
      <AppointmentCTA eventLabel={`blog-${post.slug}`} />
    </>
  );
}
