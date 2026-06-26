interface HeroProps {
  onContact: () => void;
  onPortfolio: () => void;
}

export default function Hero({ onContact, onPortfolio }: HeroProps) {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
      <div>
        <h1 className="max-w-xl text-6xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl lg:text-8xl">
          Sitios web que se sienten premium.
        </h1>

        <p className="mt-8 max-w-lg text-lg leading-8 text-[#2b2b2b]/60">
          Creamos páginas modernas, rápidas y limpias para negocios que quieren
          verse profesionales sin complicarse.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button
            onClick={onContact}
            className="rounded-full bg-[#2b2b2b] px-8 py-4 font-semibold text-[#ebe8de] transition-transform hover:scale-105"
          >
            Solicitar cotización
          </button>

          <button
            onClick={onPortfolio}
            className="group flex items-center gap-2 px-2 py-4 font-semibold text-[#2b2b2b]/60 transition-colors hover:text-[#2b2b2b]"
          >
            Ver conceptos
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>

      </div>

      {/* Browser mockup */}
      <div className="relative hidden lg:block">
        <div className="overflow-hidden rounded-[2rem] border border-[#2b2b2b]/10 bg-[#2b2b2b] shadow-2xl">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <div className="mx-auto flex w-48 items-center justify-center rounded-full bg-white/10 px-3 py-1">
              <span className="text-xs text-white/40">quantum.sites.cr</span>
            </div>
          </div>

          {/* Page content mockup */}
          <div className="bg-[#ebe8de] p-6">
            {/* Hero mock */}
            <div className="mb-4 space-y-2">
              <div className="h-3 w-24 rounded-full bg-[#2b2b2b]/20" />
              <div className="h-8 w-4/5 rounded-lg bg-[#2b2b2b]/70" />
              <div className="h-8 w-3/5 rounded-lg bg-[#2b2b2b]/70" />
              <div className="h-3 w-2/3 rounded-full bg-[#2b2b2b]/20" />
              <div className="h-3 w-1/2 rounded-full bg-[#2b2b2b]/20" />
            </div>

            {/* CTA buttons mock */}
            <div className="mb-5 flex gap-2">
              <div className="h-9 w-32 rounded-full bg-[#2b2b2b]" />
              <div className="h-9 w-24 rounded-full bg-[#2b2b2b]/15 border border-[#2b2b2b]/20" />
            </div>

            {/* Stats mock */}
            <div className="grid grid-cols-3 gap-3 border-t border-[#2b2b2b]/10 pt-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-1.5">
                  <div className="h-5 w-12 rounded bg-[#2b2b2b]/50" />
                  <div className="h-2.5 w-16 rounded-full bg-[#2b2b2b]/20" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating badge */}
        <div className="absolute -bottom-4 -right-4 rounded-2xl border border-[#2b2b2b]/10 bg-[#ebe8de] px-5 py-4 shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2b2b2b]/50">Lanzado en</p>
          <p className="text-2xl font-bold tracking-tight">7 días</p>
        </div>
      </div>
    </section>
  );
}
