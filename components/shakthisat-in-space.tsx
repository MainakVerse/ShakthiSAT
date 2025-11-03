"use client"

import { motion } from "framer-motion"
import { ArrowRight, ArrowDown } from "lucide-react"
import Image from "next/image"

const satellites = [
  {
    name: "KALAMSAT",
    year: "2017",
    description: "World's lightest satellite",
    image: "/small-black-cube-satellite-kalamsat.jpg",
  },
  {
    name: "SKISAT",
    year: "2018",
    description: "Most number of sensors flown in a reusable rocket",
    image: "/complex-sensor-array-satellite-skisat.jpg",
  },
  {
    name: "KALAMSAT V2",
    year: "2019",
    description: "1st Orbital mission of Space Kidz India",
    image: "/yellow-green-orbital-satellite-kalamsat-v2.jpg",
  },
  {
    name: "JATAYU 14 and 15",
    year: "2021",
    description: "High altitude balloons to research air quality",
    image: "/high-altitude-weather-balloon-jatayu.jpg",
  },
  {
    name: "SD SAT",
    year: "2021",
    description: "3U Cubesat, onboard PSLV CS1 with indigenously designed nanosatellite components",
    image: "/3u-cubesat-structure-sd-sat.jpg",
  },
  {
    name: "AZAADISAT",
    year: "2023",
    description: "Satellite built by 750 girl students",
    image: "/yellow-cubesat-azaadisat-built-by-students.jpg",
  },
]

export function ShakthiSATInSpace() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C2A] via-[#1a1b3e] to-[#0B0C2A]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#6A4FC8] via-[#E26EE5] to-[#FFD700] bg-clip-text text-transparent">
            ShakthiSAT in Space
          </h2>
          <p className="text-xl text-[#C0C0C0] max-w-3xl mx-auto text-balance">
            Our Journey So Far: A Legacy of Innovation and Empowerment
          </p>
        </motion.div>

        {/* Journey timeline - Desktop view */}
        <div className="hidden lg:block">
          {/* Top row: KALAMSAT -> SKISAT -> KALAMSAT V2 */}
          <div className="flex items-center justify-center gap-8 mb-12">
            {satellites.slice(0, 3).map((satellite, index) => (
              <div key={satellite.name} className="flex items-center">
                <SatelliteCard satellite={satellite} index={index} />
                {index < 2 && <ArrowRight className="w-12 h-12 text-[#FFD700] mx-4 flex-shrink-0" />}
              </div>
            ))}
          </div>

          {/* Arrow down from KALAMSAT V2 */}
          <div className="flex justify-end pr-32 mb-12">
            <ArrowDown className="w-12 h-12 text-[#FFD700]" />
          </div>

          {/* Bottom row: AZAADISAT <- SD SAT <- JATAYU (reversed) */}
          <div className="flex items-center justify-center gap-8 flex-row-reverse">
            {satellites
              .slice(3, 6)
              .reverse()
              .map((satellite, index) => (
                <div key={satellite.name} className="flex items-center flex-row-reverse">
                  <SatelliteCard satellite={satellite} index={index + 3} />
                  {index < 2 && <ArrowRight className="w-12 h-12 text-[#FFD700] mx-4 flex-shrink-0 rotate-180" />}
                </div>
              ))}
          </div>
        </div>

        {/* Mobile/Tablet view - Vertical timeline */}
        <div className="lg:hidden space-y-8">
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
    </section>
  )
}

function SatelliteCard({ satellite, index }: { satellite: (typeof satellites)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative bg-gradient-to-br from-[#6A4FC8]/20 to-[#E26EE5]/20 rounded-2xl p-6 border border-[#6A4FC8]/30 backdrop-blur-sm hover:border-[#FFD700]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] max-w-xs">
        {/* Year badge */}
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#FFD700] to-[#E26EE5] text-[#0B0C2A] font-bold px-4 py-1 rounded-full text-sm">
          {satellite.year}
        </div>

        {/* Satellite image */}
        <div className="relative w-40 h-40 mx-auto mb-4 rounded-xl overflow-hidden bg-[#0B0C2A]/50 border border-[#6A4FC8]/20">
          <Image
            src={satellite.image || "/placeholder.svg"}
            alt={satellite.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Satellite name */}
        <h3 className="text-xl font-bold text-center mb-2 text-[#FFD700]">{satellite.name}</h3>

        {/* Description */}
        <p className="text-sm text-[#C0C0C0] text-center leading-relaxed text-balance">{satellite.description}</p>
      </div>
    </motion.div>
  )
}
