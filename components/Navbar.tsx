export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#2b2b2b]/10 bg-[#ebe8de]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <a href="#inicio" className="flex items-center">
          <img
            src="/logo.jpeg"
            alt="Quantum Sites"
            className="h-16 w-auto"
          />
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium text-[#2b2b2b]/70 xl:flex">

          <a href="#por-que-elegirnos" className="transition hover:text-[#2b2b2b]">
            ¿Por qué nosotros?
          </a>

          <a href="#proceso" className="transition hover:text-[#2b2b2b]">
            Proceso
          </a>

          <a href="#servicios" className="transition hover:text-[#2b2b2b]">
            Servicios
          </a>

          <a href="#transformacion" className="transition hover:text-[#2b2b2b]">
            Antes y Después
          </a>

          <a href="#portafolio" className="transition hover:text-[#2b2b2b]">
            Portafolio
          </a>

          <a href="#precios" className="transition hover:text-[#2b2b2b]">
            Precios
          </a>

          <a href="#faq" className="transition hover:text-[#2b2b2b]">
            FAQ
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