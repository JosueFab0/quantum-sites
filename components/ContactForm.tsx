"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      phone: fd.get("phone") as string,
      message: fd.get("message") as string,
      website: fd.get("website") as string, // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Error al enviar. Intenta de nuevo.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Error inesperado.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[2rem] border border-[#ebe8de]/15 bg-[#ebe8de]/10 px-8 py-12 text-center">
        <p className="text-3xl font-semibold tracking-tight">¡Mensaje recibido!</p>
        <p className="mt-3 text-[#ebe8de]/65">
          Te respondemos en menos de 24 horas.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
      {/* Honeypot — hidden from humans, bots fill it automatically */}
      <input
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}
      />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-[#ebe8de]/50">
          Nombre *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          maxLength={100}
          placeholder="Tu nombre"
          className="rounded-xl border border-[#ebe8de]/15 bg-[#ebe8de]/10 px-4 py-3 text-sm text-[#ebe8de] placeholder-[#ebe8de]/30 outline-none transition focus:border-[#ebe8de]/40 focus:bg-[#ebe8de]/15"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-[#ebe8de]/50">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="tu@email.com"
          className="rounded-xl border border-[#ebe8de]/15 bg-[#ebe8de]/10 px-4 py-3 text-sm text-[#ebe8de] placeholder-[#ebe8de]/30 outline-none transition focus:border-[#ebe8de]/40 focus:bg-[#ebe8de]/15"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-widest text-[#ebe8de]/50">
          Teléfono / WhatsApp
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          maxLength={20}
          placeholder="+506 8000 0000"
          className="rounded-xl border border-[#ebe8de]/15 bg-[#ebe8de]/10 px-4 py-3 text-sm text-[#ebe8de] placeholder-[#ebe8de]/30 outline-none transition focus:border-[#ebe8de]/40 focus:bg-[#ebe8de]/15"
        />
      </div>

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-[#ebe8de]/50">
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={4}
          placeholder="Cuéntanos sobre tu negocio y qué tipo de web necesitas..."
          className="resize-none rounded-xl border border-[#ebe8de]/15 bg-[#ebe8de]/10 px-4 py-3 text-sm text-[#ebe8de] placeholder-[#ebe8de]/30 outline-none transition focus:border-[#ebe8de]/40 focus:bg-[#ebe8de]/15"
        />
      </div>

      {status === "error" && (
        <p className="sm:col-span-2 text-sm text-red-400" role="alert">
          {errorMsg}
        </p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-[#ebe8de] px-8 py-3.5 text-sm font-semibold text-[#2b2b2b] transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Enviando…" : "Enviar mensaje"}
        </button>
      </div>
    </form>
  );
}
