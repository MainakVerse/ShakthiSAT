import { Globe, MapPin, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GlobalParticipation } from "@/components/global-participation"

export default function CountriesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        

        <GlobalParticipation/>

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
