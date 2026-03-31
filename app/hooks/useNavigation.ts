'use client'

import { useState, useEffect, useCallback } from 'react'

export const NAVBAR_HEIGHT = 60

export function useNavigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [isPastHero, setIsPastHero] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const heroEl = document.getElementById("home")
        if (heroEl) {
          const heroBottom = heroEl.offsetTop + heroEl.clientHeight
          setIsPastHero(window.scrollY > heroBottom - 300)
        }

        const sections = document.querySelectorAll("section[id]")
        const scrollPosition = window.scrollY + NAVBAR_HEIGHT + 100

        sections.forEach((section) => {
          const sectionTop = (section as HTMLElement).offsetTop
          const sectionHeight = section.clientHeight
          const sectionId = section.getAttribute("id") || ""

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId)
          }
        })

        ticking = false
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = useCallback((href: string) => {
    const target = document.querySelector(href) as HTMLElement
    if (target) {
      const targetPosition = target.offsetTop - NAVBAR_HEIGHT
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
    }
  }, [])

  return { activeSection, isPastHero, scrollToSection }
}
