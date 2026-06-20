"use client"

import { useState, useEffect, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { slides, speakerNotes } from "./slides-data"

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showNav, setShowNav] = useState(false)
  const [showNotes, setShowNotes] = useState(false)

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index)
      setShowNav(false)
    }
  }, [])

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1)
    }
  }, [currentSlide])

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1)
    }
  }, [currentSlide])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
      
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
        e.preventDefault()
        nextSlide()
      } else if (e.key === "ArrowLeft" || e.key === "Backspace") {
        e.preventDefault()
        prevSlide()
      } else if (e.key === "Home") {
        e.preventDefault()
        goToSlide(0)
      } else if (e.key === "End") {
        e.preventDefault()
        goToSlide(slides.length - 1)
      } else if (e.key === "Escape") {
        setShowNav(false)
        setShowNotes(false)
      } else if (e.key === "n" || e.key === "N") {
        setShowNotes(prev => !prev)
      } else if (e.key === "m" || e.key === "M") {
        setShowNav(prev => !prev)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide, goToSlide])

  const CurrentSlideComponent = slides[currentSlide].component
  const currentNotes = speakerNotes[currentSlide]

  return (
    <div className="relative min-h-screen bg-background">
      {/* Main slide content */}
      <AnimatePresence mode="wait">
        <CurrentSlideComponent key={currentSlide} />
      </AnimatePresence>

      {/* Navigation overlay */}
      <AnimatePresence>
        {showNav && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 overflow-y-auto"
          >
            <div className="max-w-3xl mx-auto p-8 pt-20">
              <div className="flex items-center justify-between mb-8 border-b border-border pb-6">
                <h2 className="font-serif text-3xl font-bold">Contents</h2>
                <button 
                  onClick={() => setShowNav(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  [ESC]
                </button>
              </div>
              <div className="space-y-1">
                {slides.map((slide, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                    onClick={() => goToSlide(index)}
                    className={`w-full text-left p-4 text-base rounded-lg transition-all ${
                      index === currentSlide
                        ? "bg-gold/10 text-gold font-medium"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <span className="text-muted-foreground mr-4 font-mono text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {slide.title}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Speaker notes panel */}
      <AnimatePresence>
        {showNotes && currentNotes && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 w-full max-w-md h-full bg-card border-l border-border z-40 overflow-y-auto shadow-2xl"
          >
            <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between">
              <span className="font-serif text-xl font-semibold">Speaker Notes</span>
              <button 
                onClick={() => setShowNotes(false)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                [X]
              </button>
            </div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground mb-6 pb-4 border-b border-border font-mono">
                {String(currentSlide + 1).padStart(2, "0")}. {slides[currentSlide].title}
              </p>
              <div className="space-y-4">
                {currentNotes.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed text-foreground/80">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom navigation bar */}
      <motion.div 
        initial={{ y: 80 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 border-t border-border bg-card/90 backdrop-blur-md z-30"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Left: Navigation buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowNav(true)}
              className="nav-btn"
            >
              Contents
            </button>
            <button
              onClick={() => setShowNotes(!showNotes)}
              className={`nav-btn ${showNotes ? 'bg-foreground text-background border-foreground' : ''}`}
            >
              Notes
            </button>
          </div>

          {/* Center: Progress bar */}
          <div className="flex-1 max-w-xl mx-8 hidden md:block">
            <div className="progress-elegant">
              <div 
                className="progress-elegant-fill"
                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="slide-number">{slides[currentSlide].title}</span>
              <span className="slide-number">{currentSlide + 1} / {slides.length}</span>
            </div>
          </div>

          {/* Mobile progress */}
          <div className="md:hidden font-mono text-sm text-muted-foreground">
            {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </div>

          {/* Right: Prev/Next */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="nav-btn disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← Prev
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="nav-btn disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
