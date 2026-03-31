'use client'

import Image from 'next/image'
import { getSkillIcon } from '@/app/utils/skillIcons'

export default function SkillBadge({ skill }: { skill: string }) {
  const iconPath = getSkillIcon(skill)

  return (
    <span
      className="
        px-3 py-1
        text-sm
        rounded-full
        bg-white/[0.1] dark:bg-white/[0.1]
        backdrop-blur-[8px]
        border border-white/[0.15]
        text-white dark:text-white
        inline-flex items-center gap-1.5
      "
    >
      {iconPath && (
        <Image
          src={iconPath}
          alt={`${skill} icon`}
          width={16}
          height={16}
          className="inline-block"
        />
      )}
      {skill}
    </span>
  )
}
