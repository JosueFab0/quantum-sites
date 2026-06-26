import { CONTACT } from "../lib/siteConfig";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-7xl px-6 py-24">
      <div className="overflow-hidden rounded-[3rem] bg-[#2b2b2b] px-8 py-16 text-[#ebe8de] md:px-16">
        <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#ebe8de]/40">
              Contacto
            </p>
            <h2 className="text-5xl font-semibold leading-[1.05] tracking-[-0.05em] md:text-6xl">
              Hablemos de tu proyecto.
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#ebe8de]/55 md:text-right">
            La consulta inicial es gratis y sin compromiso. Cuéntanos qué necesitas.
          </p>
        </div>

        {/* Form */}
        <ContactForm />

        {/* Or use direct channels */}
        <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-[#ebe8de]/10 pt-10">
          <p className="text-sm text-[#ebe8de]/35">O contáctanos directamente:</p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-sm font-medium text-[#ebe8de]/60 underline underline-offset-4 transition-colors hover:text-[#ebe8de]"
          >
            {CONTACT.email}
          </a>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#ebe8de]/60 underline underline-offset-4 transition-colors hover:text-[#ebe8de]"
          >
            WhatsApp
          </a>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#ebe8de]/60 underline underline-offset-4 transition-colors hover:text-[#ebe8de]"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
