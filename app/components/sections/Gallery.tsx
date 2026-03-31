'use client'

import AnimatedText from '../common/AnimatedText'
import Image from 'next/image'
import { Container } from '@mui/material'
import GradientBackground from '../common/GradientBackground'

type Photo = {
  id: number
  image: string
  date: string
  location: string
  description: string
}

const photos: Photo[] = [
  {
    id: 1,
    image: "/gallery/kingston_Fall_2025.jpeg",
    date: "2025",
    location: "Kingston, Ontario",
    description: "Queen's campus"
  },
  {
    id: 2,
    image: "/gallery/albania_beach_sunset_2025.jpeg",
    date: "2025",
    location: "Sarandë, Albania",
    description: "Beach mountains"
  },
  {
    id: 3,
    image: "/gallery/waterpurificationplant_scarborough_2025_summer.jpeg",
    date: "2025",
    location: "Scarborough, Ontario",
    description: "Bike ride to the water purification plant"
  },
  {
    id: 4,
    image: "/gallery/albania_field_2025.jpeg",
    date: "2025",
    location: "Vrinë, Albania",
    description: "Albanian Countryside"
  },
  {
    id: 5,
    image: "/gallery/Switzerland_mountains.jpg",
    date: "2024",
    location: "Lucerne, Switzerland",
    description: "Swiss Alps"
  },
  {
    id: 6,
    image: "/gallery/Northernontario_cloud.jpeg",
    date: "2023",
    location: "Northern Ontario",
    description: "Elephant cloud"
  },
]

export default function Gallery() {
  return (
    <Container id="gallery" maxWidth="xl" component="section">
      <div className="
        min-h-screen flex flex-col items-center justify-center
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
          grid grid-cols-2 md:grid-cols-3
          gap-3 sm:gap-4 md:gap-6
          relative z-10 w-full
        ">
          {photos.map((photo) => (
            <div key={photo.id} className="relative">
              <AnimatedText>
                <div className="
                  h-full
                  bg-black/20 backdrop-blur-[20px]
                  rounded-2xl
                  border border-white/10
                  p-3 sm:p-4 md:p-6
                  transition-all duration-300 ease-out
                  hover:scale-[1.08]
                  hover:z-20
                  hover:bg-black/30
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                ">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-2 sm:mb-3 md:mb-4">
                    <Image
                      src={photo.image}
                      alt={photo.description}
                      fill
                      sizes="(min-width: 768px) 33vw, 50vw"
                      className="object-cover"
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
              </AnimatedText>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
