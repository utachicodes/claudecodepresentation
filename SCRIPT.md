# PRESENTATION SCRIPT
## Claude AI: Discovery, Capabilities & Demonstration
### Presenter: Abdoullah Ndao

---

## CONTROLS

| Key | Action |
|-----|--------|
| `SPACE` or `→` | Next slide |
| `←` | Previous slide |
| `N` | Show/hide notes |
| `M` | Slide menu |
| `HOME` | First slide |
| `ESC` | Close panels |

---

## SLIDE 1: INTRODUCTION
**Duration: 1 minute**

Welcome to this presentation on Claude AI.

I am Abdoullah Ndao and today we will see how to use AI effectively for software development.

This presentation is based on Matt Pocock's talk at the AI Engineer Conference 2026, titled "Software Fundamentals Matter More Than Ever".

It's a talk that truly changed my vision of how to use AI for coding.

---

## SLIDE 2: AGENDA
**Duration: 1 minute**

Here is what we will cover today.

We'll start by looking at what it was like BEFORE AI - traditional methods and their limits.

Next, we'll see what Claude can concretely do - its real capabilities, not the marketing.

Then we'll talk about the trap many fall into - the famous "vibe coding".

And finally, the 5 fundamental principles to truly succeed with AI. This is the heart of the presentation.

We'll also have some hands-on exercises to practice what we learn.

We'll end with a live demo to see all this in action.

---

## SLIDE 3: DEVELOPMENT BEFORE AI
**Duration: 2 minutes**

Before AI, development looked like this:

**MANUAL EVERYTHING:** Every line of code written by hand. Debugging line by line with print statements everywhere. Documentation we write ourselves - when we have time. Stack Overflow open permanently to copy-paste solutions.

**SPECIALIZED TEAMS:** Experts were needed for each domain. A frontend expert who doesn't touch the backend. A backend expert who doesn't understand DevOps. A security expert. A database expert. A testing expert. Knowledge silos everywhere. And if someone leaves, it's a disaster.

**LONG CYCLES:** Weeks to release an MVP. Months for a somewhat complex feature. Years to truly master a technology stack. We spent more time learning than producing.

---

## SLIDE 4: PERSISTENT PROBLEMS
**Duration: 2-3 minutes**

And here are the concrete problems it created:

**ENTRY BARRIER:** 3 to 5 years before being truly productive in a company. That's huge. It means for 3 years, you're learning on the job, not truly contributing to value.

**70% REPETITIVE:** 70% of time spent on boilerplate and CRUD. Repetitive code written again and again. Create, Read, Update, Delete. The same patterns, over and over.

**OBSOLETE DOCUMENTATION:** You spend your time searching for doc, and when you find it, it's never up to date. The doc says one thing, the code does another.

**80% MAINTENANCE:** 80% of time in maintenance, only 20% to create something new. We spend our time fixing bugs and maintaining legacy, not innovating.

**EXPONENTIAL COMPLEXITY:** Each year, more dependencies, more configurations, more frameworks. The stack gets heavier constantly.

**BUS FACTOR = 1:** All the knowledge in a single person's head. If that person leaves, we're in trouble.

---

## SLIDE 5: AI CHANGES EVERYTHING
**Duration: 2 minutes**

Now AI arrives and changes everything. But watch out!

This quote from Matt Pocock perfectly summarizes the situation:

> "AI coding tools are at once overhyped AND powerful. Used well, they are extraordinary. Used badly, they will bury you in spaghetti code faster than any human team could."

That's the thing. AI is an amplifier. It amplifies the good AND the bad.

The question is no longer "should we use AI?" - it's obvious that yes. Those who don't use AI will be left behind.

The real question is: **HOW to use it correctly?**

---

## SLIDE 6: WHAT CLAUDE CAN DO
**Duration: 2-3 minutes**

So what can Claude really do? Not the marketing, the real capabilities:

**CODE GENERATION:** Over 50 languages supported. Python, TypeScript, Rust, Go, Java... Best practices are integrated by default.

**REASONING:** Analysis of existing code, debugging of complex problems, bug resolution. Claude can understand your codebase and find solutions.

**NATURAL DIALOGUE:** You can clarify your needs by chatting. Iterate on a solution. Receive constructive feedback.

**DOCUMENTATION:** Claude can explain complex code, create documentation, answer technical questions.

**AUTOMATED TESTING:** Unit, integration, E2E. Claude covers edge cases you haven't thought of.

**SECURITY:** Detection of vulnerabilities, suggestions for corrections, code audit.

**REFACTORING:** Improvement of structure, reduction of complexity, modernization of legacy code.

