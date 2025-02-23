import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react"
import { Button } from "./ui/button"
import { Slider } from "./ui/slider"

interface VideoPlayerProps {
  video: {
    id: number
    title: string
    // Add other video properties as needed
  }
}

export default function VideoPlayer({ video }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const playerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return

    const updateTime = () => setCurrentTime(videoElement.currentTime)
    const updateDuration = () => setDuration(videoElement.duration)

    videoElement.addEventListener("timeupdate", updateTime)
    videoElement.addEventListener("loadedmetadata", updateDuration)

    return () => {
      videoElement.removeEventListener("timeupdate", updateTime)
      videoElement.removeEventListener("loadedmetadata", updateDuration)
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (newVolume: number[]) => {
    const volumeValue = newVolume[0]
    setVolume(volumeValue)
    if (videoRef.current) {
      videoRef.current.volume = volumeValue
    }
    setIsMuted(volumeValue === 0)
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleSeek = (newTime: number[]) => {
    if (videoRef.current) {
      videoRef.current.currentTime = newTime[0]
    }
  }

  const toggleFullscreen = () => {
    if (!playerRef.current) return

    if (!isFullscreen) {
      if (playerRef.current.requestFullscreen) {
        playerRef.current.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
    setIsFullscreen(!isFullscreen)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  return (
    <div ref={playerRef} className="relative aspect-video bg-black">
      <video
        ref={videoRef}
        className="w-full h-full"
        src="/placeholder-video.mp4" // Replace with actual video source
        poster="/placeholder.svg?height=720&width=1280"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <Slider value={[currentTime]} max={duration} step={1} onValueChange={handleSeek} className="mb-4" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button size="icon" variant="ghost" onClick={togglePlay} className="text-[#DCD7C9] hover:bg-[#A27B5C]/20">
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </Button>
            <Button size="icon" variant="ghost" onClick={toggleMute} className="text-[#DCD7C9] hover:bg-[#A27B5C]/20">
              {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
            </Button>
            <Slider
              value={[isMuted ? 0 : volume]}
              max={1}
              step={0.01}
              onValueChange={handleVolumeChange}
              className="w-24"
            />
            <span className="text-[#DCD7C9] text-sm">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
          <Button
            size="icon"
            variant="ghost"
            onClick={toggleFullscreen}
            className="text-[#DCD7C9] hover:bg-[#A27B5C]/20"
          >
            {isFullscreen ? <Minimize className="h-6 w-6" /> : <Maximize className="h-6 w-6" />}
          </Button>
        </div>
      </div>
    </div>
  )
}

