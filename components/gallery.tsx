"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { X, Play } from "lucide-react"
import Image from "next/image"

const categories = ["All", "Tree Removal", "Pruning", "Stump Removal", "Equipment"]

const galleryItems = [
  {
    id: 1,
    category: "Tree Removal",
    type: "image",
    src: "/image5.jpg",
    alt: "Large oak tree removal",
  },
  {
    id: 2,
    category: "Pruning",
    type: "image",
    src: "/image4.jpg",
    alt: "Professional tree pruning",
  },
  {
    id: 3,
    category: "Stump Removal",
    type: "image",
    src: "/image2.jpg",
    alt: "Stump grinding service",
  },
  {
    id: 4,
    category: "Equipment",
    type: "image",
    src: "/image3.jpg",
    alt: "Professional tree care equipment",
  },
  {
    id: 5,
    category: "Tree Removal",
    type: "video",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Tree removal process video",
  },
  {
    id: 6,
    category: "Pruning",
    type: "image",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Crown thinning service",
  },
  {
    id: 7,
    category: "Stump Removal",
    type: "image",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Complete stump removal",
  },
  {
    id: 8,
    category: "Equipment",
    type: "image",
    src: "/image6.jpg",
    alt: "Crane tree removal",
  },
  {
    id: 9,
    category: "Tree Removal",
    type: "image",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Emergency tree removal",
  },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredItems =
    activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  const handlePrevious = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage)
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1
      setSelectedImage(filteredItems[prevIndex].id)
    }
  }

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage)
      const nextIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0
      setSelectedImage(filteredItems[nextIndex].id)
    }
  }

  const selectedItem = filteredItems.find((item) => item.id === selectedImage)

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Work Gallery</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See examples of our professional tree care services and satisfied customers
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? "bg-forest-600 hover:bg-forest-700" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Play className="h-12 w-12 text-white" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium">{item.category}</p>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0">
                <div className="relative">
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-medium">{item.alt}</p>
                    <p className="text-sm opacity-80">{item.category}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
