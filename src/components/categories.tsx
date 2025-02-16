import { Camera, Edit, Palette, Music, Megaphone, BarChart, Users, Globe, Briefcase, Lightbulb } from "lucide-react"


const categories = [
  { icon: Camera, label: "Videography" },
  { icon: Edit, label: "Video Editing" },
  { icon: Palette, label: "Color Grading" },
  { icon: Music, label: "Sound Design" },
  { icon: Megaphone, label: "Marketing" },
  { icon: BarChart, label: "Analytics" },
  { icon: Users, label: "Collaboration" },
  { icon: Globe, label: "Online Distribution" },
  { icon: Briefcase, label: "Business" },
  { icon: Lightbulb, label: "Creativity" },
]

export default function Categories() {
  return (
    <section className="py-20 bg-[#3F4F44]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#DCD7C9] mb-12">Explore Our Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 group cursor-pointer">
              <div className="p-4 bg-[#2C3930] rounded-full transition-all duration-300 group-hover:bg-[#A27B5C]">
                <category.icon className="w-8 h-8 text-[#DCD7C9]" />
              </div>
              <span className="text-[#DCD7C9] group-hover:text-[#A27B5C] transition-colors duration-300">
                {category.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

