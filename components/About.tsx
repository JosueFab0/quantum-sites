export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <div className="rounded-[3rem] bg-[#2b2b2b] px-8 py-20 text-[#ebe8de] md:px-16">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#ebe8de]/50">
          Quiénes somos
        </p>

        <h2 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
          Somos un pequeño equipo profesional construyendo un estudio web con criterio.
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-[#ebe8de]/65">
          Nos enfocamos en diseño, desarrollo y estrategia digital para crear
          sitios web que se vean profesionales, funcionen bien y sean fáciles
          de mantener.
        </p>
      </div>
    </section>
  );
}