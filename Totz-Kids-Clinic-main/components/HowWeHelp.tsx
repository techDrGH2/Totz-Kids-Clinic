const steps = [
  {
    n: "01",
    title: "Understand",
    text: "We listen to the child’s symptoms, history and the parent’s concerns.",
  },
  {
    n: "02",
    title: "Assess",
    text: "Growth, development and the health concern are evaluated in a way that fits the visit.",
  },
  {
    n: "03",
    title: "Guide",
    text: "Parents receive a clear explanation and, where appropriate, a personalised care plan.",
  },
];

export function HowWeHelp() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#1b1d3a_0%,#25264a_40%,#2d3158_100%)] text-white" aria-labelledby="steps-heading">
      <div className="absolute inset-0 opacity-60" aria-hidden>
        <div className="absolute -left-10 top-8 h-36 w-36 rounded-full bg-[var(--brand-coral)]/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-44 w-44 rounded-full bg-[var(--brand-teal)]/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/85">
            Visit flow
          </span>
          <h2 id="steps-heading" className="mt-4 font-serif text-3xl md:text-5xl">
            How a visit unfolds
          </h2>
        </div>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.n} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
              <p className="font-serif text-4xl text-white/35">{step.n}</p>
              <h3 className="mt-4 font-serif text-2xl text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/75">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
