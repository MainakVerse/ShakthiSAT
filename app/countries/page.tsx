import { Globe, MapPin, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CountriesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FFD700] via-[#FF6EC7] to-[#6A4FC8] bg-clip-text text-transparent">
            108 Nations United
          </h1>
          <p className="text-xl text-[#C0C0C0] max-w-3xl mx-auto leading-relaxed">
            A global movement bringing together nations from every continent to empower the next generation of women in
            STEM through space exploration.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="bg-[#1a1f3a]/50 border-[#6A4FC8]/30">
            <CardHeader>
              <Globe className="h-12 w-12 text-[#FFD700] mb-4" />
              <CardTitle className="text-white">108 Countries</CardTitle>
              <CardDescription className="text-[#C0C0C0]">Spanning all continents</CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-[#1a1f3a]/50 border-[#6A4FC8]/30">
            <CardHeader>
              <Users className="h-12 w-12 text-[#FF6EC7] mb-4" />
              <CardTitle className="text-white">12,000+ Girls</CardTitle>
              <CardDescription className="text-[#C0C0C0]">Future space scientists</CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-[#1a1f3a]/50 border-[#6A4FC8]/30">
            <CardHeader>
              <MapPin className="h-12 w-12 text-[#6A4FC8] mb-4" />
              <CardTitle className="text-white">Global Impact</CardTitle>
              <CardDescription className="text-[#C0C0C0]">Transforming communities worldwide</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Content Section */}
        <Card className="bg-[#1a1f3a]/50 border-[#6A4FC8]/30">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Our Global Network</CardTitle>
          </CardHeader>
          <CardContent className="text-[#C0C0C0] space-y-4">
            <p>
              ShakthiSAT represents an unprecedented collaboration across 108 nations, each contributing to a shared
              vision of empowering young women through space science and technology.
            </p>
            <p>
              From Asia to Africa, Europe to the Americas, and Oceania, our participating countries are united in their
              commitment to breaking barriers and creating opportunities for girls in STEM fields.
            </p>
            <p>
              Each nation brings unique perspectives, resources, and cultural insights that enrich our mission and
              ensure that the benefits of space exploration reach every corner of the globe.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
