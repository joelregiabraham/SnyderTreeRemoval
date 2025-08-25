"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const categories = ["All", "Tree Removal", "Pruning", "Stump Removal", "Equipment"]

const galleryItems = [
  {
    id: 1,
    category: "Tree Removal",
    type: "image",
    src: "/image5.jpg",
    alt: "Large tree removal",
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
    type: "image",
    src: "/image7.jpg",
    alt: "Tree removal process",
  },
  // {
  //   id: 6,
  //   category: "Pruning",
  //   type: "image",
  //   src: "/placeholder.svg?height=400&width=600",
  //   alt: "Crown thinning service",
  // },
  // {
  //   id: 7,
  //   category: "Stump Removal",
  //   type: "image",
  //   src: "/placeholder.svg?height=400&width=600",
  //   alt: "Complete stump removal",
  // },
  {
    id: 8,
    category: "Equipment",
    type: "image",
    src: "/image6.jpg",
    alt: "Crane tree removal",
  },
  // {
  //   id: 9,
  //   category: "Tree Removal",
  //   type: "image",
  //   src: "/placeholder.svg?height=400&width=600",
  //   alt: "Emergency tree removal",
  // },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const filteredItems =
    activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  const selectedItem = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isDialogOpen || selectedImageIndex === null) return

      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault()
          handlePrevious()
          break
        case "ArrowRight":
          event.preventDefault()
          handleNext()
          break
        case "Escape":
          event.preventDefault()
          closeDialog()
          break
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isDialogOpen, selectedImageIndex])

  const openDialog = (index: number) => {
    setSelectedImageIndex(index)
    setIsDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
    setSelectedImageIndex(null)
  }

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      const prevIndex = selectedImageIndex > 0 ? selectedImageIndex - 1 : filteredItems.length - 1
      setSelectedImageIndex(prevIndex)
    }
  }

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      const nextIndex = selectedImageIndex < filteredItems.length - 1 ? selectedImageIndex + 1 : 0
      setSelectedImageIndex(nextIndex)
    }
  }

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Work Gallery</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See examples of our professional tree care services and satisfied customers
          </p>
        </div>

        {/* Category Filter Buttons */}
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="cursor-pointer overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
              onClick={() => openDialog(index)}
            >
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
          ))}
        </div>

        {/* Custom Lightbox Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-6xl w-full p-0 bg-black border-0">
            {selectedItem && (
              <div className="relative w-full h-[80vh] flex items-center justify-center">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-50 text-white bg-black/50 hover:bg-black/70 rounded-full"
                  onClick={closeDialog}
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Previous Button */}
                {filteredItems.length > 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white bg-black/50 hover:bg-black/70 rounded-full"
                    onClick={handlePrevious}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>
                )}

                {/* Next Button */}
                {filteredItems.length > 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white bg-black/50 hover:bg-black/70 rounded-full"
                    onClick={handleNext}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                )}

                {/* Main Image */}
                <div className="relative w-full h-full flex items-center justify-center p-8">
                  <Image
                    src={selectedItem.src || "/placeholder.svg"}
                    alt={selectedItem.alt}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Image Info */}
                <div className="absolute bottom-4 left-4 text-white bg-black/50 rounded-lg p-4">
                  <p className="text-lg font-medium">{selectedItem.alt}</p>
                  <p className="text-sm opacity-80">{selectedItem.category}</p>
                  <p className="text-xs opacity-60 mt-1">
                    {selectedImageIndex !== null && `${selectedImageIndex + 1} of ${filteredItems.length}`}
                  </p>
                </div>

                {/* Navigation Hint */}
                {filteredItems.length > 1 && (
                  <div className="absolute bottom-4 right-4 text-white bg-black/50 rounded-lg p-2">
                    <p className="text-xs opacity-80">Use ← → keys or click arrows to navigate</p>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
