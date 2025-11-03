import { HeroSection } from "@/components/hero-section"
import { MissionOverview } from "@/components/mission-overview"
import { ShakthiSATInSpace } from "@/components/shakthisat-in-space"
import { WhyShakthiSAT } from "@/components/why-shakthisat"
import { WhyGirlsInSpace } from "@/components/why-girls-in-space"
import { Why108Countries } from "@/components/why-108-countries"
import { OurLegacy } from "@/components/our-legacy"
import { DirectorSection } from "@/components/director-section"
import { AboutFoundation } from "@/components/about-foundation"
import { GlobalParticipation } from "@/components/global-participation"
import { JoinMission } from "@/components/join-mission"
import { ContactFooter } from "@/components/contact-footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { Starfield } from "@/components/starfield"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#0B0C2A] text-white overflow-x-hidden">
      <Starfield />
      <ScrollProgress />

      <HeroSection />
      <MissionOverview />
      <ShakthiSATInSpace />
      <WhyShakthiSAT />
      <WhyGirlsInSpace />
      <Why108Countries />
      <OurLegacy />
      <DirectorSection />
      <AboutFoundation />
      <GlobalParticipation />
      <JoinMission />
      <ContactFooter />
    </main>
  )
}
