'use client'

import Image from 'next/image'
import { getSkillIcon } from '@/app/utils/skillIcons'

interface TechItem {
  category: string
  items: string[]
}

export default function TechStackGrid({ techStack }: { techStack: TechItem[] }) {
  return (
    <div className="space-y-8 mb-12">
      <h2 className="
        text-xl sm:text-2xl 
        font-bold 
        tracking-tight
      ">
        Tech Stack
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="
              p-6
              rounded-xl
              space-y-4
              border border-white/[0.12]
            "
          >
            <h3 className="
              text-lg font-semibold 
              text-cyan-400
              mb-4
            ">
              {tech.category}
            </h3>

            <div className="
              grid grid-cols-3 sm:grid-cols-4 
              gap-6
            ">
              {tech.items.map((item) => {
                const iconPath = getSkillIcon(item)
                return (
                  <div
                    key={item}
                    className="
                      flex flex-col items-center
                      gap-3
                    "
                  >
                    {iconPath ? (
                      <div className="
                        relative
                        w-12 sm:w-14
                        h-12 sm:h-14
                        flex items-center justify-center
                      ">
                        <Image
                          src={iconPath}
                          alt={item}
                          width={32}
                          height={32}
                          className="
                            sm:w-[40px] sm:h-[40px]
                          "
                        />
                      </div>
                    ) : (
                      <div className="
                        w-12 sm:w-14
                        h-12 sm:h-14
                        flex items-center justify-center
                        rounded-xl
                        bg-white/[0.08]
                        border border-white/[0.1]
                      ">
                        <span className="text-lg font-bold text-gray-300">
                          {item.charAt(0)}
                        </span>
                      </div>
                    )}
                    <span className="
                      text-[13px] sm:text-[15px]
                      font-medium
                      text-gray-200
                      text-center
                    ">
                      {item}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
