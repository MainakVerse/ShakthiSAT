export default function PartnersPage() {
  const partners = [
    { id: 1, name: "ISRO", logo: "/isro-indian-space-research-organisation-logo.jpg" },
    { id: 2, name: "SpaceX", logo: "/spacex-logo.jpg" },
    { id: 3, name: "NASA", logo: "/nasa-logo.png" },
    { id: 4, name: "ESA", logo: "/european-space-agency-esa-logo.jpg" },
    { id: 5, name: "JAXA", logo: "/jaxa-japan-aerospace-exploration-agency-logo.jpg" },
    { id: 6, name: "Axiom Space", logo: "/axiom-space-logo.jpg" },
    { id: 7, name: "Blue Origin", logo: "/blue-origin-logo.png" },
    { id: 8, name: "Rocket Lab", logo: "/rocket-lab-logo.jpg" },
    { id: 9, name: "Relativity Space", logo: "/relativity-space-logo.jpg" },
    { id: 10, name: "Axiom Mission", logo: "/axiom-mission-logo.jpg" },
    { id: 11, name: "Virgin Galactic", logo: "/virgin-galactic-logo.jpg" },
    { id: 12, name: "CNES", logo: "/cnes-french-space-agency-logo.jpg" },
    { id: 13, name: "CNSA", logo: "/cnsa-china-national-space-administration-logo.jpg" },
    { id: 14, name: "Roscosmos", logo: "/roscosmos-russian-space-agency-logo.jpg" },
    { id: 15, name: "Orbital Dynamics", logo: "/orbital-dynamics-space-company-logo.jpg" },
    { id: 16, name: "Axiom Industries", logo: "/axiom-industries-logo.jpg" },
    { id: 17, name: "Intuitive Machines", logo: "/intuitive-machines-logo.jpg" },
    { id: 18, name: "Axiom Space Corp", logo: "/placeholder.svg?height=150&width=300" },
    { id: 19, name: "Space Services", logo: "/placeholder.svg?height=150&width=300" },
    { id: 20, name: "Orbital Services", logo: "/placeholder.svg?height=150&width=300" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FFD700] via-[#FF6EC7] to-[#6A4FC8] bg-clip-text text-transparent">
            PARTNERS
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="aspect-video bg-white border-2 border-[#FFD700]/20 rounded-lg flex items-center justify-center hover:shadow-lg hover:border-[#FFD700]/50 transition-all duration-300 overflow-hidden"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                className="w-full h-full object-cover p-4"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
