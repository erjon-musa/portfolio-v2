'use client'

import { useState } from 'react'
import AnimatedText from "../common/AnimatedText"
import { motion } from "framer-motion"

interface TimelineEntry {
  title: string
  description: string
  type: 'course' | 'capstone' | 'coop' | 'club'
}

interface YearGroup {
  label: string
  period: string
  entries: TimelineEntry[]
}

const years: YearGroup[] = [
  {
    label: "Year 5",
    period: "2025 – 2026",
    entries: [
      {
        title: "Capstone: MyEyes AI Glasses",
        description: "Embedded AI | YOLOv8 | TensorFlow Lite | ESP32-S3 | 3rd Place, Capstone Competition",
        type: 'capstone',
      },
      {
        title: "Computer Vision & Deep Learning",
        description: "CNNs | Object Detection | Semantic Segmentation | Knowledge Distillation",
        type: 'course',
      },
      {
        title: "Machine Learning & Deep Learning",
        description: "Neural Networks | Optimization | Generalization | PyTorch",
        type: 'course',
      },
      {
        title: "Artificial Intelligence",
        description: "Search | Planning | Probabilistic Reasoning | Decision Making",
        type: 'course',
      },
      {
        title: "Distributed Systems",
        description: "Distributed Architectures | Consensus | Replication | Fault Tolerance",
        type: 'course',
      },
      {
        title: "Queen's Hyper Computing Club",
        description: "High-Performance Computing | Parallel Systems",
        type: 'club',
      },
    ],
  },
  {
    label: "Year 4",
    period: "2024 – 2025",
    entries: [
      {
        title: "Co-op — Government of Ontario",
        description: "UX/UI Design Lead & Frontend Developer | Power Platform | Dynamics 365",
        type: 'coop',
      },
    ],
  },
  {
    label: "Year 3",
    period: "2023 – 2024",
    entries: [
      {
        title: "Operating Systems",
        description: "Processes | Threads | Memory Management | File Systems",
        type: 'course',
      },
      {
        title: "Probability & Random Processes",
        description: "Probabilistic Models | Random Variables | Distributions | Random Processes",
        type: 'course',
      },
      {
        title: "Microprocessor Interfacing & Embedded Systems",
        description: "Bus Organization | Interrupts | Timers | Sensors & Actuators | Microcontrollers",
        type: 'course',
      },
      {
        title: "Computer Networks",
        description: "TCP/IP | Routing | Packet Switching | Ethernet | Socket Programming",
        type: 'course',
      },
      {
        title: "Digital Systems Engineering",
        description: "Verilog | RISC Processor Design | ALU | Finite State Machines",
        type: 'course',
      },
      {
        title: "Merlin Neurotech Club",
        description: "Brain-Computer Interfaces | EEG | Signal Processing",
        type: 'club',
      },
    ],
  },
  {
    label: "Year 2",
    period: "2022 – 2023",
    entries: [
      {
        title: "Data Structures & Algorithms",
        description: "Trees | Graphs | Hash Tables | Algorithms | Complexity",
        type: 'course',
      },
      {
        title: "Object-Oriented Programming",
        description: "Encapsulation | Inheritance | Polymorphism | Class Libraries | Exception Handling",
        type: 'course',
      },
      {
        title: "Computer Architecture",
        description: "Instruction Set Architecture | Assembly Language | Datapath & Control | Memory Hierarchy",
        type: 'course',
      },
    ],
  },
  {
    label: "Year 1",
    period: "2021 – 2022",
    entries: [
      {
        title: "Introduction to Programming",
        description: "Foundations of Software Development",
        type: 'course',
      },
    ],
  },
]

const INITIAL_YEARS = 2

