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

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const rotation = scrollY * 0.12;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <img
        src="/atom.png"
        alt="Quantum Atom"
        className="absolute left-1/2 top-1/2 w-[600px]"
        style={{
            opacity: 0.5,

            transform: `
                translate(-50%, -50%)
                rotate(${rotation + (isGoingUp ? 180 : 0)}deg)
             `,

            transition: "transform 120ms linear",
         }}
        />
    </div>
  );
}