"use client"
import { useState } from "react"

export function AboutSrimathyModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="px-3 py-1 sm:px-4 sm:py-2 bg-green-500/20 border border-green-500/50 rounded-full text-xs sm:text-sm font-medium cursor-pointer"
      >
        About Srimathy
      </button>

      {/* Modal Background */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-[999]"
        >
          {/* Modal Box */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-[#6A4FC8] to-[#12001d] max-w-md w-full rounded-xl shadow-xl overflow-hidden animate-[fadeIn_0.25s_ease]"
          >
            {/* Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <h2 className="text-lg font-semibold">About Srimathy</h2>
              <button onClick={() => setOpen(false)} className="text-white-600 hover:text-red-500 text-xl leading-none">
                ×
              </button>
            </div>

          

            {/* Scrollable Content */}
           <div className="p-8 mb-4 max-h-128 overflow-y-auto  text-white space-y-6 leading-relaxed">

  <h2 className="text-lg font-bold text-white">Introduction</h2>
  <p>
    Dr. Srimathy Kesan is an Indian entrepreneur, space educator, and social activist. 
    She is the Founder & CEO of Space Kidz India (SKI), which focuses on designing, 
    fabricating, and launching small satellites — democratizing space for students 
    in India and around the world.
  </p>

  <h2 className="text-lg font-bold text-white">Early Life and Education</h2>
  <ul className="list-disc pl-4 space-y-2">
    <li>Graduated in Travel & Tourism Management</li>
    <li>Honorary Ph.D. in “Education through Travel” — Cosmopolitan University, USA</li>
    <li>First female NCC cadet to command a battalion parade with sword honor</li>
    <li>“Best Cadet” and Parade Commander — Andhra Pradesh Contingent, 1992</li>
    <li>Represented AP in 10 National Basketball Championships</li>
    <li>State-level athlete in shot put, javelin, handball & relay</li>
    <li>Silver Medalist – National Firing Competition</li>
    <li>Gold Medalist – “Word of Command”</li>
  </ul>

  <h2 className="text-lg font-bold text-white">Career</h2>
  <h3 className="font-semibold text-white">Space Kidz India (SKI)</h3>
  <p>Making space education accessible for students globally.</p>
  <ul className="list-disc pl-4 space-y-2">
    <li><strong>18+</strong> BalloonSats, <strong>2</strong> Suborbital Payloads, <strong>5</strong> Orbital Satellites</li>
    <li><strong>KALAMSAT</strong> — World’s smallest & lightest satellite (launched by NASA)</li>
    <li>Kalamsat-V2, SD SAT, AzaadiSAT & AzaadiSAT 2.0 — launched by ISRO</li>
    <li>NSLV — high-altitude launch with Rajasthan Govt.</li>
    <li>Among top 10 startups to sign MoU with InSpace / ISRO</li>
  </ul>

  <h3 className="font-semibold text-white mt-3">International Projects & Ambassadorship</h3>
  <ul className="list-disc pl-4 space-y-2">
    <li>Only Indian with Ambassador status to NASA, ESA & GCTC-Moscow</li>
    <li>UNESCO Mission PAYANKE — First school-led high-alt balloon launch in Africa</li>
    <li>Friendship Satellite — commemorating Indo-Russia relations</li>
    <li>NSLV-6 balloon launch — NASA Columbia base — payload by kids aged 10-15</li>
  </ul>

  <h3 className="font-semibold text-white mt-3">Historic Zero-Gravity Flight</h3>
  <p>
    First Indian woman to experience zero-gravity flight alongside Apollo Moonwalker Charles Duke 
    and Apollo’s first female engineer Poppy Northcutt.
  </p>

  <h2 className="text-lg font-bold text-white">Awards and Recognitions</h2>

  <p className="font-semibold">National Awards</p>
  <ul className="list-disc pl-4 space-y-1">
    <li>Devi Award 2024</li><li>Kalvi Tharagai Award</li><li>Abdul Kalam Award</li>
    <li>Pride of India — CNBC</li><li>Nari Shakti Award</li>
    <li>Cavinkare Chinnikrishnan Innovation Award</li>
  </ul>

  <p className="font-semibold">International Awards</p>
  <ul className="list-disc pl-4 space-y-1">
    <li>Women Leaders in Electronics — UK House of Lords</li>
    <li>Globant Global Women in Tech</li>
    <li>Women Icon Award — NTU Singapore</li>
    <li>Legendary Lioness Lifetime Achievement Award</li>
  </ul>

  <p className="font-semibold">Social Entrepreneur Recognition</p>
  <ul className="list-disc pl-4 space-y-1">
    <li>Best Social Entrepreneur — FICCI FLO</li>
    <li>Rotary & Lions — Social Entrepreneur of the Year</li>
  </ul>

  <p className="font-semibold">Innovation & Education</p>
  <ul className="list-disc pl-4 space-y-1">
    <li>World Education Award — Innovative Pedagogy</li>
    <li>Her Circle Bizruptors Award — Space Education Pioneer</li>
  </ul>

  <h2 className="text-lg font-bold text-white">NCC & Sports</h2>
  <ul className="list-disc pl-4 space-y-1">
    <li>Senior Under Officer — 1(A) Girls Battalion</li>
    <li>All-rounder Award — 3 consecutive years</li>
    <li>3× Mixed Doubles Badminton Titles</li>
    <li>Selected for Canada Youth Exchange (injury prevented travel)</li>
  </ul>

  <h2 className="text-lg font-bold text-white">Record-Keeping Honors</h2>
  <p>Recognized by:</p>
  <ul className="list-disc pl-4 space-y-1">
    <li>Asia Book of Records</li><li>India Book of Records</li>
    <li>Official World Record</li><li>Assist Book of Records</li>
  </ul>

  <h2 className="text-lg font-bold text-white">Other Endeavours</h2>
  <p className="font-semibold">Academic & Advisory Roles</p>
  <ul className="list-disc pl-4 space-y-1">
    <li>Planning Board Member — Mother Teresa University</li>
    <li>Advisor — AMET Maritime University</li>
    <li>Speaker — Oxford Debate (Europe Business Assembly)</li>
    <li>Author — “First Kids on the Moon”</li>
  </ul>

  <p className="font-semibold">Humanitarian Work</p>
  <ul className="list-disc pl-4 space-y-1">
    <li>Films against Breast Cancer & Female Foeticide</li>
    <li>Support to juvenile homes in Chennai</li>
    <li>COVID-19 & Flood relief impact</li>
    <li>School adoption — sanitation & infrastructure uplift</li>
  </ul>

  <p className="font-semibold">Arts & Culture</p>
  <p>Led India’s cultural team at the 2012 London Olympics + global showcases.</p>

 
</div>

          </div>
        </div>
      )}
    </>
  )
}
