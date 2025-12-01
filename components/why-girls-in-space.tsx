"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function WhyGirlsInSpace() {
  const facts = [
    { stat: "20%", text: "Women are in space industry jobs globally." },
    { stat: "75+", text: "Women have traveled to space since V. Tereshkova’s 1963 mission." },
    { stat: "11%", text: "Of all astronauts launched to space have been women." },
    { stat: "1st", text: "All-female spacewalk took place in 2019 with Christina Koch and J. Meir." },
    { stat: "28%", text: "Of NASA’s workforce today are women, shaping humanity’s space future." },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % facts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [facts.length]);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-3 sm:px-4 bg-gradient-to-b from-transparent to-[#6A4FC8]/10">
      <div className="max-w-7xl mx-auto">

        {/* CUT-CORNER BOX */}
        <div className="relative w-full border border-white/40 overflow-hidden p-6 sm:p-8 md:p-10 mx-auto">

          {/* Corner accents */}
          <span className="absolute top-0 left-0 w-8 sm:w-10 h-[2px] bg-white"></span>
          <span className="absolute top-0 left-0 h-8 sm:h-10 w-[2px] bg-white"></span>

          <span className="absolute top-0 right-0 w-8 sm:w-10 h-[2px] bg-white"></span>
          <span className="absolute top-0 right-0 h-8 sm:h-10 w-[2px] bg-white"></span>

          <span className="absolute bottom-0 left-0 w-8 sm:w-10 h-[2px] bg-white"></span>
          <span className="absolute bottom-0 left-0 h-8 sm:h-10 w-[2px] bg-white"></span>

          <span className="absolute bottom-0 right-0 w-8 sm:w-10 h-[2px] bg-white"></span>
          <span className="absolute bottom-0 right-0 h-8 sm:h-10 w-[2px] bg-white"></span>

          {/* GRID */}
          <div className="grid grid-cols-12 gap-6 sm:gap-8 items-stretch">

            {/* LEFT TEXT */}
            <div className="col-span-12 md:col-span-6 space-y-5 sm:space-y-6 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold uppercase tracking-tight">
                Why Girls in Space?
              </h2>

              {/* Animated Facts Box */}
              <div className="bg-[#6A4FC8]/10 border border-[#6A4FC8]/30 rounded-lg p-4 sm:p-6 text-center overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={facts[index].stat}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.6 }}
                  >
                    <p className="text-4xl sm:text-5xl font-bold text-[#E26EE5] mb-2">
                      {facts[index].stat}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-[#C0C0C0]">
                      {facts[index].text}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-[#C0C0C0] leading-relaxed">
                The gender gap in space and STEM fields remains significant.
                ShakthiSAT is our answer—an initiative to ignite passion,
                nurture leadership, and dismantle limits. Empowering girls in
                space fuels imagination, unlocks hidden potential, and opens
                pathways to shape humanity’s future among the stars.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-[#C0C0C0] leading-relaxed">
                We believe in <span className="text-[#FFD700] font-semibold">equal access to infinity</span> —
                every girl deserves the chance to reach beyond the sky.
              </p>

              <div className="flex items-center gap-2 sm:gap-3 pt-2">
                <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-[#FFD700]" />
                <p className="text-sm sm:text-lg font-semibold text-[#FFD700]">
                  Ignite Passion • Build Leaders • Break Barriers
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-span-12 md:col-span-6 flex items-center justify-center">
              <div className="relative 
                w-[260px] h-[260px]
                sm:w-[340px] sm:h-[340px]
                md:w-[500px] md:h-[500px]"
              >
                <Image
                  src="/shakthisat-poster-girls.png"
                  alt="Girls in Space"
                  className="object-contain"
                  fill
                  priority
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
