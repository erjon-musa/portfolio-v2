'use client'

import AnimatedText from "../common/AnimatedText"
import { useNavigation } from "@/app/hooks/useNavigation"

export default function About() {
  const { scrollToSection } = useNavigation()

  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center p-8">
      <div className="max-w-2xl space-y-12">
        <AnimatedText>
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
        </AnimatedText>

        <div className="space-y-8">
          <AnimatedText>
            <div className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Hey, I&apos;m Erjon! I&apos;ve always been driven by a deep curiosity for how things work under the hood, a passion that naturally led me to study Computer Engineering at Queen&apos;s University. I love figuring out complex systems and turning that knowledge into something people can actually use.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                One project I&apos;m really proud of is MyEyes, an assistive AI wearable I built to help visually impaired users navigate the world around them.{' '}
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('#projects')
                  }}
                  className="inline-block underline font-semibold text-accent-primary transition-transform duration-300 hover:scale-[1.02]"
                >
                  Check it out below
                </a>
              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">What I Am Looking For</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I&apos;m looking for new-grad software engineering roles where I can make a real impact. I care most about solving meaningful problems alongside a team I can learn from.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Personal Interests</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                When I&apos;m not coding, you&apos;ll probably find me out with my camera doing street or landscape photography. I also love cycling, playing basketball, squash, and frisbee. Cooking and music are big parts of my downtime too.
              </p>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}