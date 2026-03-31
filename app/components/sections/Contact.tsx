'use client'

import { useState, useRef } from "react"
import Image from "next/image"
import AnimatedText from "../common/AnimatedText"
import GradientBackground from "../common/GradientBackground"
import { contactLinks } from "@/app/config/navigation"
import { motion, AnimatePresence } from "framer-motion"

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
      _honeypot: formData.get('_honeypot') as string,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (!res.ok) {
        setFormStatus('error')
        setErrorMessage(result.error || 'Something went wrong.')
        return
      }

      setFormStatus('success')
      formRef.current?.reset()

      // Reset after 4 seconds
      setTimeout(() => {
        setFormStatus('idle')
      }, 4000)
    } catch {
      setFormStatus('error')
      setErrorMessage('Network error. Please try again.')
    }
  }

  // Separate email from other links
  const nonEmailLinks = contactLinks.filter(link => link.name !== "Email")

  return (
    <section id="contact" className="min-h-[60vh] w-full flex items-center justify-center p-8 pb-20 relative">
      <GradientBackground
        sectionId="contact"
        gradientColors={{
          start: '#06b6d4',
          end: '#3b82f6',
        }}
      />

      <div className="max-w-2xl w-full flex flex-col items-center gap-8 relative z-10">
        <AnimatedText>
          <h1 className="text-3xl sm:text-4xl font-bold text-center">Contact</h1>
        </AnimatedText>

        <AnimatedText>
          <p className="text-foreground/70 text-center text-lg">
            Feel free to reach out!
            <br />
            I&apos;m always open to connecting.
          </p>
        </AnimatedText>

        {/* GitHub & LinkedIn cards */}
        <AnimatedText className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center items-center">
          {nonEmailLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              aria-label={`Contact via ${link.name}`}
              className="
                group flex flex-col items-center gap-3
                w-40 py-6 px-4
                rounded-2xl
                bg-white/[0.03] backdrop-blur-sm
                border border-white/[0.08]
                transition-all duration-300
                hover:bg-white/[0.07]
                hover:-translate-y-2
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]
                hover:border-white/[0.15]
              "
            >
              <Image
                src={link.icon}
                alt={link.name}
                width={36}
                height={36}
                className={`
                  transition-transform duration-300
                  group-hover:scale-110
                  ${link.invertIcon ? 'invert' : ''}
                `}
              />
              <span className="text-base font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                {link.name}
              </span>
            </a>
          ))}

          {/* Email card — toggles the form */}
          <button
            onClick={() => {
              setIsFormOpen(!isFormOpen)
              if (formStatus === 'success') setFormStatus('idle')
            }}
            aria-label="Send me an email"
            className={`
              group flex flex-col items-center gap-3
              w-40 py-6 px-4
              rounded-2xl
              backdrop-blur-sm
              border
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]
              ${isFormOpen
                ? 'bg-white/[0.1] border-cyan-400/30 shadow-[0_0_20px_rgba(6,182,212,0.1)]'
                : 'bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.07] hover:border-white/[0.15]'
              }
            `}
          >
            <Image
              src="/icons/mail.svg"
              alt="Email"
              width={36}
              height={36}
              className={`
                transition-transform duration-300
                group-hover:scale-110
                invert
              `}
            />
            <span className="text-base font-medium text-foreground/80 group-hover:text-foreground transition-colors">
              Email
            </span>
            <motion.svg
              className="w-4 h-4 text-foreground/50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              animate={{ rotate: isFormOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>
        </AnimatedText>

        {/* Expandable contact form */}
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: -10 }}
              animate={{ height: 'auto', opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -10 }}
              transition={{
                height: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
                opacity: { duration: 0.3, delay: 0.1 },
                y: { duration: 0.3, delay: 0.1 },
              }}
              className="w-full overflow-hidden"
            >
              <div className="
                rounded-2xl
                bg-white/[0.03] backdrop-blur-md
                border border-white/[0.08]
                p-6 sm:p-8
              ">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot — hidden from humans, bots will fill it */}
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <input
                      type="text"
                      name="_honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Name & Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="flex items-baseline gap-2 mb-2">
                        <span className="text-sm font-medium text-foreground/90">Name</span>
                        <span className="text-xs text-foreground/40 italic">Optional</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        maxLength={100}
                        className="
                          w-full px-4 py-3 rounded-xl
                          bg-white/[0.04] border border-white/[0.1]
                          text-foreground placeholder:text-foreground/30
                          focus:outline-none focus:border-cyan-400/40 focus:bg-white/[0.06]
                          transition-all duration-300
                          text-sm
                        "
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="flex items-baseline gap-2 mb-2">
                        <span className="text-sm font-medium text-foreground/90">Email</span>
                        <span className="text-xs text-foreground/40 italic">Optional</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        maxLength={200}
                        className="
                          w-full px-4 py-3 rounded-xl
                          bg-white/[0.04] border border-white/[0.1]
                          text-foreground placeholder:text-foreground/30
                          focus:outline-none focus:border-cyan-400/40 focus:bg-white/[0.06]
                          transition-all duration-300
                          text-sm
                        "
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="flex items-baseline gap-2 mb-2">
                      <span className="text-sm font-medium text-foreground/90">Subject</span>
                      <span className="text-xs text-cyan-400/60 italic">Required</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      required
                      placeholder="What's this about?"
                      maxLength={200}
                      className="
                        w-full px-4 py-3 rounded-xl
                        bg-white/[0.04] border border-white/[0.1]
                        text-foreground placeholder:text-foreground/30
                        focus:outline-none focus:border-cyan-400/40 focus:bg-white/[0.06]
                        transition-all duration-300
                        text-sm
                      "
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="flex items-baseline gap-2 mb-2">
                      <span className="text-sm font-medium text-foreground/90">Message</span>
                      <span className="text-xs text-cyan-400/60 italic">Required</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Your message..."
                      maxLength={5000}
                      className="
                        w-full px-4 py-3 rounded-xl
                        bg-white/[0.04] border border-white/[0.1]
                        text-foreground placeholder:text-foreground/30
                        focus:outline-none focus:border-cyan-400/40 focus:bg-white/[0.06]
                        transition-all duration-300
                        text-sm resize-none
                      "
                    />
                  </div>

                  {/* Submit button + status */}
                  <div className="flex items-center gap-4">
                    <button
                      type="submit"
                      disabled={formStatus === 'sending' || formStatus === 'success'}
                      className={`
                        px-6 py-3 rounded-xl font-medium text-sm
                        transition-all duration-300
                        ${formStatus === 'success'
                          ? 'bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 cursor-default'
                          : formStatus === 'sending'
                            ? 'bg-white/[0.05] border border-white/[0.1] text-foreground/50 cursor-wait'
                            : 'bg-white/[0.08] border border-white/[0.12] text-foreground hover:bg-white/[0.14] hover:border-white/[0.25] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]'
                        }
                      `}
                    >
                      {formStatus === 'sending' && (
                        <span className="flex items-center gap-2">
                          <motion.span
                            className="inline-block w-4 h-4 border-2 border-foreground/30 border-t-foreground/80 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </span>
                      )}
                      {formStatus === 'success' && '✓ Message Sent'}
                      {formStatus === 'error' && 'Try Again'}
                      {formStatus === 'idle' && 'Send Message'}
                    </button>

                    <AnimatePresence>
                      {formStatus === 'error' && errorMessage && (
                        <motion.p
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          className="text-sm text-red-400/80"
                        >
                          {errorMessage}
                        </motion.p>
                      )}
                      {formStatus === 'success' && (
                        <motion.p
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          className="text-sm text-emerald-400/80"
                        >
                          Thanks! I&apos;ll get back to you soon.
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
