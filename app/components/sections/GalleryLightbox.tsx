'use client'

import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

type Photo = {
  id: number
  image: string
  blurDataURL: string
  date: string
  location: string
  description: string
}

interface GalleryLightboxProps {
  photos: Photo[]
  selectedIndex: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function GalleryLightbox({ photos, selectedIndex, onClose, onNavigate }: GalleryLightboxProps) {
  const isOpen = selectedIndex !== null
  const photo = isOpen ? photos[selectedIndex] : null

  const goNext = useCallback(() => {
    if (selectedIndex === null) return
    onNavigate((selectedIndex + 1) % photos.length)
  }, [selectedIndex, photos.length, onNavigate])

  const goPrev = useCallback(() => {
    if (selectedIndex === null) return
    onNavigate((selectedIndex - 1 + photos.length) % photos.length)
  }, [selectedIndex, photos.length, onNavigate])

  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = 'hidden'

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose, goNext, goPrev])

  // Preload adjacent images for instant navigation
  useEffect(() => {
    if (selectedIndex === null) return

    const preloadIndexes = [
      (selectedIndex + 1) % photos.length,
      (selectedIndex - 1 + photos.length) % photos.length,
    ]

    preloadIndexes.forEach((i) => {
      const img = new window.Image()
      img.src = photos[i].image
    })
  }, [selectedIndex, photos])

  function handleDragEnd(_: unknown, info: { offset: { x: number }; velocity: { x: number } }) {
    const swipeThreshold = 50
    if (info.offset.x > swipeThreshold || info.velocity.x > 500) {
      goPrev()
    } else if (info.offset.x < -swipeThreshold || info.velocity.x < -500) {
      goNext()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && photo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="
              absolute top-4 right-4 z-50
              w-10 h-10 flex items-center justify-center
              bg-black/70 backdrop-blur-md border border-white/20
              rounded-full text-white
              hover:bg-black/90 transition-colors duration-300
              focus:outline-none focus:ring-2 focus:ring-cyan-500/50
            "
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Previous arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            className="
              absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50
              w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center
              bg-black/50 backdrop-blur-md border border-white/10
              rounded-full text-white
              hover:bg-black/70 transition-colors duration-300
            "
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext() }}
            className="
              absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50
              w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center
              bg-black/50 backdrop-blur-md border border-white/10
              rounded-full text-white
              hover:bg-black/70 transition-colors duration-300
            "
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Image + info */}
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="flex flex-col items-center max-w-[90vw] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-[85vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] h-[60vh] sm:h-[65vh] md:h-[70vh]">
              <Image
                src={photo.image}
                alt={photo.description}
                fill
                sizes="80vw"
                className="object-contain select-none"
                priority
                placeholder="blur"
                blurDataURL={photo.blurDataURL}
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-white font-medium text-base sm:text-lg">{photo.location}</p>
              <p className="text-white/60 text-sm mt-1">
                {photo.description} &middot; {photo.date}
              </p>
            </div>
            {/* Photo counter */}
            <p className="text-white/40 text-xs mt-2">
              {selectedIndex! + 1} / {photos.length}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
