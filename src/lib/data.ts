export const allVideos = [
    {
      id: 1,
      title: "Morning Training: Relaxation and Consciousness",
      author: "John Doe",
      date: "2024-02-15",
      genre: "Healthcare",
      duration: "25:16",
      thumbnail: "/placeholder.svg?height=180&width=320",
      views: "12K",
      likes: 1200,
    },
    {
      id: 2,
      title: "Advanced Video Editing Techniques",
      author: "Jane Smith",
      date: "2024-02-14",
      genre: "Education",
      duration: "42:30",
      thumbnail: "/placeholder.svg?height=180&width=320",
      views: "8.5K",
      likes: 950,
    },
    {
      id: 3,
      title: "Nature Photography Masterclass",
      author: "Michael Chen",
      date: "2024-02-13",
      genre: "Nature",
      duration: "1:15:00",
      thumbnail: "/placeholder.svg?height=180&width=320",
      views: "15K",
      likes: 2100,
    },
    {
      id: 4,
      title: "Cooking Italian Pasta from Scratch",
      author: "Maria Romano",
      date: "2024-02-12",
      genre: "Cooking",
      duration: "35:45",
      thumbnail: "/placeholder.svg?height=180&width=320",
      views: "20K",
      likes: 3200,
    },
    {
      id: 5,
      title: "Fashion Photography Tips & Tricks",
      author: "Sophie Laurent",
      date: "2024-02-11",
      genre: "Fashion",
      duration: "28:20",
      thumbnail: "/placeholder.svg?height=180&width=320",
      views: "9.8K",
      likes: 850,
    },
    // ... add more videos up to 20 total
  ]
  
  export const popularVideos = allVideos.sort((a, b) => b.likes - a.likes).slice(0, 15)
  
  export const categories = [
    { id: 1, name: "Filmmaking", count: 125 },
    { id: 2, name: "Photography", count: 98 },
    { id: 3, name: "Animation", count: 76 },
    { id: 4, name: "Motion Graphics", count: 64 },
    { id: 5, name: "Sound Design", count: 52 },
    { id: 6, name: "Color Grading", count: 43 },
    { id: 7, name: "Visual Effects", count: 38 },
    { id: 8, name: "3D Modeling", count: 31 },
    { id: 9, name: "Screenwriting", count: 27 },
    { id: 10, name: "Production", count: 22 },
  ]
  
  export const yourVideos = [
    {
      id: 101,
      title: "My First Vlog",
      author: "You",
      date: "2024-02-10",
      genre: "Vlog",
      duration: "10:15",
      thumbnail: "/placeholder.svg?height=180&width=320",
      views: "156",
      likes: 24,
    },
    {
      id: 102,
      title: "Camera Review",
      author: "You",
      date: "2024-02-08",
      genre: "Review",
      duration: "15:30",
      thumbnail: "/placeholder.svg?height=180&width=320",
      views: "243",
      likes: 35,
    },
    {
      id: 103,
      title: "Editing Tutorial",
      author: "You",
      date: "2024-02-05",
      genre: "Tutorial",
      duration: "20:45",
      thumbnail: "/placeholder.svg?height=180&width=320",
      views: "189",
      likes: 28,
    },
  ]
  
  export const favoriteVideos = allVideos.sort(() => Math.random() - 0.5).slice(0, 15)
  
  export const watchLaterVideos = allVideos.sort(() => Math.random() - 0.5).slice(0, 3)
  
  