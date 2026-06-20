"use client"

import { 
  Slide, 
  SlideTitle, 
  SlideSubtitle, 
  SlideContent,
  Quote,
  ListItem,
  CompareBox,
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
            Centre Guelwar - 2026
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
            A New Age of Art and Ideas?
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
            className="mt-16"
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
              Press [SPACE] to begin
            </motion.p>
          </motion.div>
        </motion.div>
      </CenteredContent>
    </Slide>
  )
}

// ============================================================
// SLIDE 2: WHAT IS AI & ALGORITHMS?
// ============================================================
function WhatIsAISlide() {
  return (
    <Slide variant="light">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-3"
        >
          <Tag>Introduction</Tag>
        </motion.div>
        
        <SlideTitle>
          What is <span className="text-gold gold-underline">AI</span>?
        </SlideTitle>
        <SlideSubtitle>
          Let us start with the basics. What are we actually talking about?
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-10">
          <SplitLayout
            left={
              <Card>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-semibold">Artificial Intelligence (AI)</h3>
                  <p className="text-sm leading-relaxed mb-3">
                    AI is a computer program that learned from millions of books, 
                    articles, and websites written by humans.
                  </p>
                  <p className="text-sm leading-relaxed mb-3">
                    It does not have a brain. It does not feel anything. 
                    It is very good at finding patterns and copying them.
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Example: You type &ldquo;Tell me a joke about cats&rdquo; and AI writes one 
                    because it has seen thousands of cat jokes before.
                  </p>
                </div>
              </Card>
            }
            right={
              <Card highlight>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-semibold">Algorithms</h3>
                  <p className="text-sm leading-relaxed mb-3">
                    An algorithm is simply a recipe. A list of steps to follow, like 
                    &ldquo;First do this, then do that.&rdquo;
                  </p>
                  <p className="text-sm leading-relaxed mb-3">
                    Your TikTok feed, YouTube recommendations, Spotify playlists, 
                    they all use algorithms to decide what to show you.
                  </p>
                  <p className="text-sm leading-relaxed text-cream/90">
                    The algorithm watches what you like, then gives you more 
                    of the same thing. That is why you keep watching!
                  </p>
                </div>
              </Card>
            }
          />
        </SlideContent>

        <SlideContent delay={0.6} className="mt-8">
          <Card className="max-w-3xl mx-auto">
            <p className="text-sm leading-relaxed text-center">
              <strong className="text-gold">Remember:</strong> AI is a tool, like a paintbrush or a pen. 
              It does not have ideas of its own. It copies what humans have done before.
            </p>
          </Card>
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 3: THE ILLUSION OF THE CREATIVE RIVAL
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
          Can AI <span className="text-gold gold-underline">Replace</span> Human Creativity?
        </SlideTitle>
        <SlideSubtitle>
          Is your laptop secretly a better artist than you? Let us find out.
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-10">
          <SplitLayout
            left={
              <CompareBox
                title="What AI Can Do"
                items={[
                  "Read millions of books in seconds",
                  "Write poems that sound nice",
                  "Draw pictures in any style",
                  "Copy patterns from old art",
                  "Always available, never gets tired"
                ]}
                type="neutral"
              />
            }
            right={
              <CompareBox
                title="What Humans Can Do"
                items={[
                  "Feel emotions and express them",
                  "Create something never seen before",
                  "Make mistakes that become beautiful",
                  "Understand pain, joy, and love",
                  "Choose to break the rules on purpose"
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
              AI copies. Humans imagine. That is the difference.
            </p>
          </motion.div>
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 4: YOUTH CULTURE - FROM DIGITAL NATIVES TO AI NATIVES
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
          Young People: <span className="text-gold gold-underline">The AI Generation</span>
        </SlideTitle>
        <SlideSubtitle>
          Your grandparents learned to code. Your parents learned to Google. You learned to ask AI.
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-10">
          <TileLayout columns={3}>
            <Tile title="A New Way to Create" index={0}>
              <p className="mb-3">
                Young people no longer just watch and listen. 
                They <HighlightText>make things with AI right now</HighlightText>.
              </p>
              <p className="text-muted-foreground text-xs">
                A kid in Dakar can make professional music from their bedroom using just a phone.
              </p>
            </Tile>
            
            <Tile title="Art for Everyone" index={1}>
              <p className="mb-3">
                Before, you needed expensive tools to make art. 
                Now <HighlightText>anyone with a phone can create</HighlightText>.
              </p>
              <p className="text-muted-foreground text-xs">
                No more &ldquo;you need money to be an artist&rdquo; - just your imagination.
              </p>
            </Tile>
            
            <Tile title="New Stories from Everywhere" index={2}>
              <p className="mb-3">
                AI helps people from small towns and far-away places 
                <HighlightText>share their stories with the whole world</HighlightText>.
              </p>
              <p className="text-muted-foreground text-xs">
                A writer in a village can now reach readers in Paris, Tokyo, or New York.
              </p>
            </Tile>
          </TileLayout>
        </SlideContent>

        <SlideContent delay={0.6} className="mt-8">
          <Quote
            text="Young people today are not just watching culture happen. They are building it, with AI as their toolbox."
            author="UNESCO Digital Culture Report, 2025"
          />
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 5: LITERATURE & THE AUGMENTED WRITER
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
          Books & Writing with <span className="text-gold gold-underline">AI Help</span>
        </SlideTitle>
        <SlideSubtitle>
          When the blank page scares you, AI can be your writing buddy
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-10">
          <TileLayout columns={3}>
            <Tile title="Say Goodbye to Writer's Block" index={0}>
              <ul className="space-y-2">
                <ListItem>Stuck on what to write? AI gives you ideas</ListItem>
                <ListItem>Need a character? AI helps you build one</ListItem>
                <ListItem>Need a plot twist? AI suggests surprises</ListItem>
              </ul>
            </Tile>
            
            <Tile title="Speak Every Language" index={1}>
              <ul className="space-y-2">
                <ListItem>Translate a story into 50 languages instantly</ListItem>
                <ListItem>Readers everywhere can enjoy your work</ListItem>
                <ListItem>No more language barriers</ListItem>
              </ul>
            </Tile>
            
            <Tile title="Stories That Talk Back" index={2}>
              <ul className="space-y-2">
                <ListItem>Books where YOU choose what happens next</ListItem>
                <ListItem>The story changes based on your choices</ListItem>
                <ListItem>Like a game, but with words</ListItem>
              </ul>
            </Tile>
          </TileLayout>
        </SlideContent>

        <SlideContent delay={0.5} className="mt-8">
          <Card highlight className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div>
                <h4 className="font-serif text-lg font-semibold mb-2">The Big Idea</h4>
                <p className="text-sm leading-relaxed">
                  AI does not write <em>for</em> you. It writes <em>with</em> you. 
                  You are the boss. AI is the helper.
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
// SLIDE 6: THE INVISIBLE ALGORITHMIC CAGE
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
          <Tag variant="warning">Be Careful</Tag>
        </motion.div>

        <SlideTitle>
          The <span className="text-gold gold-underline">Algorithm</span> is Watching You
        </SlideTitle>
        <SlideSubtitle>
          The app knows what you like. But does it know what is good for you?
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-10">
          <div className="space-y-6">
            <WarningBox>
              <h4 className="font-serif text-lg font-semibold mb-2">The Trap of Seeing Only One Thing</h4>
              <p className="text-sm leading-relaxed">
                The algorithm shows you more of what you already like. 
                You never see new ideas, different opinions, or strange art. 
                You live in a bubble and do not even know it.
              </p>
            </WarningBox>

            <WarningBox>
              <h4 className="font-serif text-lg font-semibold mb-2">Everything Starts to Look the Same</h4>
              <p className="text-sm leading-relaxed">
                When AI makes art for everyone, it makes the same kind of art. 
                Safe, boring, and predictable. The weird, crazy, beautiful stuff 
                gets pushed to the side.
              </p>
            </WarningBox>

            <Card highlight>
              <div className="flex items-start gap-4">
                <div>
                  <h4 className="font-serif text-lg font-semibold mb-2">How to Break Free</h4>
                  <p className="text-sm leading-relaxed text-cream/90">
                    You have the power. Search for strange music. Read weird books. 
                    Watch things the algorithm does not recommend. 
                    <strong> Your taste is your rebellion.</strong>
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
// SLIDE 7: PROTECTING THE HUMAN CORE
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
          What Makes Us <span className="text-gold gold-underline">Special</span>
        </SlideTitle>
        <SlideSubtitle>
          Your mistakes, your weird ideas, your feelings - that is your superpower
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-10">
          <SplitLayout
            left={
              <Card>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-semibold">Mistakes Are Beautiful</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    AI makes things perfect every time. But real art? 
                    It comes from <HighlightText>happy accidents</HighlightText>.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <ListItem>A spilled paint drop becomes a masterpiece</ListItem>
                    <ListItem>A wrong note becomes a new melody</ListItem>
                    <ListItem>A typo becomes the best part of a poem</ListItem>
                  </ul>
                </div>
              </Card>
            }
            right={
              <Card highlight>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-semibold">Your Taste Matters</h3>
                  <p className="text-sm leading-relaxed mb-4 text-cream/90">
                    When everyone can make art with AI, the person who 
                    <HighlightText>chooses what is good</HighlightText> becomes the hero.
                  </p>
                  <ul className="space-y-2 text-sm text-cream/90">
                    <ListItem>The DJ who picks the right song</ListItem>
                    <ListItem>The curator who says &ldquo;this matters&rdquo;</ListItem>
                    <ListItem>The editor who makes it shine</ListItem>
                  </ul>
                </div>
              </Card>
            }
          />
        </SlideContent>

        <SlideContent delay={0.5} className="mt-8">
          <Quote
            text="In a world full of AI art, the person with good taste becomes the most valuable creator of all."
            author="Ted Chiang"
            source="Exhalation: Stories"
          />
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 8: CONCLUSION & CONVERSATION
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
            The <span className="text-gold">Big Lesson</span>
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
              &ldquo;AI will not replace creative people. <br />
              <motion.span 
                className="text-gold font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Creative people who use AI
              </motion.span> will replace those who do not.&rdquo;
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
                Use AI to help you. Do not let it replace you. <br />
                Create with <span className="text-gold font-semibold">courage and heart</span>.
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
                Questions & Discussion
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3 }}
              className="mt-12"
            >
              <p className="text-cream/50 font-mono text-xs">
                Abdoullah Ndao - Centre Guelwar - 2026
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
  { component: WhatIsAISlide, title: "What is AI?" },
  { component: CreativeRivalSlide, title: "Can AI Replace Us?" },
  { component: YouthCultureSlide, title: "The AI Generation" },
  { component: LiteratureSlide, title: "Writing with AI" },
  { component: AlgorithmicCageSlide, title: "The Algorithm Trap" },
  { component: HumanCoreSlide, title: "What Makes Us Special" },
  { component: ConclusionSlide, title: "Conclusion" }
]

// ============================================================
// SPEAKER NOTES
// ============================================================
export const speakerNotes: Record<number, string> = {
  0: `Welcome everyone!

My name is Abdoullah Ndao. Today we are going to talk about something very exciting: how computers that think, called Artificial Intelligence, are changing the way we make art, write stories, and create music.

This is not a boring lesson. This is a fun conversation about the future.

We have people of all ages here today, from young to old. So I will keep things simple and clear.

Let us begin!`,

  1: `First, let us understand what AI and algorithms actually are.

AI stands for Artificial Intelligence. It is a computer program that learned from millions of books, articles, and websites. It finds patterns, then copies them. It does not have a brain. It does not feel anything. It just finds patterns and copies them.

Think of it like this: if you read 10,000 jokes about cats, you could write a cat joke too. AI does the same thing, but with millions of things at once.

Algorithms are like recipes. Step-by-step instructions. Your TikTok feed uses an algorithm. YouTube uses one too. It watches what you like, then gives you more of the same.

The most important thing to remember: AI is a tool, like a pencil or a paintbrush. It does not have its own ideas. It copies what humans made before.`,

  2: `Now let us talk about the big question: Can AI replace human creativity?

The answer is no. Here is why.

On one side, we have what AI can do: read millions of books in seconds, write poems that sound nice, draw pictures in any style. It is very impressive.

On the other side, we have what humans can do: feel emotions and express them, create something never seen before, make mistakes that become beautiful. AI cannot do these things.

AI copies. Humans imagine. That is the difference.`,

  3: `Now let us talk about young people and AI.

Young people today are not just watching. They are making things. A kid in Dakar can make professional music from their bedroom. A teenager can write a book and translate it into 50 languages. An artist can make gallery art with just a phone.

Before, you needed money and expensive tools to be an artist. Now anyone with a phone can create.

And the best part? Stories from small towns and far-away places can now reach readers everywhere. No more gatekeepers.`,

  4: `Let us talk about books and writing with AI.

Have you ever stared at a blank page and not known what to write? That is called writer's block. AI can help with that. You ask it for ideas, and it gives you some. You ask it for a character, and it helps you build one.

AI can also translate your story into 50 languages instantly. A book written in Wolof can be read in Tokyo. A poem in French can be read in English.

And the coolest part? Interactive books where YOU choose what happens next. Like a game, but with words.

Remember: AI does not write for you. It writes with you. You are the boss. AI is the helper.`,

  5: `Now we need to talk about the algorithm, and why you should be careful.

You know when you watch one video on YouTube, and then it recommends the same type of video for three hours? That is the algorithm. It shows you more of what you already like. You never see new ideas, different opinions, or strange art. You live in a bubble and do not even know it.

And when AI makes art for everyone, it makes the same kind of art. Safe, boring, and predictable. The weird, crazy, beautiful stuff gets pushed to the side.

But you have the power! Search for strange music. Read weird books. Watch things the algorithm does not recommend. Your taste is your rebellion.`,

  6: `Finally, let us talk about what makes humans special.

AI makes things perfect every time. But real art? It comes from happy accidents. A spilled paint drop becomes a masterpiece. A wrong note becomes a new melody. A typo becomes the best part of a poem.

Also, when everyone can make art with AI, the person who chooses what is good becomes the hero. The DJ who picks the right song. The curator who says "this matters." The editor who makes it shine.

Your weird taste in music? Your strange ideas? Your messy, beautiful feelings? That is your superpower.`,

  7: `So what did we learn today?

AI will not replace creative people. But creative people who use AI will replace those who do not.

Use AI to help you. Do not let it replace you. Create with courage and heart.

Remember: Your imperfections are your superpower. Your taste is your rebellion. Your creativity is irreplaceable.

Thank you! Merci! Let us discuss.`

}
