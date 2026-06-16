const faqs = [
  {
    q: "¿Cuánto tarda una página?",
    a: "Depende del alcance, pero una landing puede tardar entre 1 y 2 semanas.",
  },
  {
    q: "¿Incluye dominio y hosting?",
    a: "Podemos ayudarte a configurarlo, pero se cotiza aparte según el caso.",
  },
  {
    q: "¿Puedo pedir cambios?",
    a: "Sí. Definimos rondas de revisión desde el inicio para evitar confusión.",
  },
];

export default function FAQ() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-28">
      <h2 className="mb-12 text-center text-5xl font-semibold tracking-[-0.05em]">
        Preguntas frecuentes
      </h2>

      <div className="space-y-5">
        {faqs.map((item) => (
          <article
            key={item.q}
            className="rounded-3xl border border-[#2b2b2b]/10 bg-white/35 p-7"
          >
            <h3 className="mb-3 text-xl font-semibold">{item.q}</h3>
            <p className="leading-7 text-[#2b2b2b]/65">{item.a}</p>
          </article>
        ))}
      </div>
    </section>
  );
}