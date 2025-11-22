"use client"

import { motion } from "framer-motion"
import { ArrowRight, ArrowDown } from "lucide-react"
import Image from "next/image"

const satellites = [
  { name: "KALAMSAT", year: "2017", description: "World's lightest satellite", image: "/kalamsat.jpg" },
  { name: "SKISAT", year: "2018", description: "Most number of sensors flown in a reusable rocket", image: "/skisat.jpg" },
  { name: "KALAMSAT V2", year: "2019", description: "1st Orbital mission of Space Kidz India", image: "/kalamsat-v2.jpg" },
  { name: "AZAADISAT", year: "2023", description: "Satellite built by 750 girl students", image: "/azaadisat.jpg" },
  { name: "SD SAT", year: "2021", description: "3U Cubesat with indigenous nanosatellite components", image: "/3u-cubesat-structure-sd-sat.jpg" },
  { name: "JATAYU 14 and 15", year: "2021", description: "High altitude balloons to research air quality", image: "/jatayu.jpg" }
]

export function ShakthiSATInSpace() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-transparent to-[#6A4FC8]/10">
      <div className="max-w-7xl mx-auto">

        {/* CUT-CORNER BOX */}
        <div className="relative w-full border border-white/40 overflow-hidden p-10 mx-auto">

          {/* Corner accents */}
          <span className="absolute top-0 left-0 w-10 h-[2px] bg-white"></span>
          <span className="absolute top-0 left-0 h-10 w-[2px] bg-white"></span>

          <span className="absolute top-0 right-0 w-10 h-[2px] bg-white"></span>
          <span className="absolute top-0 right-0 h-10 w-[2px] bg-white"></span>

          <span className="absolute bottom-0 left-0 w-10 h-[2px] bg-white"></span>
          <span className="absolute bottom-0 left-0 h-10 w-[2px] bg-white"></span>

          <span className="absolute bottom-0 right-0 w-10 h-[2px] bg-white"></span>
          <span className="absolute bottom-0 right-0 h-10 w-[2px] bg-white"></span>

          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
              Our Journey
            </h2>
            <p className="text-base md:text-lg text-[#C0C0C0] max-w-3xl mx-auto leading-relaxed">
              A legacy of innovation and empowerment through missions that inspire and elevate young minds across the world.
            </p>
          </motion.div>

          {/* Desktop timeline */}
          <div className="hidden lg:block">

            {/* Top row */}
            <div className="flex items-center justify-center gap-10 mb-16">
              {satellites.slice(0, 3).map((satellite, index) => (
                <div key={satellite.name} className="flex items-center">
                  <SatelliteCard satellite={satellite} index={index} />
                  {index < 2 && <ArrowRight className="w-12 h-12 text-[#FFD700] mx-6 flex-shrink-0" />}
                </div>
              ))}
            </div>

            {/* Down arrow */}
            <div className="flex justify-end pr-40 mb-16">
              <ArrowDown className="w-12 h-12 text-[#FFD700]" />
            </div>

            {/* Bottom row reversed */}
            <div className="flex items-center justify-center gap-10 flex-row-reverse">
              {satellites.slice(3, 6).reverse().map((satellite, index) => (
                <div key={satellite.name} className="flex items-center flex-row-reverse">
                  <SatelliteCard satellite={satellite} index={index + 3} />
                  {index < 2 && (
                    <ArrowRight className="w-12 h-12 text-[#FFD700] mx-6 flex-shrink-0 rotate-180" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="lg:hidden space-y-10">
            {satellites.map((satellite, index) => (
              <div key={satellite.name}>
                <SatelliteCard satellite={satellite} index={index} />
                {index < satellites.length - 1 && (
                  <div className="flex justify-center my-6">
                    <ArrowDown className="w-8 h-8 text-[#FFD700]" />
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

function SatelliteCard({ satellite, index }: { satellite: (typeof satellites)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group"
    >
      <div className="relative bg-gradient-to-br from-[#6A4FC8]/20 to-[#E26EE5]/20 rounded-xl p-6 border border-white/30 backdrop-blur-sm 
      hover:border-[#FFD700]/60 transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,215,0,0.35)] 
      w-[260px] h-[360px] flex flex-col justify-start mx-auto">

        {/* Year badge */}
        <div className="absolute -top-3 right-4 bg-gradient-to-r from-[#FFD700] to-[#E26EE5] text-[#0B0C2A] font-bold px-4 py-1 rounded-full text-sm shadow-md">
          {satellite.year}
        </div>

        {/* Image */}
        <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden border border-[#6A4FC8]/30">
          <Image
            src={satellite.image}
            alt={satellite.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold text-center text-[#FFD700] mb-2">
          {satellite.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#C0C0C0] text-center leading-relaxed">
          {satellite.description}
        </p>
      </div>
    </motion.div>
  )
}
