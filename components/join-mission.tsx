"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { UserPlus, Building2, HeartHandshake } from "lucide-react"

export function JoinMission() {
  const [formType, setFormType] =
    useState<"partner" | "student" | "volunteer" | null>(null)

  return (
    <section
      id="join-mission"
      className="relative py-16 sm:py-20 md:py-24 px-3 sm:px-4 bg-gradient-to-b from-[#6A4FC8]/10 to-transparent"
    >
      <div className="max-w-6xl mx-auto">

        <div className="relative w-full border border-white/40 overflow-hidden p-6 sm:p-8 md:p-10 mx-auto">

          {/* TITLE */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold uppercase tracking-tight mb-4 sm:mb-6">
              Join the Mission
            </h2>
            <p className="text-sm sm:text-lg md:text-2xl text-[#C0C0C0] leading-relaxed">
              Let's build the future together
            </p>
          </div>

          {/* OPTION SELECT */}
          {!formType ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">

              {/* Partner */}
              <button
                onClick={() => setFormType("partner")}
                className="group p-6 sm:p-8 bg-[#6A4FC8]/10 border-2 border-[#6A4FC8]/30 rounded-lg backdrop-blur-sm hover:border-[#FFD700] transition-all"
              >
                <Building2 className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 text-[#6A4FC8] group-hover:text-[#FFD700] transition-colors" />
                <h3 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-3 text-center">Become a Partner</h3>
                <p className="text-sm sm:text-lg text-[#C0C0C0] text-center">
                  Schools, organizations, and sponsors welcome
                </p>
              </button>

              {/* Student */}
              <button
                onClick={() => setFormType("student")}
                className="group p-6 sm:p-8 bg-[#E26EE5]/10 border-2 border-[#E26EE5]/30 rounded-lg backdrop-blur-sm hover:border-[#FFD700] transition-all"
              >
                <UserPlus className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 text-[#E26EE5] group-hover:text-[#FFD700] transition-colors" />
                <h3 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-3 text-center">Become an Ambassador</h3>
                <p className="text-sm sm:text-lg text-[#C0C0C0] text-center">
                  Represent your potentials to the global stage.
                </p>
              </button>

              {/* Volunteer */}
              <button
                onClick={() => setFormType("volunteer")}
                className="group p-6 sm:p-8 bg-[#0B0C2A]/30 border-2 border-[#6A4FC8]/30 rounded-lg backdrop-blur-sm hover:border-[#FFD700] transition-all"
              >
                <HeartHandshake className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 text-[#FFD700] transition-colors" />
                <h3 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-3 text-center text-white">
                  Become a Volunteer
                </h3>
                <p className="text-sm sm:text-lg text-[#C0C0C0] text-center">
                  Contribute skills, time, and passion
                </p>
              </button>

            </div>
          ) : (
            <div className="bg-[#6A4FC8]/10 border border-[#6A4FC8]/30 rounded-lg p-6 sm:p-8 backdrop-blur-sm">

              {/* FORM HEADER */}
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-2xl font-semibold">
                  {formType === "partner"
                    ? "Partner Application"
                    : formType === "student"
                    ? "Student Nomination"
                    : "Volunteer Application"}
                </h3>
                <Button
                  variant="ghost"
                  onClick={() => setFormType(null)}
                  className="bg-yellow-600 text-black hover:text-white hover:bg-red-700"
                >
                  Back
                </Button>
              </div>

              {/* FORM CONTENT */}
              <form className="space-y-5 sm:space-y-6">

                {/* Shared Fields */}
                <Input placeholder="Full Name *" required className="bg-[#0B0C2A]/50 border-[#6A4FC8]/50 text-white" />
                <Input placeholder="Email *" type="email" required className="bg-[#0B0C2A]/50 border-[#6A4FC8]/50 text-white" />

                {/* VOLUNTEER FULL FORM */}
                {formType === "volunteer" && (
                  <>

                    {/* Section: Personal */}
                    <h4 className="text-xl sm:text-2xl font-bold text-white mt-6">Personal Details</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Input placeholder="Age" className="bg-[#0B0C2A]/50 border-[#6A4FC8]/50 text-white" />
                      <Input placeholder="Phone Number" className="bg-[#0B0C2A]/50 border-[#6A4FC8]/50 text-white" />
                      <Input placeholder="Village / City / State / Country" className="bg-[#0B0C2A]/50 border-[#6A4FC8]/50 text-white sm:col-span-2" />
                      
                    </div>

                    {/* Section: Education */}
                    <h4 className="text-xl sm:text-2xl font-bold text-white mt-6">Education & Work</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Input placeholder="Current Occupation" className="bg-[#0B0C2A]/50 border-[#6A4FC8]/50 text-white" />
                      <Input placeholder="Current Organization" className="bg-[#0B0C2A]/50 border-[#6A4FC8]/50 text-white" />
                      <Input placeholder="Educational Qualifications" className="bg-[#0B0C2A]/50 border-[#6A4FC8]/50 text-white sm:col-span-2" />
                      <Input placeholder="Major Subject" className="bg-[#0B0C2A]/50 border-[#6A4FC8]/50 text-white sm:col-span-2" />
                    </div>

                    {/* Section: Motivation */}
                    <h4 className="text-xl sm:text-2xl font-bold text-white mt-6">Motivation</h4>
                    <Textarea placeholder="Previous Volunteer Experience" rows={4} className="bg-[#0B0C2A]/50 border-[#6A4FC8]/50 text-white" />
                    <Textarea placeholder="Why do you want to volunteer for this mission?" rows={4} className="bg-[#0B0C2A]/50 border-[#6A4FC8]/50 text-white" />
                    <Textarea placeholder="What do you hope to achieve from this experience?" rows={4} className="bg-[#0B0C2A]/50 border-[#6A4FC8]/50 text-white" />

                    {/* Dropdowns */}
                    <h4 className="text-xl sm:text-2xl font-bold text-white mt-6">Preferences</h4>

                    <select className="bg-[#0B0C2A]/50 border-[#6A4FC8]/50 text-white rounded-md p-3 w-full">
                      <option className="bg-black">15 - 30 Hours per month</option>
                      <option className="bg-black">30 - 40 Hours per month</option>
                      <option className="bg-black">40 - 50 Hours per month</option>
                      <option className="bg-black">50+ Hours</option>
                    </select>

                    <select className="bg-[#0B0C2A]/50 border-[#6A4FC8]/50 text-white rounded-md p-3 w-full mt-4">
                      <option className="bg-black">Technical</option>
                      <option className="bg-black">Academic</option>
                      <option className="bg-black">Management</option>
                    </select>

                    <select className="bg-[#0B0C2A]/50 border-[#6A4FC8]/50 text-white rounded-md p-3 w-full mt-4">
                      <option className="bg-black">Facebook</option>
                      <option className="bg-black">Instagram</option>
                      <option className="bg-black">YouTube</option>
                      <option className="bg-black">LinkedIn</option>
                      <option className="bg-black">Twitter/X</option>
                      <option className="bg-black">Friend informed me</option>
                      <option className="bg-black">Family Member informed me</option>
                    </select>

                    <label className="flex items-center gap-2 mt-6 text-white">
                      <input type="checkbox" />
                      I am willing to commit to the full duration of the mission
                    </label>

                  </>
                )}

                {/* Non-volunteer forms stay same */}
                {formType !== "volunteer" && (
                  <>
                    <Input placeholder="Country *" className="bg-[#0B0C2A]/50 border-[#6A4FC8]/50 text-white" required />
                    <Textarea
                      rows={5}
                      className="bg-[#0B0C2A]/50 border-[#6A4FC8]/50 text-white resize-none"
                      required
                      placeholder={
                        formType === "partner"
                          ? "Tell us about your organization and how you'd like to partner..."
                          : "Tell us about the student you're nominating..."
                      }
                    />
                  </>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#FFD700] text-[#0B0C2A] hover:bg-[#FFD700]/90 font-semibold text-base sm:text-lg py-4 sm:py-6"
                >
                  Submit {formType === "volunteer" ? "Volunteer Application" : "Application"}
                </Button>

              </form>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
