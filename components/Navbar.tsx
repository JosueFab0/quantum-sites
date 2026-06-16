export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#2b2b2b]/10 bg-[#ebe8de]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center">
          <img
            src="/logo.jpeg"
            alt="Quantum Sites"
            className="h-16 w-auto"
          />
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-[#2b2b2b]/70 md:flex">
          <a href="#servicios" className="transition hover:text-[#2b2b2b]">
            Servicios
          </a>
          <a href="#portafolio" className="transition hover:text-[#2b2b2b]">
            Portafolio
          </a>
          <a href="#contacto" className="transition hover:text-[#2b2b2b]">
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