'use client'

import React from 'react'
import Image from "next/image"
import AnimatedText from "../common/AnimatedText"

const technologies = {
  aiml: [
    { name: 'PyTorch', icon: '/techstack/pytorch.svg' },
    { name: 'NumPy', icon: '/techstack/numpy.svg' },
    { name: 'Pandas', icon: '/techstack/pandas.svg' },
    { name: 'Matplotlib', icon: '/techstack/matplotlib.svg' },
    { name: 'Jupyter', icon: '/techstack/jupyter.svg' },
  ],
  languages: [
    { name: 'Python', icon: '/techstack/python.svg' },
    { name: 'C', icon: '/techstack/c.svg' },
    { name: 'C++', icon: '/techstack/cpp.svg' },
    { name: 'Java', icon: '/techstack/java.svg' },
    { name: 'C#', icon: '/techstack/csharp.svg' },
    { name: 'Kotlin', icon: '/techstack/kotlin.svg' },
    { name: 'SQL', icon: '/techstack/sql.svg' },
  ],
  webdev: [
    { name: 'JavaScript', icon: '/techstack/javascript.svg' },
    { name: 'TypeScript', icon: '/techstack/typescript.svg' },
    { name: 'React', icon: '/techstack/react.svg' },
    { name: 'Next.js', icon: '/techstack/nextjs.svg' },
    { name: 'Tailwind CSS', icon: '/techstack/tailwindcss.svg' },
    { name: 'HTML5', icon: '/techstack/html5.svg' },
    { name: 'CSS3', icon: '/techstack/css3.svg' },
  ],
  tools: [
    { name: 'Git', icon: '/techstack/git.svg' },
    { name: 'Figma', icon: '/techstack/figma.svg' },
    { name: 'Azure DevOps', icon: '/techstack/azure-devops.svg' },
    { name: 'Power Platform', icon: '/techstack/powerplatform.svg' },
    { name: 'Arduino', icon: '/techstack/arduino.svg' },
    { name: 'VS Code', icon: '/techstack/vscode.svg' },
    { name: 'Claude Code', icon: '/techstack/anthropic.svg' },
    { name: 'Google Antigravity', icon: '/techstack/googleantigravity.svg' },
    { name: 'Android Studio', icon: '/techstack/androidstudio.svg' },
  ],
}

const categories = {
  aiml: 'AI & Machine Learning',
  languages: 'Programming Languages',
  webdev: 'Web & Frontend',
  tools: 'Tools & Platforms',
}



export default function MySkills() {
  return (
    <section id="skills" className="
      min-h-screen w-full flex items-center justify-center 
      p-4 sm:p-8 /* padding 4 on mobile, 8 on sm(640px) and above */
    ">
      <div className="container mx-auto">
        <AnimatedText>
          <h1 className="
            text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center
          ">
            Technical Skills
          </h1>
        </AnimatedText>

        <div className="
          max-w-5xl mx-auto 
          space-y-6 sm:space-y-8
        ">
          {(Object.keys(technologies) as Array<keyof typeof technologies>).map((category) => (
            <AnimatedText key={category} className="
              space-y-4 sm:space-y-6 /* vertical spacing 4 on mobile, 6 on sm(640px) and above */
            ">
              <h2 className="
                text-xl sm:text-2xl /* font size xl(20px) on mobile, 2xl(24px) on sm(640px) and above */  
                font-semibold text-center
              ">
                {categories[category]}
              </h2>

              <div className="flex justify-center">
                <div className="
                  flex flex-wrap justify-center 
                  gap-3 sm:gap-6 md:gap-8
                ">
                  {technologies[category].map((tech) => (
                    <div
                      key={tech.name}
                      className="
                        flex flex-col items-center 
                        gap-2
                        w-[64px] sm:w-[80px]
                        group
                      "
                    >
                      <div className="
                        relative 
                        w-12 sm:w-16         
                        h-12 sm:h-16         
                        flex items-center justify-center 
                        transition-all duration-300 
                        group-hover:scale-110   
                        group-hover:-translate-y-1
                      ">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={32}
                          height={32}
                          className="
                            sm:w-[48px] sm:h-[48px]
                          "
                        />
                      </div>
                      <span className="
                        text-xs sm:text-[15px]    
                        font-medium 
                        text-foreground/70 
                        group-hover:text-foreground/90 
                        transition-colors 
                        text-center
                      ">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  )
} 