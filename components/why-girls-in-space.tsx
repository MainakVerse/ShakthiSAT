import { Sparkles, UserRound, Satellite, Rocket, Lightbulb } from "lucide-react"

export function WhyGirlsInSpace() {
  const infographics = [
    {
      icon: UserRound,
      label: "Girl Child",
      description: "Empowering young minds",
      gradient: "from-[#E26EE5] to-[#6A4FC8]",
    },
    {
      icon: Satellite,
      label: "Satellite",
      description: "Space technology",
      gradient: "from-[#6A4FC8] to-[#FFD700]",
    },
    {
      icon: Rocket,
      label: "Space",
      description: "The final frontier",
      gradient: "from-[#FFD700] to-[#E26EE5]",
    },
    {
      icon: Lightbulb,
      label: "Innovation",
      description: "Breaking barriers",
      gradient: "from-[#E26EE5] to-[#FFD700]",
    },
  ]

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">Why Girls in Space?</h2>
            <div className="space-y-4">
              <div className="bg-[#6A4FC8]/10 border border-[#6A4FC8]/30 rounded-lg p-6">
                <p className="text-5xl font-bold text-[#E26EE5] mb-2">20%</p>
                <p className="text-lg text-[#C0C0C0]">Women in space industry jobs globally</p>
              </div>
              <p className="text-lg md:text-xl text-[#C0C0C0] leading-relaxed">
                The gender gap in space and STEM fields remains significant. ShakthiSAT is our answer—a bold initiative
                to ignite passion, build leaders, and break barriers.
              </p>
              <p className="text-lg md:text-xl text-[#C0C0C0] leading-relaxed">
                We believe in <span className="text-[#FFD700] font-semibold">equal access to infinity</span>. Every girl
                deserves the opportunity to reach for the stars.
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4">
              <Sparkles className="h-8 w-8 text-[#FFD700]" />
              <p className="text-xl font-semibold text-[#FFD700]">Ignite Passion • Build Leaders • Break Barriers</p>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {infographics.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className="aspect-square rounded-lg bg-gradient-to-br from-[#6A4FC8]/20 to-[#E26EE5]/20 backdrop-blur-sm border border-[#6A4FC8]/30 overflow-hidden relative group hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center p-6"
                    style={{
                      animationDelay: `${i * 0.2}s`,
                    }}
                  >
                    <div
                      className={`w-24 h-24 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-12 w-12 text-white" strokeWidth={1.5} />
                    </div>
                    <p className="text-[#FFD700] font-semibold text-lg text-center">{item.label}</p>
                    <p className="text-[#C0C0C0] text-sm text-center mt-2">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
