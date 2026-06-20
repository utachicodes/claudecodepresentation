"use client"

import { 
  Slide, 
  SlideTitle, 
  SlideSubtitle, 
  SlideContent,
  GridCard,
  Quote,
  ListItem,
  CompareBox,
  Step,
  Card,
  Tag,
  TileLayout,
  Tile,
  WarningBox,
  HighlightText,
  CenteredContent,
  SplitLayout,
} from "./slide-components"
import { motion } from "framer-motion"

// ============================================================
// SLIDE 1: TITLE & WELCOMING
// ============================================================
function TitleSlide() {
  return (
    <Slide variant="dark">
      <CenteredContent>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Centre Guelwar — 2026
          </motion.div>
          
          <SlideTitle className="text-cream">
            <motion.span 
              className="text-gold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Artificial Intelligence
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              & Creativity
            </motion.span>
          </SlideTitle>
          
          <motion.div 
            className="my-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="decorative-line" />
          </motion.div>
          
          <motion.h2 
            className="font-serif text-2xl md:text-3xl text-cream/90 italic"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            The New Cultural Renaissance?
          </motion.h2>

          <motion.p 
            className="mt-6 text-cream/70 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            L&apos;IA au service de la jeunesse, de la culture et de la littérature.
          </motion.p>

          <motion.div 
            className="mt-16 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
          >
            <p className="text-cream font-medium text-lg">Abdoullah Ndao</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.5 }}
            className="mt-12"
          >
            <motion.p 
              className="text-cream/60 text-sm"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Press [SPACE] to begin ✦
            </motion.p>
          </motion.div>
        </motion.div>
      </CenteredContent>
    </Slide>
  )
}

