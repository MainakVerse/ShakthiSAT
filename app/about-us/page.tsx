import { Rocket, Heart, Users, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FFD700] via-[#FF6EC7] to-[#6A4FC8] bg-clip-text text-transparent">
            About ShakthiSAT
          </h1>
          <p className="text-xl text-[#C0C0C0] max-w-3xl mx-auto leading-relaxed">
            From AzaadiSAT to the Moon. A journey of empowerment, innovation, and global collaboration.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="bg-gradient-to-br from-[#6A4FC8]/20 to-[#FF6EC7]/20 border-[#FFD700]/30 mb-12">
          <CardHeader>
            <CardTitle className="text-3xl text-white text-center">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-[#C0C0C0] text-center leading-relaxed mb-6">
              ShakthiSAT is a groundbreaking initiative that empowers 12,000+ girls across 108 nations through hands-on
              space science education and satellite technology. Building on the legacy of AzaadiSAT, we're creating the
              next generation of women leaders in STEM.
            </p>
          </CardContent>
        </Card>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-[#1a1f3a]/50 border-[#6A4FC8]/30">
            <CardHeader>
              <Rocket className="h-12 w-12 text-[#FFD700] mb-4" />
              <CardTitle className="text-white text-xl">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="text-[#C0C0C0] space-y-3">
              <p>
                ShakthiSAT was born from the success of AzaadiSAT, India's first satellite built entirely by girl
                students. Inspired by this achievement, we expanded our vision to create a global movement.
              </p>
              <p>
                Today, we unite 108 countries in a shared mission to break barriers and create opportunities for girls
                in space science and technology.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#1a1f3a]/50 border-[#6A4FC8]/30">
            <CardHeader>
              <Target className="h-12 w-12 text-[#FF6EC7] mb-4" />
              <CardTitle className="text-white text-xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-[#C0C0C0] space-y-3">
              <p>
                We envision a future where women lead humanity's exploration of space, where every girl has access to
                quality STEM education, and where diversity drives innovation.
              </p>
              <p>Through ShakthiSAT, we're not just building satellites—we're building futures, one girl at a time.</p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <Card className="bg-[#1a1f3a]/50 border-[#6A4FC8]/30">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Heart className="h-10 w-10 text-[#FFD700] mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Empowerment</h3>
                <p className="text-[#C0C0C0] text-sm">Creating opportunities for girls to discover their potential</p>
              </div>
              <div className="text-center">
                <Users className="h-10 w-10 text-[#FF6EC7] mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Collaboration</h3>
                <p className="text-[#C0C0C0] text-sm">Building bridges across nations and communities</p>
              </div>
              <div className="text-center">
                <Rocket className="h-10 w-10 text-[#6A4FC8] mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Innovation</h3>
                <p className="text-[#C0C0C0] text-sm">Pushing boundaries in education and technology</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
