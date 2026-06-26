"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "../data/content";

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-[#2b2b2b]/10 last:border-b">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-lg font-semibold">{q}</span>
        <span
          className={`shrink-0 text-xl font-light text-[#2b2b2b]/40 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {open && (
        <div className="accordion-open pb-6 pr-10">
          <p className="leading-7 text-[#2b2b2b]/60">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="mb-12 text-5xl font-semibold tracking-[-0.05em]">
        Preguntas frecuentes
      </h2>
      <div role="list" aria-label="Preguntas frecuentes">
        {FAQ_ITEMS.map((item) => (
          <AccordionItem key={item.q} q={item.q} a={item.a} />
        ))}
      </div>
    </section>
  );
}
