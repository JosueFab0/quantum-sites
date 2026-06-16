export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h2 className="text-lg font-semibold tracking-tight">Quantum Sites</h2>

        <div className="hidden gap-8 text-sm text-white/70 md:flex">
          <a href="#" className="hover:text-white">Inicio</a>
          <a href="#servicios" className="hover:text-white">Servicios</a>
          <a href="#contacto" className="hover:text-white">Contacto</a>
        </div>
      </div>
    </nav>
  );
}