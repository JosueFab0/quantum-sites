export default function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-7xl px-6 py-28">
      <div className="relative overflow-hidden rounded-[3rem] bg-[#2b2b2b] px-8 py-20 text-center text-[#ebe8de] shadow-2xl md:px-20">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#ebe8de]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#ebe8de]/10 blur-3xl" />

        <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-[#ebe8de]/50">
          Empecemos simple
        </p>

        <h2 className="mx-auto max-w-4xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
          Hagamos una web que tu cliente sí quiera tomar en serio.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#ebe8de]/65">
          Escríbeme por WhatsApp, me cuentas qué negocio tienes y te digo qué
          tipo de página te conviene. Sin venderte humo.
        </p>

        <a
          href="https://wa.me/50688888888"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex rounded-full bg-[#ebe8de] px-9 py-4 font-semibold text-[#2b2b2b] transition hover:scale-105"
        >
          Contactar por WhatsApp
        </a>
      </div>
    </section>
  );
}