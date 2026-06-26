export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#2b2b2b]/40">
          Quiénes somos
        </p>
      </div>

      <div className="grid gap-16 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="text-5xl font-semibold leading-[1.05] tracking-[-0.05em] md:text-6xl">
            Un estudio web construido con criterio, no con plantillas.
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          <p className="text-lg leading-8 text-[#2b2b2b]/65">
            Somos un equipo pequeño y enfocado. Nos especializamos en diseño, desarrollo y
            estrategia digital para crear sitios que se vean profesionales, funcionen bien
            y sean fáciles de mantener a largo plazo.
          </p>
          <p className="leading-7 text-[#2b2b2b]/55">
            No usamos plantillas genéricas. Cada sitio empieza desde cero con un entendimiento
            claro del negocio, su audiencia y su objetivo. Eso es lo que hace la diferencia.
          </p>
        </div>
      </div>

    </section>
  );
}
