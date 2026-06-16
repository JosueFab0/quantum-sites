const projects = [
  {
    title: "Restaurante Premium",
    category: "Proyecto Conceptual",
    image: "/Portfolio/restaurant.png",
  },
  {
    title: "Clínica Dental",
    category: "Proyecto Conceptual",
    image: "/Portfolio/dental.png",
  },
  {
    title: "Despacho Legal",
    category: "Proyecto Conceptual",
    image: "/Portfolio/lawfirm.png",
  },
];

export default function Portfolio() {
  return (
    <section id="portafolio" className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-14 text-center">
        <h2 className="text-5xl font-semibold tracking-[-0.05em]">
          Conceptos de Diseño
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-[#2b2b2b]/60">
          Proyectos demostrativos que muestran cómo adaptamos la identidad
          visual según cada tipo de negocio.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-[2rem] border border-[#2b2b2b]/10 bg-white/35 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="flex h-80 items-center justify-center overflow-hidden bg-[#2b2b2b]/5">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-7">
              <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#2b2b2b]/45">
                {project.category}
              </p>

              <h3 className="text-2xl font-semibold">{project.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}