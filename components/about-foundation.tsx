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
    <section className="relative py-24 px-4 bg-gradient-to-b from-transparent via-[#E26EE5]/10 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">About SKI Star Foundation</h2>
          <p className="text-xl md:text-2xl text-[#C0C0C0] max-w-3xl mx-auto leading-relaxed">
            Since 2017, we've been on a mission to democratize space education and inspire the next generation of cosmic
            changemakers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {highlights.map((highlight) => {
            const Icon = highlight.icon
            return (
              <div
                key={highlight.title}
                className="bg-[#6A4FC8]/10 border border-[#6A4FC8]/30 rounded-lg p-8 backdrop-blur-sm hover:border-[#FFD700]/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6A4FC8] to-[#E26EE5] flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{highlight.title}</h3>
                <p className="text-lg text-[#C0C0C0] leading-relaxed">{highlight.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-[#6A4FC8] hover:bg-[#6A4FC8]/90 text-white font-semibold text-lg px-8 py-6">
            Learn More About Our Work
          </Button>
        </div>
      </div>
    </section>
  )
}
