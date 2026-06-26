"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#ebe8de] px-6 text-center text-[#2b2b2b]">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#2b2b2b]/40">
        Error
      </p>
      <h1 className="mb-4 text-5xl font-semibold tracking-[-0.05em]">
        Algo salió mal.
      </h1>
      <p className="mb-10 max-w-md text-[#2b2b2b]/55">
        Ocurrió un error inesperado. Puedes intentar recargar la página.
      </p>
      <button
        onClick={reset}
        className="rounded-full bg-[#2b2b2b] px-8 py-3.5 text-sm font-semibold text-[#ebe8de] transition-transform hover:scale-105"
      >
        Intentar de nuevo
      </button>
    </main>
  );
}
