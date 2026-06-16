const benefits = [
  {
    title: "Diseño moderno",
    text: "Sitios limpios, elegantes y alineados con la identidad de cada negocio.",
  },
  {
    title: "Optimizado para celular",
    text: "La mayoría de clientes visita desde el teléfono. Diseñamos pensando en eso primero.",
  },
  {
    title: "Contacto directo",
    text: "Integramos WhatsApp, correo e Instagram para que tus clientes puedan escribirte fácil.",
  },
  {
    title: "Carga rápida",
    text: "Una web lenta pierde clientes. Construimos páginas ligeras y eficientes.",
  },
];

export default function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-16 max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#2b2b2b]/45">
          Por qué elegirnos
        </p>

        <h2 className="text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
          No solo hacemos páginas bonitas. Creamos confianza digital.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-4">
        {benefits.map((item) => (
          <article
            key={item.title}
            className="rounded-[2rem] border border-[#2b2b2b]/10 bg-white/35 p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-[#2b2b2b] hover:text-[#ebe8de] hover:shadow-2xl"
          >
            <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>
            <p className="leading-7 opacity-70">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}