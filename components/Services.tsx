import { SERVICES } from "../data/content";

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="max-w-xl text-5xl font-semibold tracking-[-0.05em] md:text-6xl">
          Diseño que se siente simple, pero no barato.
        </h2>
        <p className="max-w-sm text-[#2b2b2b]/55 leading-7">
          Menos ruido visual. Más claridad, confianza y dirección para quien visita tu sitio.
        </p>
      </div>

      <div role="list" aria-label="Servicios">
        {SERVICES.map((service, i) => (
          <div
            key={service.number}
            role="listitem"
            className={`group border-t border-[#2b2b2b]/10 py-10 transition-all duration-300 hover:bg-[#2b2b2b] hover:px-6 hover:text-[#ebe8de] ${
              i === SERVICES.length - 1 ? "border-b" : ""
            }`}
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-14">
              <span className="shrink-0 text-sm font-semibold text-[#2b2b2b]/30 transition-colors group-hover:text-[#ebe8de]/30">
                {service.number}
              </span>
              <div className="flex flex-1 flex-col gap-4 md:flex-row md:gap-14">
                <h3 className="min-w-[220px] text-3xl font-semibold tracking-[-0.03em]">
                  {service.title}
                </h3>
                <div className="flex-1">
                  <p className="mb-5 leading-7 text-[#2b2b2b]/60 transition-colors group-hover:text-[#ebe8de]/65">
                    {service.text}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#2b2b2b]/15 px-3 py-1 text-xs font-medium text-[#2b2b2b]/55 transition-colors group-hover:border-[#ebe8de]/20 group-hover:text-[#ebe8de]/55"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
