import type React from "react"
import type { Metadata } from "next"
import { Rajdhani } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
})

export const metadata: Metadata = {
  title: "ShakthiSAT | Female-led Lunar Satellite Mission",
  description: "Dr. Srimathy Kesan's dream. From AzaadiSAT to the Moon. 108 Nations — 12,000 Girls. One Mission: Empower Futures.",
  generator: "Mainak Chaudhuri",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