**RAPID PROTOTYPING:** From concept to MVP in hours, no longer weeks.

---

## SLIDE 7: MEASURABLE IMPACT
**Duration: 1 minute**

The numbers speak for themselves:

- **55%** faster code writing - measured by GitHub on millions of developers
- **2x** more pull requests merged per week
- **75%** less time on repetitive tasks
- **40%** fewer production bugs

These numbers come from GitHub Copilot research and the Stack Overflow Developer Survey 2025.

It's not nothing. But watch out - these gains are for those who use AI CORRECTLY.

---

## SLIDE 8: THE TRAP OF VIBE CODING
**Duration: 3 minutes**

But here is the trap many fall into: "Vibe Coding".

**THE IDEA** is seductive:
- I write a spec in natural language
- AI generates all the code automatically
- If there's a bug, I modify the spec and regenerate
- I never look at the generated code
- AI is my "intelligent compiler"

Seems great right? Just describe what you want and AI does everything.

**THE REALITY** is brutal:
- The first run, it works, the code is OK
- The second run, the quality starts to degrade
- The third run, it's spaghetti code
- Impossible to debug
- Impossible to maintain

Why? Because each regeneration loses context. AI doesn't understand the global design.

---

## SLIDE 9: SOFTWARE ENTROPY
**Duration: 2 minutes**

It's the concept of software entropy, taken from the book "The Pragmatic Programmer":

> "Entropy is the idea that things tend towards disaster and collapse. This is exactly how most software systems behave too."

**WITHOUT INTENTIONAL DESIGN:** Every change that ignores global design = degradation. Code becomes more and more chaotic over time.

And with AI, code rots **FASTER** than ever. Why? Because we can generate more code faster. More code = more entropy if it's not structured.

**THE SOLUTION:** Software engineering fundamentals are NOT optional. They are MORE IMPORTANT than ever.

---

## SLIDE 10: MATT POCOCK'S THESIS
**Duration: 2 minutes**

And here is Matt Pocock's central thesis:

The developers who **SUCCEED** with AI aren't those who delegate everything to AI.

Nor are they those who use nothing at all, who refuse AI on principle.

They are those who **APPLY** software engineering fundamentals **WITH** AI.

AI amplifies everything - the good AND the bad:
- If you have good practices, AI amplifies them. You are 10x more productive.
- If you have bad practices, AI amplifies them too. You create 10x more technical debt.

---

## SLIDE 11: 5 FUNDAMENTAL PRINCIPLES
**Duration: 1 minute**

Here are the 5 principles Matt Pocock recommends:

1. **GRILL ME** - Have AI interrogate your specs
2. **UBIQUITOUS LANGUAGE** - Create a shared vocabulary
3. **TDD** - Tests first, AI makes them pass
4. **DEEP MODULES** - Simple interface, complex implementation
5. **DESIGN VS IMPLEMENTATION** - You: strategist. AI: tactician

We will see each in detail.

---

## SLIDE 12: PRINCIPLE 1 - GRILL ME
**Duration: 3 minutes**

First principle: **GRILL ME**

Matt Pocock says:
> "I give Claude a rough spec, then say 'Grill me'. I want it to ask me hard questions about everything I haven't thought through."

The idea is to reach a "shared conceptual design" BEFORE coding. Too many devs rush into code without having thought about edge cases.

**EXAMPLE:**

You say: "I want a todo app"

Claude will ask:
- Multi-user or single-user?
- Local persistence or cloud?
- Deadlines, priorities, categories?
- Push notifications?
- Mobile, desktop, or both?

These questions **FORCE** clarification of the design **BEFORE** coding. It's 10 minutes of reflection that save hours of refactoring.

---

## SLIDE 13: PRINCIPLE 2 - UBIQUITOUS LANGUAGE
**Duration: 3 minutes**

Second principle: **UBIQUITOUS LANGUAGE**

It comes from Domain-Driven Design by Eric Evans. The idea is to create a common vocabulary that everyone uses - devs, product, business, AND AI.

Matt Pocock says:
> "I create a vocabulary.md file that defines every term in my domain. Claude references it and uses consistent names everywhere."

**EXAMPLE:**

```markdown
## Domain Terms

**Workspace**: A team's workspace
**Member**: User belonging to a workspace  
**Task**: Unit of work with status and assignee

## Business Rules

- A Task belongs to only one Workspace
- A Member can have multiple Tasks
```

When Claude has this context, the generated code is **CONSISTENT**. No more confusion.

---

## SLIDE 14: PRINCIPLE 3 - TDD
**Duration: 3 minutes**

Third principle: **TDD with AI**

