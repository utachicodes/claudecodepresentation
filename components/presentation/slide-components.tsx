"use client"

import { motion, type Variants, AnimatePresence } from "framer-motion"
import { ReactNode, useState, useEffect } from "react"

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export const slideUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

interface SlideProps {
  children: ReactNode
  className?: string
}

export function Slide({ children, className = "" }: SlideProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.2, staggerChildren: 0.06 } },
        exit: { opacity: 0, transition: { duration: 0.15 } }
      }}
      className={`min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-20 pixel-grid ${className}`}
    >
      {children}
    </motion.div>
  )
}

export function ScrambleText({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  const [displayText, setDisplayText] = useState("")
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&*"

  useEffect(() => {
    let iteration = 0
    let interval: NodeJS.Timeout

    const startAnimation = () => {
      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " "
              if (index < iteration) {
                return text[index]
              }
              return characters[Math.floor(Math.random() * characters.length)]
            })
            .join("")
        )

        if (iteration >= text.length) {
          clearInterval(interval)
        }

        iteration += 1 / 3
      }, 30)
    }

    const timeout = setTimeout(startAnimation, delay * 1000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [text, delay])

  return <span className={className}>{displayText || text.split("").map(() => " ").join("")}</span>
}

export function SlideTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.h1
      variants={slideUp}
      transition={{ duration: 0.3 }}
      className={`font-pixel text-5xl md:text-7xl lg:text-8xl text-primary leading-none tracking-wide text-glow ${className}`}
    >
      {children}
    </motion.h1>
  )
}

export function SlideSubtitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.p
      variants={slideUp}
      transition={{ duration: 0.3, delay: 0.05 }}
      className={`text-base md:text-lg text-muted-foreground mt-6 max-w-3xl leading-relaxed ${className}`}
    >
      {children}
    </motion.p>
  )
}

export function SlideContent({ 
  children, 
  className = "", 
  delay = 0.1 
}: { 
  children: ReactNode
  className?: string
  delay?: number 
}) {
  return (
    <motion.div
      variants={slideUp}
      transition={{ duration: 0.3, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Terminal({ children, title = "~/claude" }: { children: ReactNode; title?: string }) {
  return (
    <motion.div
      variants={slideUp}
      transition={{ duration: 0.3 }}
      className="w-full max-w-4xl terminal-chrome"
    >
      <div className="flex items-center gap-3 px-4 py-3 border-b-3 border-border">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-primary" />
          <div className="w-3 h-3 bg-muted-foreground" />
          <div className="w-3 h-3 bg-muted" />
        </div>
        <span className="font-pixel text-lg text-primary ml-2">{title}</span>
      </div>
      <div className="p-6 text-sm">
        {children}
      </div>
    </motion.div>
  )
}

export function TerminalLine({ 
  prompt = ">", 
  command, 
  output,
  delay = 0 
}: { 
  prompt?: string
  command: string
  output?: string | string[]
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.2 }}
      className="mb-3"
    >
      <div className="flex items-center gap-3">
        <span className="text-primary font-pixel text-xl">{prompt}</span>
        <span className="text-foreground">{command}</span>
        <motion.span 
          className="w-3 h-5 bg-primary ml-1"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        />
      </div>
      {output && (
        <div className="text-muted-foreground mt-2 pl-6 text-sm">
          {Array.isArray(output) ? output.map((line, i) => (
            <div key={i}>{line}</div>
          )) : output}
        </div>
      )}
    </motion.div>
  )
}

export function PixelCard({ 
  children, 
  className = "",
  variant = "default"
}: { 
  children: ReactNode
  className?: string
  variant?: "default" | "orange" | "muted"
}) {
  const styles = {
    default: "pixel-box-white",
    orange: "pixel-box",
    muted: "border-3 border-muted"
  }[variant]

  return (
    <motion.div
      variants={slideUp}
      whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}
      className={`p-6 bg-card ${styles} ${className}`}
    >
      {children}
    </motion.div>
  )
}

export function Card({ 
  children, 
  className = "", 
  highlight = false 
}: { 
  children: ReactNode
  className?: string
  highlight?: boolean 
}) {
  return (
    <motion.div
      variants={slideUp}
      className={`p-6 bg-card ${highlight ? "pixel-box" : "pixel-box-white"} ${className}`}
    >
      {children}
    </motion.div>
  )
}

export function GridCard({ 
  title, 
  description, 
  icon,
  index = 0 
}: { 
  title: string
  description: string
  icon?: string
  index?: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      whileHover={{ y: -4, transition: { duration: 0.1 } }}
      className="pixel-box p-5 bg-card group cursor-default"
    >
      {icon && (
        <div className="font-pixel text-3xl text-primary mb-3">{icon}</div>
      )}
      <h3 className="font-pixel text-xl text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}

export function ListItem({ 
  children, 
  index = 0
}: { 
  children: ReactNode
  index?: number
}) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      className="flex items-start gap-4 text-foreground py-2"
    >
      <span className="text-primary font-pixel text-2xl leading-none">{">"}</span>
      <span className="leading-relaxed">{children}</span>
    </motion.li>
  )
}

export function Quote({ text, author, source }: { text: string; author: string; source?: string }) {
  return (
    <motion.blockquote
      variants={slideUp}
      className="border-l-4 border-primary pl-8 py-4 my-8 max-w-3xl"
    >
      <p className="font-pixel text-2xl md:text-3xl text-foreground leading-relaxed">
        &quot;{text}&quot;
      </p>
      <footer className="mt-6 text-muted-foreground text-sm">
        <span className="text-primary font-pixel text-lg">-- {author}</span>
        {source && <span className="block mt-1 text-xs">{source}</span>}
      </footer>
    </motion.blockquote>
  )
}

export function CompareBox({
  title,
  items,
  type = "neutral"
}: {
  title: string
  items: string[]
  type?: "neutral" | "good" | "bad"
}) {
  const config = {
    neutral: { border: "pixel-box-white", marker: "-", color: "text-foreground" },
    good: { border: "pixel-box", marker: "+", color: "text-primary" },
    bad: { border: "border-3 border-muted", marker: "x", color: "text-muted-foreground" }
  }[type]

  return (
    <motion.div
      variants={slideUp}
      className={`${config.border} p-6 bg-card`}
    >
      <h3 className={`font-pixel text-2xl mb-5 ${type === 'good' ? 'text-primary' : 'text-foreground'}`}>{title}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <motion.li 
            key={i} 
            className="flex items-start gap-4 text-sm"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.04 }}
          >
            <span className={`font-pixel text-xl ${config.color}`}>
              [{config.marker}]
            </span>
            <span className={type === 'bad' ? 'text-muted-foreground line-through' : 'text-foreground'}>{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export function Stat({ value, label, index = 0 }: { value: string; label: string; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, delay: index * 0.08 }}
      className="text-center p-6 pixel-box bg-card"
    >
      <motion.div 
        className="font-pixel text-5xl md:text-6xl text-primary mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 + index * 0.1 }}
      >
        {value}
      </motion.div>
      <div className="text-muted-foreground text-sm uppercase tracking-wider">{label}</div>
    </motion.div>
  )
}

