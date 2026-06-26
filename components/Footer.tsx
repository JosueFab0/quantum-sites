interface FooterProps {
  onTabChange: (tab: string) => void;
}

const navLinks = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "portafolio", label: "Portafolio" },
  { id: "precios", label: "Precios" },
  { id: "nosotros", label: "Nosotros" },
];

const legalLinks = [
  { id: "legal", label: "Términos y Condiciones", section: "terminos" },
  { id: "legal", label: "Política de Privacidad", section: "privacidad" },
  { id: "legal", label: "Política de Cookies", section: "cookies" },
];

export default function Footer({ onTabChange }: FooterProps) {
  return (
    <footer className="border-t border-[#2b2b2b]/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top row */}
        <div className="mb-10 flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <button
              onClick={() => onTabChange("inicio")}
              className="mb-3 text-lg font-bold tracking-tight text-[#2b2b2b] transition-opacity hover:opacity-70"
            >
              Quantum Sites
            </button>
            <p className="max-w-xs text-sm text-[#2b2b2b]/40 leading-6">
              Diseño web premium para negocios que quieren verse profesionales desde el primer clic. Costa Rica.
            </p>
          </div>

          <nav className="flex flex-col gap-2" aria-label="Navegación footer">
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#2b2b2b]/30">
              Sitio
            </p>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onTabChange(link.id)}
                className="text-left text-sm text-[#2b2b2b]/50 transition-colors hover:text-[#2b2b2b]"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <nav className="flex flex-col gap-2" aria-label="Documentos legales">
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#2b2b2b]/30">
              Legal
            </p>
            {legalLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => onTabChange(link.id)}
                className="text-left text-sm text-[#2b2b2b]/50 transition-colors hover:text-[#2b2b2b]"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col gap-2 border-t border-[#2b2b2b]/08 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-[#2b2b2b]/35">
            © 2026 Quantum Sites · Costa Rica · Todos los derechos reservados.
          </p>
          <p className="text-xs text-[#2b2b2b]/25">
            Operamos bajo la Ley 8968 de Protección de Datos de Costa Rica.
          </p>
        </div>
      </div>
    </footer>
  );
}
