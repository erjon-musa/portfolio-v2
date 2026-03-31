import { useEffect, useState } from 'react'
import { Box } from '@mui/material'

type Props = {
  sectionId: string;  // section ID
  gradientColors: {   // gradient colors
    start: string;    // start color
    end: string;      // end color
  };
}

export default function GradientBackground({ sectionId, gradientColors }: Props) {
  // gradient background visibility state
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // create intersection observer to listen to section visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 }  // 30% of the content is visible
    )

    // get and observe target section element
    const section = document.getElementById(sectionId)
    if (section) {
      observer.observe(section)
    }

    // cleanup function: disconnect observer when component unmounts
    return () => observer.disconnect()
  }, [sectionId])

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          width: {
            xs: '200px',
            sm: '400px'
          },
          height: {
            xs: '200px',
            sm: '500px'
          },
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${gradientColors.start}, ${gradientColors.end})`,
          filter: {
            xs: 'blur(40px)',
            sm: 'blur(80px)'
          },
          bottom: {
            xs: '-40px',
            sm: '-100px'
          },
          right: {
            xs: '-40px',
            sm: '-100px'
          },
          opacity: isVisible ? 0.3 : 0,
          transition: 'opacity 0.8s ease-in-out',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'fixed',
          width: {
            xs: '300px',
            sm: '500px'
          },
          height: {
            xs: '300px',
            sm: '500px'
          },
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${gradientColors.end}, ${gradientColors.start})`,
          filter: {
            xs: 'blur(40px)',
            sm: 'blur(80px)'
          },
          bottom: {
            xs: '-40px',
            sm: '-100px'
          },
          left: {
            xs: '-40px',
            sm: '-100px'
          },
          opacity: isVisible ? 0.3 : 0,
          transition: 'opacity 0.8s ease-in-out',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />
    </>
  )
} 