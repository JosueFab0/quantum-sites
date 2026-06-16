export default function BeforeAfter() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-[3rem] border border-[#2b2b2b]/10 bg-white/35 p-10">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#2b2b2b]/45">
            Antes
          </p>

          <h2 className="mb-6 text-4xl font-semibold tracking-[-0.04em]">
            Tu negocio depende solo de redes sociales.
          </h2>

          <ul className="space-y-4 text-[#2b2b2b]/70">
            <li>✕ Información difícil de encontrar</li>
            <li>✕ Clientes preguntando lo mismo siempre</li>
            <li>✕ Imagen poco profesional</li>
            <li>✕ Sin una presencia formal en Google</li>
          </ul>
        </div>

        <div className="rounded-[3rem] bg-[#2b2b2b] p-10 text-[#ebe8de]">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#ebe8de]/45">
            Después
          </p>

          <h2 className="mb-6 text-4xl font-semibold tracking-[-0.04em]">
            Tu negocio tiene una web clara, moderna y lista para vender.
          </h2>

          <ul className="space-y-4 text-[#ebe8de]/75">
            <li>✓ Servicios claros</li>
            <li>✓ Botón directo a WhatsApp</li>
            <li>✓ Diseño profesional</li>
            <li>✓ Mejor confianza desde la primera visita</li>
          </ul>
        </div>
      </div>
    </section>
  );
}