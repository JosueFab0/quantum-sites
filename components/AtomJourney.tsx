"use client";

import { useEffect, useRef, useState } from "react";

export default function AtomJourney() {
  const [scrollY, setScrollY] = useState(0);
  const [isGoingUp, setIsGoingUp] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setIsGoingUp(currentY < lastScrollY.current);
      lastScrollY.current = currentY;
      setScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rotation = scrollY * 0.6;
  const verticalPosition = 120 + scrollY * 0.25;
  const flip = isGoingUp ? 180 : 0;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <img
        src="/atom.png"
        alt=""
        className="absolute left-1/2 w-[260px] -translate-x-1/2 opacity-10"
        style={{
          top: `${verticalPosition}px`,
          transform: `translateX(-50%) rotate(${rotation + flip}deg)`,
          transition: "top 100ms linear, transform 100ms linear",
        }}
      />
    </div>
  );
}