export default function CourseTimeline() {
  const [showAll, setShowAll] = useState(false)
  const displayedYears = showAll ? years : years.slice(0, INITIAL_YEARS)

  const handleCollapse = () => {
    setShowAll(false)
    const educationSection = document.getElementById('education')
    if (educationSection) {
      const yOffset = -60
      const y = educationSection.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const typeColors: Record<TimelineEntry['type'], string> = {
    capstone: 'border-yellow-500/40',
    course: 'border-white/10',
    coop: 'border-blue-500/40',
    club: 'border-purple-500/40',
  }

  const typeLabels: Record<TimelineEntry['type'], string> = {
    capstone: 'Capstone',
    course: 'Course',
    coop: 'Co-op',
    club: 'Club',
  }

  // Flatten year groups into an alternating sequence of items for the zigzag
  // Each item is either a "year-header" or an "entry"
  type FlatItem =
    | { kind: 'year'; label: string; period: string; yi: number }
    | { kind: 'entry'; entry: TimelineEntry; yi: number; ei: number }

  const flatItems: FlatItem[] = []
  displayedYears.forEach((year, yi) => {
    flatItems.push({ kind: 'year', label: year.label, period: year.period, yi })
    year.entries.forEach((entry, ei) => {
      flatItems.push({ kind: 'entry', entry, yi, ei })
    })
  })

  return (
    <div className="w-full max-w-4xl">
      {/* University header */}
      <AnimatedText>
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Queen&apos;s University</h2>
          <p className="text-lg sm:text-xl text-foreground/70 mt-1">
            BASc Computer Engineering &middot; 2021 – 2026
          </p>
          <p className="text-base text-foreground/50 mt-1">Excellence Entrance Scholarship</p>
        </div>
      </AnimatedText>

      {/* Zigzag timeline */}
      <div className="relative">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-neutral-800 -translate-x-1/2 z-0" />

        {flatItems.map((item, index) => {
          const isLeft = index % 2 === 0

          if (item.kind === 'year') {
            return (
              <AnimatedText key={`year-${item.yi}`}>
                <div className="relative z-10 mb-8 flex items-center">
                  {/* Left side */}
                  <div className="flex-1 flex justify-end pr-4 sm:pr-8">
                    {isLeft && (
                      <div className="text-right">
                        <h3 className="text-xl sm:text-2xl font-bold">{item.label}</h3>
                        <span className="text-base text-foreground/50">{item.period}</span>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <motion.div
                    className="relative z-20 w-4 h-4 bg-white rounded-full border-2 border-neutral-600 shrink-0"
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.1 }}
                  />

                  {/* Right side */}
                  <div className="flex-1 flex justify-start pl-4 sm:pl-8">
                    {!isLeft && (
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold">{item.label}</h3>
                        <span className="text-base text-foreground/50">{item.period}</span>
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedText>
            )
          }

          const { entry } = item
          return (
            <AnimatedText key={`entry-${item.yi}-${item.ei}`}>
              <div className="relative z-10 mb-6 flex items-center">
                {/* Left side */}
                <div className="flex-1 flex justify-end pr-4 sm:pr-8">
                  {isLeft && (
                    <motion.div
                      className={`rounded-lg border ${typeColors[entry.type]} bg-white/[.03] px-4 py-3 max-w-sm w-full text-right`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <div className="flex items-center justify-end gap-2 mb-1">
                        <span className={`text-xs sm:text-sm px-2 py-0.5 rounded-full border ${typeColors[entry.type]} text-foreground/50`}>
                          {typeLabels[entry.type]}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold">{entry.title}</h4>
                      </div>
                      <p className="text-sm sm:text-base text-foreground/70">{entry.description}</p>
                    </motion.div>
                  )}
                </div>

                {/* Center dot */}
                <motion.div
                  className="relative z-20 w-3 h-3 bg-neutral-500 rounded-full shrink-0"
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.1 }}
                />

                {/* Right side */}
                <div className="flex-1 flex justify-start pl-4 sm:pl-8">
                  {!isLeft && (
                    <motion.div
                      className={`rounded-lg border ${typeColors[entry.type]} bg-white/[.03] px-4 py-3 max-w-sm w-full`}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-base sm:text-lg font-bold">{entry.title}</h4>
                        <span className={`text-xs sm:text-sm px-2 py-0.5 rounded-full border ${typeColors[entry.type]} text-foreground/50`}>
                          {typeLabels[entry.type]}
                        </span>
                       </div>
                      <p className="text-sm sm:text-base text-foreground/70">{entry.description}</p>
                    </motion.div>
                  )}
                </div>
              </div>
            </AnimatedText>
          )
        })}
      </div>

      {/* Show More / Show Less */}
      {!showAll && years.length > INITIAL_YEARS && (
        <AnimatedText>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="text-lg text-neutral-400 p-4 transition-transform duration-300 hover:scale-110 flex items-center gap-2"
            >
              Show More
              <svg className="w-5 h-5 stroke-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </AnimatedText>
      )}

      {showAll && (
        <AnimatedText>
          <div className="flex justify-center mt-8">
            <button
              onClick={handleCollapse}
              className="text-lg text-neutral-400 p-4 transition-transform duration-300 hover:scale-110 flex items-center gap-2"
            >
              Show Less
              <svg className="w-5 h-5 stroke-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <path d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </AnimatedText>
      )}
    </div>
  )
}
