"use client"

import { Rocket, Heart, Users, Target } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactFooter } from "@/components/contact-footer"

export default function AboutUsPage() {
  
  // ✅ Team members with names & roles (edit freely)
  const teamMembers = [
  { name: "Dr. Srimathy Kesan", role: "Mission Director", image: "/team/member1.jpg" },
  { name: "Mr. Gobinath", role: "Academic Director", image: "/team/member2.jpg" },
  { name: "Ms. Yara Fernandes", role: "International Director for Space, Quantum and Economic Innovation", image: "/team/member3.jpg" },
  { name: "Ms. Sukruti Narayanan", role: "Head of Global Partnerships", image: "/team/member4.jpg" },
  { name: "Ms. Rocío Caparrós del Moral", role: "International Relations and Strategy Advisor", image: "/team/member5.jpg" },
  { name: "Mr. Gokul V.", role: "Lead - Mechanical Unit", image: "/team/member6.jpg" },
  { name: "Ms. Haashika Raj", role: "Global Alliances & Outreach Manager", image: "/team/member7.jpg" },
  { name: "Mr. Sriram Ramakrishnan", role: "Technology Team Coordinator", image: "/team/member8.jpg" },
  { name: "Mr. Srikanth R", role: "Operations Manager", image: "/team/member9.jpg" },
  { name: "Mr. Iruthayaraj M", role: "Administrative Manager", image: "/team/member10.jpg" },
  { name: "Mr. Shantha Kumar. B", role: "Science Communicator & SME", image: "/team/member11.jpg" },
  { name: "Ms. Saitanya Kesan", role: "Advocate", image: "/team/member12.jpg" },
]

  const galleryImages = [
  { image: "/gallery/img1.jpeg" },
  { image: "/gallery/img2.jpeg" },
  { image: "/gallery/img3.jpeg" },
  { image: "/gallery/img4.jpeg" },
  { image: "/gallery/img5.jpeg" },
  { image: "/gallery/img6.jpeg" },
]

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

        {/* Mission */}
        <Card className="bg-gradient-to-br from-[#6A4FC8]/20 to-[#FF6EC7]/20 border-[#FFD700]/30 mb-12">
          <CardHeader>
            <CardTitle className="text-3xl text-white text-center">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-[#C0C0C0] text-center leading-relaxed mb-6">
              ShakthiSAT empowers 12,000+ girls across 108 nations through hands-on space science education and satellite
              technology, building the next generation of women leaders in STEM.
            </p>
          </CardContent>
        </Card>

        {/* Story & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-[#1a1f3a]/50 border-[#6A4FC8]/30">
            <CardHeader>
              <Rocket className="h-12 w-12 text-[#FFD700] mb-4" />
              <CardTitle className="text-white text-xl">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="text-[#C0C0C0] space-y-3">
              <p>
                ShakthiSAT began as a continuation of AzaadiSAT, India’s first satellite built entirely by girl students.
              </p>
              <p>
                Today, 108 countries unite to break barriers and expand opportunities for girls in space science.
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
                A world where women lead humanity’s exploration beyond Earth.
              </p>
              <p>
                Through ShakthiSAT, we’re not just building satellites—we’re building futures.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <Card className="bg-[#1a1f3a]/50 border-[#6A4FC8]/30 mb-20">
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

        {/* ✅ Team Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#FFD700] via-[#FF6EC7] to-[#6A4FC8] bg-clip-text text-transparent">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-[#1a1f3a]/50 border-[#6A4FC8]/30 text-center p-6">
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 border border-[#FFD700]/40">
                  <Image
                    src={`/teams/${index + 1}.jpg`}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-white text-lg font-semibold">{member.name}</h3>
                <p className="text-[#C0C0C0] text-sm mt-2">{member.role}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* ✅ Gallery Section */}
        <section>
  <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#FFD700] via-[#FF6EC7] to-[#6A4FC8] bg-clip-text text-transparent">
    Gallery
  </h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
    {galleryImages.map((item, index) => (
      <div
        key={index}
        className="rounded-lg overflow-hidden border border-[#6A4FC8]/30 hover:scale-105 transition-transform duration-300"
      >
        <Image
          src={`/gallery/${index + 1}.jpeg`}
          alt={`Gallery Image ${index + 1}`}
          width={500}
          height={350}
          className="object-cover"
        />
      </div>
    ))}
  </div>
</section>


      </div>
      <ContactFooter />
    </main>
  )
}
