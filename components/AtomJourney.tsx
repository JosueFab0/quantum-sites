"use client";

import { useEffect, useState } from "react";

export default function AtomJourney() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (totalScroll <= 0) return;

      const currentProgress = window.scrollY / totalScroll;
      setProgress(Math.min(Math.max(currentProgress, 0), 1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rotation = progress * 1080;
  const moveY = progress * 55;
  const moveX = Math.sin(progress * Math.PI * 2) * 12;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Átomo viajero */}
      <img
        src="/atom.png"
        alt=""
        className="absolute left-1/2 top-[10%] w-[300px] opacity-10"
        style={{
          transform: `translate(calc(-50% + ${moveX}vw), ${moveY}vh) rotate(${rotation}deg)`,
          transition: "transform 80ms linear",
        }}
      />

      {/* Laptop pequeña al final */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 transition-all duration-700"
        style={{
          opacity: progress > 0.8 ? 1 : 0,
          transform: `translateX(-50%) scale(${progress > 0.8 ? 0.8 : 0.5})`,
        }}
      >
        <div className="w-[420px]">
          <div className="h-[220px] rounded-t-[24px] border border-white/10 bg-[#1c1c1c] p-3 shadow-2xl">
            <div className="flex h-full items-center justify-center rounded-t-[18px] bg-[#2b2b2b]">
              <img
                src="/atom.png"
                alt=""
                className="w-16 opacity-70"
              />
            </div>
          </div>

          <div className="mx-auto h-4 w-[500px] rounded-b-full bg-[#111]" />
        </div>
      </div>
    </div>
  );
}