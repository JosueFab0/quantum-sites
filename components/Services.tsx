const services = [
  {
    number: "01",
    title: "Landing premium",
    text: "Una página enfocada en presentar tu negocio con claridad y llevar al cliente directo a WhatsApp.",
  },
  {
    number: "02",
    title: "Sitio corporativo",
    text: "Estructura completa para empresas: servicios, sobre nosotros, contacto, ubicación y confianza visual.",
  },
  {
    number: "03",
    title: "Rediseño visual",
    text: "Convertimos una web vieja o genérica en una experiencia moderna, elegante y creíble.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="max-w-2xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
          Diseño que se siente simple, pero no barato.
        </h2>

        <p className="max-w-md text-lg leading-8 text-[#2b2b2b]/65">
          La diferencia entre una web amateur y una premium no es meter más
          cosas. Es saber qué quitar.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="group rounded-[2rem] border border-[#2b2b2b]/10 bg-white/30 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-[#2b2b2b] hover:text-[#ebe8de]"
          >
            <p className="mb-14 text-sm font-semibold text-[#2b2b2b]/45 group-hover:text-[#ebe8de]/50">
              {service.number}
            </p>

            <h3 className="mb-5 text-3xl font-semibold tracking-tight">
              {service.title}
            </h3>

            <p className="leading-7 text-[#2b2b2b]/65 group-hover:text-[#ebe8de]/70">
              {service.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}