"use client";

import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonialIntro, testimonialNote, testimonials } from "@/lib/testimonials";

function motionBehavior(): ScrollBehavior {
  if (typeof window === "undefined") return "auto";
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

export function Testimonials() {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const scrollerId = useId();
  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const sync = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const cards = [...el.querySelectorAll<HTMLElement>("[data-card]")];
    if (!cards.length) return;

    let closest = 0;
    let best = Number.POSITIVE_INFINITY;
    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - el.scrollLeft);
      if (distance < best) {
        best = distance;
        closest = index;
      }
    });

    const last = cards[cards.length - 1];
    setActive(closest);
    setCanPrev(el.scrollLeft > 2);
    setCanNext(last.offsetLeft + last.offsetWidth > el.scrollLeft + el.clientWidth + 2);
  }, []);

  useEffect(() => {
    sync();
    const el = scrollerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => sync());
    observer.observe(el);
    return () => observer.disconnect();
  }, [sync]);

  const scrollToIndex = useCallback((index: number) => {
    const el = scrollerRef.current;
    const card = el?.querySelectorAll<HTMLElement>("[data-card]")[index];
    if (!el || !card) return;
    el.scrollTo({ left: card.offsetLeft, behavior: motionBehavior() });
  }, []);

  const scrollByCard = useCallback(
    (direction: -1 | 1) => {
      const el = scrollerRef.current;
      if (!el) return;
      const cards = [...el.querySelectorAll<HTMLElement>("[data-card]")];
      if (!cards.length) return;
      let closest = 0;
      let best = Number.POSITIVE_INFINITY;
      cards.forEach((card, index) => {
        const distance = Math.abs(card.offsetLeft - el.scrollLeft);
        if (distance < best) {
          best = distance;
          closest = index;
        }
      });
      const next = Math.min(cards.length - 1, Math.max(0, closest + direction));
      scrollToIndex(next);
    },
    [scrollToIndex],
  );

  return (
    <section
      className="relative overflow-hidden border-y border-line/60 bg-[radial-gradient(circle_at_top_left,rgba(233,142,174,0.1),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(85,197,192,0.1),transparent_30%),linear-gradient(180deg,#fff9f5_0%,#ffffff_55%,#f7f8ff_100%)]"
      aria-labelledby="testimonials-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-12 right-[10%] h-36 w-36 rounded-full bg-[rgba(255,200,61,0.1)] blur-3xl" />
        <div className="absolute bottom-10 left-[8%] h-40 w-40 rounded-full bg-[rgba(85,197,192,0.1)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="soft-pill">Patient testimonials</span>
            <h2
              id="testimonials-heading"
              className="mt-4 font-serif text-3xl text-balance text-navy md:text-5xl"
            >
              What Parents Say About Tiny Totz Kids Clinic
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">{testimonialIntro}</p>
            <p className="mt-3 text-sm leading-6 text-muted/90">{testimonialNote}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <CarouselButton
              label="Previous testimonials"
              controls={scrollerId}
              disabled={!canPrev}
              onClick={() => scrollByCard(-1)}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </CarouselButton>
            <CarouselButton
              label="Next testimonials"
              controls={scrollerId}
              disabled={!canNext}
              onClick={() => scrollByCard(1)}
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </CarouselButton>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-2 scroll-mb-24 md:hidden">
          <CarouselButton
            label="Previous testimonials"
            controls={scrollerId}
            disabled={!canPrev}
            onClick={() => scrollByCard(-1)}
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </CarouselButton>
          <div
            className="flex min-w-0 flex-1 items-center justify-center gap-1"
            role="group"
            aria-label="Choose a testimonial"
          >
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className="grid h-11 w-5 shrink-0 place-items-center"
                aria-label={`Show testimonial ${index + 1} of ${testimonials.length}, ${item.name}`}
                aria-current={active === index ? "true" : undefined}
                onClick={() => scrollToIndex(index)}
              >
                <span
                  className={`h-2.5 rounded-full transition ${active === index ? "w-5 bg-teal" : "w-2.5 bg-navy/30"}`}
                />
              </button>
            ))}
          </div>
          <CarouselButton
            label="Next testimonials"
            controls={scrollerId}
            disabled={!canNext}
            onClick={() => scrollByCard(1)}
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </CarouselButton>
        </div>

        <ul
          id={scrollerId}
          ref={scrollerRef}
          onScroll={sync}
          aria-label="Parent testimonials"
          className="relative mt-6 flex w-full min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth overscroll-x-contain motion-reduce:scroll-auto [-ms-overflow-style:none] [scrollbar-width:none] md:mt-10 [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((item, index) => (
            <li
              key={item.id}
              data-card
              className="flex shrink-0 snap-start basis-full md:basis-[calc((100%-1rem)/2)] lg:basis-[calc((100%-2rem)/3)]"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${testimonials.length}`}
            >
              <figure className="relative flex h-full w-full min-w-0 flex-col overflow-hidden rounded-[1.75rem] border border-line/80 bg-white/90 p-5 shadow-[0_14px_32px_rgba(37,38,74,0.05)] md:p-6">
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal via-[#ffc83d] to-coral"
                />
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-soft text-teal">
                    <Quote className="h-5 w-5" aria-hidden />
                    <span className="sr-only">Quote</span>
                  </span>
                  <span className="flex gap-0.5 text-coral" aria-hidden="true">
                    {Array.from({ length: 5 }, (_, star) => (
                      <Star key={star} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </span>
                </div>
                <blockquote className="mt-4 min-w-0 flex-1">
                  <p className="text-base leading-7 text-pretty text-ink">{item.quote}</p>
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <cite className="text-base font-semibold text-navy not-italic">{item.name}</cite>
                  <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-teal uppercase">
                    Parent Review
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CarouselButton({
  label,
  controls,
  disabled,
  onClick,
  children,
}: {
  label: string;
  controls: string;
  disabled: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line bg-white/90 text-navy shadow-[0_8px_18px_rgba(37,38,74,0.05)] transition hover:border-teal hover:text-teal disabled:cursor-not-allowed disabled:opacity-40"
      aria-label={label}
      aria-controls={controls}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
