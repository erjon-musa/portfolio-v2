'use client'

import AnimatedText from '../common/AnimatedText'
import Image from 'next/image'
import SkillBadge from '../common/SkillBadge'
import GradientBackground from '../common/GradientBackground'
import ExperienceModal from './Motal'
import { useState } from 'react'

// Define experience entry type
type Experience = {
  id: number          // Unique identifier
  title: string       // Position title
  company: string     // Company name
  period: string      // Work period
  logo: string        // Company logo path (stored in public/companyicon/)
  skills: string[]    // Skills list (corresponding icons stored in public/skills/, filename in lowercase)
  description: string // Work description
}


const experiences: Experience[] = [
  {
    id: 1,
    title: "UX/UI Design Team Lead & Frontend Developer",
    company: "Government of Ontario",
    period: "September 2024 - August 2025",
    logo: "/companyicon/ontario/ontario_logo.jpg",
    skills: ["JavaScript", "C#", "Figma", "Power Platform", "Azure DevOps"],
    description: "Built a portal on Microsoft Power Platform and Dynamics 365, replacing old PDF workflows with a proper web app. Led a team of 3 co-op students, ran Agile sprints, and made sure everything met Ontario Design Standards for accessibility."
  },
];

export default function Experience() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null)

  return (
    <section id="experience" className="container mx-auto px-4 sm:px-8 md:px-12">
      <div className="
        min-h-screen
        flex flex-col items-center justify-center
        py-16 md:py-20
        relative
        overflow-hidden
      ">
        {/* Optional gradient background component */}
        {/* You can adjust background colors by modifying gradientColors */}
        {/* Examples:
          Blue theme: start:'#3B82F6' end:'#1E40AF'
          Green theme: start:'#10B981' end:'#047857'
          Pink theme: start:'#EC4899' end:'#BE185D'
        */}
        <GradientBackground
          sectionId="experience"
          gradientColors={{
            start: '#06b6d4',  // Cyan
            end: '#0e7490'     // Deep cyan
          }}
        />

        <AnimatedText>
          <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center relative z-10">
            Experience
          </h1>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-0 max-w-6xl w-full">
          {experiences.map((experience) => (
            <div key={experience.id}>
              <AnimatedText>
                <div
                  onClick={() => {
                    setSelectedExperience(experience.id)
                    setModalOpen(true)
                  }}
                  className="
                    bg-gradient-to-br from-gray-900 to-gray-950
                    rounded-2xl
                    border border-white/10
                    shadow-[0_4px_24px_rgba(0,0,0,0.4)]
                    p-6
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]
                    hover:border-white/15
                    cursor-pointer
                    h-full
                  "
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={experience.logo}
                        alt={experience.company}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="
                        text-base sm:text-lg md:text-xl  /* Mobile: 16px, sm:18px, md:20px */
                        font-bold 
                        mb-1
                      ">
                        {experience.title}
                      </h3>

                      <p className="text-base text-gray-400">
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  <p className="text-base text-gray-400 mb-4">
                    {experience.period}
                  </p>

                  <p className="text-lg text-gray-200 mb-6">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <SkillBadge key={skill} skill={skill} />
                    ))}
                  </div>
                </div>
              </AnimatedText>
            </div>
          ))}
        </div>
      </div>

      <ExperienceModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        experienceId={selectedExperience ?? 1}
      />
    </section>
  )
}
