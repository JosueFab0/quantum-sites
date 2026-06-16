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

  const rotation = progress * 1440;
  const moveY = progress * 72;
  const moveX = Math.sin(progress * Math.PI * 2) * 18;
  const scale =
    progress < 0.8 ? 1 - progress * 0.25 : 0.75 - (progress - 0.8) * 2;

  const atomOpacity = progress > 0.95 ? 0 : 0.25;
  const laptopOpacity = progress > 0.72 ? 1 : 0;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <img
        src="/atom.png"
        alt=""
        className="absolute left-1/2 top-[10%] w-[420px]"
        style={{
          transform: `translate(calc(-50% + ${moveX}vw), ${moveY}vh) rotate(${rotation}deg) scale(${scale})`,
          opacity: atomOpacity,
          transition: "transform 80ms linear, opacity 200ms linear",
        }}
      />

      <div
        className="absolute bottom-10 left-1/2 w-[620px] -translate-x-1/2 transition-opacity duration-700"
        style={{ opacity: laptopOpacity }}
      >
        <div className="mx-auto h-[320px] rounded-t-[2rem] border border-[#ebe8de]/20 bg-[#111] p-4 shadow-2xl">
          <div className="flex h-full items-center justify-center rounded-t-[1.4rem] bg-[#2b2b2b]">
            <div
              className="text-center transition-all duration-500"
              style={{
                opacity: progress > 0.86 ? 1 : 0,
                transform: `scale(${progress > 0.86 ? 1 : 0.65})`,
              }}
            >
              <img src="/atom.png" alt="" className="mx-auto w-24 opacity-80" />

              <p className="mt-4 text-sm font-semibold tracking-[0.45em] text-[#ebe8de]/70">
                QUANTUM SITES
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto h-5 w-[700px] rounded-b-full bg-[#161616] shadow-xl" />
      </div>
    </div>
  );
}