import { Heart, Satellite, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  {
    icon: Satellite,
    title: "Space Education",
    description: "Democratizing access to space technology since 2017",
  },
  {
    icon: GraduationCap,
    title: "STEM Programs",
    description: "Empowering students through hands-on satellite missions",
  },
  {
    icon: Heart,
    title: "Humanitarian Impact",
    description: "Community support initiatives during COVID-19 and beyond",
  },
]

export function AboutFoundation() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-3 sm:px-4 bg-gradient-to-b from-transparent via-[#E26EE5]/10 to-transparent">
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
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4 sm:mb-6">
              About SKI Star Foundation
            </h2>
            <p className="text-sm sm:text-lg md:text-2xl text-[#C0C0C0] max-w-3xl mx-auto leading-relaxed">
              Since 2017, we've been on a mission to democratize space education and inspire the next generation of cosmic changemakers.
            </p>
          </div>

          {/* HIGHLIGHTS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {highlights.map((highlight) => {
              const Icon = highlight.icon
              return (
                <div
                  key={highlight.title}
                  className="bg-[#6A4FC8]/10 border border-[#6A4FC8]/30 rounded-lg p-5 sm:p-6 backdrop-blur-sm hover:border-[#FFD700]/50 hover:scale-105 transition-all"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#6A4FC8] to-[#E26EE5] flex items-center justify-center mb-4 sm:mb-6">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{highlight.title}</h3>
                  <p className="text-xs sm:text-sm text-[#C0C0C0] leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* CTA BUTTON */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-[#6A4FC8] hover:bg-[#6A4FC8]/90 text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
            >
              Learn More About Our Work
            </Button>
          </div>

        </div>

      </div>
    </section>
  )
}
