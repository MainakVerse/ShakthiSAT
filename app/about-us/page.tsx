"use client"

import { Rocket, Heart, Users, Target } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactFooter } from "@/components/contact-footer"
import { useState } from "react"

export default function AboutUsPage() {

  const [showTeamModal, setShowTeamModal] = useState(false)
  const [activeTeam, setActiveTeam] = useState<number | null>(null)

  
  const teamMembers = [
    { name: "Dr. Srimathy Kesan", role: "Mission Director", image: "/teams/1.jpg", about: "Founder and CEO of Space Kidz India. 19  NSLV’s (Near Space Launch Vehicles), BalloonSat’s, 3 Sub-Orbital satellites, and 4 Orbital satellites were designed, manufactured and launched by Dr. Kesan and her team, who are young people." },
    { name: "Mr. Gobinath", role: "Academic Director", image: "/teams/2.jpg", about: "Chief People Officer at Space Kidz India. Spearheaded 25+  space missions and two pan-India projects. Innovated educational programs and developed strategic partnerships Passionate about books, business, psychology, physics, and space exploration." },
    { name: "Ms. Yara Fernandes", role: "International Director for Space, Quantum and Economic Innovation", image: "/teams/3.jpg", about: "Yara J. Fernandes is helping to build Space & Quantum ecosystems worldwide through global collaboration on multicultural, interdisciplinary teams. She is a graduate of John Hopkins University, where she helped make a diplomacy curriculum. She was hired by a government in Northern Africa due to her experience in cross cultural communication. She frequently builds partnerships, teams, and collaboration opportunities including with leading international business development initiatives." },
    { name: "Ms. Sukruti Narayanan", role: "Head of Global Partnerships", image: "/teams/4.jpg", about: "Ms. Sukruti Narayanan is the Head of Global Partnerships for Mission ShakthiSAT. She is the Co-Founder - Bamboo Ventures. She is creating equal opportunities and Exposure to both boys and girls in areas of Science & Technology, Entrepreneurship, Journalism and Politics." },
    { name: "Ms. Rocío Caparrós del Moral", role: "International Relations and Strategy Advisor", image: "/teams/5.jpg", about: "Rocio Caparrós del Moral is a renowned expert in outer space governance and public affairs. Currently serving as head of institutional relations in Andalucía and national responsible for public affairs on space issues. A law graduate from the university of Jaén, she pursued PHD studies on European integration, focusing on legal and economic aspects, aspecialises in the policies and legal framework of outer space. Her career highlights include roles at ESA´s european centre for space law, as well as positions at UNESCO COMEST, The international Astronautical Federation(IAF). Rocio is committed with the promotion of gender equality and the empowerment of women and girls in the space sector and science. In 2023, she was selected by UNOOSA for the Space4Women program." },
    { name: "Mr. Gokul V.", role: "Lead - Mechanical Unit", image: "/teams/6.jpg", about: "Mr. Gokul is an accomplished engineering professional with over eight years of experience leading Gaags Technologies Pvt. Ltd., a major industrial 3D printer manufacturing company in Chennai. As CEO, he has directed product development, research initiatives, and advancements in 3D printing for medical and machinery applications. His expertise includes product design, 3D modeling, and developing innovative technological solutions. Previously, he worked as a Product Development Engineer, contributing to medical and mechanical innovations. He holds a BE in Mechanical Engineering from Chennai Institute of Technology, where he built his own 3D printer and participated in engineering projects." },
    { name: "Ms. Haashika Raj", role: "Global Alliances & Outreach Manager", image: "/teams/7.jpg", about: "Academic Program Coordinator at Space Kidz India. Nanotechnologist by training, Amateur Astronomer by passion. Zealous science communicator and a budding researcher of Energy Storage Devices and Electrochemical devices." },
    { name: "Mr. Sriram Ramakrishnan", role: "Technology Team Coordinator", image: "/teams/8.jpg", about: "Sriram Ramakrishnan is a Technical Product Manager at Space Kidz India, contributing to the groundbreaking Mission ShakthiSat, a global lunar satellite initiative. With a strong foundation in Data Science and Physics, he holds a Master’s in Data Science and a Bachelor’s in Physics, both with distinction. Sriram specializes in AI, Machine Learning, and Generative AI, bringing innovative solutions to satellite technology and STEM education. A certified AI expert by IISc Bangalore and quantum computing enthusiast, Sriram blends technical expertise with a passion for fostering innovation and sustainability. His work focuses on creating impactful products, mentoring young students, and leveraging technology for global progress in space exploration and education." },
    { name: "Mr. Srikanth R", role: "Operations Manager", image: "/teams/9.jpg", about: "Mr. Srikanth R is a Physics graduate with extensive experience in astronomy education and content creation. he has led various projects at Space Kidz India, including developing educational content, constructing radio telescopes, and coordinating academic programs. Proficient in content creation and skilled in astronomy outreach, he is committed to advancing the field through innovative and engaging educational initiatives. Master's student in Physics at Loyola College, currently working as Operations Manager at Space Kidz India, where he handle day-to-day tasks also serving as the Project Coordinator for the Young Scientist India competition. His Research interests include Microplastics analysis, Instrumentation & Applied Physics. He love science, electronics, and getting involved in all kinds of projects. He have a lot of varied interests and enjoy trying new things." },
    { name: "Mr. Iruthayaraj M", role: "Administrative Manager", image: "/teams/10.jpg", about: "Mr. Iruthayaraj M is a Physics graduate with a passion for supporting the mission of Space Kidz India. As an administrative assistant, he plays a crucial role in assisting with Mission Shakthisat. His responsibilities include handling social media management, creating and posting posters, managing video content, and more." },
    { name: "Mr. Shantha Kumar. B", role: "Science Communicator & SME", image: "/teams/11.jpg", about: "Mr. Shantha Kumar. B is  Science Mentor at Space Kidz India, teaching Space Science and Satellite Technology to over 1000+students. A skilled science communicator is passionate about making space science accessible and engaging. Experienced in fostering curiosity and knowledge in young learners about the wonders of space exploration." },
    { name: "Ms. Saitanya Kesan", role: "Advocate", image: "/teams/12.jpg", about: "Ms. Saitanya is an Independant Law Practitioner at High Court of Madras and Director at Space Kidz India." },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">

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
              <Card key={index} className="bg-[#1a1f3a]/50 border-[#6A4FC8]/30 text-center p-6 min-h-[330px] flex flex-col justify-between">
                
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 border border-[#FFD700]/40">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>

                <h3 className="text-white text-lg font-semibold">{member.name}</h3>
                <p className="text-[#C0C0C0] text-sm mt-2">{member.role}</p>

                {/* About Button */}
                <button
                  onClick={() => {
                    setActiveTeam(index)
                    setShowTeamModal(true)
                  }}
                  className="mt-4 px-4 py-2 rounded-md bg-[#6A4FC8] text-white text-sm hover:bg-[#8d6bff] transition"
                >
                  About
                </button>
              </Card>
            ))}
          </div>
        </section>

        {/* ✅ Team Modal */}
        {showTeamModal && activeTeam !== null && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setShowTeamModal(false)}
          >
            <div
              className="bg-[#12152e] rounded-xl relative w-[80%] max-w-5xl text-left p-10"
              onClick={(e) => e.stopPropagation()}
            >

              {/* Close Button */}
              <button
                className="absolute top-4 right-6 text-white text-3xl"
                onClick={() => setShowTeamModal(false)}
              >
                ×
              </button>

              {/* Image */}
              <div className="flex justify-center mb-8">
                <Image
                  src={teamMembers[activeTeam].image}
                  alt={teamMembers[activeTeam].name}
                  width={220}
                  height={220}
                  className="rounded-full object-cover border-2 border-[#FFD700]/60"
                />
              </div>

              {/* Name */}
              <h3 className="text-[#FFD700] text-3xl font-bold mb-6">
                {teamMembers[activeTeam].name}                
              </h3>
              <p className="text-[#13b9d2] text-lg mb-6">{teamMembers[activeTeam].role}</p>

              {/* ✅ About Text with paragraph breaks */}
              <div className="text-[#C0C0C0] text-base leading-relaxed space-y-5 pr-4">
                {teamMembers[activeTeam].about.split("\n").map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

            </div>
          </div>
        )}

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
