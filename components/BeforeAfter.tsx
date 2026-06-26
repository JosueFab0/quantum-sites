const before = [
  "Información difícil de encontrar",
  "Clientes preguntando lo mismo siempre",
  "Imagen poco profesional",
  "Sin presencia formal en Google",
];

const after = [
  "Servicios claros desde el primer segundo",
  "Botón directo a WhatsApp siempre visible",
  "Diseño profesional que genera confianza",
  "Mejor posicionamiento y visibilidad",
];

export default function BeforeAfter() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <p className="mb-12 text-sm font-semibold uppercase tracking-[0.3em] text-[#2b2b2b]/40">
        La transformación
      </p>

      <div className="grid gap-px overflow-hidden rounded-[2.5rem] border border-[#2b2b2b]/10 md:grid-cols-2">
        {/* Before */}
        <div className="bg-white/40 p-10 md:p-14">
          <p className="mb-8 text-xs font-bold uppercase tracking-[0.35em] text-[#2b2b2b]/35">
            Sin sitio web
          </p>
          <h3 className="mb-8 text-3xl font-semibold tracking-[-0.03em] text-[#2b2b2b]/70">
            Tu negocio depende solo de redes sociales.
          </h3>
          <ul className="space-y-4" role="list">
            {before.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#2b2b2b]/55">
                <span className="mt-1 shrink-0 text-[#2b2b2b]/30" aria-hidden="true">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* After */}
        <div className="bg-[#2b2b2b] p-10 text-[#ebe8de] md:p-14">
          <p className="mb-8 text-xs font-bold uppercase tracking-[0.35em] text-[#ebe8de]/35">
            Con Quantum Sites
          </p>
          <h3 className="mb-8 text-3xl font-semibold tracking-[-0.03em]">
            Tu negocio tiene una web clara, moderna y lista para vender.
          </h3>
          <ul className="space-y-4" role="list">
            {after.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#ebe8de]/75">
                <span className="mt-1 shrink-0 text-[#ebe8de]/60" aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
