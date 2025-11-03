import { Building2, Satellite, Globe2, Handshake } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PartnersPage() {
  const partnerTypes = [
    {
      icon: Satellite,
      title: "Space Agencies",
      description: "Collaborating with national and international space organizations",
      examples: "ISRO, NASA, ESA, and more",
      color: "text-[#FFD700]",
    },
    {
      icon: Building2,
      title: "Educational Institutions",
      description: "Partnering with universities and research centers worldwide",
      examples: "Leading universities across 108 countries",
      color: "text-[#FF6EC7]",
    },
    {
      icon: Globe2,
      title: "Technology Companies",
      description: "Working with aerospace and tech industry leaders",
      examples: "Satellite manufacturers and tech innovators",
      color: "text-[#6A4FC8]",
    },
    {
      icon: Handshake,
      title: "NGOs & Foundations",
      description: "Collaborating with organizations focused on education and empowerment",
      examples: "Global education and women empowerment organizations",
      color: "text-[#C0C0C0]",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FFD700] via-[#FF6EC7] to-[#6A4FC8] bg-clip-text text-transparent">
            Our Partners
          </h1>
          <p className="text-xl text-[#C0C0C0] max-w-3xl mx-auto leading-relaxed">
            Building a global ecosystem of collaboration with organizations that share our vision of empowering girls
            through space science.
          </p>
        </div>

        {/* Partnership Philosophy */}
        <Card className="bg-gradient-to-br from-[#6A4FC8]/20 to-[#FF6EC7]/20 border-[#FFD700]/30 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Partnership Philosophy</CardTitle>
          </CardHeader>
          <CardContent className="text-[#C0C0C0] space-y-4">
            <p>
              ShakthiSAT's success depends on strong partnerships with organizations that bring expertise, resources,
              and shared commitment to our mission. Together, we create opportunities that would be impossible alone.
            </p>
            <p>
              Our partners provide technical knowledge, educational resources, funding, and mentorship that directly
              benefit the 12,000+ girls participating in our programs across 108 countries.
            </p>
          </CardContent>
        </Card>

        {/* Partner Types Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {partnerTypes.map((partner, index) => (
            <Card
              key={index}
              className="bg-[#1a1f3a]/50 border-[#6A4FC8]/30 hover:border-[#FFD700]/50 transition-all duration-300"
            >
              <CardHeader>
                <partner.icon className={`h-12 w-12 ${partner.color} mb-4`} />
                <CardTitle className="text-white text-xl">{partner.title}</CardTitle>
                <CardDescription className="text-[#C0C0C0] text-base mb-2">{partner.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#C0C0C0]/70 italic">{partner.examples}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
