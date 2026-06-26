"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function AtomJourney() {
  const [rotation, setRotation] = useState(0);
  const frameRef = useRef<number | null>(null);
  const lastScrollY = useRef(0);
  const rotationRef = useRef(0);
  const goingUpRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (frameRef.current !== null) return; // skip if frame already queued

      frameRef.current = requestAnimationFrame(() => {
        const currentY = window.scrollY;
        goingUpRef.current = currentY < lastScrollY.current;
        lastScrollY.current = currentY;
        rotationRef.current = currentY * 0.15 + (goingUpRef.current ? 180 : 0);
        setRotation(rotationRef.current);
        frameRef.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute left-1/2 top-[40%] h-[650px] w-[650px]"
        style={{
          opacity: 0.1,
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
          transition: "transform 120ms linear",
        }}
      >
        <Image
          src="/atom.png"
          alt=""
          fill
          sizes="650px"
          priority={false}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
