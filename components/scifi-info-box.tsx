"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

interface AdvisorDetail {
  name: string
  role: string
  expertise: string
  image?: string
}

interface SciFiInfoBoxProps {
  title: string
  description: string
  image: string
  fullDescription: string
  details: string[]
  advisors?: AdvisorDetail[]
}

export function SciFiInfoBox({ title, description, image, fullDescription, details, advisors }: SciFiInfoBoxProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Default advisors for each category
  const defaultAdvisors: AdvisorDetail[] = [
    {
      name: "Dr. Sarah Chen",
      role: "Lead Researcher",
      expertise: "Astrophysics & Space Science",
      image: "/professor-scientist-academic.jpg",
    },
    {
      name: "Prof. James Mitchell",
      role: "University Director",
      expertise: "STEM Education",
      image: "/teacher-education-classroom-learning.jpg",
    },
    {
      name: "Dr. Amara Okafor",
      role: "Research Scholar",
      expertise: "Satellite Technology",
      image: "/astronaut-space-engineer-spacecraft.jpg",
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Innovation Lead",
      expertise: "Data Science",
      image: "/professor-scientist-academic.jpg",
    },
    {
      name: "Prof. Elena Rossi",
      role: "Department Chair",
      expertise: "Physics & Engineering",
      image: "/teacher-education-classroom-learning.jpg",
    },
    {
      name: "Dr. Kofi Mensah",
      role: "Senior Advisor",
      expertise: "Space Policy",
      image: "/government-policy-diplomat-international.jpg",
    },
  ]

  const advisorList = advisors || defaultAdvisors

  return (
    <>
      {/* Sci-Fi Info Box */}
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 via-[#FF6EC7]/20 to-[#6A4FC8]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

        <div className="relative bg-[#1a1f3a]/60 backdrop-blur-md border border-[#6A4FC8]/30 rounded-2xl p-8 overflow-hidden group-hover:border-[#FFD700]/50 transition-all duration-300">
          <div className="absolute -top-8 -left-8 w-32 h-32 opacity-40 group-hover:opacity-60 transition-opacity duration-300 transform group-hover:scale-110 group-hover:-translate-y-2 duration-300">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover rounded-full border-2 border-[#FFD700]/30 shadow-lg shadow-[#FFD700]/20"
            />
          </div>

          {/* Content Area */}
          <div className="relative z-10 ml-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FF6EC7] bg-clip-text text-transparent mb-3">
              {title}
            </h3>

            <p className="text-[#C0C0C0] text-base leading-relaxed mb-6 pr-4">{description}</p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#FFD700] to-[#FF6EC7] text-[#0A0E27] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#FFD700]/50 transition-all duration-300 hover:scale-105"
            >
              Read More
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <line x1="0" y1="0" x2="100" y2="100" stroke="#FFD700" strokeWidth="2" />
              <line x1="100" y1="0" x2="0" y2="100" stroke="#FFD700" strokeWidth="2" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="#FF6EC7" strokeWidth="1" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 transition-opacity duration-300"
          onClick={() => setIsModalOpen(false)}
        />
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="relative bg-gradient-to-br from-[#1a1f3a] to-[#0A0E27] border border-[#6A4FC8]/50 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-[#FFD700]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gradient-to-r from-[#FFD700]/10 to-[#FF6EC7]/10 backdrop-blur-md border-b border-[#6A4FC8]/30 p-6 flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#FFD700] via-[#FF6EC7] to-[#6A4FC8] bg-clip-text text-transparent">
                  {title}
                </h2>
                <p className="text-[#C0C0C0] text-sm mt-2">{fullDescription}</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-[#C0C0C0] hover:text-[#FFD700] text-2xl transition-colors flex-shrink-0 ml-4"
              >
                ×
              </button>
            </div>

            <div className="p-8 space-y-8">
              {/* Key Highlights Section */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-[#FFD700]">Key Highlights:</h3>
                <ul className="space-y-2">
                  {details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#C0C0C0]">
                      <span className="text-[#FF6EC7] font-bold mt-1">→</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#FFD700] mb-4">Featured Advisors:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {advisorList.map((advisor, idx) => (
                    <div key={idx} className="relative group/advisor">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FF6EC7]/20 to-[#6A4FC8]/20 rounded-xl opacity-0 group-hover/advisor:opacity-100 transition-opacity duration-300 blur-lg" />
                      <div className="relative bg-[#0A0E27]/80 border border-[#6A4FC8]/40 rounded-xl overflow-hidden group-hover/advisor:border-[#FF6EC7]/60 transition-all duration-300 h-full flex flex-col">
                        {advisor.image && (
                          <div className="w-full h-48 overflow-hidden">
                            <img
                              src={advisor.image || "/placeholder.svg"}
                              alt={advisor.name}
                              className="w-full h-full object-cover group-hover/advisor:scale-110 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <div className="p-4 flex-1">
                          <h4 className="font-semibold text-[#FFD700] text-base leading-tight">{advisor.name}</h4>
                          <p className="text-[#FF6EC7] text-sm font-medium mt-1">{advisor.role}</p>
                          <p className="text-[#C0C0C0] text-sm mt-3 leading-relaxed">{advisor.expertise}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-gradient-to-r from-[#FFD700]/10 to-[#FF6EC7]/10 backdrop-blur-md border-t border-[#6A4FC8]/30 p-6 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 bg-gradient-to-r from-[#FFD700] to-[#FF6EC7] text-[#0A0E27] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#FFD700]/50 transition-all duration-300 hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
