export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24">
      <div className="absolute left-1/2 top-24 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#2b2b2b]/10 blur-3xl" />

      <div className="grid w-full items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-6 inline-flex rounded-full border border-[#2b2b2b]/15 bg-white/35 px-4 py-2 text-sm font-medium backdrop-blur-xl">
            Diseño web estratégico para negocios que quieren verse caros
          </p>

          <h1 className="max-w-3xl text-6xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-8xl">
            Tu web no debería parecer hecha con plantilla.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#2b2b2b]/70">
            Creamos sitios limpios, elegantes y rápidos, pensados para generar
            confianza y convertir visitas en clientes reales.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="rounded-full bg-[#2b2b2b] px-8 py-4 font-semibold text-[#ebe8de] transition hover:scale-105"
            >
              Quiero cotizar
            </a>

            <a
              href="#servicios"
              className="rounded-full border border-[#2b2b2b]/15 bg-white/30 px-8 py-4 font-semibold backdrop-blur-xl transition hover:bg-white/50"
            >
              Ver servicios
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2.5rem] border border-[#2b2b2b]/10 bg-[#2b2b2b] p-4 shadow-2xl">
            <div className="rounded-[2rem] bg-[#ebe8de] p-5">
              <div className="mb-5 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-[#2b2b2b]/30" />
                <span className="h-3 w-3 rounded-full bg-[#2b2b2b]/20" />
                <span className="h-3 w-3 rounded-full bg-[#2b2b2b]/10" />
              </div>

              <div className="space-y-4">
                <div className="h-40 rounded-3xl bg-[#2b2b2b]" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-24 rounded-2xl bg-[#2b2b2b]/15" />
                  <div className="h-24 rounded-2xl bg-[#2b2b2b]/25" />
                  <div className="h-24 rounded-2xl bg-[#2b2b2b]/15" />
                </div>
                <div className="h-16 rounded-2xl bg-[#2b2b2b]/10" />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 -left-8 rounded-3xl border border-[#2b2b2b]/10 bg-white/40 p-5 shadow-xl backdrop-blur-xl">
            <p className="text-sm text-[#2b2b2b]/60">Conversión estimada</p>
            <p className="text-3xl font-semibold">+38%</p>
          </div>
        </div>
      </div>
    </section>
  );
}