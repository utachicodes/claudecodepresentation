"use client"

import { motion, type Variants } from "framer-motion"
import { ReactNode } from "react"

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

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 }
}

export const slideFromLeft: Variants = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 40 }
}

export const slideFromRight: Variants = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 }
}

interface SlideProps {
  children: ReactNode
  className?: string
  variant?: "light" | "dark"
}

export function Slide({ children, className = "", variant = "light" }: SlideProps) {
  const bgClass = variant === "dark" ? "bg-gradient-slate text-cream" : "bg-gradient-cream text-slate"

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
        exit: { opacity: 0, transition: { duration: 0.25 } }
      }}
      className={`min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-20 relative grain-texture ${bgClass} ${className}`}
    >
      <div className="relative z-10 w-full flex flex-col items-center">
        {children}
      </div>
    </motion.div>
  )
}

export function SlideTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.h1
      variants={slideUp}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight ${className}`}
    >
      {children}
    </motion.h1>
  )
}

export function SlideSubtitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.p
      variants={slideUp}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`text-base md:text-lg mt-4 max-w-3xl leading-relaxed ${className}`}
    >
      {children}
    </motion.p>
  )
}

export function SlideContent({ 
  children, 
  className = "", 
  delay = 0.15 
}: { 
  children: ReactNode
  className?: string
  delay?: number 
}) {
  return (
    <motion.div
      variants={slideUp}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
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
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className={`p-6 rounded-xl ${highlight ? "bg-slate text-cream" : "card-elevated"} ${className}`}
    >
      {children}
    </motion.div>
  )
}

export function GridCard({ 
  title, 
  description, 
  index = 0,
  icon 
}: { 
  title: string
  description: string
  index?: number
  icon?: ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="card-elevated p-6 rounded-xl group cursor-default"
    >
      {icon && (
        <div className="text-gold mb-4">{icon}</div>
      )}
      <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-gold transition-colors">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}

export function Quote({ text, author, source }: { text: string; author: string; source?: string }) {
  return (
    <motion.blockquote
      variants={slideFromLeft}
      className="my-8 max-w-3xl relative pl-8 border-l-2 border-gold"
    >
      <span className="quote-mark absolute -left-2 -top-4">&ldquo;</span>
      <p className="font-serif text-xl md:text-2xl leading-relaxed italic">
        {text}
      </p>
      <footer className="mt-6 text-sm">
        <span className="font-semibold text-gold">— {author}</span>
        {source && <span className="block mt-1 text-muted-foreground text-xs">{source}</span>}
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
    neutral: { bg: "bg-card", border: "border-border", marker: "→", titleColor: "text-foreground" },
    good: { bg: "bg-slate text-cream", border: "border-slate", marker: "✦", titleColor: "text-gold" },
    bad: { bg: "bg-card", border: "border-destructive/20", marker: "⚠", titleColor: "text-destructive" }
  }[type]

  return (
    <motion.div
      variants={slideUp}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className={`${config.bg} ${config.border} border p-6 rounded-xl`}
    >
      <h3 className={`font-serif text-xl font-semibold mb-5 ${config.titleColor}`}>{title}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <motion.li 
            key={i} 
            className="flex items-start gap-3 text-sm"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.06, duration: 0.3 }}
          >
            <span className="text-gold mt-0.5">{config.marker}</span>
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export function Stat({ value, label, index = 0 }: { value: string; label: string; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="text-center p-6 card-elevated rounded-xl"
    >
      <div className="font-serif text-4xl md:text-5xl font-bold text-gold mb-2">{value}</div>
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
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex items-start gap-5"
    >
      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
        <span className="font-mono text-sm font-semibold text-gold">{number}</span>
      </div>
      <div className="pt-1">
        <h3 className="font-serif text-lg font-semibold">{title}</h3>
        <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

export function CodeBlock({ children, filename }: { children: string; filename?: string }) {
  return (
    <motion.div variants={slideUp} className="w-full max-w-3xl">
      {filename && (
        <div className="border border-b-0 border-border rounded-t-xl px-4 py-2 font-mono text-xs text-muted-foreground bg-card">
          {filename}
        </div>
      )}
      <pre className={`border border-border p-6 overflow-x-auto bg-slate text-cream rounded-xl ${filename ? 'rounded-t-none' : ''}`}>
        <code className="text-sm font-mono whitespace-pre-wrap">
          {children}
        </code>
      </pre>
    </motion.div>
  )
}

export function Tag({ children, active = false, variant = "default" }: { children: ReactNode; active?: boolean; variant?: "default" | "warning" }) {
  const styles = variant === "warning" 
    ? "bg-destructive/10 text-destructive border border-destructive/20"
    : active 
      ? 'bg-gold text-slate' 
      : 'bg-muted text-muted-foreground'
  return (
    <motion.span 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`inline-block px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-full ${styles}`}
    >
      {children}
    </motion.span>
  )
}

export function SectionDivider({ label }: { label: string }) {
  return (
    <motion.div 
      variants={slideUp}
      className="flex items-center gap-4 w-full max-w-2xl my-8"
    >
      <motion.div 
        className="flex-1 decorative-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      <span className="text-sm font-medium uppercase tracking-widest text-gold px-4">{label}</span>
      <motion.div 
        className="flex-1 decorative-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
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
      initial={{ opacity: 0, x: -15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex items-start gap-4 py-2"
    >
      <motion.span 
        className="text-gold mt-1"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.08 + 0.1, type: "spring" }}
      >
        ✦
      </motion.span>
      <span className="leading-relaxed">{children}</span>
    </motion.li>
  )
}

export function TileLayout({ 
  children, 
  columns = 3 
}: { 
  children: ReactNode
  columns?: 2 | 3
}) {
  const gridClass = columns === 3 ? "grid md:grid-cols-3 gap-6" : "grid md:grid-cols-2 gap-6"
  return (
    <div className={gridClass}>
      {children}
    </div>
  )
}

export function Tile({ 
  title, 
  children, 
  index = 0 
}: { 
  title: string
  children: ReactNode
  index?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="card-elevated p-6 rounded-xl"
    >
      <h3 className="font-serif text-xl font-semibold mb-3 text-gold">{title}</h3>
      <div className="text-sm leading-relaxed">{children}</div>
    </motion.div>
  )
}

export function WarningBox({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={slideFromLeft}
      whileHover={{ x: 4, transition: { duration: 0.2 } }}
      className="bg-destructive/5 border border-destructive/20 p-6 rounded-xl"
    >
      <div className="flex items-start gap-3">
        <motion.span 
          className="text-destructive text-lg"
          initial={{ rotate: -10 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.4, type: "spring" }}
        >
          ⚠
        </motion.span>
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </motion.div>
  )
}

export function HighlightText({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10 font-medium">{children}</span>
      <motion.span 
        className="absolute bottom-0 left-0 w-full h-3 bg-gold/25 -z-0"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      />
    </span>
  )
}

export function CenteredContent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`text-center max-w-4xl ${className}`}>
      {children}
    </div>
  )
}

export function SplitLayout({ 
  left, 
  right 
}: { 
  left: ReactNode
  right: ReactNode
}) {
  return (
    <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {left}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {right}
      </motion.div>
    </div>
  )
}
