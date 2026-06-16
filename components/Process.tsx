const steps = [
  {
    number: "01",
    title: "Reunión Inicial",
    description:
      "Conocemos tu negocio, objetivos y necesidades.",
  },
  {
    number: "02",
    title: "Diseño",
    description:
      "Creamos una propuesta visual moderna y profesional.",
  },
  {
    number: "03",
    title: "Desarrollo",
    description:
      "Construimos la página optimizada para móviles y velocidad.",
  },
  {
    number: "04",
    title: "Publicación",
    description:
      "Lanzamos tu sitio y lo dejamos listo para recibir clientes.",
  },
];

export default function Process() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <h2 className="mb-16 text-center text-5xl font-semibold">
        Nuestro Proceso
      </h2>

      <div className="grid gap-6 md:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-3xl border border-[#2b2b2b]/10 bg-white/30 p-6"
          >
            <p className="mb-6 text-sm font-bold text-[#2b2b2b]/40">
              {step.number}
            </p>

            <h3 className="mb-3 text-xl font-semibold">
              {step.title}
            </h3>

            <p className="text-[#2b2b2b]/70">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}