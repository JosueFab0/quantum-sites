import Image from "next/image";
import { PORTFOLIO_PROJECTS } from "../data/content";

export default function Portfolio() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#2b2b2b]/40">
          Portafolio
        </p>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-5xl font-semibold tracking-[-0.05em] md:text-6xl">
            Conceptos de diseño
          </h2>
          <p className="max-w-sm text-[#2b2b2b]/55 leading-7">
            Proyectos demostrativos que muestran cómo adaptamos la identidad visual según cada negocio.
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" role="list" aria-label="Proyectos">
        {PORTFOLIO_PROJECTS.map((project) => (
          <article
            key={project.title}
            role="listitem"
            className="group overflow-hidden rounded-[2rem] border border-[#2b2b2b]/10 bg-white/30"
          >
            {/* Image area */}
            <div className={`relative h-64 overflow-hidden ${project.color}`}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-40"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="px-6 text-center text-sm font-medium text-white/90">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Info */}
            <div className="flex items-end justify-between p-7">
              <div>
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#2b2b2b]/40">
                  {project.category}
                </p>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <span
                className="text-[#2b2b2b]/30 transition-transform group-hover:translate-x-1 group-hover:text-[#2b2b2b]"
                aria-hidden="true"
              >
                →
              </span>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-[#2b2b2b]/40">
        ¿Tienes un proyecto en mente?{" "}
        <span className="text-[#2b2b2b]/70 underline underline-offset-4">
          El tuyo podría estar aquí.
        </span>
      </p>
    </section>
  );
}
