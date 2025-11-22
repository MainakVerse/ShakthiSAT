import { Award, Rocket, Users, Sparkles } from "lucide-react"

const achievements = [
  { icon: Rocket, title: "Space Pioneer", description: "Leading India's youth satellite missions" },
  { icon: Users, title: "Global Educator", description: "Inspiring 108 countries through STEM" },
  { icon: Award, title: "Visionary Leader", description: "Founder of SKI Star Foundation" },
  { icon: Sparkles, title: "Innovation Champion", description: "Empowering girls in space technology" },
]

export function DirectorSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-3 sm:px-4 bg-gradient-to-b from-transparent via-[#6A4FC8]/10 to-transparent">
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
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-[#FFD700] to-[#E26EE5] bg-clip-text text-transparent">
              Meet Our Director
            </h2>
            <p className="text-sm sm:text-lg md:text-2xl text-[#C0C0C0] max-w-3xl mx-auto leading-relaxed">
              Visionary leader driving the mission to empower girls through space education
            </p>
          </div>

          {/* IMAGE + TEXT GRID */}
          <div className="grid grid-cols-12 gap-6 sm:gap-10 md:gap-12 items-center mb-16">

            {/* IMAGE BLOCK */}
            <div className="col-span-12 md:col-span-6 flex items-center justify-center">
              <div
                className="
                  relative group
                  w-[260px] h-auto
                  sm:w-[340px]
                  md:w-full max-w-[420px]
                  mx-auto
                "
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#6A4FC8] to-[#E26EE5] rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-[#0B0C2A] border-2 border-[#6A4FC8]/50 rounded-2xl overflow-hidden">
                  <img
                    src="/professional-portrait-of-dr--srimathi-kesan--india.jpg"
                    alt="Dr. Srimathy Kesan"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* TEXT BLOCK */}
            <div className="col-span-12 md:col-span-6 space-y-4 sm:space-y-6 break-words overflow-hidden">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                Dr. Srimathy Kesan
              </h3>

              <p className="text-sm sm:text-base md:text-lg text-[#FFD700] font-semibold mb-3">
                Founder & Director, SKI Star Foundation
              </p>

              <p className="text-sm sm:text-base md:text-lg text-[#C0C0C0] leading-relaxed">
                Dr. Srimathy Kesan is a pioneering force in democratizing space education and empowering young minds,
                particularly girls, to reach for the stars. As the visionary behind ShakthiSAT and the SKI Star
                Foundation, she has orchestrated groundbreaking satellite missions that unite 108 countries in a shared
                vision of cosmic empowerment.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-[#C0C0C0] leading-relaxed">
                With a deep commitment to STEM education and gender equality in space technology, Dr. Kesan has inspired
                thousands to pursue careers in science and engineering, breaking barriers for future explorers.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
                <span className="px-3 py-1 sm:px-4 sm:py-2 bg-[#6A4FC8]/20 border border-[#6A4FC8]/50 rounded-full text-xs sm:text-sm font-medium">
                  Space Educator
                </span>
                <span className="px-3 py-1 sm:px-4 sm:py-2 bg-[#E26EE5]/20 border border-[#E26EE5]/50 rounded-full text-xs sm:text-sm font-medium">
                  Social Entrepreneur
                </span>
                <span className="px-3 py-1 sm:px-4 sm:py-2 bg-[#FFD700]/20 border border-[#FFD700]/50 rounded-full text-xs sm:text-sm font-medium">
                  Innovation Leader
                </span>
              </div>
            </div>
          </div>

          {/* ACHIEVEMENTS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {achievements.map((achievement) => {
              const Icon = achievement.icon
              return (
                <div
                  key={achievement.title}
                  className="bg-[#6A4FC8]/10 border border-[#6A4FC8]/30 rounded-lg p-5 sm:p-6 backdrop-blur-sm hover:border-[#FFD700]/50 hover:scale-105 transition-all"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#6A4FC8] to-[#E26EE5] flex items-center justify-center mb-3 sm:mb-4">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{achievement.title}</h4>
                  <p className="text-xs sm:text-sm text-[#C0C0C0] leading-relaxed">{achievement.description}</p>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
