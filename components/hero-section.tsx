"use client";

import { useEffect, useState, Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";



const phrases = [
  "From AzaadiSAT to the Moon.",
  "108 Nations — 12,000 Girls.",
  "One Mission: Empower Futures.",
];

function MoonModel() {
  const { scene } = useGLTF("/models/moon.glb");
  return (
    <primitive
      object={scene}
      scale={1.8}
      rotation={[0.3, 0.6, 0]}
      position={[0, 0, 0]}
    />
  );
}

/* ⭐ Background Stars (separate canvas) */
function BackgroundStars() {
  const ref = useRef<THREE.Points | null>(null);
  const starCount = 5000;

  const positions = useMemo(() => {
    const arr = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 200;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 200;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 200;
    }
    return arr;
  }, []);

  useFrame(() => {
    if (ref.current) ref.current.rotation.z += 0.0002;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.4} color="#ffffff" opacity={0.8} />
    </points>
  );
}

export function HeroSection() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState("");

  // Typing effect
  useEffect(() => {
    let index = 0;
    const phrase = phrases[currentPhrase];
    setDisplayText("");

    const interval = setInterval(() => {
      if (index < phrase.length) {
        setDisplayText(phrase.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(
          () => setCurrentPhrase((p) => (p + 1) % phrases.length),
          2000
        );
      }
    }, 80);

    return () => clearInterval(interval);
  }, [currentPhrase]);

  const scrollToMission = () =>
    document
      .getElementById("mission-overview")
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">

      {/* ⭐ Background Stars Canvas */}
      <div className="absolute inset-0 -z-20">
        <Canvas camera={{ position: [0, 0, 50], fov: 75 }}>
          <BackgroundStars />
        </Canvas>
      </div>

      {/* ⭐ Moon Canvas centered, mobile-friendly */}
      <div className="relative flex justify-center items-center mt-5 z-10">
        <Canvas
          className="moon-canvas"
          style={{ width: 450, height: 450 }}
          camera={{ position: [0, 0, 10], fov: 40 }}
        >
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={2} />

          <Suspense fallback={null}>
            <MoonModel />
          </Suspense>

          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.7} />
        </Canvas>
      </div>

      {/* ⭐ Header & Subheader */}
      <div className="absolute top-[40%] text-center text-white px-4 z-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wide">
          ShakthiSAT
        </h1>
        <p className="text-lg md:text-2xl mt-4">{displayText}</p>
      </div>

      {/* ⭐ CTA */}
      <div className="mt-10 z-20">
        <Button
          size="lg"
          onClick={scrollToMission}
          className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold text-lg px-8 py-6"
        >
          Explore Mission
          <ChevronDown className="ml-2 h-5 w-5" />
        </Button>
      </div>

    

      {/* ⭐ Mobile centering override */}
      <style>
        {`
          @media (max-width: 640px) {
            .moon-canvas {
              width: 300px !important;
              height: 300px !important;
            }
          }
        `}
      </style>
    </section>
  );
}
