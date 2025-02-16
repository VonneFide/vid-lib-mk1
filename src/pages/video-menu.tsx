import { useState } from "react"
import { Search, Home, TrendingUp, Grid, PlayCircle, Heart, Clock, Plus } from "lucide-react"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import VideoCard from "../components/video-card"
import Footer from "../components/footer"
import { allVideos, popularVideos, categories, yourVideos, favoriteVideos, watchLaterVideos } from "../lib/data"

const sections = ["home", "popular", "categories", "your-videos", "favorites", "watch-later"]

export default function VideoLibrary() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, ] = useState("date")
  const [sortOrder, ] = useState("desc")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentSection, setCurrentSection] = useState("home")

  const getCurrentVideos = () => {
    switch (currentSection) {
      case "popular":
        return popularVideos
      case "your-videos":
        return yourVideos
      case "favorites":
        return favoriteVideos
      case "watch-later":
        return watchLaterVideos
      default:
        return allVideos
    }
  }

  const filteredAndSortedVideos = getCurrentVideos()
    .filter(
      (video) =>
        (selectedCategory === "All" || video.genre === selectedCategory) &&
        (video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          video.author.toLowerCase().includes(searchQuery.toLowerCase())),
    )
    .sort((a, b) => {
      if (sortBy === "date") {
        return sortOrder === "asc" ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date)
      } else if (sortBy === "title") {
        return sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
      } else if (sortBy === "author") {
        return sortOrder === "asc" ? a.author.localeCompare(b.author) : b.author.localeCompare(a.author)
      }
      return 0
    })

  const getSectionTitle = () => {
    switch (currentSection) {
      case "popular":
        return "Popular Videos"
      case "categories":
        return "Video Categories"
      case "your-videos":
        return "Your Videos"
      case "favorites":
        return "Favorite Videos"
      case "watch-later":
        return "Watch Later"
      default:
        return "All Videos"
    }
  }

  return (
    <div className="min-h-screen bg-[#2C3930] flex">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-[#3F4F44] text-[#DCD7C9] p-6 overflow-y-auto">
        <div className="space-y-6">
          <h2 className="text-xl font-bold mb-6">VideoLib</h2>

          <nav className="space-y-2">
            {sections.map((section) => (
              <Button
                key={section}
                variant="ghost"
                className={`w-full justify-start ${currentSection === section ? "bg-[#2C3930] text-[#A27B5C]" : "text-[#DCD7C9]"} hover:text-[#A27B5C] hover:bg-[#2C3930]`}
                onClick={() => setCurrentSection(section)}
              >
                {section === "home" && <Home className="mr-2 h-4 w-4" />}
                {section === "popular" && <TrendingUp className="mr-2 h-4 w-4" />}
                {section === "categories" && <Grid className="mr-2 h-4 w-4" />}
                {section === "your-videos" && <PlayCircle className="mr-2 h-4 w-4" />}
                {section === "favorites" && <Heart className="mr-2 h-4 w-4" />}
                {section === "watch-later" && <Clock className="mr-2 h-4 w-4" />}
                {section
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </Button>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#DCD7C9]/10">
            <Button className="w-full bg-[#A27B5C] hover:bg-[#A27B5C]/90 text-[#DCD7C9]">
              <Plus className="mr-2 h-4 w-4" /> Upload Video
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-[#2C3930] border-b border-[#DCD7C9]/10 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="relative w-1/2">
              <Input
                type="search"
                placeholder="Search videos..."
                className="w-full pl-10 bg-[#3F4F44] border-none text-[#DCD7C9] placeholder:text-[#DCD7C9]/60"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#DCD7C9]/60" />
            </div>
            <div className="flex items-center gap-4">
              <Button className="bg-[#A27B5C] hover:bg-[#A27B5C]/90">Upload Video</Button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#A27B5C]" />
                <span className="text-[#DCD7C9]">John Doe</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold text-[#DCD7C9] mb-6">{getSectionTitle()}</h2>

          {currentSection === "categories" ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="bg-[#3F4F44] p-6 rounded-lg hover:bg-[#A27B5C]/20 transition-colors cursor-pointer"
                >
                  <h3 className="text-lg font-semibold text-[#DCD7C9] mb-2">{category.name}</h3>
                  <p className="text-[#DCD7C9]/60">{category.count} videos</p>
                </div>
              ))}
            </div>
          ) : (
            <>
              {currentSection === "home" && (
                <div className="mb-8 overflow-x-auto">
                  <div className="flex gap-2">
                    {["All", "Healthcare", "Education", "Sports", "Nature", "Cooking", "Fashion"].map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        onClick={() => setSelectedCategory(category)}
                        className={`whitespace-nowrap ${
                          selectedCategory === category
                            ? "bg-[#A27B5C] hover:bg-[#A27B5C]/90 text-[#DCD7C9]"
                            : "text-[#DCD7C9] border-[#DCD7C9]/20 hover:bg-[#3F4F44]"
                        }`}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredAndSortedVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </>
          )}
        </main>

        <Footer />
      </div>
    </div>
  )
}