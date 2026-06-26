import { PROCESS_STEPS } from "../data/content";

export default function Process() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#2b2b2b]/40">
          Cómo trabajamos
        </p>
        <h2 className="max-w-2xl text-5xl font-semibold tracking-[-0.05em] md:text-6xl">
          Un proceso simple, sin humo.
        </h2>
      </div>

      {/* Desktop: horizontal flow */}
      <div className="hidden md:block">
        <div className="relative flex items-start gap-0">
          <div
            className="absolute left-[calc(12.5%+1px)] right-[calc(12.5%+1px)] top-4 h-px bg-[#2b2b2b]/15"
            aria-hidden="true"
          />
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="relative flex-1 px-4">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#2b2b2b]/20 bg-[#ebe8de] text-xs font-bold text-[#2b2b2b]/50">
                  {step.number}
                </span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-sm leading-6 text-[#2b2b2b]/55">{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical */}
      <div className="relative space-y-0 md:hidden">
        <div
          className="absolute bottom-4 left-3.5 top-4 w-px bg-[#2b2b2b]/15"
          aria-hidden="true"
        />
        {PROCESS_STEPS.map((step, i) => (
          <div key={step.number} className="relative flex gap-6 pb-10 last:pb-0">
            <div className="flex shrink-0 flex-col items-center">
              <span className="z-10 flex h-7 w-7 items-center justify-center rounded-full border border-[#2b2b2b]/20 bg-[#ebe8de] text-xs font-bold text-[#2b2b2b]/50">
                {i + 1}
              </span>
            </div>
            <div className="pt-0.5">
              <h3 className="mb-1.5 text-xl font-semibold">{step.title}</h3>
              <p className="text-sm leading-6 text-[#2b2b2b]/55">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
