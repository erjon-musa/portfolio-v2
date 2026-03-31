'use client'

import { useEffect, useRef } from "react"
import React from 'react'
import { navItems } from "@/app/config/navigation"
import { useNavigation } from "@/app/hooks/useNavigation"

export default function Navbar() {
  const { activeSection, isPastHero, scrollToSection } = useNavigation()
  const underlineRef = useRef<HTMLSpanElement>(null)
  const navRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const activeItem = navRef.current?.querySelector(`a[href="#${activeSection}"]`)
    if (activeItem && underlineRef.current && navRef.current) {
      const rect = activeItem.getBoundingClientRect()
      const navRect = navRef.current.getBoundingClientRect()

      underlineRef.current.style.left = `${rect.left - navRect.left}px`
      underlineRef.current.style.width = `${rect.width}px`
    }
  }, [activeSection])

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      aria-hidden={!isPastHero}
      className={`
        fixed top-0 left-0 right-0 z-40
        bg-black/95 backdrop-blur-md
        border-b border-white/[0.1]
        transition-all duration-500 ease-out
        ${isPastHero
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-full pointer-events-none'
        }
      `}
    >
      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-3">
        <div className="relative">
          <ul ref={navRef} className="
            flex justify-center
            gap-4 sm:gap-8
            relative text-center overflow-x-auto
          ">
            <span
              ref={underlineRef}
              className="absolute bottom-0 h-[2px] bg-neutral-50 transition-all duration-300 ease-out"
              aria-hidden="true"
            />

            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    tabIndex={isPastHero ? 0 : -1}
                    className={`
                      inline-block
                      transition-all duration-300
                      font-medium whitespace-nowrap
                      text-sm sm:text-base
                      pb-1 px-2 py-1 rounded
                      ${isActive
                        ? "text-foreground"
                        : "text-foreground/60 hover:text-foreground hover:scale-110 hover:bg-white/[0.08]"
                      }
                    `}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.href)
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
