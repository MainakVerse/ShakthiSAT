"use client"
import { SciFiInfoBox } from "@/components/scifi-info-box"

export default function AdvisorsPage() {
  const advisorCategories = [
    {
      id: "academic",
      title: "Academic Advisors",
      description: "Leading professors and researchers guiding our mission with expertise and innovation.",
      image: "/professor-scientist-academic.jpg",
      fullDescription:
        "Our academic advisors bring decades of combined experience from prestigious universities worldwide. They provide strategic guidance on curriculum development, research initiatives, and ensure our programs meet the highest standards of excellence in STEM education.",
      details: [
        "50+ leading professors and researchers",
        "Expertise across multiple scientific disciplines",
        "Contributors to cutting-edge research",
        "Mentors for next-generation scientists",
      ],
    },
    {
      id: "space",
      title: "Space Industry Experts",
      description: "Veterans from space agencies and aerospace companies driving innovation forward.",
      image: "/astronaut-space-engineer-spacecraft.jpg",
      fullDescription:
        "Our space industry experts bring real-world experience from leading space agencies and aerospace corporations. They share practical knowledge about satellite technology, mission operations, and the latest advancements in space exploration.",
      details: [
        "30+ aerospace and space agency veterans",
        "Direct satellite mission experience",
        "Advanced propulsion system expertise",
        "Commercial space industry insight",
      ],
    },
    {
      id: "education",
      title: "Education Specialists",
      description: "Experts in STEM education and curriculum development for future leaders.",
      image: "/teacher-education-classroom-learning.jpg",
      fullDescription:
        "Education specialists on our team focus on making complex space science concepts accessible and engaging for students at all levels. They develop innovative teaching methodologies and ensure our content is both rigorous and inspiring.",
      details: [
        "40+ dedicated education professionals",
        "STEM curriculum development expertise",
        "Online and classroom teaching experience",
        "Educational technology specialists",
      ],
    },
    {
      id: "policy",
      title: "Policy Advisors",
      description: "Government officials and international relations experts shaping the future.",
      image: "/government-policy-diplomat-international.jpg",
      fullDescription:
        "Policy advisors help navigate the complex landscape of international space law and government relations. They facilitate partnerships with governmental bodies and ensure compliance with international space regulations.",
      details: [
        "25+ policy and government experts",
        "International space law knowledge",
        "Government relations experience",
        "Strategic partnership facilitators",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FFD700] via-[#FF6EC7] to-[#6A4FC8] bg-clip-text text-transparent">
            Our Advisors
          </h1>
          <p className="text-xl text-[#C0C0C0] max-w-3xl mx-auto leading-relaxed">
            World-class experts guiding ShakthiSAT's mission with their knowledge, experience, and passion for
            empowering the next generation.
          </p>
        </div>

        {/* Sci-Fi Info Boxes Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {advisorCategories.map((category) => (
            <SciFiInfoBox
              key={category.id}
              title={category.title}
              description={category.description}
              image={category.image}
              fullDescription={category.fullDescription}
              details={category.details}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
