import type { Metadata } from 'next'
import { JetBrains_Mono, VT323 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const vt323 = VT323({ weight: "400", subsets: ["latin"], variable: "--font-pixel" });

export const metadata: Metadata = {
  title: 'Claude AI - Discovery, Capabilities & Demonstration',
  description: 'Presentation on Claude AI and software development principles with AI',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${jetbrainsMono.variable} ${vt323.variable}`}>
      <body className="font-mono antialiased bg-background selection:bg-primary selection:text-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
