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
  SectionDivider,
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
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Conference 2026
          </motion.div>
          
          <SlideTitle className="text-cream">
            <span className="text-gold">Artificial Intelligence</span> & Creativity
          </SlideTitle>
          
          <motion.div className="my-6 decorative-line" />
          
          <motion.h2 
            className="font-serif text-2xl md:text-3xl text-cream/80 italic"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            The New Cultural Renaissance?
          </motion.h2>

          <motion.p 
            className="mt-6 text-cream/60 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            L&apos;IA au service de la jeunesse, de la culture et de la littérature.
          </motion.p>

          <motion.div 
            className="mt-16 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-cream font-medium">Abdoullah Ndao</p>
            <p className="text-cream/50 text-sm">
              General Public Conference
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 text-cream/40 text-sm"
          >
            Press [SPACE] to begin
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-2"
        >
          <Tag>Part I</Tag>
        </motion.div>
        
        <SlideTitle>
          The Illusion of the <span className="text-gold gold-underline">Creative Rival</span>
        </SlideTitle>
        <SlideSubtitle>
          Understanding what separates algorithmic pattern recognition from human creative expression
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-10">
          <SplitLayout
            left={
              <CompareBox
                title="The Machine"
                items={[
                  "Syntax & Patterns",
                  "Statistical probability engines",
                  "Algorithmic mimicry of human forms",
                  "Generates based on learned distributions",
                  "Optimizes for predictability"
                ]}
                type="neutral"
              />
            }
            right={
              <CompareBox
                title="The Human"
                items={[
                  "The Soul & Lived Experience",
                  "Memory, trauma, joy, and sensory nuance",
                  "The intentional spark behind the word",
                  "Creates from consciousness and emotion",
                  "Embraces beautiful imperfection"
                ]}
                type="good"
              />
            }
          />
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-2"
        >
          <Tag>Part II</Tag>
        </motion.div>

        <SlideTitle>
          Youth Culture: <span className="text-gold gold-underline">AI Natives</span>
        </SlideTitle>
        <SlideSubtitle>
          From Digital Natives to AI Natives — The Generational Leap in Creative Expression
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-10">
          <TileLayout columns={3}>
            <Tile title="The Generational Leap" index={0}>
              <p className="mb-3">
                Shifting from passive media consumption to immediate <HighlightText>algorithmic co-creation</HighlightText>.
              </p>
              <p className="text-muted-foreground text-xs">
                Today&apos;s youth don&apos;t just consume content — they collaborate with intelligent systems to produce it in real-time.
              </p>
            </Tile>
            
            <Tile title="Democratizing Art" index={1}>
              <p className="mb-3">
                Removing financial and technical gatekeepers for <HighlightText>bedroom producers, writers, and digital artists</HighlightText>.
              </p>
              <p className="text-muted-foreground text-xs">
                A teenager with a phone now has access to tools that once required expensive software and years of training.
              </p>
            </Tile>
            
            <Tile title="New Micro-Narratives" index={2}>
              <p className="mb-3">
                Giving immediate, industrial-grade creative power to <HighlightText>marginalized or underground voices</HighlightText>.
              </p>
              <p className="text-muted-foreground text-xs">
                Stories from Dakar, Manila, or Medellín can now reach global audiences without traditional publishing gatekeepers.
              </p>
            </Tile>
          </TileLayout>
        </SlideContent>

        <SlideContent delay={0.6} className="mt-8">
          <Quote
            text="The youth of today are not just consumers of culture — they are its architects, with AI as their drafting tool."
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-2"
        >
          <Tag>Part III</Tag>
        </motion.div>

        <SlideTitle>
          Literature & The <span className="text-gold gold-underline">Augmented Writer</span>
        </SlideTitle>
        <SlideSubtitle>
          How AI is reshaping the literary landscape without replacing the author&apos;s soul
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-10">
          <TileLayout columns={3}>
            <Tile title="Erasing the Blank Page" index={0}>
              <ul className="space-y-2">
                <ListItem>AI as an instant creative sparring partner</ListItem>
                <ListItem>Busts writer&apos;s block with targeted prompts</ListItem>
                <ListItem>Brainstorms character flaws and plot dynamics</ListItem>
              </ul>
            </Tile>
            
            <Tile title="Expanding Horizons" index={1}>
              <ul className="space-y-2">
                <ListItem>Instant, localized literary translations</ListItem>
                <ListItem>Breaking linguistic isolation</ListItem>
                <ListItem>Accelerated research and lore-building</ListItem>
              </ul>
            </Tile>
            
            <Tile title="The Living Narrative" index={2}>
              <ul className="space-y-2">
                <ListItem>Rise of interactive literature</ListItem>
                <ListItem>Readers dynamically influence story paths</ListItem>
                <ListItem>Personalized narrative experiences</ListItem>
              </ul>
            </Tile>
          </TileLayout>
        </SlideContent>

        <SlideContent delay={0.5} className="mt-8">
          <Card highlight className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <span className="text-3xl text-gold">✍</span>
              <div>
                <h4 className="font-serif text-lg font-semibold mb-2">The Key Insight</h4>
                <p className="text-sm leading-relaxed opacity-80">
                  AI doesn&apos;t write <em>for</em> you — it writes <em>with</em> you. 
                  The author remains the architect of meaning; AI becomes the infinite canvas 
                  upon which ideas can be rapidly prototyped and refined.
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-2"
        >
          <Tag variant="warning">Critical Analysis</Tag>
        </motion.div>

        <SlideTitle>
          The Invisible <span className="text-gold gold-underline">Algorithmic Cage</span>
        </SlideTitle>
        <SlideSubtitle>
          Understanding the hidden forces that shape what we create, consume, and celebrate
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-10">
          <div className="space-y-6">
            <WarningBox>
              <h4 className="font-serif text-lg font-semibold mb-2">The Filter Bubble</h4>
              <p className="text-sm leading-relaxed">
                Recommendation loops curate global taste to keep users engaged — not enlightened. 
                Algorithmic feeds create echo chambers where diversity of thought slowly suffocates.
              </p>
            </WarningBox>

            <WarningBox>
              <h4 className="font-serif text-lg font-semibold mb-2">The Threat of Flatness</h4>
              <p className="text-sm leading-relaxed">
                De-risking commercial art leads to predictable, repetitive cultural loops. 
                When AI optimizes for engagement, it often optimizes for the average — 
                eroding the radical edges where true innovation lives.
              </p>
            </WarningBox>

            <Card highlight>
              <div className="flex items-start gap-4">
                <span className="text-3xl text-gold">⚡</span>
                <div>
                  <h4 className="font-serif text-lg font-semibold mb-2">Hacking the Matrix</h4>
                  <p className="text-sm leading-relaxed opacity-80">
                    The urgent need for youth to act as <HighlightText>algorithm tamers</HighlightText> — 
                    actively seeking friction, oddities, underground art, and the unconventional. 
                    Break the feed. Seek the strange. Celebrate the weird.
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-2"
        >
          <Tag>Part IV</Tag>
        </motion.div>

        <SlideTitle>
          Protecting the <span className="text-gold gold-underline">Human Core</span>
        </SlideTitle>
        <SlideSubtitle>
          Why the imperfections of human creation remain irreplaceable in an age of synthetic perfection
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-10">
          <SplitLayout
            left={
              <Card>
                <div className="space-y-4">
                  <div className="text-4xl text-gold mb-4">✧</div>
                  <h3 className="font-serif text-2xl font-semibold">The Beauty of the Mistake</h3>
                  <p className="text-sm leading-relaxed opacity-80 mb-4">
                    AI excels at smooth continuity; humans excel at <HighlightText>profound disruption</HighlightText>.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <ListItem>Art is born from human trauma</ListItem>
                    <ListItem>Beautiful flaws and unpredictable emotional leaps</ListItem>
                    <ListItem>The happy accident that changes everything</ListItem>
                  </ul>
                </div>
              </Card>
            }
            right={
              <Card highlight>
                <div className="space-y-4">
                  <div className="text-4xl text-gold mb-4">♛</div>
                  <h3 className="font-serif text-2xl font-semibold">Curation is the New Gold</h3>
                  <p className="text-sm leading-relaxed opacity-80 mb-4">
                    In a world of infinite synthetic content, <HighlightText>generation becomes cheap</HighlightText>.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <ListItem>Human taste becomes the ultimate premium</ListItem>
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
          transition={{ duration: 0.8 }}
        >
          <SlideTitle className="text-cream mb-8">
            The <span className="text-gold">Paradigm</span>
          </SlideTitle>

          <SlideContent delay={0.3}>
            <div className="my-8 decorative-line" />
            
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream leading-relaxed italic my-12"
            >
              &ldquo;AI will not replace creators. <br />
              <span className="text-gold font-semibold">Creators who use AI</span> will replace those who don&apos;t.&rdquo;
            </motion.blockquote>

            <div className="my-8 decorative-line" />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 space-y-4"
            >
              <p className="text-cream/80 text-lg">
                Let&apos;s code with empathy, read with critical depth, <br />
                and create with <span className="text-gold font-semibold">absolute audacity</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-16"
            >
              <p className="text-cream font-serif text-3xl font-semibold mb-2">Thank you!</p>
              <p className="text-cream/60 text-lg italic">Merci pour votre attention.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-12"
            >
              <p className="text-gold font-mono text-sm tracking-widest uppercase">
                Questions & Discussion
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="mt-12"
            >
              <p className="text-cream/40 font-mono text-xs">
                Abdoullah Ndao — 2026
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
  0: `Welcome to this presentation on Artificial Intelligence and Creativity.

I am Abdoullah Ndao and today we will explore how AI is reshaping youth culture, literature, and the broader creative landscape.

This is a conversation about the new cultural Renaissance — not a technical deep dive, but a humanistic exploration of what AI means for our creative future.

We'll move between English and French as needed to reach everyone in this room.`,

  1: `Let's start by addressing the elephant in the room: Is AI a creative rival?

The answer is nuanced. On the left, we have THE MACHINE — syntax, patterns, statistical probability engines. AI generates text, images, and music by learning patterns from vast datasets. It mimics human forms with stunning accuracy.

On the right, we have THE HUMAN — soul, lived experience, memory, trauma, joy, and sensory nuance. The intentional spark behind the word. When a poet writes about loss, they draw from actual grief. When a musician plays blues, they channel real pain.

The key insight: AI doesn't CREATE — it COMBINES and RECOMBINES. Humans create from consciousness. Understanding this distinction is crucial for using AI wisely.`,

  2: `Now let's talk about the generation that's growing up WITH AI as a creative tool.

THE GENERATIONAL LEAP: Today's youth aren't just digital natives — they're AI natives. They shift from passive media consumption to immediate algorithmic co-creation. A 15-year-old in Lagos can use AI to produce music that rivals professional studios.

DEMOCRATIZING ART: AI removes financial and technical gatekeepers. Bedroom producers, self-taught writers, and digital artists now have access to tools that once required expensive software and years of training.

NEW MICRO-NARRATIVES: This is perhaps the most exciting development. AI gives immediate, industrial-grade creative power to marginalized or underground voices. Stories from Dakar, Manila, or Medellín can reach global audiences without traditional publishing gatekeepers.`,

  3: `Literature is being transformed, but not replaced.

ERASING THE BLANK PAGE: AI acts as an instant creative sparring partner. It helps bust writer's block by brainstorming historical facts, character flaws, and complex plot dynamics. Think of it as having a tireless writing partner available 24/7.

EXPANDING HORIZONS: Instant, localized literary translations break linguistic isolation. A novel written in Wolof can be instantly accessible to readers in Tokyo. Accelerated research turns complex lore-building into real-time discovery.

THE LIVING NARRATIVE: Perhaps most revolutionary is interactive literature where readers dynamically influence the story path. Choose-your-own-adventure on steroids, powered by AI that adapts to your choices in real-time.

The key insight: AI doesn't write FOR you — it writes WITH you. The author remains the architect of meaning.`,

  4: `Now we need to talk about the invisible forces that threaten creative freedom.

THE FILTER BUBBLE: Recommendation loops curate global taste to keep users engaged — not enlightened. Algorithmic feeds create echo chambers where diversity of thought slowly suffocates. If you only see what the algorithm thinks you like, you'll never discover what challenges you.

THE THREAT OF FLATNESS: When AI optimizes for engagement, it often optimizes for the average. This de-risks commercial art but leads to predictable, repetitive cultural loops. The radical edges where true innovation lives begin to erode.

HACKING THE MATRIX: This is our call to action. Youth must become algorithm tamers — actively seeking friction, oddities, underground art, and the unconventional. Break the feed. Seek the strange. Celebrate the weird. Your taste is your rebellion.`,

  5: `Finally, let's talk about what makes us irreplaceable.

THE BEAUTY OF THE MISTAKE: AI excels at smooth continuity; humans excel at profound disruption. Art is born from human trauma, beautiful flaws, and unpredictable emotional leaps. The happy accident that changes everything — that's uniquely human.

CURATION IS THE NEW GOLD: In a world of infinite synthetic content, generation becomes cheap. What becomes valuable? Human taste, critical editing, and philosophical framing. The curator who says 'this matters' performs the most valuable creative act of all.

Ted Chiang said it beautifully: in an age of infinite reproduction, the curatorial voice becomes the ultimate creative tool.`,

  6: `To conclude:

AI will not replace creators. Creators who use AI will replace those who don't.

This is not about choosing between technology and humanity — it's about amplifying our humanity through technology.

Let's code with empathy — building tools that serve human flourishing.
Let's read with critical depth — questioning what algorithms feed us.
Let's create with absolute audacity — embracing the strange, the personal, the unoptimized.

Thank you. Merci. Let's discuss.`
}
