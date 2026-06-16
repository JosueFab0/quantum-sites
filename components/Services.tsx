const services = [
  {
    title: "Landing pages",
    text: "Páginas enfocadas en presentar tu negocio y llevar clientes a WhatsApp.",
  },
  {
    title: "Sitios corporativos",
    text: "Estructuras completas para empresas que necesitan verse serias.",
  },
  {
    title: "Rediseño visual",
    text: "Convertimos una web vieja en una experiencia moderna y confiable.",
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="max-w-2xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
          Diseño que se siente simple, pero no barato.
        </h2>

        <p className="max-w-md text-lg leading-8 text-[#2b2b2b]/65">
          Menos ruido visual. Más claridad, confianza y dirección.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-[2rem] border border-[#2b2b2b]/10 bg-white/35 p-8 transition hover:-translate-y-2 hover:bg-[#2b2b2b] hover:text-[#ebe8de]"
          >
            <h3 className="mb-5 text-3xl font-semibold">{service.title}</h3>
            <p className="leading-7 opacity-70">{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}