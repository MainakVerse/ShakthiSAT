import { GraduationCap, Award, Users, BookOpen } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdvisorsPage() {
  const advisorCategories = [
    {
      icon: GraduationCap,
      title: "Academic Advisors",
      description: "Leading professors and researchers from top universities worldwide",
      count: "50+",
      color: "text-[#FFD700]",
    },
    {
      icon: Award,
      title: "Space Industry Experts",
      description: "Veterans from space agencies and aerospace companies",
      count: "30+",
      color: "text-[#FF6EC7]",
    },
    {
      icon: Users,
      title: "Education Specialists",
      description: "Experts in STEM education and curriculum development",
      count: "40+",
      color: "text-[#6A4FC8]",
    },
    {
      icon: BookOpen,
      title: "Policy Advisors",
      description: "Government officials and international relations experts",
      count: "25+",
      color: "text-[#C0C0C0]",
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

        {/* Advisory Board Overview */}
        <Card className="bg-[#1a1f3a]/50 border-[#6A4FC8]/30 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Advisory Board</CardTitle>
          </CardHeader>
          <CardContent className="text-[#C0C0C0] space-y-4">
            <p>
              Our advisory board comprises distinguished leaders from academia, space industry, education, and
              policy-making. These experts provide strategic guidance, technical expertise, and invaluable insights to
              ensure ShakthiSAT achieves its ambitious goals.
            </p>
            <p>
              With decades of combined experience in space science, satellite technology, and STEM education, our
              advisors help shape curriculum, establish partnerships, and ensure that our programs meet the highest
              standards of excellence.
            </p>
          </CardContent>
        </Card>

        {/* Advisor Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {advisorCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-[#1a1f3a]/50 border-[#6A4FC8]/30 hover:border-[#FFD700]/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <category.icon className={`h-12 w-12 ${category.color} mb-4`} />
                  <span className={`text-3xl font-bold ${category.color}`}>{category.count}</span>
                </div>
                <CardTitle className="text-white text-xl">{category.title}</CardTitle>
                <CardDescription className="text-[#C0C0C0] text-base">{category.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
