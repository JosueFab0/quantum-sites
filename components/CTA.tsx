interface CTAProps {
  onContact: () => void;
}

export default function CTA({ onContact }: CTAProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex flex-col items-start justify-between gap-8 rounded-[2.5rem] border border-[#2b2b2b]/10 bg-white/40 px-10 py-12 md:flex-row md:items-center md:px-14">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#2b2b2b]/40">
            Cotización gratuita
          </p>
          <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            Cuéntanos tu idea y te decimos qué tipo de web te conviene.
          </h2>
        </div>

        <button
          onClick={onContact}
          className="shrink-0 rounded-full bg-[#2b2b2b] px-8 py-4 font-semibold text-[#ebe8de] transition-transform hover:scale-105"
        >
          Solicitar cotización →
        </button>
      </div>
    </section>
  );
}
