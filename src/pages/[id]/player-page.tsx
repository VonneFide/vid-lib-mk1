import { useState, useEffect } from "react";
import { ThumbsUp, ThumbsDown, Share2, Flag, MoreHorizontal, Mic } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { allVideos } from "../../lib/data";
import VideoCard from "../../components/video-card";
import VideoPlayer from "../../components/video-player";
import CommentSection from "../../components/comment-section";
import { Link, useParams } from "react-router-dom";

// ✅ Video interface to replace `any`
interface Video {
  id: number;
  title: string;
  author: string;
  views: number;
  date: string;
  description?: string;
  url: string;
  thumbnail: string;
}

export default function VideoPlayerPage() {
  const { id } = useParams<{ id: string }>();
  const [video, setVideo] = useState<Video | null>(null);
  const [relatedVideos, setRelatedVideos] = useState<Video[]>([]);
  const [suggestedVideos, setSuggestedVideos] = useState<Video[]>([]);

  useEffect(() => {
    const currentVideo = allVideos.find((v) => v.id.toString() === id) as Video;
    setVideo(currentVideo);
    setRelatedVideos(allVideos.filter((v) => v.id.toString() !== id).slice(0, 3) as Video[]);
    setSuggestedVideos(allVideos.filter((v) => v.id.toString() !== id).slice(3, 8) as Video[]);
  }, [id]);

  if (!video) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-[#2C3930] text-[#DCD7C9]">
      {/* Dynamic Navbar */}
      <nav className="bg-[#3F4F44] p-4 sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-[#DCD7C9]">
            VideoLib
          </Link>
          <div className="flex-1 mx-8">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search..."
                className="w-full bg-[#2C3930] text-[#DCD7C9] border-[#A27B5C] focus:border-[#DCD7C9]"
              />
              <Button
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#A27B5C] hover:bg-[#A27B5C]/80"
                size="icon"
              >
                <Mic className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Button className="bg-[#A27B5C] hover:bg-[#A27B5C]/80">Sign In</Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Video Player */}
          <div className="lg:w-3/4">
            <VideoPlayer video={video} />
            <h1 className="text-2xl font-bold my-4">{video.title}</h1>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#A27B5C]" />
                <div>
                  <p className="font-semibold">{video.author}</p>
                  <p className="text-sm text-[#DCD7C9]/60">
                    {video.views} views • {new Date(video.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" className="text-[#DCD7C9] hover:bg-[#A27B5C]/20">
                  <ThumbsUp className="w-5 h-5 mr-1" /> Like
                </Button>
                <Button variant="ghost" className="text-[#DCD7C9] hover:bg-[#A27B5C]/20">
                  <ThumbsDown className="w-5 h-5 mr-1" /> Dislike
                </Button>
                <Button variant="ghost" className="text-[#DCD7C9] hover:bg-[#A27B5C]/20">
                  <Share2 className="w-5 h-5 mr-1" /> Share
                </Button>
                <Button variant="ghost" className="text-[#DCD7C9] hover:bg-[#A27B5C]/20">
                  <Flag className="w-5 h-5 mr-1" /> Report
                </Button>
                <Button variant="ghost" className="text-[#DCD7C9] hover:bg-[#A27B5C]/20">
                  <MoreHorizontal className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <div className="bg-[#3F4F44] p-4 rounded-lg mb-6">
              {video.description ? (
                <p className="text-sm">{video.description}</p>
              ) : (
                <p className="text-sm text-[#DCD7C9]/60">No description available for this video.</p>
              )}
            </div>
            <CommentSection videoId={video.id} />
          </div>

          {/* Related and Suggested Videos */}
          <div className="lg:w-1/4 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Related Videos</h2>
              <div className="space-y-4">
                {relatedVideos.map((relatedVideo) => (
                  <VideoCard key={relatedVideo.id} video={relatedVideo} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Suggested Videos</h2>
              <div className="space-y-4">
                {suggestedVideos.map((suggestedVideo) => (
                  <VideoCard key={suggestedVideo.id} video={suggestedVideo} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
