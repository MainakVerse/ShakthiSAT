"use client";

import { useEffect, useState, Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { extend } from "@react-three/fiber";
extend({ Sprite: THREE.Sprite, SpriteMaterial: THREE.SpriteMaterial });

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

/* 🛰 Satellite in the full-screen background Canvas */
function SatelliteSprite() {
  const texture = useLoader(THREE.TextureLoader, "/sat.png");
  const ref = useRef<THREE.Sprite>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const radius = 10; // big orbit so it moves well beyond the moon area
    const speed = 0.3;
    const tilt = THREE.MathUtils.degToRad(35);

    if (ref.current) {
      ref.current.position.x = Math.cos(t * speed) * radius;
      ref.current.position.z = Math.sin(t * speed) * radius;
      ref.current.position.y = Math.sin(tilt) * ref.current.position.z;

      ref.current.scale.set(1.5, 1.5, 1);
      ref.current.renderOrder = 999;
    }
  });

  return (
    <sprite ref={ref}>
      <spriteMaterial map={texture} transparent depthTest={false} />
    </sprite>
  );
}

/* ⭐ Background Stars (Round, glowing, twinkling) */
function BackgroundStars() {
  const ref = useRef<THREE.Points | null>(null);
  const starCount = 5000;

  // Round star texture
  const circleTexture = useMemo(() => {
    const size = 64;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    ctx.clearRect(0, 0, size, size);
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, []);

  // Star positions
  const positions = useMemo(() => {
    const arr = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 600;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 600;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 600;
    }
    return arr;
  }, []);

  // Rotation + twinkle
  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.z += 0.0001;

    const t = performance.now() * 0.001;
    const mat = ref.current.material as THREE.PointsMaterial;
    mat.opacity = 0.75 + Math.sin(t * 2) * 0.2;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>

      <pointsMaterial
        size={1.0}
        color="#ffe9a3"
        map={circleTexture ?? undefined}
        transparent
        alphaTest={0.2}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.9}
        sizeAttenuation
      />
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
    document.getElementById("mission-overview")?.scrollIntoView({
      behavior: "smooth",
    });

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black overflow-visible">

      {/* 🌌 Full-screen background Canvas: stars + satellite */}
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 50], fov: 75 }}>
          <BackgroundStars />
          <SatelliteSprite />
        </Canvas>
      </div>

      {/* 🌕 Moon Canvas (fixed size, centered) */}
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

      {/* ⭐ Header Text */}
      <div className="absolute top-[35%] text-center text-white px-4 z-20">
        <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold tracking-wide">
          Mission
        </h1>
        <h1 className="text-6xl md:text-6xl font-bold tracking-wide font-rajdhani">
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
