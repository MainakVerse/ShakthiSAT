import { Award, Rocket, Users, Sparkles } from "lucide-react"

const achievements = [
  {
    icon: Rocket,
    title: "Space Pioneer",
    description: "Leading India's youth satellite missions",
  },
  {
    icon: Users,
    title: "Global Educator",
    description: "Inspiring 108 countries through STEM",
  },
  {
    icon: Award,
    title: "Visionary Leader",
    description: "Founder of SKI Star Foundation",
  },
  {
    icon: Sparkles,
    title: "Innovation Champion",
    description: "Empowering girls in space technology",
  },
]

export function DirectorSection() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-transparent via-[#6A4FC8]/10 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6 bg-gradient-to-r from-[#FFD700] to-[#E26EE5] bg-clip-text text-transparent">
            Meet Our Director
          </h2>
          <p className="text-xl md:text-2xl text-[#C0C0C0] max-w-3xl mx-auto leading-relaxed">
            Visionary leader driving the mission to empower girls through space education
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Director Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6A4FC8] to-[#E26EE5] rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative bg-[#0B0C2A] border-2 border-[#6A4FC8]/50 rounded-2xl overflow-hidden">
              <img src="/professional-portrait-of-dr--srimathi-kesan--india.jpg" alt="Dr. Srimathi Kesan" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Director Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Dr. Srimathi Kesan</h3>
              <p className="text-xl text-[#FFD700] font-semibold mb-4">Founder & Director, SKI Star Foundation</p>
              <div className="h-1 w-24 bg-gradient-to-r from-[#6A4FC8] to-[#E26EE5] rounded-full mb-6" />
            </div>

            <p className="text-lg text-[#C0C0C0] leading-relaxed">
              Dr. Srimathi Kesan is a pioneering force in democratizing space education and empowering young minds,
              particularly girls, to reach for the stars. As the visionary behind ShakthiSAT and the SKI Star
              Foundation, she has orchestrated groundbreaking satellite missions that unite 108 countries in a shared
              vision of cosmic empowerment.
            </p>

            <p className="text-lg text-[#C0C0C0] leading-relaxed">
              With a deep commitment to STEM education and gender equality in space technology, Dr. Kesan has
              transformed the landscape of youth satellite programs in India and beyond. Her leadership has inspired
              thousands of students to pursue careers in space science and technology, breaking barriers and creating
              pathways for the next generation of space explorers.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-[#6A4FC8]/20 border border-[#6A4FC8]/50 rounded-full text-sm font-medium">
                Space Educator
              </span>
              <span className="px-4 py-2 bg-[#E26EE5]/20 border border-[#E26EE5]/50 rounded-full text-sm font-medium">
                Social Entrepreneur
              </span>
              <span className="px-4 py-2 bg-[#FFD700]/20 border border-[#FFD700]/50 rounded-full text-sm font-medium">
                Innovation Leader
              </span>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {achievements.map((achievement) => {
            const Icon = achievement.icon
            return (
              <div
                key={achievement.title}
                className="bg-[#6A4FC8]/10 border border-[#6A4FC8]/30 rounded-lg p-6 backdrop-blur-sm hover:border-[#FFD700]/50 hover:transform hover:scale-105 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6A4FC8] to-[#E26EE5] flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{achievement.title}</h4>
                <p className="text-sm text-[#C0C0C0] leading-relaxed">{achievement.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
