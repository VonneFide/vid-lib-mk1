import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

interface Comment {
  id: number
  author: string
  content: string
  timestamp: string
  likes: number
  replies: number
}

const dummyComments: Comment[] = [
  {
    id: 1,
    author: "Jane Doe",
    content: "Great video! I learned a lot from this.",
    timestamp: "2 days ago",
    likes: 15,
    replies: 3,
  },
  {
    id: 2,
    author: "John Smith",
    content: "Could you make a follow-up video on advanced techniques?",
    timestamp: "1 day ago",
    likes: 8,
    replies: 1,
  },
  // Add more dummy comments as needed
]

interface CommentSectionProps {
  videoId: number
}

export default function CommentSection({ videoId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(dummyComments)
  const [newComment, setNewComment] = useState("")

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const comment: Comment = {
      id: Date.now(),
      author: "You",
      content: newComment,
      timestamp: "Just now",
      likes: 0,
      replies: 0,
    }

    setComments([comment, ...comments])
    setNewComment("")
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Comments</h3>
      <form onSubmit={handleSubmitComment} className="mb-6">
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="mb-2 bg-[#3F4F44] text-[#DCD7C9] border-[#A27B5C] focus:border-[#DCD7C9]"
        />
        <Button type="submit" className="bg-[#A27B5C] hover:bg-[#A27B5C]/80">
          Comment
        </Button>
      </form>
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <Avatar>
              <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${comment.author}`} />
              <AvatarFallback>{comment.author[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold">{comment.author}</span>
                <span className="text-sm text-[#DCD7C9]/60">{comment.timestamp}</span>
              </div>
              <p className="mb-2">{comment.content}</p>
              <div className="flex items-center gap-4 text-sm text-[#DCD7C9]/60">
                <Button variant="ghost" size="sm" className="hover:bg-[#A27B5C]/20">
                  👍 {comment.likes}
                </Button>
                <Button variant="ghost" size="sm" className="hover:bg-[#A27B5C]/20">
                  💬 {comment.replies}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

