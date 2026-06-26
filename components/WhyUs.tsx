import { BENEFITS } from "../data/content";

export default function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 grid gap-6 md:grid-cols-2 md:items-end">
        <h2 className="text-5xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
          No solo hacemos páginas bonitas. Creamos confianza digital.
        </h2>
        <p className="text-[#2b2b2b]/55 text-lg leading-8 md:text-right">
          Cada decisión de diseño tiene un propósito: hacer que tu negocio inspire confianza desde el primer segundo.
        </p>
      </div>

      <div role="list" aria-label="Por qué elegirnos">
        {BENEFITS.map((item, i) => (
          <div
            key={item.number}
            role="listitem"
            className={`group flex flex-col gap-4 border-t border-[#2b2b2b]/10 py-7 transition-colors duration-200 hover:bg-[#2b2b2b]/[0.03] sm:flex-row sm:items-start sm:gap-10 ${
              i === BENEFITS.length - 1 ? "border-b" : ""
            }`}
          >
            <span className="w-10 shrink-0 text-sm font-semibold text-[#2b2b2b]/30 transition-colors group-hover:text-[#2b2b2b]/50">
              {item.number}
            </span>
            <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-10">
              <h3 className="min-w-[220px] text-xl font-semibold">{item.title}</h3>
              <p className="text-[#2b2b2b]/55 leading-7">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
