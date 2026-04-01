'use client'

import AnimatedText from '../common/AnimatedText'
import Image from 'next/image'
import SkillBadge from '../common/SkillBadge'
import GradientBackground from '../common/GradientBackground'
import ExperienceModal from './Motal'
import { useState } from 'react'

// Define project data type
// Each project must include:
// - id: Unique identifier
// - title: Project name
// - description: Project description
// - period: Development period
// - image: Project screenshot path (stored in public/project/ directory)
// - skills: Tech stack used
// - link: Project link (GitHub/Demo)
type Project = {
  id: number
  title: string
  description: string
  period: string
  image: string
  skills: string[]
  link: string
}

const projects: Project[] = [
  {
    id: 101,
    title: "MyEyes AI Glasses",
    description: "Award-winning capstone project. Smart glasses that help visually impaired users navigate safely using real-time object detection with YOLOv8n on an ESP32-S3, plus OCR for reading signs and text out loud. Comes with an Android companion app built in Kotlin.",
    period: "2026",
    image: "/project/myeyes/myeyes.png",
    skills: ["YOLOv8", "TensorFlow Lite", "Kotlin", "Python"],
    link: "https://github.com/erjon-musa/myeyes"
  },
  {
    id: 102,
    title: "CLIP Fine-Tuning on MS COCO",
    description: "Took OpenAI's CLIP model (ViT-B/32) and fine-tuned it on MS COCO 2014 to get better image-text matching. Built the full contrastive learning pipeline from scratch and tested how well it transfers to new tasks without extra training.",
    period: "2025",
    image: "",
    skills: ["PyTorch", "CLIP", "Vision Transformers", "Python"],
    link: "https://github.com/erjon-musa/clip-finetuning-coco"
  },
  {
    id: 103,
    title: "Semantic Segmentation with Knowledge Distillation",
    description: "Used knowledge distillation to train a small, fast MobileNetV3-ASPP model to segment images almost as well as a much larger teacher network. Tested on PASCAL VOC 2012 with solid results despite the huge size reduction.",
    period: "2024",
    image: "",
    skills: ["PyTorch", "MobileNetV3", "Knowledge Distillation", "Python"],
    link: "https://github.com/erjon-musa/semantic-segmentation-knowledge-distillation"
  },
  {
    id: 104,
    title: "SnoutNet: Pet Nose Localization",
    description: "Trained three different CNN architectures (a custom SnoutNet, AlexNet, and VGG16) to find pet noses in photos. Got the error rate under 2% on the Oxford-IIIT Pet dataset.",
    period: "2024",
    image: "/project/snoutnet/snoutnethero.jpg",
    skills: ["PyTorch", "CNNs", "Computer Vision", "Python"],
    link: "https://github.com/erjon-musa/snoutnet-nose-localization"
  },
];

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="container mx-auto px-4 sm:px-8 md:px-12">
      <div className="
        min-h-screen
        flex flex-col items-center justify-center
        py-4 md:py-8
        relative
        overflow-hidden
      ">
        <GradientBackground
          sectionId="projects"
          gradientColors={{
            start: '#3b82f6',  // Blue
            end: '#1e40af'     // Deep blue
          }}
        />

        <AnimatedText>
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center relative z-10">
            Projects
          </h1>
        </AnimatedText>

        <div className="columns-1 md:columns-2 gap-6 md:gap-8 relative z-0 max-w-6xl w-full">
          {projects.map((project) => (
            <div key={project.id} className="break-inside-avoid mb-6 md:mb-8">
              <AnimatedText>
                <div
                  onClick={() => {
                    setSelectedProject(project.id)
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
                  "
                >
                  {project.image && (
                    <div className="relative w-full h-48 md:h-72 mb-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 768px) 33vw, 50vw"
                        className="object-contain"
                      />
                    </div>
                  )}

                  <h2 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h2>

                  <p className="text-base text-gray-400 mb-2">
                    {project.period}
                  </p>

                  <p className="text-base text-gray-200 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
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
        experienceId={selectedProject ?? 1}
      />
    </section>
  )
} 