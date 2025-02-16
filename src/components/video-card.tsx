import { useState } from "react"
import { Play, Heart, Clock, Share2 } from "lucide-react"
import { Button } from "./ui/button"

interface Video {
  id: number
  title: string
  author: string
  date: string
  genre: string
  thumbnail: string
  duration: string
  views: string
}

interface VideoCardProps {
  video: Video
}

export default function VideoCard({ video }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group bg-[#3F4F44] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video">
        <img
          src={video.thumbnail || "/placeholder.svg"}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button
            size="icon"
            variant="ghost"
            className="w-12 h-12 rounded-full bg-[#A27B5C]/80 hover:bg-[#A27B5C] text-[#DCD7C9]"
          >
            <Play className="w-6 h-6" />
          </Button>
        </div>
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-[#DCD7C9] text-sm rounded">
          {video.duration}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#DCD7C9] mb-2 line-clamp-2 hover:text-[#A27B5C] transition-colors">
          {video.title}
        </h3>
        <div className="flex items-center justify-between text-sm text-[#DCD7C9]/80">
          <span>{video.author}</span>
          <span>{video.views} views</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-[#DCD7C9]/60">{new Date(video.date).toLocaleDateString()}</span>
          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 text-[#DCD7C9]/60 hover:text-[#A27B5C] hover:bg-transparent"
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 text-[#DCD7C9]/60 hover:text-[#A27B5C] hover:bg-transparent"
            >
              <Clock className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 text-[#DCD7C9]/60 hover:text-[#A27B5C] hover:bg-transparent"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

