const projects = [
  {
    title: "Restaurante Gourmet",
    type: "Proyecto Conceptual",
  },
  {
    title: "Clínica Dental Moderna",
    type: "Proyecto Conceptual",
  },
  {
    title: "Bufete Jurídico",
    type: "Proyecto Conceptual",
  },
];

export default function Portfolio() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <h2 className="mb-16 text-center text-5xl font-semibold">
        Portafolio
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="overflow-hidden rounded-3xl border border-[#2b2b2b]/10 bg-white/40"
          >
            <div className="h-64 bg-[#2b2b2b]/10" />

            <div className="p-6">
              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-2 text-[#2b2b2b]/60">
                {project.type}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}