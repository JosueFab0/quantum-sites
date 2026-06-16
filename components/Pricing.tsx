const plans = [
  {
    name: "Landing Page",
    price: "Desde $299",
    description: "Ideal para negocios que necesitan una presencia profesional rápida.",
    features: ["1 página principal", "Diseño responsive", "WhatsApp integrado", "Formulario de contacto"],
  },
  {
    name: "Sitio Empresarial",
    price: "Desde $599",
    description: "Para negocios que necesitan más secciones y una imagen más completa.",
    features: ["Hasta 5 secciones", "SEO básico", "Portafolio o servicios", "Publicación incluida"],
  },
  {
    name: "Tienda / Sistema",
    price: "Cotización",
    description: "Para proyectos con catálogo, pagos, usuarios o funciones especiales.",
    features: ["Catálogo de productos", "Panel administrativo", "Integraciones", "Soporte personalizado"],
  },
];

export default function Pricing() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-16 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#2b2b2b]/45">
          Inversión
        </p>

        <h2 className="text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
          Precios claros para empezar.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-[#2b2b2b]/65">
          Los precios pueden variar según el alcance, pero esto te da una idea realista antes de escribirnos.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className="rounded-[2rem] border border-[#2b2b2b]/10 bg-white/35 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <h3 className="mb-3 text-2xl font-semibold">{plan.name}</h3>
            <p className="mb-6 text-4xl font-bold tracking-[-0.04em]">{plan.price}</p>
            <p className="mb-8 leading-7 text-[#2b2b2b]/65">{plan.description}</p>

            <ul className="space-y-3 text-[#2b2b2b]/70">
              {plan.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}