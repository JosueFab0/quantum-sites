const steps = [
  ["01", "Conversamos", "Entendemos tu negocio, objetivos y estilo visual."],
  ["02", "Diseñamos", "Creamos una propuesta clara, moderna y profesional."],
  ["03", "Desarrollamos", "Construimos una web rápida y adaptable a celular."],
  ["04", "Publicamos", "Dejamos tu sitio listo para compartir con clientes."],
];

export default function Process() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <h2 className="mb-14 text-5xl font-semibold tracking-[-0.05em]">
        Un proceso simple, sin humo.
      </h2>

      <div className="grid gap-5 md:grid-cols-4">
        {steps.map(([number, title, text]) => (
          <article
            key={number}
            className="rounded-[2rem] border border-[#2b2b2b]/10 bg-white/35 p-7"
          >
            <p className="mb-10 text-sm font-bold text-[#2b2b2b]/40">
              {number}
            </p>
            <h3 className="mb-3 text-2xl font-semibold">{title}</h3>
            <p className="leading-7 text-[#2b2b2b]/65">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}