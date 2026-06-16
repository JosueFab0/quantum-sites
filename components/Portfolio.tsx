const projects = [
  "Restaurante premium",
  "Clínica dental",
  "Despacho legal",
];

export default function Portfolio() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-14 text-center">
        <h2 className="text-5xl font-semibold tracking-[-0.05em]">
          Conceptos de diseño
        </h2>
        <p className="mt-4 text-[#2b2b2b]/60">
          Proyectos demostrativos mientras construimos nuestro portafolio real.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project}
            className="overflow-hidden rounded-[2rem] border border-[#2b2b2b]/10 bg-white/35"
          >
            <div className="h-72 bg-[#2b2b2b]" />
            <div className="p-7">
              <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#2b2b2b]/45">
                Proyecto conceptual
              </p>
              <h3 className="text-2xl font-semibold">{project}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}