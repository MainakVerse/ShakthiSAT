"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Countries", href: "/countries" },
  { name: "Devis", href: "/devis" },
  { name: "Advisors", href: "/advisors" },
  { name: "Partners", href: "/partners" },
  { name: "About Us", href: "/about-us" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0E27]/95 border-b border-[#6A4FC8]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ✅ Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/shakthisat-logo.png"
              alt="ShakthiSAT Logo"
              width={140}
              height={40}
              priority
              className="object-contain rounded-xl border border-white/10 shadow-md shadow-[#6A4FC8]/30"
            />
          </Link>

          {/* ✅ Desktop Menu + Donate grouped together */}
          <div className="hidden md:flex items-center space-x-0">
            <div className="flex items-center space-x-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-[#6A4FC8] to-[#FF6EC7] text-white shadow-lg shadow-[#6A4FC8]/50"
                        : "text-[#C0C0C0] hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>

            {/* ✅ Donate Button (Tightly aligned to menu) */}
            <Link
              href="/donate"
              className="ml-3 px-5 py-2 bg-white text-[#0A0E27] rounded-full font-semibold text-sm hover:bg-[#FFD700] transition-all duration-300 shadow-md shadow-[#6A4FC8]/40 border border-white"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-black transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-2 p-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-6 py-4 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-[#6A4FC8] to-[#FF6EC7] text-white shadow-lg shadow-[#6A4FC8]/50"
                    : "text-[#C0C0C0] hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            )
          })}

          {/* ✅ Mobile Donate Button */}
          <Link
            href="/donate"
            className="mt-4 px-6 py-3 bg-white text-[#0A0E27] rounded-full font-semibold text-base hover:bg-[#FFD700] transition-all duration-300 text-center"
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  )
}
