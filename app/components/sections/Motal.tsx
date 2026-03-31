'use client'

import { getProjectById, PROJECT_DATA } from '@/app/data/project'
import ModalShell from '@/app/components/modals/ModalShell'
import { ModalHeader, FeatureList } from '@/app/components/modals/ModalContent'
import TechStackGrid from '@/app/components/modals/TechStackGrid'
import AchievementsGrid from '@/app/components/modals/AchievementsGrid'

// Custom project components
import MyEyesArchitecture from '@/app/components/projects/MyEyesArchitecture'
import MyEyesDetectionClasses from '@/app/components/projects/MyEyesDetectionClasses'
import CLIPArchitecture from '@/app/components/projects/CLIPArchitecture'
import SegmentationArchitecture from '@/app/components/projects/SegmentationArchitecture'
import SegmentationResults from '@/app/components/projects/SegmentationResults'
import SnoutNetArchitecture from '@/app/components/projects/SnoutNetArchitecture'
import SnoutNetResults from '@/app/components/projects/SnoutNetResults'

const CUSTOM_COMPONENTS: Record<string, React.ComponentType> = {
  'myeyes-architecture': MyEyesArchitecture,
  'myeyes-detection-classes': MyEyesDetectionClasses,
  'clip-architecture': CLIPArchitecture,
  'segmentation-architecture': SegmentationArchitecture,
  'segmentation-results': SegmentationResults,
  'snoutnet-architecture': SnoutNetArchitecture,
  'snoutnet-results': SnoutNetResults,
}

export default function ExperienceModal({
  open,
  onClose,
  experienceId
}: {
  open: boolean
  onClose: () => void
  experienceId: number
}) {
  const experience = getProjectById(experienceId) || Object.values(PROJECT_DATA)[0]

  return (
    <ModalShell open={open} onClose={onClose}>
      <div className="space-y-8">
        <ModalHeader
          title={experience.title}
          company={experience.company}
          companyLogo={experience.companyLogo}
          overview={experience.overview}
          github={experience.github}
          mainImage={experience.mainImage}
          hideHeroImage={experience.hideHeroImage}
          isExperience={!!experience.companyLogo}
        />

        <FeatureList
          features={experience.features}
          customComponents={CUSTOM_COMPONENTS}
          isExperience={!!experience.companyLogo}
        />

        <TechStackGrid techStack={experience.techStack} />
        <AchievementsGrid achievements={experience.achievements} />
      </div>
    </ModalShell>
  )
}