Matt Pocock says:
> "Write the test first. The test IS the spec. Then tell Claude to make it pass. Instant feedback loop."

It's powerful because:
1. The test defines **EXACTLY** the expected behavior
2. Claude has a clear and measurable goal
3. You know immediately if it works or not

**EXAMPLE:**

```typescript
it('should hash password before saving', async () => {
  const user = await createUser({
    email: 'test@example.com',
    password: 'plain123'
  })
  
  expect(user.password).not.toBe('plain123')
})

// PROMPT: "Make this test pass"
```

Claude knows exactly what it has to do.

---

## SLIDE 15: PRINCIPLE 4 - DEEP MODULES
**Duration: 3 minutes**

Fourth principle: **DEEP MODULES**

It comes from the book "A Philosophy of Software Design" by John Ousterhout.

The idea: A deep module does a lot with a simple interface.

**SHALLOW MODULE (bad):**
```
sendEmail(to, from, subject, body, cc, bcc, attachments, replyTo, headers...)
```
20 parameters. Hard to test. AI struggles.

**DEEP MODULE (good):**
```
emailService.send(notification)
```
1 clear parameter. Easy to test. AI understands immediately.

The interface hides the complexity.

---

## SLIDE 16: PRINCIPLE 5 - DESIGN VS IMPLEMENTATION
**Duration: 3 minutes**

Fifth principle: **DESIGN VS IMPLEMENTATION**

Matt Pocock says:
> "You are the strategist. AI is the tactician. You decide WHAT to build and WHY. AI finds HOW."

**YOU DECIDE:**
- Global architecture of the system
- Technology choices
- Public interfaces
- Critical business rules

**AI EXECUTES:**
- Implementation of details
- Writing tests
- Boilerplate and CRUD
- Guided refactoring by you

Never let AI take architecture decisions. That's **YOUR** job.

---

## SLIDE 17: HANDS-ON EXERCISES
**Duration: 15-20 minutes**

Now, let's practice! We have 3 exercises to put these principles into action.

**Exercise 1: Grill Me**
Challenge Claude with a vague project idea. See if you can reach a better design before writing a single line of code.

**Exercise 2: Vocabulary**
Define a domain for a Library system. Test if Claude respects your terms when generating code.

**Exercise 3: TDD**
Write a failing test for a discount calculator. Let Claude make it pass.

Take your time with these. The goal is to feel the difference in the AI's output when you provide better structure.

---

## SLIDE 18: RECAP
**Duration: 1-2 minutes**

Let's recap the 5 principles:

1. **GRILL ME** - Have AI interrogate your specs before coding
2. **UBIQUITOUS LANGUAGE** - Create a shared vocabulary in a file
3. **TDD** - Write tests first, AI makes them pass
4. **DEEP MODULES** - Simple interface, complex implementation
5. **DESIGN VS IMPLEMENTATION** - You: strategist. AI: tactician

Apply these 5 principles and you will see a huge difference.

---

## SLIDE 19: DEMO
**Duration: 10-20 minutes**

Now, let's go for the demo!

I will show you these principles in action with Claude.

We will build something together applying:
- "Grill Me" to clarify specs
- A vocabulary file for context
- TDD for critical features

[DO THE LIVE DEMO]

---

## SLIDE 20: RESOURCES
**Duration: 1 minute**

Here are some resources to go further:

**VIDEO SOURCE:**
Matt Pocock - "Software Fundamentals Matter More Than Ever"
AI Engineer Conference 2026

**BOOKS:**
- "A Philosophy of Software Design" - John Ousterhout
- "The Pragmatic Programmer" - Hunt & Thomas
- "Domain-Driven Design" - Eric Evans

**TOOLS:**
Claude, Claude Code, v0.dev, Cursor

---

## SLIDE 21: CONCLUSION
**Duration: 1 minute**

To conclude:

**AI doesn't replace fundamentals. It AMPLIFIES them.**

If you have good dev practices, AI will make you 10x more productive.

If you have bad practices, AI will bury you 10x faster.

Thank you very much for your attention!

Any questions?

---

## TOTAL TIMING

| Section | Duration |
|---------|----------|
| Intro and context | 10-12 min |
| 5 Principles | 15-18 min |
| Exercises | 15-20 min |
| Recap and Demo | 15-25 min |
| Conclusion and Q&A | 5-10 min |
| **TOTAL** | **60-85 min** |

## TIPS

1. Keep a steady pace on the first slides
2. Take your time on the principles - they are the heart
3. Prepare the exercises and demo in advance
4. Have a backup if the demo doesn't work
5. Leave time for questions
