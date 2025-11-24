"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export function FloatingOrb() {
  const [inHero, setInHero] = useState(true);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    heroRef.current = document.querySelector("#hero-section");

    const observer = new IntersectionObserver(
      ([entry]) => setInHero(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => heroRef.current && observer.unobserve(heroRef.current);
  }, []);

  return (
    <div
      className={`fixed top-4 left-4 z-[9999] pointer-events-none transition-all duration-700
      ${inHero ? "ellipse-motion" : "float-wiggle"}`}
    >
      <Image
        src="/floating.png"
        alt="floating"
        width={120}
        height={120}
      />
    </div>
  );
}
