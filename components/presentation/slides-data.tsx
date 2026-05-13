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
  CodeBlock,
  Step,
  Stat,
  Terminal,
  TerminalLine,
  Card,
  Tag,
  SectionDivider,
  PixelIcon
} from "./slide-components"
import { motion } from "framer-motion"

// ============================================================
// SLIDE 1: TITLE
// ============================================================
function TitleSlide() {
  return (
    <Slide>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-4xl"
      >
        <motion.div 
          className="font-mono text-sm text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {">"} initializing presentation...
        </motion.div>
        
        <SlideTitle className="text-center">
          <span className="text-primary">Claude</span> AI
        </SlideTitle>
        
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mt-4 text-foreground"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Discovery, Capabilities & Demonstration
        </motion.h2>

        <motion.div 
          className="mt-16 space-y-2 font-mono text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-foreground font-bold">Abdoullah Ndao</p>
          <p className="text-muted-foreground text-xs">
            Reference: Matt Pocock - "Software Fundamentals Matter More Than Ever"
          </p>
          <p className="text-muted-foreground text-xs">
            AI Engineer Conference 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 font-mono text-xs text-muted-foreground"
        >
          Press [SPACE] to start
        </motion.div>
      </motion.div>
    </Slide>
  )
}

// ============================================================
// SLIDE 2: AGENDA
// ============================================================
function AgendaSlide() {
  return (
    <Slide>
      <div className="w-full max-w-3xl">
        <SlideTitle>// AGENDA</SlideTitle>
        <SlideSubtitle>What we will cover today</SlideSubtitle>
        
        <SlideContent delay={0.2} className="mt-12">
          <motion.ul 
            className="space-y-4"
            initial="initial"
            animate="animate"
            variants={{ animate: { transition: { staggerChildren: 0.08 } } }}
          >
            <ListItem index={0}>
              <strong>Development before AI</strong> - Traditional methods and their limits
            </ListItem>
            <ListItem index={1}>
              <strong>The Arrival of Claude</strong> - What AI can really do
            </ListItem>
            <ListItem index={2}>
              <strong>The Trap of Vibe Coding</strong> - Why it doesn&apos;t work
            </ListItem>
            <ListItem index={3}>
              <strong>5 Fundamental Principles</strong> - The rules for success with AI
            </ListItem>
            <ListItem index={4}>
              <strong>Hands-on Exercises</strong> - Practice what we learn
            </ListItem>
            <ListItem index={5}>
              <strong>Demonstration</strong> - Claude in action
            </ListItem>
          </motion.ul>
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 3: BEFORE AI
// ============================================================
function BeforeAISlide() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <SlideTitle>
          Development <span className="text-primary">before</span> AI
        </SlideTitle>
        <SlideSubtitle>
          How we used to build software
        </SlideSubtitle>
        
        <SlideContent delay={0.2} className="mt-12 grid md:grid-cols-3 gap-4">
          <GridCard
            title="Manual Everything"
            description="Every line written by hand. Debugging line by line. Manual documentation. Stack Overflow on repeat."
            index={0}
          />
          <GridCard
            title="Specialized Teams"
            description="Experts for every domain: frontend, backend, DevOps, security, DB, testing. Knowledge silos."
            index={1}
          />
          <GridCard
            title="Long Cycles"
            description="Weeks for an MVP. Months for a feature. Years to master a stack."
            index={2}
          />
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 4: THE PROBLEMS
// ============================================================
function ProblemsSlide() {
  return (
    <Slide>
      <div className="w-full max-w-4xl">
        <SlideTitle>
          Persistent <span className="text-primary">Problems</span>
        </SlideTitle>
        
        <SlideContent delay={0.2} className="mt-12">
          <Terminal title="$ dev-life --status">
            <TerminalLine prompt="[!]" command="Entry barrier: 3-5 years to be productive" delay={0.1} />
            <TerminalLine prompt="[!]" command="70% of time on boilerplate and CRUD" delay={0.2} />
            <TerminalLine prompt="[!]" command="Documentation always obsolete" delay={0.3} />
            <TerminalLine prompt="[!]" command="80% maintenance, 20% creation" delay={0.4} />
            <TerminalLine prompt="[!]" command="Exponential framework complexity" delay={0.5} />
            <TerminalLine prompt="[!]" command="Bus factor = 1 (everything in one head)" delay={0.6} />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-4 text-muted-foreground"
            >
              {">"} Status: FRUSTRATING
            </motion.div>
          </Terminal>
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 5: ENTER AI
// ============================================================
function EnterAISlide() {
  return (
    <Slide>
      <div className="w-full max-w-4xl">
        <SlideTitle>
          AI changes <span className="text-primary">everything</span>
        </SlideTitle>
        <SlideSubtitle>
          But watch out for overhyped promises...
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-8">
          <Quote
            text="AI coding tools are overhyped and powerful at the same time. Used well, they're extraordinary. Used badly, they'll bury you in spaghetti code faster than any human team could."
            author="Matt Pocock"
            source="AI Engineer Conference 2026"
          />
        </SlideContent>

        <SlideContent delay={0.5} className="mt-8 text-center">
          <p className="text-lg text-muted-foreground">
            The question isn&apos;t &quot;should we use AI?&quot;
          </p>
          <p className="text-xl font-bold text-primary mt-2">
            It&apos;s &quot;how do we use it correctly?&quot;
          </p>
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 6: CLAUDE CAPABILITIES
// ============================================================
function ClaudeCapabilitiesSlide() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <SlideTitle>
          What <span className="text-primary">Claude</span> can do
        </SlideTitle>
        <SlideSubtitle>
          An assistant that truly understands code
        </SlideSubtitle>
        
        <SlideContent delay={0.2} className="mt-10 grid md:grid-cols-4 gap-3">
          <GridCard title="Generation" description="50+ languages. Best practices by default." index={0} />
          <GridCard title="Reasoning" description="Analysis, debug, complex problems." index={1} />
          <GridCard title="Dialogue" description="Clarification, iteration, feedback." index={2} />
          <GridCard title="Documentation" description="Explains, documents, answers." index={3} />
          <GridCard title="Testing" description="Unit, integration, E2E." index={4} />
          <GridCard title="Security" description="Vulnerabilities, fixes, audit." index={5} />
          <GridCard title="Refactoring" description="Structure, complexity, modernization." index={6} />
          <GridCard title="Prototyping" description="From concept to MVP in hours." index={7} />
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 7: STATS
// ============================================================
function StatsSlide() {
  return (
    <Slide>
      <div className="w-full max-w-4xl">
        <SlideTitle>
          Measurable <span className="text-primary">Impact</span>
        </SlideTitle>
        
        <SlideContent delay={0.2} className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Stat value="55%" label="Code written faster" index={0} />
          <Stat value="2x" label="PRs merged" index={1} />
          <Stat value="75%" label="Less repetitive work" index={2} />
          <Stat value="40%" label="Fewer production bugs" index={3} />
        </SlideContent>

        <SlideContent delay={0.6} className="mt-8 text-center">
          <p className="font-mono text-xs text-muted-foreground">
            Sources: GitHub Copilot Research, Stack Overflow Developer Survey 2025
          </p>
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 8: THE TRAP
// ============================================================
function TrapSlide() {
  return (
    <Slide>
      <div className="w-full max-w-5xl">
        <SlideTitle>
          The Trap of <span className="text-primary">&quot;Vibe Coding&quot;</span>
        </SlideTitle>
        <SlideSubtitle>
          The seductive approach that leads to disaster
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-12 grid md:grid-cols-2 gap-6">
          <CompareBox
            title="// THE IDEA"
            items={[
              "Write a spec in natural language",
              "AI generates all the code",
              "Bug? Modify the spec, regenerate",
              "Never look at the code",
              "AI as an intelligent compiler"
            ]}
            type="neutral"
          />
          <CompareBox
            title="// THE REALITY"
            items={[
              "First run: it works, code is OK",
              "Second run: quality degrades",
              "Third run: spaghetti code",
              "Impossible to debug",
              "Impossible to maintain"
            ]}
            type="bad"
          />
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 9: SOFTWARE ENTROPY
// ============================================================
function EntropySlide() {
  return (
    <Slide>
      <div className="w-full max-w-4xl">
        <SlideTitle>
          Software <span className="text-primary">Entropy</span>
        </SlideTitle>
        
        <SlideContent delay={0.2} className="mt-8">
          <Quote
            text="Entropy is the idea that things tend towards disaster and collapse. This is exactly how most software systems behave too."
            author="The Pragmatic Programmer"
            source="Hunt & Thomas"
          />
        </SlideContent>

        <SlideContent delay={0.4} className="mt-8 grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-bold text-lg mb-3">Without Intentional Design</h3>
            <p className="text-muted-foreground text-sm">
              Every change that ignores global design = degradation.
              Code rots faster than ever with AI.
            </p>
          </Card>
          <Card highlight>
            <h3 className="font-bold text-lg mb-3 text-primary">The Solution</h3>
            <p className="text-sm">
              Software engineering fundamentals are not optional.
              They are <strong>more important than ever</strong>.
            </p>
          </Card>
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 10: THE THESIS
// ============================================================
function ThesisSlide() {
  return (
    <Slide>
      <div className="w-full max-w-3xl text-center">
        <SlideTitle>
          Matt Pocock&apos;s <span className="text-primary">Thesis</span>
        </SlideTitle>
        
        <SlideContent delay={0.3} className="mt-12">
          <Card highlight className="text-left">
            <p className="text-xl md:text-2xl leading-relaxed">
              The developers who <strong className="text-primary">succeed</strong> with AI aren&apos;t the ones who delegate everything.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed mt-4">
              Nor are they the ones who refuse to use it.
            </p>
            <motion.p 
              className="text-xl md:text-2xl text-primary font-bold mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              They are the ones who apply software engineering fundamentals.
            </motion.p>
          </Card>
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 11: 5 PRINCIPLES INTRO
// ============================================================
function PrinciplesIntroSlide() {
  return (
    <Slide>
      <div className="w-full max-w-4xl">
        <SlideTitle>
          <span className="text-primary">5</span> Fundamental Principles
        </SlideTitle>
        <SlideSubtitle>
          Extracted from Matt Pocock&apos;s talk
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-12 flex flex-wrap gap-4 justify-center">
          {[
            { num: "01", label: "Grill Me" },
            { num: "02", label: "Ubiquitous Language" },
            { num: "03", label: "TDD" },
            { num: "04", label: "Deep Modules" },
            { num: "05", label: "Design vs Implementation" }
          ].map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="border-2 border-foreground p-6 text-center min-w-[160px]"
            >
              <div className="font-mono text-2xl font-bold text-primary mb-2">{item.num}</div>
              <div className="font-mono text-sm">{item.label}</div>
            </motion.div>
          ))}
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 12: PRINCIPLE 1 - GRILL ME
// ============================================================
function GrillMeSlide() {
  return (
    <Slide>
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-sm text-primary mb-4"
        >
          PRINCIPLE 01/05
        </motion.div>
        
        <SlideTitle>
          <span className="text-primary">&quot;Grill Me&quot;</span>
        </SlideTitle>
        <SlideSubtitle>
          Reach a shared conceptual design
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-8">
          <Quote
            text="I give Claude a rough spec, then say 'Grill me'. I want it to ask me hard questions about everything I haven't thought through."
            author="Matt Pocock"
          />
        </SlideContent>

        <SlideContent delay={0.5} className="mt-8">
          <Terminal title="$ claude --grill-me">
            <TerminalLine prompt="USER:" command='I want a todo app' delay={0.1} />
            <TerminalLine prompt="CLAUDE:" command="Questions:" delay={0.3} />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pl-4 space-y-1 text-muted-foreground"
            >
              <p>- Multi-user or single-user?</p>
              <p>- Local persistence or cloud?</p>
              <p>- Deadlines, priorities, categories?</p>
              <p>- Notifications?</p>
              <p>- Mobile, desktop, or both?</p>
            </motion.div>
          </Terminal>
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 13: PRINCIPLE 2 - UBIQUITOUS LANGUAGE
// ============================================================
function UbiquitousLanguageSlide() {
  return (
    <Slide>
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-sm text-primary mb-4"
        >
          PRINCIPLE 02/05
        </motion.div>
        
        <SlideTitle>
          Ubiquitous <span className="text-primary">Language</span>
        </SlideTitle>
        <SlideSubtitle>
          Create a common vocabulary (Domain-Driven Design)
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-8">
          <Quote
            text="I create a vocabulary.md file that defines every term in my domain. Claude references it and uses consistent naming everywhere."
            author="Matt Pocock"
          />
        </SlideContent>

        <SlideContent delay={0.5} className="mt-8">
          <CodeBlock filename="vocabulary.md">
{`## Domain Terms

**Workspace**: A team's workspace
**Member**: User belonging to a workspace  
**Task**: Unit of work with status and assignee
**Sprint**: Time period with associated tasks

## Business Rules

- A Task belongs to only one Workspace
- A Member can have multiple Tasks
- A Sprint has a mandatory start/end date`}
          </CodeBlock>
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 14: PRINCIPLE 3 - TDD
// ============================================================
function TDDSlide() {
  return (
    <Slide>
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-sm text-primary mb-4"
        >
          PRINCIPLE 03/05
        </motion.div>
        
        <SlideTitle>
          <span className="text-primary">TDD</span> with AI
        </SlideTitle>
        <SlideSubtitle>
          Tests first = short feedback loops
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-8">
          <Quote
            text="Write the test first. The test IS the spec. Then tell Claude to make it pass. Instant feedback loop."
            author="Matt Pocock"
          />
        </SlideContent>

        <SlideContent delay={0.5} className="mt-8">
          <CodeBlock filename="user.test.ts">
{`describe('createUser', () => {
  it('should hash password before saving', async () => {
    const user = await createUser({
      email: 'test@example.com',
      password: 'plain123'
    })
    
    expect(user.password).not.toBe('plain123')
    expect(await verify(user.password, 'plain123')).toBe(true)
  })
})

// PROMPT: "Make this test pass"`}
          </CodeBlock>
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 15: PRINCIPLE 4 - DEEP MODULES
// ============================================================
function DeepModulesSlide() {
  return (
    <Slide>
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-sm text-primary mb-4"
        >
          PRINCIPLE 04/05
        </motion.div>
        
        <SlideTitle>
          Deep <span className="text-primary">Modules</span>
        </SlideTitle>
        <SlideSubtitle>
          Simple interface, complex implementation
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-8">
          <Quote
            text="A deep module does a lot with a simple interface. This makes it easy to test and easy for AI to understand."
            author="John Ousterhout (A Philosophy of Software Design)"
          />
        </SlideContent>

        <SlideContent delay={0.5} className="mt-8 grid md:grid-cols-2 gap-6">
          <CompareBox
            title="// SHALLOW MODULE"
            items={[
              "sendEmail(to, from, subject, body, cc, bcc, attachments, ...)",
              "20 parameters",
              "Hard to test",
              "AI struggles to use it"
            ]}
            type="bad"
          />
          <CompareBox
            title="// DEEP MODULE"
            items={[
              "emailService.send(notification)",
              "1 clear parameter",
              "Easy to test",
              "AI understands immediately"
            ]}
            type="good"
          />
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 16: PRINCIPLE 5 - DESIGN VS IMPLEMENTATION
// ============================================================
function DesignVsImplementationSlide() {
  return (
    <Slide>
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-sm text-primary mb-4"
        >
          PRINCIPLE 05/05
        </motion.div>
        
        <SlideTitle>
          Design vs <span className="text-primary">Implementation</span>
        </SlideTitle>
        <SlideSubtitle>
          You: strategist. AI: tactician.
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-8">
          <Quote
            text="You are the strategist. AI is the tactician. You decide WHAT to build and WHY. AI figures out HOW."
            author="Matt Pocock"
          />
        </SlideContent>

        <SlideContent delay={0.5} className="mt-8 grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-bold text-lg mb-4">YOU decide</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary font-mono">{">"}</span>
                Global architecture
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-mono">{">"}</span>
                Technology choices
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-mono">{">"}</span>
                Public interfaces
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-mono">{">"}</span>
                Critical business rules
              </li>
            </ul>
          </Card>
          <Card highlight>
            <h3 className="font-bold text-lg mb-4 text-primary">AI executes</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary font-mono">{">"}</span>
                Implementation details
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-mono">{">"}</span>
                Writing tests
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-mono">{">"}</span>
                Boilerplate and CRUD
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-mono">{">"}</span>
                Guided refactoring
              </li>
            </ul>
          </Card>
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 17: EXERCISES INTRO
// ============================================================
function ExercisesIntroSlide() {
  return (
    <Slide>
      <div className="w-full max-w-4xl text-center">
        <SlideTitle>
          Hands-on <span className="text-primary">Exercises</span>
        </SlideTitle>
        <SlideSubtitle>
          Putting the principles into practice
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="flex flex-col items-center text-center">
            <PixelIcon icon="🔥" />
            <h3 className="font-pixel text-xl mt-4">Grill Me</h3>
            <p className="text-xs text-muted-foreground mt-2">Challenge your specs</p>
          </Card>
          <Card className="flex flex-col items-center text-center">
            <PixelIcon icon="📚" />
            <h3 className="font-pixel text-xl mt-4">Vocabulary</h3>
            <p className="text-xs text-muted-foreground mt-2">Speak the same language</p>
          </Card>
          <Card className="flex flex-col items-center text-center">
            <PixelIcon icon="🧪" />
            <h3 className="font-pixel text-xl mt-4">TDD</h3>
            <p className="text-xs text-muted-foreground mt-2">Spec via tests</p>
          </Card>
        </SlideContent>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 font-mono text-sm text-primary"
        >
          {">"} Prepare your favorite IDE or Claude interface
        </motion.div>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 18: EXERCISE 1 - GRILL ME
// ============================================================
function Exercise1Slide() {
  return (
    <Slide>
      <div className="w-full max-w-4xl">
        <Tag active>EXERCISE 01</Tag>
        <SlideTitle className="mt-6">The <span className="text-primary">Grill Me</span> Challenge</SlideTitle>
        
        <SlideContent delay={0.2} className="mt-8">
          <Card highlight>
            <h3 className="font-bold mb-4">Objective:</h3>
            <p className="text-sm leading-relaxed">
              Give Claude a vague, underspecified project idea and ask it to &quot;Grill Me&quot;.
            </p>
          </Card>
          
          <div className="mt-8 space-y-4">
            <p className="font-mono text-sm text-primary">Try this prompt:</p>
            <CodeBlock>
{`"I want to build a fitness tracking app.
I haven't thought through the details yet.
Please Grill Me on the design and business logic."`}
            </CodeBlock>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="text-xs text-muted-foreground">
              <strong className="text-foreground">Look for:</strong>
              <ul className="mt-2 space-y-1">
                <li>- Missing features</li>
                <li>- Technical constraints</li>
                <li>- User privacy concerns</li>
              </ul>
            </div>
            <div className="text-xs text-muted-foreground">
              <strong className="text-foreground">Why?</strong>
              <ul className="mt-2 space-y-1">
                <li>- Prevents &quot;Vibe Coding&quot;</li>
                <li>- Clarifies requirements</li>
                <li>- Saves hours of rework</li>
              </ul>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 19: EXERCISE 2 - VOCABULARY
// ============================================================
function Exercise2Slide() {
  return (
    <Slide>
      <div className="w-full max-w-4xl">
        <Tag active>EXERCISE 02</Tag>
        <SlideTitle className="mt-6">Speak the <span className="text-primary">Same Language</span></SlideTitle>
        
        <SlideContent delay={0.2} className="mt-8">
          <Card highlight>
            <h3 className="font-bold mb-4">Objective:</h3>
            <p className="text-sm leading-relaxed">
              Create a `vocabulary.md` file for a simple **Library Management System**.
            </p>
          </Card>
          
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="font-bold text-sm">Define these terms:</p>
              <ul className="space-y-2 font-mono text-xs text-muted-foreground">
                <li>- <span className="text-primary">Resource</span> vs Book</li>
                <li>- <span className="text-primary">Patron</span> vs User</li>
                <li>- <span className="text-primary">Loan</span> vs Checkout</li>
                <li>- <span className="text-primary">Hold</span> vs Reservation</li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="font-bold text-sm">Task:</p>
              <p className="text-xs text-muted-foreground">
                Paste your vocabulary into Claude and ask it to generate the 
                TypeScript interfaces for these entities.
              </p>
              <p className="text-xs font-bold text-primary mt-4">
                Verify that Claude uses YOUR terms, not its own!
              </p>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 20: EXERCISE 3 - TDD
// ============================================================
function Exercise3Slide() {
  return (
    <Slide>
      <div className="w-full max-w-4xl">
        <Tag active>EXERCISE 03</Tag>
        <SlideTitle className="mt-6">TDD: <span className="text-primary">Spec via Tests</span></SlideTitle>
        
        <SlideContent delay={0.2} className="mt-8">
          <Card highlight>
            <h3 className="font-bold mb-4">Objective:</h3>
            <p className="text-sm leading-relaxed">
              Write a test for a function that calculates a shopping cart total with discounts.
            </p>
          </Card>
          
          <div className="mt-8">
            <CodeBlock filename="cart.test.ts">
{`it('should apply 20% discount for orders over $100', () => {
  const cart = { items: [{ price: 60 }, { price: 60 }] };
  const total = calculateTotal(cart);
  expect(total).toBe(96); // (120 * 0.8)
})`}
            </CodeBlock>
          </div>

          <div className="mt-8 space-y-4">
            <p className="text-sm">
              <strong className="text-primary">The Challenge:</strong> Give only this test to Claude and say 
              &quot;Make this test pass&quot;.
            </p>
            <p className="text-xs text-muted-foreground">
              Don&apos;t explain the logic in prose. Let the code be the spec.
            </p>
          </div>
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 21: RECAP
// ============================================================
function RecapSlide() {
  return (
    <Slide>
      <div className="w-full max-w-4xl">
        <SlideTitle>
          // <span className="text-primary">RECAP</span>
        </SlideTitle>
        
        <SlideContent delay={0.2} className="mt-12">
          <motion.div 
            className="space-y-4"
            initial="initial"
            animate="animate"
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
          >
            <Step number="01" title="Grill Me" description='Have AI interrogate your specs before coding' index={0} />
            <Step number="02" title="Ubiquitous Language" description="Create a shared vocabulary file" index={1} />
            <Step number="03" title="TDD" description="Write tests first, let AI make them pass" index={2} />
            <Step number="04" title="Deep Modules" description="Simple interface, complex implementation" index={3} />
            <Step number="05" title="Design vs Implementation" description="You: strategist. AI: tactician" index={4} />
          </motion.div>
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 22: DEMO INTRO
// ============================================================
function DemoIntroSlide() {
  return (
    <Slide>
      <div className="w-full max-w-3xl text-center">
        <SlideTitle>
          <span className="text-primary">Demo</span> Time
        </SlideTitle>
        <SlideSubtitle>
          Watching the principles in action
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-12">
          <Terminal title="$ demo --start">
            <TerminalLine prompt="$" command="claude --grill-me 'Build a task manager'" delay={0.1} />
            <TerminalLine prompt="$" command="cat vocabulary.md | claude --context" delay={0.3} />
            <TerminalLine prompt="$" command="claude 'Make this test pass' < task.test.ts" delay={0.5} />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-4 text-primary"
            >
              {">"} Let&apos;s go!
            </motion.div>
          </Terminal>
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 23: RESOURCES
// ============================================================
function ResourcesSlide() {
  return (
    <Slide>
      <div className="w-full max-w-3xl">
        <SlideTitle>
          // <span className="text-primary">RESOURCES</span>
        </SlideTitle>
        
        <SlideContent delay={0.2} className="mt-12 space-y-6">
          <Card>
            <h3 className="font-bold mb-2">Video source</h3>
            <p className="font-mono text-sm text-muted-foreground">
              Matt Pocock - "Software Fundamentals Matter More Than Ever"
            </p>
            <p className="font-mono text-xs text-primary mt-1">
              AI Engineer Conference 2026
            </p>
          </Card>
          
          <Card>
            <h3 className="font-bold mb-2">Recommended Books</h3>
            <ul className="space-y-2 font-mono text-sm text-muted-foreground">
              <li>- A Philosophy of Software Design (John Ousterhout)</li>
              <li>- The Pragmatic Programmer (Hunt & Thomas)</li>
              <li>- Domain-Driven Design (Eric Evans)</li>
            </ul>
          </Card>
          
          <Card>
            <h3 className="font-bold mb-2">Tools</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <Tag>Claude</Tag>
              <Tag>Claude Code</Tag>
              <Tag>v0.dev</Tag>
              <Tag>Cursor</Tag>
            </div>
          </Card>
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 24: CONCLUSION
// ============================================================
function ConclusionSlide() {
  return (
    <Slide>
      <div className="w-full max-w-3xl text-center">
        <SlideTitle>
          Thank You!
        </SlideTitle>
        
        <SlideContent delay={0.3} className="mt-8">
          <Card highlight className="text-left">
            <p className="text-lg">
              AI doesn&apos;t replace fundamentals.
              <br />
              <strong className="text-primary">It amplifies them.</strong>
            </p>
          </Card>
        </SlideContent>

        <SlideContent delay={0.5} className="mt-12">
          <p className="font-mono text-lg font-bold">Abdoullah Ndao</p>
          <p className="font-mono text-sm text-muted-foreground mt-2">
            Questions?
          </p>
        </SlideContent>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 font-mono text-xs text-muted-foreground"
        >
          {">"} process.exit(0)
        </motion.div>
      </div>
    </Slide>
  )
}

// ============================================================
// EXPORT ALL SLIDES
// ============================================================
export const slides = [
  { component: TitleSlide, title: "Introduction" },
  { component: AgendaSlide, title: "Agenda" },
  { component: BeforeAISlide, title: "Development before AI" },
  { component: ProblemsSlide, title: "Persistent Problems" },
  { component: EnterAISlide, title: "AI Changes Everything" },
  { component: ClaudeCapabilitiesSlide, title: "Claude Capabilities" },
  { component: StatsSlide, title: "Measurable Impact" },
  { component: TrapSlide, title: "The Vibe Coding Trap" },
  { component: EntropySlide, title: "Software Entropy" },
  { component: ThesisSlide, title: "The Thesis" },
  { component: PrinciplesIntroSlide, title: "5 Principles" },
  { component: GrillMeSlide, title: "Principle 1: Grill Me" },
  { component: UbiquitousLanguageSlide, title: "Principle 2: Ubiquitous Language" },
  { component: TDDSlide, title: "Principle 3: TDD" },
  { component: DeepModulesSlide, title: "Principle 4: Deep Modules" },
  { component: DesignVsImplementationSlide, title: "Principle 5: Design vs Implementation" },
  { component: ExercisesIntroSlide, title: "Hands-on Exercises" },
  { component: Exercise1Slide, title: "Exercise 1: Grill Me" },
  { component: Exercise2Slide, title: "Exercise 2: Vocabulary" },
  { component: Exercise3Slide, title: "Exercise 3: TDD" },
  { component: RecapSlide, title: "Recap" },
  { component: DemoIntroSlide, title: "Demo" },
  { component: ResourcesSlide, title: "Resources" },
  { component: ConclusionSlide, title: "Conclusion" }
]

// ============================================================
// SPEAKER NOTES
// ============================================================
export const speakerNotes: Record<number, string> = {
  0: \`Welcome to this presentation on Claude AI.

I am Abdoullah Ndao and today we will see how to use AI effectively for software development.

This presentation is based on Matt Pocock's talk at the AI Engineer Conference 2026, titled "Software Fundamentals Matter More Than Ever".\`,

  1: \`Here is what we will cover today.

We'll start by looking at what it was like BEFORE AI - traditional methods and their limits.

Next, we'll see what Claude can concretely do.

Then we'll talk about the trap many fall into - "vibe coding".

Finally, the 5 fundamental principles to truly succeed with AI.

We'll end with some hands-on exercises and a live demo.\`,

  2: \`Before AI, development looked like this:

MANUAL EVERYTHING: Every line of code written by hand. Debugging line by line. Documentation we write ourselves. Stack Overflow open permanently to copy-paste solutions.

SPECIALIZED TEAMS: Experts were needed for each domain. A frontend expert, a backend expert, a DevOps expert, a security expert, a database expert, a testing expert. Knowledge silos everywhere.

LONG CYCLES: Weeks to release an MVP. Months for a feature. Years to master a technology stack.\`,

  3: \`And here are the concrete problems it created:

The entry barrier was huge. 3 to 5 years before being truly productive in a company.

70% of time spent on boilerplate and CRUD. Repetitive code written again and again.

Documentation was always obsolete. You spend your time searching, and it's never up to date.

80% of time in maintenance, only 20% to create something new.

The complexity of frameworks exploding. Each year, more deps, more configs.

And the famous "bus factor = 1" - all the knowledge in a single person's head.\`,

  4: \`Now AI arrives and changes everything. But watch out!

This quote from Matt Pocock perfectly summarizes the situation:

"AI coding tools are at once overhyped AND powerful. Used well, they are extraordinary. Used badly, they will bury you in spaghetti code faster than any human team could."

The question is no longer "should we use AI?" - it's obvious that yes.

The real question is: HOW to use it correctly?\`,

  5: \`So what can Claude really do?

CODE GENERATION: Over 50 languages supported. Best practices are integrated by default.

REASONING: Code analysis, debugging, solving complex problems.

NATURAL DIALOGUE: Clarifying needs, iterating on a solution, constructive feedback.

DOCUMENTATION: Explains complex code, creates docs, answers technical questions.

AUTOMATED TESTING: Unit, integration, E2E. Covers edge cases.

SECURITY: Detects vulnerabilities, suggests fixes, code audit.

REFACTORING: Improves structure, reduces complexity, modernizes legacy code.

RAPID PROTOTYPING: From concept to MVP in hours, no longer weeks.\`,

  6: \`The numbers speak for themselves:

55% faster code writing - measured by GitHub on millions of devs.

2x more pull requests merged per week.

75% less time on repetitive tasks.

40% fewer production bugs.

These numbers come from GitHub Copilot research and the Stack Overflow Developer Survey 2025.\`,

  7: \`But here is the trap many fall into: "Vibe Coding" or "Specs-to-Code".

THE IDEA is seductive: I write a spec in natural language, the AI generates all the code. If there's a bug, I modify the spec and regenerate. I never look at the code. AI is my "intelligent compiler".

THE REALITY is brutal: The first run, it works, the code is OK. The second run, the quality starts to degrade. The third run, it's spaghetti code. Impossible to debug. Impossible to maintain.\`,

  8: \`It's the concept of software entropy, taken from the book "The Pragmatic Programmer":

"Entropy is the idea that things tend towards disaster and collapse. This is exactly how most software systems behave too."

WITHOUT INTENTIONAL DESIGN: Every change that ignores global design = degradation. And with AI, code rots FASTER than ever, because we can generate more code faster.

THE SOLUTION: Software engineering fundamentals are NOT optional. They are MORE IMPORTANT than ever.\`,

  9: \`And here is Matt Pocock's central thesis:

The developers who SUCCEED with AI aren't those who delegate everything to AI.

Nor are they those who use nothing at all.

They are those who APPLY software engineering fundamentals WITH AI.

AI amplifies everything - the good AND the bad. If you have good practices, AI amplifies them. If you have bad practices, AI amplifies them too.\`,

  10: \`Here are the 5 principles Matt Pocock recommends:

1. GRILL ME - Have AI interrogate your specs
2. UBIQUITOUS LANGUAGE - Create a shared vocabulary
3. TDD - Tests first, AI makes them pass
4. DEEP MODULES - Simple interface, complex implementation
5. DESIGN VS IMPLEMENTATION - You: strategist. AI: tactician

We will see each in detail.\`,

  11: \`First principle: GRILL ME

Matt Pocock says: "I give Claude a rough spec, then say 'Grill me'. I want it to ask me hard questions about everything I haven't thought through."

The idea is to reach a "shared conceptual design" BEFORE coding. Too many devs rush into code without thinking about edge cases.

EXAMPLE: You say "I want a todo app". Claude will ask: Multi-user or single-user? Local persistence or cloud? Deadlines, priorities, categories? Notifications? Mobile, desktop, both?

These questions FORCE clarification of the design BEFORE coding.\`,

  12: \`Second principle: UBIQUITOUS LANGUAGE

It comes from Domain-Driven Design by Eric Evans. The idea is to create a common vocabulary that everyone uses - devs, product, business, AND AI.

Matt Pocock says: "I create a vocabulary.md file that defines every term in my domain. Claude references it and uses consistent names everywhere."

EXAMPLE: We define what a Workspace, a Member, a Task, a Sprint are. We define business rules: a Task belongs to only one Workspace, a Member can have multiple Tasks, etc.

When Claude has this context, the generated code is CONSISTENT.\`,

  13: \`Third principle: TDD with AI

Matt Pocock says: "Write the test first. The test IS the spec. Then tell Claude to make it pass. Instant feedback loop."

It's powerful because:
1. The test defines EXACTLY the expected behavior
2. Claude has a clear and measurable goal
3. You know immediately if it works or not

EXAMPLE: You write a test that verifies the password is hashed before being saved. Then you tell Claude: "Make this test pass". Claude generates the implementation.\`,

  14: \`Fourth principle: DEEP MODULES

It comes from the book "A Philosophy of Software Design" by John Ousterhout.

The idea: A deep module does a lot with a simple interface. It's easy to test and easy for AI to understand.

SHALLOW MODULE: sendEmail with 20 parameters - to, from, subject, body, cc, bcc, attachments, replyTo, headers... It's hard to test, and AI struggles to use it correctly.

DEEP MODULE: emailService.send(notification) - 1 clear parameter. Easy to test. AI understands immediately.\`,

  15: \`Fifth principle: DESIGN VS IMPLEMENTATION

Matt Pocock says: "You are the strategist. AI is the tactician. You decide WHAT to build and WHY. AI finds HOW."

YOU DECIDE: Global architecture, technology choices, public interfaces, critical business rules.

AI EXECUTES: Implementation details, writing tests, boilerplate and CRUD, guided refactoring.

Never let AI take architecture decisions. That's YOUR job.\`,

  16: \`Now, let's practice these principles! 

We have prepared 3 exercises for you to try right now in your IDE or Claude interface.

Exercise 1 will focus on 'Grilling' your ideas.
Exercise 2 will focus on defining a Ubiquitous Language.
Exercise 3 will focus on TDD as a specification tool.\`,

  17: \`Exercise 1: GRILL ME

Take a vague idea you've had for a side project. Maybe a fitness tracker, a recipe manager, or a budget app.

Paste it into Claude and simply say: 'Grill me on this design'.

Observe the questions it asks. How many of them had you already considered? How many change your approach?\`,

  18: \`Exercise 2: VOCABULARY

For a Library system, define the difference between a 'Loan' and a 'Checkout'. 

Write it down in a markdown block, then ask Claude to generate a database schema based on that specific vocabulary.

See if it respects your naming conventions or falls back to generic defaults.\`,

  19: \`Exercise 3: TDD

Write a failing test for a 'calculateDiscount' function that gives 10% off to 'VIP' customers and 20% off to 'SUPER_VIP' customers.

Pass the test to Claude and say 'Make it pass'. 

Check if the implementation is clean and respects the logic defined in your test.\`,

  20: \`Let's recap the 5 principles:

1. GRILL ME - Have AI interrogate your specs before coding
2. UBIQUITOUS LANGUAGE - Create a shared vocabulary in a file
3. TDD - Write tests first, AI makes them pass
4. DEEP MODULES - Simple interface, complex implementation
5. DESIGN VS IMPLEMENTATION - You: strategist. AI: tactician

Apply these 5 principles and you will see a huge difference in the quality of generated code.\`,

  21: \`Now, let's go for the demo!

I will show you these principles in action with Claude.

We will build something together applying:
- "Grill Me" to clarify specs
- A vocabulary file for context
- TDD for critical features\`,

  22: \`Here are some resources to go further:

VIDEO SOURCE: Matt Pocock - "Software Fundamentals Matter More Than Ever" - AI Engineer Conference 2026

RECOMMENDED BOOKS:
- "A Philosophy of Software Design" by John Ousterhout - for deep modules
- "The Pragmatic Programmer" by Hunt & Thomas - for software entropy
- "Domain-Driven Design" by Eric Evans - for ubiquitous language

TOOLS: Claude, Claude Code, v0.dev, Cursor\`,

  23: \`To conclude:

AI doesn't replace fundamentals. It AMPLIFIES them.

If you have good dev practices, AI will make you 10x more productive.

If you have bad practices, AI will bury you 10x faster.

Thank you very much! Any questions?\`
}
