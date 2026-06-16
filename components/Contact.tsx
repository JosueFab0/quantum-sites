export default function Contact() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="rounded-[3rem] bg-[#2b2b2b] px-8 py-20 text-center text-[#ebe8de] md:px-20">

        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#ebe8de]/50">
          Contacto
        </p>

        <h2 className="mx-auto max-w-4xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
          Hablemos de tu proyecto.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-[#ebe8de]/65">
          Cuéntanos qué negocio tienes y qué tipo de sitio necesitas.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <a
            href="mailto:quantum.sites.cr@gmail.com"
            className="rounded-full bg-[#ebe8de] px-8 py-4 font-semibold text-[#2b2b2b] transition hover:scale-105"
          >
            Enviar correo
          </a>

          <a
            href="https://www.instagram.com/quantum.sites.cr/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#ebe8de]/20 px-8 py-4 font-semibold text-[#ebe8de] transition hover:bg-[#ebe8de]/10"
          >
            Instagram
          </a>

          <a
            href="https://wa.me/50683442955"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-8 py-4 font-semibold text-[#25D366] transition hover:bg-[#25D366]/20"
          >
            WhatsApp
          </a>

        </div>

        <div className="mt-12 text-sm text-[#ebe8de]/50">
          quantum.sites.cr@gmail.com
        </div>

      </div>
    </section>
  );
}