'use client'

import Image from "next/image"
import AnimatedText from "../common/AnimatedText"
import FloatingElements from "../common/FloatingElements"
import { navItems } from "@/app/config/navigation"
import { useNavigation } from "@/app/hooks/useNavigation"

export default function Hero() {
  const { activeSection, isPastHero, scrollToSection } = useNavigation()

  return (
    <section id="home" className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <FloatingElements />
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <AnimatedText className="flex flex-col items-center gap-4">
          <Image
            className="rounded-full"
            src="/avatar.jpg"
            alt="Profile Picture"
            width={220}
            height={220}
            priority
          />
          <h1 className="text-4xl font-bold">Erjon Musa</h1>
          <p className="text-lg text-foreground/80 font-[family-name:var(--font-geist-mono)]">
            AI/ML Engineer | Computer Engineering
          </p>
        </AnimatedText>

        <AnimatedText
          className="max-w-2xl text-center"
        >
          <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
            Computer Engineering graduate from Queen&apos;s University with a focus on computer vision, deep learning, and embedded AI. I like building systems that take ML research and make it work in the real world, whether that&apos;s running object detection on edge devices or working with vision-language models.
          </p>
        </AnimatedText>

        <AnimatedText className="flex items-center justify-center">
          <nav
            role="navigation"
            aria-label="Section navigation"
            aria-hidden={isPastHero}
            className={`
              flex gap-4 sm:gap-8 flex-wrap justify-center
              transition-opacity duration-300 ease-out
              ${isPastHero ? 'opacity-0 pointer-events-none' : 'opacity-100'}
            `}
          >
            {navItems
              .filter(item => item.name !== "Home")
              .map(item => {
                const isActive = activeSection === item.href.slice(1)
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    tabIndex={isPastHero ? -1 : 0}
                    className={`
                      text-base sm:text-lg font-medium
                      px-5 py-2.5 rounded-lg
                      border border-white/[0.12]
                      transition-all duration-300
                      hover:bg-white/[0.1] hover:border-white/[0.3]
                      ${isActive
                        ? "text-foreground bg-white/[0.06] border-white/[0.2]"
                        : "text-foreground/70 hover:text-foreground"
                      }
                    `}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.href)
                    }}
                  >
                    {item.name}
                  </a>
                )
              })}
          </nav>
        </AnimatedText>
      </main>
    </section>
  )
} 