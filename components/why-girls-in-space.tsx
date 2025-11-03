"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function WhyGirlsInSpace() {
  const facts = [
    { stat: "20%", text: "Women are in space industry jobs globally." },
    { stat: "75+", text: "Women have traveled to space since Valentina Tereshkova’s 1963 mission." },
    { stat: "11%", text: "Of all astronauts launched to space have been women." },
    { stat: "1st", text: "All-female spacewalk took place in 2019 with Christina Koch and Jessica Meir." },
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
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Section */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-tight">
              Why Girls in Space?
            </h2>

            <div className="space-y-4">
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
                    <p className="text-base sm:text-lg text-[#C0C0C0]">{facts[index].text}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-[#C0C0C0] leading-relaxed">
                The gender gap in space and STEM fields remains significant.
                ShakthiSAT is our answer—a bold initiative to ignite passion,
                build leaders, and break barriers. Empowering girls in space ignites
                untapped talent, breaks stereotypes, and builds future STEM leaders
                through equal access, hands-on experiences, and inspiration to reach
                beyond limits and shape humanity’s cosmic journey.
              </p>

              <p className="text-base sm:text-lg md:text-xl text-[#C0C0C0] leading-relaxed">
                We believe in{" "}
                <span className="text-[#FFD700] font-semibold">
                  equal access to infinity
                </span>
                . Every girl deserves the opportunity to reach for the stars.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-4">
              <Sparkles className="h-7 w-7 sm:h-8 sm:w-8 text-[#FFD700]" />
              <p className="text-lg sm:text-xl font-semibold text-[#FFD700] text-center sm:text-left">
                Ignite Passion • Build Leaders • Break Barriers
              </p>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="flex items-center justify-center">
            <div className="w-64 sm:w-80 md:w-[400px] lg:w-[500px] aspect-square rounded-lg bg-gradient-to-br from-[#E26EE5]/20 to-[#6A4FC8]/20 backdrop-blur-sm border border-[#6A4FC8]/30 overflow-hidden relative hover:scale-105 transition-transform duration-300">
              <Image
                src="/shakthisat-poster-girls.png"
                alt="Girls in Space"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
