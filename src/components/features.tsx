import { Video, Users, Trophy, Clock } from "lucide-react"

const features = [
  {
    icon: Video,
    title: "High-Quality Content",
    description: "Access professionally produced video tutorials and courses",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience",
  },
  {
    icon: Trophy,
    title: "Certification",
    description: "Earn certificates upon completion of courses",
  },
  {
    icon: Clock,
    title: "Lifetime Access",
    description: "Access your purchased courses anytime, anywhere",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-[#3F4F44]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#DCD7C9] mb-16">Why Choose Our Platform</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#A27B5C] mb-6 transition-transform group-hover:scale-110">
                <feature.icon className="w-8 h-8 text-[#DCD7C9]" />
              </div>
              <h3 className="text-xl font-semibold text-[#DCD7C9] mb-3">{feature.title}</h3>
              <p className="text-[#DCD7C9]/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