export function Step({ 
  number, 
  title, 
  description, 
  index = 0 
}: { 
  number: string
  title: string
  description: string
  index?: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: index * 0.06 }}
      className="flex items-start gap-6"
    >
      <div className="w-14 h-14 pixel-box flex items-center justify-center flex-shrink-0 font-pixel text-3xl text-primary bg-card">
        {number}
      </div>
      <div className="pt-2">
        <h3 className="font-pixel text-xl text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

export function CodeBlock({ children, filename }: { children: string; filename?: string }) {
  return (
    <motion.div variants={slideUp} className="w-full max-w-3xl">
      {filename && (
        <div className="border-3 border-b-0 border-primary px-4 py-2 font-pixel text-base text-primary bg-card">
          {filename}
        </div>
      )}
      <pre className={`border-3 border-primary p-6 overflow-x-auto bg-card/50`}>
        <code className="text-sm text-foreground whitespace-pre-wrap">
          {children}
        </code>
      </pre>
    </motion.div>
  )
}

export function Tag({ children, active = false }: { children: ReactNode; active?: boolean }) {
  return (
    <span className={`inline-block px-4 py-2 font-pixel text-base ${active ? 'bg-primary text-background' : 'pixel-box-white text-foreground'}`}>
      {children}
    </span>
  )
}

export function PixelButton({ 
  children, 
  onClick,
  variant = "primary"
}: { 
  children: ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary"
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`font-pixel text-lg px-6 py-3 ${
        variant === "primary" 
          ? "pixel-btn text-primary hover:bg-primary hover:text-background" 
          : "pixel-box-white text-foreground hover:bg-foreground hover:text-background"
      } transition-colors`}
    >
      {children}
    </motion.button>
  )
}

export function SectionDivider({ label }: { label: string }) {
  return (
    <motion.div 
      variants={slideUp}
      className="flex items-center gap-4 w-full max-w-2xl my-8"
    >
      <div className="flex-1 h-1 bg-primary" />
      <span className="font-pixel text-xl text-primary px-4">{label}</span>
      <div className="flex-1 h-1 bg-primary" />
    </motion.div>
  )
}

export function PixelIcon({ icon }: { icon: string }) {
  return (
    <span className="font-pixel text-4xl text-primary">{icon}</span>
  )
}

export function Badge({ children, variant = "default" }: { children: ReactNode; variant?: "default" | "orange" }) {
  return (
    <span className={`inline-block px-3 py-1 text-xs uppercase tracking-wider ${
      variant === "orange" 
        ? "bg-primary text-background" 
        : "bg-muted text-muted-foreground"
    }`}>
      {children}
    </span>
  )
}
