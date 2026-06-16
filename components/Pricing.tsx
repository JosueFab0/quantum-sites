const plans = [
  {
    title: "Landing Page Simple",
    price: "$150 - $300",
    description: "1 página con información básica.",
  },
  {
    title: "Negocio Pequeño",
    price: "$300 - $600",
    description: "Inicio, servicios, contacto y mapa.",
  },
  {
    title: "Web Corporativa",
    price: "$600 - $1,500",
    description: "5 a 10 páginas y diseño personalizado.",
  },
  {
    title: "Tienda Online Básica",
    price: "$800 - $2,500",
    description: "Productos, carrito y pagos.",
  },
  {
    title: "Sistema Web Personalizado",
    price: "$2,500+",
    description: "Login, bases de datos y paneles.",
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="mx-auto max-w-6xl px-6 py-28">
      <div className="mb-16 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#2b2b2b]/50">
          Nuestros planes
        </p>

        <h2 className="text-5xl font-semibold tracking-[-0.05em]">
          Soluciones para cada etapa de tu negocio
        </h2>
      </div>

      <div className="space-y-5">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className="flex flex-col gap-4 rounded-[2rem] border border-[#2b2b2b]/10 bg-white/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-[#2b2b2b] hover:text-[#ebe8de] hover:shadow-xl md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold">{plan.title}</h3>
              <p className="text-[#2b2b2b]/65 transition group-hover:text-[#ebe8de]/70">
                {plan.description}
              </p>
            </div>

            <div className="text-3xl font-bold">{plan.price}</div>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-4 text-center text-sm uppercase tracking-[0.2em] text-[#2b2b2b]/55 md:grid-cols-4">
        <div>Rápido</div>
        <div>Seguro</div>
        <div>Optimizado</div>
        <div>Soporte continuo</div>
      </div>
    </section>
  );
}