const questions = [
  {
    question: "¿Cuánto tarda una página web?",
    answer: "Normalmente entre 1 y 3 semanas.",
  },
  {
    question: "¿Incluye dominio?",
    answer: "Podemos ayudarte a configurarlo.",
  },
  {
    question: "¿Incluye hosting?",
    answer: "Se cotiza según las necesidades.",
  },
];

export default function FAQ() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-28">
      <h2 className="mb-16 text-center text-5xl font-semibold">
        Preguntas Frecuentes
      </h2>

      <div className="space-y-6">
        {questions.map((item) => (
          <div
            key={item.question}
            className="rounded-2xl border border-[#2b2b2b]/10 bg-white/40 p-6"
          >
            <h3 className="mb-2 text-xl font-semibold">
              {item.question}
            </h3>

            <p className="text-[#2b2b2b]/70">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}