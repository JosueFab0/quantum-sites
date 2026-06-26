export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#ebe8de]">
      <div className="flex gap-1.5" aria-label="Cargando..." role="status">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-2 w-2 rounded-full bg-[#2b2b2b]/30 animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}
