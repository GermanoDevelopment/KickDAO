"use client"

import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight, Clock } from "lucide-react"
import { Badge } from "../../atoms/badge"
import { Card, CardContent, CardFooter } from "../../molecules/card"
import ButtonAtom from "../../atoms/button"

interface Project {
  id: number
  name: string
  image: string
  funded: number
  timeLeft: string
  category: string
}

interface ProjectCarouselProps {
  projects: Project[]
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isMobile = false;
  //const isMobile = useMobile()

  const itemsPerView = isMobile ? 1 : window.innerWidth < 1024 ? 2 : 3
  const maxIndex = Math.max(0, projects.length - itemsPerView)

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return

    const newIndex = Math.max(0, Math.min(index, maxIndex))
    setCurrentIndex(newIndex)

    const itemWidth = carouselRef.current.scrollWidth / projects.length
    carouselRef.current.scrollTo({
      left: newIndex * itemWidth,
      behavior: "smooth",
    })
  }

  const handleNext = () => {
    scrollToIndex(currentIndex + 1)
  }

  const handlePrev = () => {
    scrollToIndex(currentIndex - 1)
  }

  const handleScroll = () => {
    if (!carouselRef.current) return

    const itemWidth = carouselRef.current.scrollWidth / projects.length
    const newIndex = Math.round(carouselRef.current.scrollLeft / itemWidth)

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex)
    }
  }

  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll)
      return () => carousel.removeEventListener("scroll", handleScroll)
    }
  }, [currentIndex])

  return (
    <div className="relative">
      <div
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project) => (
          <div key={project.id} className="flex-none w-full sm:w-1/2 lg:w-1/3 snap-start px-2">
            <Card className="overflow-hidden h-full">
              <div className="relative h-48">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 right-2">{project.category}</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Financiado</span>
                      <span className="font-medium">{project.funded}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${project.funded}%` }} />
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 mr-1" />
                    <span>Restam {project.timeLeft}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <ButtonAtom 
                onClick={() => {}}
                className="w-full">
                  <Link to={`/projeto/${project.id}`}>Ver detalhes</Link>
                </ButtonAtom>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 gap-2">
        <ButtonAtom
          variant="outline"
          className="rounded-full"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Anterior</span>
        </ButtonAtom>
        <ButtonAtom
          variant="outline"
          className="rounded-full"
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Próximo</span>
        </ButtonAtom>
      </div>
    </div>
  )
}
