export default function Hero() {
  return (
    <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
      <div>
        <p className="mb-6 inline-flex rounded-full border border-[#2b2b2b]/15 bg-white/40 px-4 py-2 text-sm font-medium">
          Estudio web creativo en Costa Rica
        </p>

        <h1 className="max-w-3xl text-6xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-8xl">
          Sitios web que se sienten premium desde el primer clic.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-[#2b2b2b]/70">
          Creamos páginas modernas, rápidas y limpias para negocios que quieren
          verse profesionales sin complicarse.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contacto"
            className="rounded-full bg-[#2b2b2b] px-8 py-4 font-semibold text-[#ebe8de] transition hover:scale-105"
          >
            Solicitar cotización
          </a>

          <a
            href="#portafolio"
            className="rounded-full border border-[#2b2b2b]/15 bg-white/40 px-8 py-4 font-semibold transition hover:bg-white/70"
          >
            Ver conceptos
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="rounded-[2.5rem] bg-[#2b2b2b] p-4 shadow-2xl">
          <div className="rounded-[2rem] bg-[#ebe8de] p-5">
            <div className="mb-5 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-[#2b2b2b]/30" />
              <span className="h-3 w-3 rounded-full bg-[#2b2b2b]/20" />
              <span className="h-3 w-3 rounded-full bg-[#2b2b2b]/10" />
            </div>

            <div className="space-y-4">
              <div className="h-44 rounded-3xl bg-[#2b2b2b]" />
              <div className="grid grid-cols-3 gap-4">
                <div className="h-24 rounded-2xl bg-[#2b2b2b]/15" />
                <div className="h-24 rounded-2xl bg-[#2b2b2b]/25" />
                <div className="h-24 rounded-2xl bg-[#2b2b2b]/15" />
              </div>
              <div className="h-16 rounded-2xl bg-[#2b2b2b]/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}