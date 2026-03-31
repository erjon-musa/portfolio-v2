'use client'

import { motion } from "framer-motion"

interface AnimatedBlockProps {
  children: React.ReactNode
  className?: string
}

export default function AnimatedText({
  children,
  className = "",
}: AnimatedBlockProps) {
  const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.08
      }
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px" }}
      variants={fadeInVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
