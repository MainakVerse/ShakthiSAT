import { Award, Calendar, Rocket, Users } from "lucide-react"

const milestones = [
  {
    year: "2022",
    title: "AzaadiSAT Launch",
    description: "750 rural Indian girls built and launched AzaadiSAT",
    icon: Rocket,
  },
  {
    year: "2023",
    title: "AzaadiSAT-2 Mission",
    description: "Expanded mission with enhanced capabilities",
    icon: Award,
  },
  {
    year: "2024",
    title: "Global Vision",
    description: "Planning ShakthiSAT with 108 nations",
    icon: Users,
  },
  {
    year: "2025",
    title: "ShakthiSAT Launch",
    description: "12,000 girls from 108 countries unite",
    icon: Calendar,
  },
]

export function OurLegacy() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">Our Legacy</h2>
          <p className="text-xl md:text-2xl text-[#C0C0C0] max-w-3xl mx-auto">
            From 75 schools to 108 nations — the dream expands
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6A4FC8] via-[#E26EE5] to-[#FFD700] hidden md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={milestone.year}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-[#6A4FC8]/10 border border-[#6A4FC8]/30 rounded-lg p-6 backdrop-blur-sm">
                      <p className="text-3xl font-bold text-[#FFD700] mb-2">{milestone.year}</p>
                      <h3 className="text-2xl font-semibold mb-3">{milestone.title}</h3>
                      <p className="text-lg text-[#C0C0C0]">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6A4FC8] to-[#E26EE5] flex items-center justify-center border-4 border-[#0B0C2A]">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold text-[#E26EE5] italic max-w-3xl mx-auto">
            "From 75 schools to 108 nations — the dream expands."
          </blockquote>
        </div>
      </div>
    </section>
  )
}
