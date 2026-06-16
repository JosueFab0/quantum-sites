import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#2b2b2b]/10 bg-[#ebe8de]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <a href="#" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Quantum Sites"
            width={180}
            height={60}
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2b2b2b]/70">
          <a
            href="#servicios"
            className="hover:text-[#2b2b2b] transition"
          >
            Servicios
          </a>

          <a
            href="#portafolio"
            className="hover:text-[#2b2b2b] transition"
          >
            Portafolio
          </a>

          <a
            href="#contacto"
            className="hover:text-[#2b2b2b] transition"
          >
            Contacto
          </a>
        </div>

        <a
          href="#contacto"
          className="rounded-full bg-[#2b2b2b] px-5 py-2 text-sm font-semibold text-[#ebe8de] transition hover:scale-105"
        >
          Cotizar
        </a>

      </div>
    </nav>
  );
}