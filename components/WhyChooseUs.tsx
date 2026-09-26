const points = [
  {
    title: "Gentle consultations",
    text: "The visit is paced so a child can settle and a parent can finish the story. Rushing the history helps nobody.",
    accent: "bg-teal-soft text-teal",
    bar: "from-teal to-[#7dd3ce]",
  },
  {
    title: "Evidence-based care",
    text: "Suggestions follow paediatric practice and the child in front of us. They are not copied from a trend or a guarantee.",
    accent: "bg-[var(--brand-soft-yellow)] text-navy",
    bar: "from-[#ffc83d] to-[#ffe08a]",
  },
  {
    title: "Clear explanations for parents",
    text: "You should leave knowing what was found, what to watch, and when to call back. Medical words are translated.",
    accent: "bg-[var(--brand-soft-pink)] text-coral",
    bar: "from-coral to-[#f48a90]",
  },
  {
    title: "Continuity of care",
    text: "Follow-up stays with the same clinic and the same doctor, so the next visit starts from a known history.",
    accent: "bg-mist text-navy",
    bar: "from-[#e98eae] to-teal",
  },
];

export function WhyChooseUs() {
  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(85,197,192,0.09),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(233,142,174,0.08),transparent_30%),linear-gradient(180deg,#ffffff_0%,#fff9f5_100%)]"
      aria-labelledby="why-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-10 left-[6%] h-36 w-36 rounded-full bg-[rgba(255,200,61,0.1)] blur-3xl" />
        <div className="absolute right-[10%] bottom-8 h-40 w-40 rounded-full bg-[rgba(85,197,192,0.1)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="soft-pill">How the clinic works</span>
          <h2
            id="why-heading"
            className="mt-4 font-serif text-3xl text-navy md:text-5xl"
          >
            Child-centred care. Clear guidance. Trusted expertise.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Four simple principles shape every paediatric visit at Tiny Totz -
            so parents leave with clarity, not confusion.
          </p>
        </div>

        <ol className="mt-10 grid gap-5 md:grid-cols-2">
          {points.map((point, index) => (
            <li
              key={point.title}
              className="group relative overflow-hidden rounded-[1.75rem] border border-line/80 bg-white/85 p-6 shadow-[0_14px_32px_rgba(37,38,74,0.05)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(37,38,74,0.08)] md:p-7"
            >
              <span
                aria-hidden
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${point.bar}`}
              />
              <div className="flex items-center gap-3.5">
                <span
                  className={`grid h-11 w-11 place-items-center rounded-xl text-sm font-bold tracking-wide ${point.accent}`}
                >
                  0{index + 1}
                </span>
                <p className="text-[11px] font-bold tracking-[0.16em] text-coral uppercase">
                  Step {index + 1}
                </p>
              </div>
              <h3 className="mt-5 font-serif text-2xl text-navy">{point.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-muted">
                {point.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
