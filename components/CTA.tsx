export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-col items-center justify-between gap-8 rounded-[3rem] bg-[#2b2b2b] px-8 py-12 text-[#ebe8de] md:flex-row md:px-14">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#ebe8de]/45">
            Cotización gratuita
          </p>

          <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em]">
            Cuéntanos tu idea y te decimos qué tipo de web te conviene.
          </h2>
        </div>

        <a
          href="mailto:quantum.sites.cr@gmail.com"
          className="rounded-full bg-[#ebe8de] px-8 py-4 font-semibold text-[#2b2b2b] transition hover:scale-105"
        >
          Solicitar cotización
        </a>
      </div>
    </section>
  );
}