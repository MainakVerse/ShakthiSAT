import { Rocket, Target, Lightbulb, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DevisPage() {
  const principles = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Every action aligned with our goal to empower girls through space science",
      color: "text-[#FFD700]",
    },
    {
      icon: Heart,
      title: "Inclusive Excellence",
      description: "Creating opportunities for all girls, regardless of background or location",
      color: "text-[#FF6EC7]",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Pushing boundaries in education, technology, and space exploration",
      color: "text-[#6A4FC8]",
    },
    {
      icon: Rocket,
      title: "Global Collaboration",
      description: "Uniting nations and communities for a common purpose",
      color: "text-[#C0C0C0]",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FFD700] via-[#FF6EC7] to-[#6A4FC8] bg-clip-text text-transparent">
            Our Devis
          </h1>
          <p className="text-xl text-[#C0C0C0] max-w-3xl mx-auto leading-relaxed">
            The guiding principles that drive ShakthiSAT's mission to empower the next generation of women in space
            science.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="bg-gradient-to-br from-[#6A4FC8]/20 to-[#FF6EC7]/20 border-[#FFD700]/30 mb-12">
          <CardHeader>
            <CardTitle className="text-3xl text-white text-center">Our Core Belief</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-[#C0C0C0] text-center leading-relaxed">
              "Every girl deserves the opportunity to reach for the stars. Through education, innovation, and global
              collaboration, we are building a future where women lead humanity's journey into space."
            </p>
          </CardContent>
        </Card>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <Card
              key={index}
              className="bg-[#1a1f3a]/50 border-[#6A4FC8]/30 hover:border-[#FFD700]/50 transition-all duration-300"
            >
              <CardHeader>
                <principle.icon className={`h-12 w-12 ${principle.color} mb-4`} />
                <CardTitle className="text-white text-xl">{principle.title}</CardTitle>
                <CardDescription className="text-[#C0C0C0] text-base">{principle.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
