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
    <div className="relative min-h-screen bg-background crt-flicker">
      {/* Scanlines overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 scanlines" />
      
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
            className="fixed inset-0 bg-background z-40 overflow-y-auto pixel-grid"
          >
            <div className="max-w-3xl mx-auto p-8">
              <div className="flex items-center justify-between mb-8 border-b-3 border-primary pb-4">
                <h2 className="font-pixel text-3xl text-primary">SUMMARY</h2>
                <button 
                  onClick={() => setShowNav(false)}
                  className="font-pixel text-lg text-muted-foreground hover:text-primary transition-colors"
                >
                  [ESC]
                </button>
              </div>
              <div className="space-y-2">
                {slides.map((slide, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.015 }}
                    onClick={() => goToSlide(index)}
                    className={`w-full text-left p-4 font-pixel text-lg border-3 transition-all ${
                      index === currentSlide
                        ? "border-primary text-primary bg-primary/10"
                        : "border-transparent text-foreground hover:border-primary hover:text-primary hover:bg-card"
                    }`}
                  >
                    <span className="text-muted-foreground mr-6">
                      {String(index + 1).padStart(2, "0")}.
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
            transition={{ type: "tween", duration: 0.15 }}
            className="fixed top-0 right-0 w-full max-w-md h-full bg-card border-l-3 border-primary z-40 overflow-y-auto"
          >
            <div className="sticky top-0 bg-card border-b-3 border-primary p-4 flex items-center justify-between">
              <span className="font-pixel text-xl text-primary">NOTES</span>
              <button 
                onClick={() => setShowNotes(false)}
                className="font-pixel text-lg text-muted-foreground hover:text-primary"
              >
                [X]
              </button>
            </div>
            <div className="p-6">
              <p className="font-pixel text-sm text-muted-foreground mb-6 pb-4 border-b border-border">
                {String(currentSlide + 1).padStart(2, "0")}. {slides[currentSlide].title}
              </p>
              <div className="space-y-4">
                {currentNotes.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed text-foreground">
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
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        className="fixed bottom-0 left-0 right-0 border-t-3 border-primary bg-card/95 backdrop-blur p-4 z-30"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Left: Navigation buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowNav(true)}
              className="pixel-btn px-4 py-2 font-pixel text-base text-primary"
            >
              MENU
            </button>
            <button
              onClick={() => setShowNotes(!showNotes)}
              className={`px-4 py-2 font-pixel text-base transition-colors ${
                showNotes 
                  ? 'bg-primary text-background' 
                  : 'pixel-btn text-primary'
              }`}
            >
              NOTES
            </button>
          </div>

          {/* Center: Progress bar */}
          <div className="flex-1 max-w-xl mx-8 hidden md:block">
            <div className="pixel-progress">
              <div 
                className="pixel-progress-fill"
                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-2 font-pixel text-sm text-muted-foreground">
              <span>{slides[currentSlide].title}</span>
              <span>{currentSlide + 1}/{slides.length}</span>
            </div>
          </div>

          {/* Mobile progress */}
          <div className="md:hidden font-pixel text-lg text-primary">
            {String(currentSlide + 1).padStart(2, "0")}/{String(slides.length).padStart(2, "0")}
          </div>

          {/* Right: Prev/Next */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="pixel-btn px-4 py-2 font-pixel text-base text-primary disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {"<"} PREV
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="pixel-btn px-4 py-2 font-pixel text-base text-primary disabled:opacity-30 disabled:cursor-not-allowed"
            >
              NEXT {">"}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
