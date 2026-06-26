import { PRICING_PLANS } from "../data/content";

interface PricingProps {
  onContact: () => void;
}

export default function Pricing({ onContact }: PricingProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-16 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#2b2b2b]/40">
          Nuestros planes
        </p>
        <h2 className="text-5xl font-semibold tracking-[-0.05em] md:text-6xl">
          Soluciones para cada etapa
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[#2b2b2b]/55">
          Todos los precios son estimados. Cotizamos según tu proyecto específico, sin sorpresas.
        </p>
      </div>

      <div role="list" aria-label="Planes y precios">
        {PRICING_PLANS.map((plan, i) => (
          <div
            key={plan.title}
            role="listitem"
            className={`group border-t border-[#2b2b2b]/10 py-8 transition-colors duration-200 ${
              i === PRICING_PLANS.length - 1 ? "border-b" : ""
            } ${plan.featured ? "bg-[#2b2b2b]/[0.03]" : "hover:bg-[#2b2b2b]/[0.02]"}`}
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-semibold tracking-[-0.02em]">{plan.title}</h3>
                  {plan.featured && (
                    <span className="rounded-full bg-[#2b2b2b] px-3 py-0.5 text-xs font-semibold text-[#ebe8de]">
                      Más popular
                    </span>
                  )}
                </div>
                <p className="mb-4 text-[#2b2b2b]/55">{plan.description}</p>
                <ul className="flex flex-wrap gap-x-6 gap-y-1.5">
                  {plan.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-[#2b2b2b]/50">
                      <span className="h-px w-3 bg-[#2b2b2b]/30" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex shrink-0 flex-col items-start gap-3 md:items-end">
                <p className="text-3xl font-bold tracking-tight">{plan.price}</p>
                <button
                  onClick={onContact}
                  className="text-sm font-semibold text-[#2b2b2b]/50 underline underline-offset-4 transition-colors hover:text-[#2b2b2b]"
                >
                  Cotizar este plan →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-[2rem] border border-[#2b2b2b]/10 bg-white/30 p-8 text-center">
        <p className="text-lg font-semibold">¿No sabes cuál plan necesitas?</p>
        <p className="mt-2 text-[#2b2b2b]/55">
          Cuéntanos tu negocio y te recomendamos la opción ideal sin costo.
        </p>
        <button
          onClick={onContact}
          className="mt-6 rounded-full bg-[#2b2b2b] px-8 py-3.5 text-sm font-semibold text-[#ebe8de] transition-transform hover:scale-105"
        >
          Consulta gratuita
        </button>
      </div>
    </section>
  );
}
