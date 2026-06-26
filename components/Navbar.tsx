"use client";

import { useState } from "react";

const tabs = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "portafolio", label: "Portafolio" },
  { id: "precios", label: "Precios" },
  { id: "nosotros", label: "Nosotros" },
];

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onContact: () => void;
}

export default function Navbar({ activeTab, onTabChange, onContact }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleTab = (id: string) => {
    onTabChange(id);
    setMobileOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#2b2b2b]/10 bg-[#ebe8de]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <button
          onClick={() => handleTab("inicio")}
          className="flex items-center gap-2 text-lg font-bold tracking-tight"
          aria-label="Ir al inicio"
        >
          <img
            src="/logo.jpeg"
            alt="Quantum Sites"
            className="h-10 w-auto"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <span className="text-[#2b2b2b]">Quantum Sites</span>
        </button>

        {/* Desktop tabs */}
        <div className="hidden items-center gap-1 lg:flex" role="tablist" aria-label="Secciones">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => handleTab(tab.id)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? "text-[#2b2b2b]"
                  : "text-[#2b2b2b]/45 hover:text-[#2b2b2b]"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span
                  className="absolute bottom-0 left-3 right-3 h-px rounded-full bg-[#2b2b2b]"
                  aria-hidden="true"
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onContact}
            className="rounded-full bg-[#2b2b2b] px-5 py-2 text-sm font-semibold text-[#ebe8de] transition-transform hover:scale-105 focus-visible:scale-105"
          >
            Cotizar
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col justify-center gap-[5px] p-1 lg:hidden"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-px w-5 bg-[#2b2b2b] transition-all duration-300 ${
                mobileOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-[#2b2b2b] transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-[#2b2b2b] transition-all duration-300 ${
                mobileOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-[#2b2b2b]/10 bg-[#ebe8de] px-6 pb-4 pt-2 lg:hidden">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTab(tab.id)}
              className={`flex w-full items-center justify-between py-3 text-sm font-medium border-b border-[#2b2b2b]/08 last:border-0 ${
                activeTab === tab.id ? "text-[#2b2b2b]" : "text-[#2b2b2b]/50"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="h-1.5 w-1.5 rounded-full bg-[#2b2b2b]" aria-hidden="true" />
              )}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