// ============================================================
// SLIDE 2: THE ILLUSION OF THE CREATIVE RIVAL
// ============================================================
function CreativeRivalSlide() {
  return (
    <Slide variant="light">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-3"
        >
          <Tag>Part I</Tag>
        </motion.div>
        
        <SlideTitle>
          The Illusion of the <span className="text-gold gold-underline">Creative Rival</span>
        </SlideTitle>
        <SlideSubtitle>
          Is your laptop secretly writing better poetry than you? Let&apos;s find out.
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-10">
          <SplitLayout
            left={
              <CompareBox
                title="🤖 The Machine"
                items={[
                  "Syntax, patterns & statistical probability",
                  "Mimics human forms with stunning accuracy",
                  "Has read every book — remembers none",
                  "Generates from learned distributions",
                  "Optimizes for predictability"
                ]}
                type="neutral"
              />
            }
            right={
              <CompareBox
                title="🧠 The Human"
                items={[
                  "Memory, trauma, joy & sensory nuance",
                  "The intentional spark behind the word",
                  "Can cry at a sunset — AI can&apos;t",
                  "Creates from consciousness & emotion",
                  "Embraces beautiful imperfection"
                ]}
                type="good"
              />
            }
          />
        </SlideContent>

        <SlideContent delay={0.6} className="mt-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-sm text-muted-foreground italic">
              &ldquo;AI doesn&apos;t CREATE — it COMBINES and RECOMBINES. Humans create from consciousness.&rdquo;
            </p>
          </motion.div>
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 3: YOUTH CULTURE - FROM DIGITAL NATIVES TO AI NATIVES
// ============================================================
function YouthCultureSlide() {
  return (
    <Slide variant="light">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-3"
        >
          <Tag>Part II</Tag>
        </motion.div>

        <SlideTitle>
          Youth Culture: <span className="text-gold gold-underline">AI Natives</span>
        </SlideTitle>
        <SlideSubtitle>
          Your grandparents learned to code. Your parents learned to Google. You learned to prompt.
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-10">
          <TileLayout columns={3}>
            <Tile title="⚡ The Generational Leap" index={0}>
              <p className="mb-3">
                From passive media consumption to immediate <HighlightText>algorithmic co-creation</HighlightText>.
              </p>
              <p className="text-muted-foreground text-xs">
                A 15-year-old in Dakar produces music that rivals professional studios — from their bedroom.
              </p>
            </Tile>
            
            <Tile title="🎨 Democratizing Art" index={1}>
              <p className="mb-3">
                Removing financial gatekeepers for <HighlightText>bedroom producers, writers & digital artists</HighlightText>.
              </p>
              <p className="text-muted-foreground text-xs">
                No more &ldquo;you need a $2000 software license&rdquo; — just you, your phone, and想象力.
              </p>
            </Tile>
            
            <Tile title="🌍 New Micro-Narratives" index={2}>
              <p className="mb-3">
                Industrial-grade creative power to <HighlightText>marginalized & underground voices</HighlightText>.
              </p>
              <p className="text-muted-foreground text-xs">
                Stories from Dakar, Manila, or Medellín reach global audiences — no gatekeepers needed.
              </p>
            </Tile>
          </TileLayout>
        </SlideContent>

        <SlideContent delay={0.6} className="mt-8">
          <Quote
            text="The youth of today are not consumers of culture — they are its architects, with AI as their drafting tool."
            author="UNESCO Digital Culture Report, 2025"
          />
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 4: LITERATURE & THE AUGMENTED WRITER
// ============================================================
function LiteratureSlide() {
  return (
    <Slide variant="light">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-3"
        >
          <Tag>Part III</Tag>
        </motion.div>

        <SlideTitle>
          Literature & The <span className="text-gold gold-underline">Augmented Writer</span>
        </SlideTitle>
        <SlideSubtitle>
          Finally, an excuse for writer&apos;s block that doesn&apos;t involve Netflix
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-10">
          <TileLayout columns={3}>
            <Tile title="✍ Erasing the Blank Page" index={0}>
              <ul className="space-y-2">
                <ListItem>AI as your 24/7 creative sparring partner</ListItem>
                <ListItem>Busts writer&apos;s block with targeted prompts</ListItem>
                <ListItem>Brainstorms character flaws & plot twists</ListItem>
              </ul>
            </Tile>
            
            <Tile title="🌐 Expanding Horizons" index={1}>
              <ul className="space-y-2">
                <ListItem>Instant literary translations worldwide</ListItem>
                <ListItem>Breaking linguistic isolation forever</ListItem>
                <ListItem>Research in real-time, not weeks</ListItem>
              </ul>
            </Tile>
            
            <Tile title="📖 The Living Narrative" index={2}>
              <ul className="space-y-2">
                <ListItem>Interactive literature that adapts to YOU</ListItem>
                <ListItem>Readers influence the story path</ListItem>
                <ListItem>Choose-your-own-adventure on steroids</ListItem>
              </ul>
            </Tile>
          </TileLayout>
        </SlideContent>

        <SlideContent delay={0.5} className="mt-8">
          <Card highlight className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <motion.span 
                className="text-3xl text-gold"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                ✍
              </motion.span>
              <div>
                <h4 className="font-serif text-lg font-semibold mb-2">The Key Insight</h4>
                <p className="text-sm leading-relaxed">
                  AI doesn&apos;t write <em>for</em> you — it writes <em>with</em> you. 
                  The author remains the architect of meaning; AI becomes the infinite canvas.
                </p>
              </div>
            </div>
          </Card>
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 5: THE INVISIBLE ALGORITHMIC CAGE
// ============================================================
function AlgorithmicCageSlide() {
  return (
    <Slide variant="light">
      <div className="w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-3"
        >
          <Tag variant="warning">Critical Analysis</Tag>
        </motion.div>

        <SlideTitle>
          The Invisible <span className="text-gold gold-underline">Algorithmic Cage</span>
        </SlideTitle>
        <SlideSubtitle>
          When the algorithm decides what you like before you&apos;ve even tried it
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-10">
          <div className="space-y-6">
            <WarningBox>
              <h4 className="font-serif text-lg font-semibold mb-2">🔍 The Filter Bubble</h4>
              <p className="text-sm leading-relaxed">
                Recommendation loops curate global taste to keep you <strong>engaged</strong> — not <strong>enlightened</strong>. 
                Algorithmic feeds create echo chambers where diversity slowly suffocates.
              </p>
            </WarningBox>

            <WarningBox>
              <h4 className="font-serif text-lg font-semibold mb-2">📉 The Threat of Flatness</h4>
              <p className="text-sm leading-relaxed">
                When AI optimizes for engagement, it optimizes for the <strong>average</strong>. 
                Commercial art becomes predictable, repetitive cultural loops. 
                The radical edges where innovation lives? They begin to erode.
              </p>
            </WarningBox>

            <Card highlight>
              <div className="flex items-start gap-4">
                <motion.span 
                  className="text-3xl text-gold"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ⚡
                </motion.span>
                <div>
                  <h4 className="font-serif text-lg font-semibold mb-2">💥 Hacking the Matrix</h4>
                  <p className="text-sm leading-relaxed">
                    The urgent need for youth to become <HighlightText>algorithm tamers</HighlightText> — 
                    actively seeking friction, oddities, underground art, and the unconventional. 
                    <strong> Break the feed. Seek the strange. Celebrate the weird.</strong>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 6: PROTECTING THE HUMAN CORE
// ============================================================
function HumanCoreSlide() {
  return (
    <Slide variant="light">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-3"
        >
          <Tag>Part IV</Tag>
        </motion.div>

        <SlideTitle>
          Protecting the <span className="text-gold gold-underline">Human Core</span>
        </SlideTitle>
        <SlideSubtitle>
          Why your messy, beautiful, imperfect humanity is worth more than any algorithm
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-10">
          <SplitLayout
            left={
              <Card>
                <div className="space-y-4">
                  <motion.div 
                    className="text-4xl text-gold mb-4"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    ✧
                  </motion.div>
                  <h3 className="font-serif text-2xl font-semibold">The Beauty of the Mistake</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    AI excels at smooth continuity; humans excel at <HighlightText>profound disruption</HighlightText>.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <ListItem>Art is born from human experience</ListItem>
                    <ListItem>Beautiful flaws & unpredictable leaps</ListItem>
                    <ListItem>The happy accident that changes everything</ListItem>
                  </ul>
                </div>
              </Card>
            }
            right={
              <Card highlight>
                <div className="space-y-4">
                  <motion.div 
                    className="text-4xl text-gold mb-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ♛
                  </motion.div>
                  <h3 className="font-serif text-2xl font-semibold">Curation is the New Gold</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    In a world of infinite synthetic content, <HighlightText>generation becomes cheap</HighlightText>.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <ListItem>Human taste = ultimate premium</ListItem>
                    <ListItem>Critical editing shapes cultural value</ListItem>
                    <ListItem>Philosophical framing creates meaning</ListItem>
                  </ul>
                </div>
              </Card>
            }
          />
        </SlideContent>

        <SlideContent delay={0.5} className="mt-8">
          <Quote
            text="In an age of infinite reproduction, the curatorial voice — the human who says 'this matters' — becomes the most valuable creative act of all."
            author="Ted Chiang"
            source="Exhalation: Stories"
          />
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 7: CONCLUSION & CONVERSATION
// ============================================================
function ConclusionSlide() {
  return (
    <Slide variant="dark">
      <CenteredContent>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <SlideTitle className="text-cream mb-8">
            The <span className="text-gold">Paradigm</span>
          </SlideTitle>

          <SlideContent delay={0.3}>
            <motion.div 
              className="my-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="decorative-line" />
            </motion.div>
            
            <motion.blockquote
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream leading-relaxed italic my-12"
            >
              &ldquo;AI will not replace creators. <br />
              <motion.span 
                className="text-gold font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Creators who use AI
              </motion.span> will replace those who don&apos;t.&rdquo;
            </motion.blockquote>

            <motion.div 
              className="my-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="decorative-line" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="mt-12 space-y-4"
            >
              <p className="text-cream/90 text-lg">
                Let&apos;s code with empathy, read with critical depth, <br />
                and create with <span className="text-gold font-semibold">absolute audacity</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
              className="mt-16"
            >
              <p className="text-cream font-serif text-4xl font-semibold mb-3">Thank you!</p>
              <p className="text-cream/70 text-xl italic">Merci pour votre attention.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-12"
            >
              <motion.p 
                className="text-gold font-mono text-sm tracking-widest uppercase"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Questions & Discussion ✦
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3 }}
              className="mt-12"
            >
              <p className="text-cream/50 font-mono text-xs">
                Abdoullah Ndao — Centre Guelwar — 2026
              </p>
            </motion.div>
          </SlideContent>
        </motion.div>
      </CenteredContent>
    </Slide>
  )
}

// ============================================================
// EXPORT ALL SLIDES
// ============================================================
export const slides = [
  { component: TitleSlide, title: "Title" },
  { component: CreativeRivalSlide, title: "The Creative Rival" },
  { component: YouthCultureSlide, title: "Youth Culture" },
  { component: LiteratureSlide, title: "Literature & AI" },
  { component: AlgorithmicCageSlide, title: "Algorithmic Cage" },
  { component: HumanCoreSlide, title: "Protecting the Human Core" },
  { component: ConclusionSlide, title: "Conclusion" }
]

// ============================================================
// SPEAKER NOTES
// ============================================================
export const speakerNotes: Record<number, string> = {
  0: `Welcome everyone!

I am Abdoullah Ndao and today we're diving into something exciting — how AI is reshaping youth culture, literature, and creativity.

This isn't a boring tech talk. This is a conversation about the new cultural Renaissance happening right now.

We'll switch between English and French as needed — because creativity knows no language barriers!

Fun fact: The slide you're looking at was partially designed with AI. Meta, right?`,

  1: `Let's address the elephant in the room: Is AI going to replace human creativity?

Short answer: No. Long answer: Also no, but with more nuance.

On the left, we have THE MACHINE — it's basically a very sophisticated pattern-matching machine. It's read more books than any human ever could, but it doesn't UNDERSTAND any of them. It's like that friend who quotes movies but has never actually felt emotions.

On the right, we have THE HUMAN — messy, emotional, beautiful. We create from lived experience, from trauma, from that weird dream we had about flying penguins.

Key insight: AI combines and recombines. Humans CREATE from consciousness. That's the difference.`,

  2: `Now let's talk about the generation growing up WITH AI as a creative tool.

These aren't just digital natives — they're AI Natives. The generational leap is REAL.

A teenager in Dakar can now produce professional-quality music from their bedroom. A writer in Manila can instantly translate their novel into 50 languages. An artist in Medellín can create gallery-worthy digital art with just a phone.

AI removes the financial gatekeepers. No more "you need a $2000 software license." Just you, your device, and imagination.

This is democratization of creativity on a global scale. And it's happening RIGHT NOW.`,

  3: `Literature is being transformed — but NOT replaced.

Think of AI as your 24/7 creative sparring partner. It's like having a writing buddy who never sleeps, never gets tired, and has read every book ever written.

ERASING THE BLANK PAGE: Writer's block? AI helps you brainstorm character flaws, plot twists, and historical facts. It's like having a muse that actually shows up to work.

EXPANDING HORIZONS: A novel written in Wolof can be instantly accessible to readers in Tokyo. Translation barriers? Gone.

THE LIVING NARRATIVE: Interactive literature where YOU influence the story. Choose-your-own-adventure on steroids, powered by AI that adapts to your choices in real-time.

Key insight: AI doesn't write FOR you — it writes WITH you. The author remains the architect of meaning.`,

  4: `Now we need to talk about the invisible forces threatening creative freedom.

THE FILTER BUBBLE: You know that feeling when YouTube recommends the same type of video for 3 hours? That's the algorithm creating an echo chamber. You only see what it thinks you like — so you never discover what challenges you.

THE THREAT OF FLATNESS: When AI optimizes for engagement, it optimizes for the AVERAGE. Everything becomes safe, predictable, commercial. The radical edges where true innovation lives? They start to erode.

But here's the good news: HACKING THE MATRIX. Youth must become algorithm tamers. Break the feed. Seek the strange. Celebrate the weird. Your taste is your rebellion.

Remember: The algorithm works for YOU, not the other way around.`,

  5: `Finally, let's talk about what makes us irreplaceable.

THE BEAUTY OF THE MISTAKE: AI excels at smooth continuity — but humans excel at profound disruption. Art is born from human experience, from beautiful flaws, from unpredictable emotional leaps.

Have you ever noticed how the best art often comes from pain, confusion, or those 3 AM existential crises? AI can't replicate that. It's too... organized.

CURATION IS THE NEW GOLD: In a world of infinite synthetic content, generation becomes CHEAP. What becomes valuable? Human taste. Critical editing. Philosophical framing.

Ted Chiang said it beautifully: the curatorial voice — the human who says "this matters" — becomes the most valuable creative act of all.

In other words: Your weird taste in music? That's your superpower.`,

  6: `To conclude:

AI will not replace creators. Creators who use AI will replace those who don't.

This isn't about choosing between technology and humanity — it's about amplifying our humanity through technology.

Let's CODE with empathy — building tools that serve human flourishing.
Let's READ with critical depth — questioning what algorithms feed us.
Let's CREATE with absolute audacity — embracing the strange, the personal, the unoptimized.

Remember: Your imperfections are your superpower. Your taste is your rebellion. Your creativity is irreplaceable.

Thank you! Merci! Let's discuss.

And remember: The best algorithm is the one that helps you become MORE human, not less.`
}
