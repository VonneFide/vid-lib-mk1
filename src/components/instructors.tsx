import { ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import ChrisLema from '../assets/chris-lema-laughing-1.jpg'
import NatalieMacless from '../assets/Natalie MacLess.jpg'
import AllieNimmons from '../assets/Allie Nimmons.jpg'
import NiravMehta from '../assets/Nirav Mehta.jpg'

const instructors = [
  { name: "Chris Lema", title: "Senior Director", image: ChrisLema },
  { name: "Natalie MacLess", title: "Creative Lead", image: NatalieMacless },
  { name: "Allie Nimmons", title: "Production Expert", image: AllieNimmons },
  { name: "Nirav Mehta", title: "Technical Director", image: NiravMehta },
]

export default function Instructors() {
  return (
    <section className="py-20 bg-[#2C3930]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-[#DCD7C9]">Learn from more than 200 industry experts</h2>
          <Button variant="link" className="text-[#A27B5C] hover:text-[#A27B5C]/90">
            View All <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.name} className="instructor-card group">
              <div className="relative aspect-square mb-4 overflow-hidden rounded-lg transition-transform group-hover:-translate-y-2">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#DCD7C9]">{instructor.name}</h3>
              <p className="text-[#DCD7C9]/60">{instructor.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

