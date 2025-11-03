import { Rocket } from "lucide-react"

export function MissionOverview() {
  return (
    <section id="mission-overview" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">Mission Overview</h2>
            <p className="text-lg md:text-xl text-[#C0C0C0] leading-relaxed">
              ShakthiSAT is a global mission to empower{" "}
              <span className="text-[#FFD700] font-semibold">12,000 girls</span> from{" "}
              <span className="text-[#E26EE5] font-semibold">108 countries</span> through real-time satellite projects.
            </p>
            <p className="text-lg md:text-xl text-[#C0C0C0] leading-relaxed">
              We unite humanity under one sky, building bridges across cultures through STEM education and space
              collaboration. Together, we create a message of unity, hope, and infinite possibility.
            </p>
            <div className="pt-4">
              <p className="text-2xl md:text-3xl font-semibold text-[#6A4FC8] italic">
                "Uniting Humanity Under One Sky."
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-full bg-gradient-to-br from-[#6A4FC8] to-[#E26EE5] p-1">
              <div className="w-full h-full rounded-full bg-[#0B0C2A] flex items-center justify-center">
                <Rocket className="h-32 w-32 text-[#FFD700]" />
              </div>
            </div>
            {/* Orbiting dots */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }}>
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#FFD700] rounded-full -translate-x-1/2" />
            </div>
            <div
              className="absolute inset-0 animate-spin"
              style={{ animationDuration: "15s", animationDirection: "reverse" }}
            >
              <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-[#E26EE5] rounded-full -translate-x-1/2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
