'use client'

import { useState, useCallback } from 'react'
import AnimatedText from '../common/AnimatedText'
import TiltCard from '../common/TiltCard'
import Image from 'next/image'
import { Container } from '@mui/material'
import GradientBackground from '../common/GradientBackground'
import GalleryLightbox from './GalleryLightbox'

type Photo = {
  id: number
  image: string
  blurDataURL: string
  date: string
  location: string
  description: string
}

const photos: Photo[] = [
  {
    id: 1,
    image: "/gallery/optimized/albania_beach_sunset_2025.jpeg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMFBv/EAB8QAAICAgEFAAAAAAAAAAAAAAECAAMEEUEUITFCcf/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A05zLPXGY/XUQ62wEBsWzvyrA6kw3uutHzHJc5AJ5iGv/2Q==",
    date: "2025",
    location: "Sarandë, Albania",
    description: "Beach mountains"
  },
  {
    id: 2,
    image: "/gallery/optimized/albania_field_2025.jpeg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAgH/xAAdEAADAQABBQAAAAAAAAAAAAABAhEAMQMEEhNB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABkRAAMAAwAAAAAAAAAAAAAAAAABAwJBUf/aAAwDAQACEQMRAD8AfvJKzt2h5NsxbrkMAVAvFEy8yDNHVXlHzF3p0CnitH//2Q==",
    date: "2025",
    location: "Vrinë, Albania",
    description: "Albanian countryside"
  },
  {
    id: 3,
    image: "/gallery/optimized/waterpurificationplant_scarborough_2025_summer.jpeg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwIG/8QAIBAAAgIBAwUAAAAAAAAAAAAAAQIAAxEEEiExMlFhcf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIxA//aAAwDAQACEQMRAD8Apbax3MB9MQ6zTVdW3HwszF1zqRg59nmE1zk43GNbuuQSobP/2Q==",
    date: "2025",
    location: "Scarborough, Ontario",
    description: "Bike ride to the water purification plant"
  },

  {
    id: 4,
    image: "/gallery/optimized/tommythompsonlighthouse.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwUG/8QAHhABAAICAgMBAAAAAAAAAAAAAQIDABEEEhMhYWJxgdH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAFhEAAwAAAAAAAAAAAAAAAAAAABES/9oADAMBAAIRAxEAPwCl5oS+gcG/k1g7FP0zKy5l9knvbJx6I9mHZXbp94qQYZ//2Q==",
    date: "2024",
    location: "Toronto, Ontario",
    description: "Toronto skyline"
  },
  {
    id: 5,
    image: "/gallery/optimized/Switzerland_mountains.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAgQFBv/EACAQAQACAgEEAwAAAAAAAAAAAAECAwAEERIhYWJxgdH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8Apm5VanBL56ecJ3tSvtO2UU9X8zFu/e1kRIngxSd9smS2SfvLUIz/2Q==",
    date: "2024",
    location: "Lucerne, Switzerland",
    description: "Swiss Alps"
  },
  {
    id: 6,
    image: "/gallery/optimized/Northernontario_cloud.jpeg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAgQFBv/EACAQAQACAgEEAwAAAAAAAAAAAAECAwAEERIhYWJxgdH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8Apm5VanBL56ecJ3tSvtO2UU9X8zFu/e1kRIngxSd9smS2SfvLUIz/2Q==",
    date: "2023",
    location: "Northern Ontario",
    description: "Elephant cloud"
  },
  {
    id: 7,
    image: "/gallery/optimized/KingstonWinter2022.jpeg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAgMFBv/EAB8QAAEEAQUBAAAAAAAAAAAAAAEAAgMSBBQhMTJhof/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAYEQEBAAMAAAAAAAAAAAAAAAABAAIhUf/aAAwDAQACEQMRAD8Ac2bDHMnxFqcS1WvJ9rssoJpLdiqMDiWgkp0exDiOy//Z",
    date: "2022",
    location: "Kingston, Ontario",
    description: "Kingston in winter"
  },
  {
    id: 8,
    image: "/gallery/optimized/BigSur2022.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEBf/EACAQAAIBAwQDAAAAAAAAAAAAAAECBAADEQUSIUEiMbH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABgRAAIDAAAAAAAAAAAAAAAAAAACAxEx/9oADAMBAAIRAxEAPwAhyL6hEWSVcnG26c/a1bEl2UbwA3ePVTRUDRgHywz3zS3dLi3lIZGHOfFyKmstaNorw//Z",
    date: "2022",
    location: "Big Sur, California",
    description: "Big Sur coastline"
  },
  {
    id: 9,
    image: "/gallery/optimized/PalmSprings2022.jpeg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAgEAACAQMEAwAAAAAAAAAAAAABAgMABBEFEyFhMUFC/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/EABgRAAIDAAAAAAAAAAAAAAAAAAACARNR/9oADAMBAAIRAxEAPwCuDAW+OR3R9RuYbW1coE3DwM+u6NK5SUoPGKj6zKxATOFzRYwyq4f/2Q==",
    date: "2022",
    location: "Palm Springs",
    description: "Desert landscape"
  },
  {
    id: 10,
    image: "/gallery/optimized/ontarioplace2021.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwQFBv/EAB0QAAIDAAIDAAAAAAAAAAAAAAECAAMREiETMVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhEDEQA/AM69qsq44BJ7wHY2l9Ar8Zr363HsyMWIGCHS5hVozR6MKwv/2Q==",
    date: "2021",
    location: "Toronto, Ontario",
    description: "Ontario Place"
  },
  {
    id: 11,
    image: "/gallery/optimized/TommyThompson2020.jpeg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMAAkDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEEBf/EACAQAAAFAwUAAAAAAAAAAAAAAAABAgMREhMxIUFRU5L/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABkRAAIDAQAAAAAAAAAAAAAAAAABAgQTQf/aAAwDAQACEQMRAD8ArUpirB6HM0GFeb7F+RkPPOLhRqPExsYLyuCA7MlwjNH/2Q==",
    date: "2020",
    location: "Toronto, Ontario",
    description: "Tommy Thompson Park"
  },
  {
    id: 12,
    image: "/gallery/optimized/Waterloo2020.jpeg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwEG/8QAHxAAAQMEAwEAAAAAAAAAAAAAAQACEQMEEjEFEyFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAXEQEBAQEAAAAAAAAAAAAAAAABAAMS/9oADAMBAAIRAxEAPwBKHI0LgZhxpiT7uU3YbrEWxlg3kQJKxtMFzfXOj4CqLdh3Kbo0uQv/2Q==",
    date: "2020",
    location: "Waterloo, Ontario",
    description: "Waterloo"
  },
]

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handleClose = useCallback(() => setSelectedIndex(null), [])
  const handleNavigate = useCallback((index: number) => setSelectedIndex(index), [])

  return (
    <Container id="gallery" maxWidth="xl" component="section">
      <div className="
        flex flex-col items-center justify-center
        py-8 md:py-8 px-2 sm:px-4 md:px-8
        relative overflow-hidden
      ">
        <GradientBackground
          sectionId="gallery"
          gradientColors={{
            start: '#60A5FA',
            end: '#3B82F6'
          }}
        />

        <AnimatedText>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center relative z-10">Gallery</h1>
        </AnimatedText>

        <div className="
          grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4
          gap-3 sm:gap-4 md:gap-6
          relative z-10 w-full
        ">
          {photos.map((photo, index) => (
            <div key={photo.id} className="relative">
              <AnimatedText>
                <TiltCard onClick={() => setSelectedIndex(index)}>
                  <div className="
                    h-full
                    bg-black/20 backdrop-blur-[20px]
                    rounded-2xl
                    border border-white/10
                    p-2 sm:p-3 md:p-4
                    transition-shadow duration-300 ease-out
                    hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                  ">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-2 sm:mb-3 md:mb-4">
                      <Image
                        src={photo.image}
                        alt={photo.description}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL={photo.blurDataURL}
                      />
                    </div>
                    <p className="font-medium text-white text-sm sm:text-base md:text-lg mb-1 sm:mb-1.5 md:mb-2">
                      {photo.location}
                    </p>
                    <p className="text-white/80 text-xs sm:text-sm md:text-base">
                      {photo.date}
                    </p>
                    <p className="text-white/70 text-xs sm:text-sm md:text-base mt-1 sm:mt-1.5 md:mt-2">
                      {photo.description}
                    </p>
                  </div>
                </TiltCard>
              </AnimatedText>
            </div>
          ))}
        </div>
      </div>

      <GalleryLightbox
        photos={photos}
        selectedIndex={selectedIndex}
        onClose={handleClose}
        onNavigate={handleNavigate}
      />
    </Container>
  )
}
