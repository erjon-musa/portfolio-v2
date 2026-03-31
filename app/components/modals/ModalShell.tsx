'use client'

import { useEffect } from 'react'

interface ModalShellProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function ModalShell({ open, onClose, children }: ModalShellProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  if (!open) return null

  return (
    <div
      className="
        fixed inset-0 
        flex items-center justify-center 
        p-4 sm:p-8 
        bg-black/60
        backdrop-blur-md
        z-50
        transition-all duration-300 ease-in-out
      "
      onClick={onClose}
    >
      <div
        className="
          relative w-full max-w-[1000px] max-h-[90vh] overflow-auto
          bg-gradient-to-br from-gray-900 to-gray-950
          backdrop-blur-xl
          rounded-2xl
          border border-white/10
          shadow-[0_8px_32px_rgba(0,0,0,0.5)]
          transition-all duration-300
          p-6 sm:p-8 md:p-10
          scrollbar-thin scrollbar-track-transparent
          scrollbar-thumb-gray-700
          hover:shadow-[0_12px_48px_rgba(0,0,0,0.6)]
        "
        onClick={e => e.stopPropagation()}
      >
        {/* Sticky close button */}
        <div className="sticky top-0 z-[100] w-full flex justify-end h-0 pointer-events-none">
          <button
            onClick={onClose}
            className="
              pointer-events-auto
              w-10 h-10 flex items-center justify-center
              bg-black/70 backdrop-blur-md border border-white/20
              rounded-full text-white shadow-xl
              hover:bg-black/90 transition-colors duration-300
              focus:outline-none focus:ring-2 focus:ring-cyan-500/50
              mt-1 mr-1
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 hover:rotate-90"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {children}
      </div>
    </div>
  )
}
