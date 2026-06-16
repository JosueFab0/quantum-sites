const projects = [
  {
    title: "Restaurante Premium",
    category: "Proyecto Conceptual",
    image: "/portfolio/restaurant.png",
  },
  {
    title: "Clínica Dental",
    category: "Próximamente",
    image: "/portfolio/dental.png",
  },
  {
    title: "Despacho Legal",
    category: "Próximamente",
    image: "/portfolio/lawfirm.png",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portafolio"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <div className="mb-14 text-center">
        <h2 className="text-5xl font-semibold tracking-[-0.05em]">
          Conceptos de Diseño
        </h2>

        <p className="mt-4 text-[#2b2b2b]/60">
          Algunos conceptos visuales que muestran nuestro enfoque en diseño web
          moderno y experiencias premium.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="
              group
              overflow-hidden
              rounded-[2rem]
              border
              border-[#2b2b2b]/10
              bg-white/35
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >
            <div className="h-72 overflow-hidden bg-[#2b2b2b]/10">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-[#2b2b2b] text-[#ebe8de]">
                  <div className="text-center">
                    <p className="text-lg font-semibold">
                      Proyecto en desarrollo
                    </p>

                    <p className="mt-2 text-sm opacity-70">
                      Próximamente
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="p-7">
              <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#2b2b2b]/45">
                {project.category}
              </p>

              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}