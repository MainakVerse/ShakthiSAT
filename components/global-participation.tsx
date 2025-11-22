"use client"

import { MapPin, Users, TrendingUp } from "lucide-react"
import { WorldMap } from "./world-map"

const stats = [
  {
    icon: Users,
    value: "12,000",
    label: "Girls Participating",
    color: "text-[#FFD700]",
  },
  {
    icon: MapPin,
    value: "108",
    label: "Countries United",
    color: "text-[#E26EE5]",
  },
  {
    icon: TrendingUp,
    value: "100%",
    label: "Impact on Futures",
    color: "text-[#6A4FC8]",
  },
]

export function GlobalParticipation() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-3 sm:px-4">
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

          {/* TITLE */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold uppercase tracking-tight mb-4 sm:mb-6 text-white">
              Global Participation & Impact
            </h2>
            <p className="text-sm sm:text-lg md:text-2xl text-[#FFD700] font-semibold italic max-w-3xl mx-auto">
              Empowering the next generation of cosmic changemakers
            </p>
          </div>

          {/* STATS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="text-center p-6 sm:p-8 bg-gradient-to-br from-[#6A4FC8]/10 to-[#E26EE5]/10 border border-[#6A4FC8]/30 rounded-lg backdrop-blur-sm"
                >
                  <Icon className={`h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 ${stat.color}`} />
                  <p className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-1 sm:mb-2 ${stat.color}`}>
                    {stat.value}
                  </p>
                  <p className="text-sm sm:text-base md:text-xl text-[#C0C0C0]">
                    {stat.label}
                  </p>
                </div>
              )
            })}
          </div>

          {/* WORLD MAP */}
          <div className="
            relative
            rounded-lg
            bg-gradient-to-br from-[#0B0C2A] to-[#0B0C2A]/90
            backdrop-blur-sm
            border border-[#6A4FC8]/30
            overflow-hidden
            aspect-[4/3]
            sm:aspect-video
          ">
            <WorldMap />
          </div>

        </div>

      </div>
    </section>
  )
}
