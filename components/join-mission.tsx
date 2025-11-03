"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { UserPlus, Building2, MapPin } from "lucide-react"

export function JoinMission() {
  const [formType, setFormType] = useState<"partner" | "student" | null>(null)

  return (
    <section id="join-mission" className="relative py-24 px-4 bg-gradient-to-b from-[#6A4FC8]/10 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">Join the Mission</h2>
          <p className="text-xl md:text-2xl text-[#C0C0C0] leading-relaxed">Let's build the future together</p>
        </div>

        {!formType ? (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Partner */}
            <button
              onClick={() => setFormType("partner")}
              className="group p-8 bg-[#6A4FC8]/10 border-2 border-[#6A4FC8]/30 rounded-lg backdrop-blur-sm hover:border-[#FFD700] transition-all"
            >
              <Building2 className="h-16 w-16 mx-auto mb-4 text-[#6A4FC8] group-hover:text-[#FFD700] transition-colors" />
              <h3 className="text-2xl font-semibold mb-3">Become a Partner</h3>
              <p className="text-lg text-[#C0C0C0]">Schools, organizations, and sponsors welcome</p>
            </button>

            {/* Student */}
            <button
              onClick={() => setFormType("student")}
              className="group p-8 bg-[#E26EE5]/10 border-2 border-[#E26EE5]/30 rounded-lg backdrop-blur-sm hover:border-[#FFD700] transition-all"
            >
              <UserPlus className="h-16 w-16 mx-auto mb-4 text-[#E26EE5] group-hover:text-[#FFD700] transition-colors" />
              <h3 className="text-2xl font-semibold mb-3">Join the Mission</h3>
              <p className="text-lg text-[#C0C0C0]">Help a girl reach for the stars</p>
            </button>

            {/* Address (rightmost) */}
            <div className="p-8 bg-[#0B0C2A]/30 border-2 border-[#6A4FC8]/30 rounded-lg backdrop-blur-sm">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="h-10 w-10 text-[#FFD700]" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white text-center">Address</h3>
              <p className="text-sm text-[#C0C0C0] leading-relaxed text-center">
                Shambala Facility, Ispahani Centre,<br />
                123, 124, Nungambakkam High Rd,<br />
                Thousand Lights West, Thousand Lights,<br />
                Chennai, Tamil Nadu 600034
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-[#6A4FC8]/10 border border-[#6A4FC8]/30 rounded-lg p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold">
                {formType === "partner" ? "Partner Application" : "Student Nomination"}
              </h3>
              <Button variant="ghost" onClick={() => setFormType(null)} className="text-[#C0C0C0] hover:text-white">
                Back
              </Button>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  required
                  className="bg-[#0B0C2A]/50 border-[#6A4FC8]/50 text-white"
                  placeholder="Enter full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  className="bg-[#0B0C2A]/50 border-[#6A4FC8]/50 text-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium mb-2">
                  Country *
                </label>
                <Input
                  id="country"
                  required
                  className="bg-[#0B0C2A]/50 border-[#6A4FC8]/50 text-white"
                  placeholder="Your country"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  className="bg-[#0B0C2A]/50 border-[#6A4FC8]/50 text-white resize-none"
                  placeholder={
                    formType === "partner"
                      ? "Tell us about your organization and how you'd like to partner..."
                      : "Tell us about the student you're nominating..."
                  }
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#FFD700] text-[#0B0C2A] hover:bg-[#FFD700]/90 font-semibold text-lg py-6"
              >
                Submit Application
              </Button>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}
