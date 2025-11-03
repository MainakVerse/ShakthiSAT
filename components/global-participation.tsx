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
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white md:text-6xl font-bold uppercase tracking-tight mb-6">
            Global Participation & Impact
          </h2>
          <p className="text-xl md:text-2xl text-[#FFD700] font-semibold italic">
            Empowering the next generation of cosmic changemakers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="text-center p-8 bg-gradient-to-br from-[#6A4FC8]/10 to-[#E26EE5]/10 border border-[#6A4FC8]/30 rounded-lg backdrop-blur-sm"
              >
                <Icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                <p className={`text-5xl md:text-6xl font-bold mb-2 ${stat.color}`}>{stat.value}</p>
                <p className="text-xl text-[#C0C0C0]">{stat.label}</p>
              </div>
            )
          })}
        </div>

        <div className="relative aspect-video rounded-lg bg-gradient-to-br from-[#0B0C2A] to-[#0B0C2A]/90 backdrop-blur-sm border border-[#6A4FC8]/30 overflow-hidden">
          <WorldMap />
        </div>

        <p className="text-center mt-6 text-[#C0C0C0] text-lg">Interactive World Map — Connecting 108 Nations</p>
      </div>
    </section>
  )
}
