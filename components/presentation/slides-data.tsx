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
import { motion, AnimatePresence } from "framer-motion"

// ============================================================
// SLIDE 1: TITRE & BIENVENUE
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
              Intelligence Artificielle
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              & Creativite
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
            Une Nouvelle Renaissance Artistique?
          </motion.h2>

          <motion.p 
            className="mt-6 text-cream/70 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            L&apos;IA au service de la jeunesse, de la culture et de la litterature.
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
              Appuyez sur [ESPACE] pour commencer
            </motion.p>
          </motion.div>
        </motion.div>
      </CenteredContent>
    </Slide>
  )
}

// ============================================================
// SLIDE 2: QU'EST-CE QUE L'IA ?
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
          Qu&apos;est-ce que <span className="text-gold gold-underline">l&apos;IA</span> ?
        </SlideTitle>
        <SlideSubtitle>
          Avant de parler de creativite, comprenons d&apos;abord de quoi on parle.
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-10">
          <SplitLayout
            left={
              <Card>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-semibold">L&apos;Intelligence Artificielle (IA)</h3>
                  <p className="text-sm leading-relaxed mb-3">
                    L&apos;IA, c&apos;est un programme d&apos;ordinateur qui a lu des millions de livres, 
                    d&apos;articles et de sites web ecrits par des humains.
                  </p>
                  <p className="text-sm leading-relaxed mb-3">
                    Elle n&apos;a pas de cerveau. Elle ne ressent rien. 
                    Elle est tres douee pour trouver des patterns et les copier.
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Exemple : Vous tapez &ldquo;Raconte-moi une blague sur les chats&rdquo; 
                    et l&apos;IA en invente une, car elle en a deja lu des milliers.
                  </p>
                </div>
              </Card>
            }
            right={
              <Card>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-semibold text-gold">Les Algorithmes</h3>
                  <p className="text-sm leading-relaxed mb-3">
                    Un algorithme, c&apos;est simplement une recette. 
                    Une liste d&apos;etapes a suivre, comme &ldquo;D&apos;abord fais ca, puis fais ca&rdquo;.
                  </p>
                  <p className="text-sm leading-relaxed mb-3">
                    Ton fil TikTok, les videos YouTube, les playlists Spotify, 
                    tout ca utilise des algorithmes pour decider ce qu&apos;on te montre.
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    L&apos;algorithme regarde ce que tu aimes, puis te donne plus de la meme chose. 
                    C&apos;est pour ca que tu ne t&apos;arretes jamais!
                  </p>
                </div>
              </Card>
            }
          />
        </SlideContent>

        <SlideContent delay={0.6} className="mt-8">
          <Card className="max-w-3xl mx-auto">
            <p className="text-sm leading-relaxed text-center">
              <strong className="text-gold">A retenir :</strong> L&apos;IA est un outil, comme un crayon ou un pinceau. 
              Elle n&apos;a pas d&apos;idees a elle. Elle copie ce que les humains ont fait avant.
            </p>
          </Card>
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 3: L'ALGORITHME EN DETAIL
// ============================================================
function AlgorithmDeepDiveSlide() {
  return (
    <Slide variant="light">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-3"
        >
          <Tag>Comprendre</Tag>
        </motion.div>
        
        <SlideTitle>
          Comment Marche un <span className="text-gold gold-underline">Algorithme</span> ?
        </SlideTitle>
        <SlideSubtitle>
          Le secret derriere ce que tu vois sur ton telephone
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-8">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Card>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-semibold text-gold">Etape 1 : Il t&apos;observe</h3>
                  <p className="text-sm leading-relaxed mb-3">
                    L&apos;algorithme regarde tout ce que tu fais : les videos que tu regardes, 
                    les likes que tu donnes, le temps que tu passes sur chaque post.
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground italic">
                    Imagine un ami qui note tout ce que tu aimes, sauf que cet ami est un robot 
                    et qu&apos;il ne dort jamais.
                  </p>
                </div>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Card>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-semibold text-gold">Etape 2 : Il apprend</h3>
                  <p className="text-sm leading-relaxed mb-3">
                    Il compare tes gouts a ceux de millions d&apos;autres personnes. 
                    &ldquo;Les gens qui aiment ca aiment aussi ca...&rdquo;
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground italic">
                    C&apos;est comme quand ton ami te dit &ldquo;Si t&apos;aimes ce film, 
                    tu vas adorer celui-la&rdquo;, mais en version robot.
                  </p>
                </div>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Card>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-semibold text-gold">Etape 3 : Il choisit pour toi</h3>
                  <p className="text-sm leading-relaxed mb-3">
                    L&apos;algorithme decide ce que tu vas voir en premier. 
                    Ce qui est en haut de ton fil n&apos;est pas le plus important, 
                    c&apos;est le plus &ldquo;engageant&rdquo; pour te garder scrolle.
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground italic">
                    C&apos;est comme un magasin qui met les bonbons a hauteur des yeux d&apos;enfant.
                  </p>
                </div>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Card>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-semibold text-gold">Etape 4 : Il cree ta bulle</h3>
                  <p className="text-sm leading-relaxed mb-3">
                    Petit a petit, tu ne vois que ce que l&apos;algorithme pense que tu aimes. 
                    Tu n&apos;es plus jamais expose a des idees differentes.
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground italic">
                    Tu crois que tu choisis, mais c&apos;est lui qui choisit pour toi. 
                    Comme un poisson dans un bocal qui croit que le bocal, c&apos;est le monde entier.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </SlideContent>

        <SlideContent delay={0.8} className="mt-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="text-sm text-muted-foreground italic">
              L&apos;algorithme ne travaille pas pour toi. Il travaille pour l&apos;application, 
              qui veut que tu restes le plus longtemps possible.
            </p>
          </motion.div>
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 4: L'ILLUSION DU RIVAL CREATIF
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
          <Tag>Partie I</Tag>
        </motion.div>
        
        <SlideTitle>
          L&apos;IA peut-elle <span className="text-gold gold-underline">remplacer</span> la creativite humaine ?
        </SlideTitle>
        <SlideSubtitle>
          Est-ce que ton ordinateur secretement fait mieux que toi? Verifions.
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-10">
          <SplitLayout
            left={
              <CompareBox
                title="Ce que l'IA peut faire"
                items={[
                  "Lire des millions de livres en quelques secondes",
                  "Ecrire des poemes qui sonnent bien",
                  "Dessiner dans n'importe quel style",
                  "Copier les patterns de l'art ancien",
                  "Disponible 24h/24, ne se fatigue jamais"
                ]}
                type="neutral"
              />
            }
            right={
              <CompareBox
                title="Ce que les humains peuvent faire"
                items={[
                  "Ressentir des emotions et les exprimer",
                  "Creer quelque chose de jamais vu",
                  "Faire des erreurs qui deviennent belles",
                  "Comprendre la douleur, la joie et l'amour",
                  "Choisir de casser les regles a propos"
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
              L&apos;IA copie. Les humains imaginent. Voila la difference.
            </p>
          </motion.div>
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 5: LA CULTURE JEUNE - LA GENERATION IA
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
          <Tag>Partie II</Tag>
        </motion.div>

        <SlideTitle>
          Les Jeunes : <span className="text-gold gold-underline">La Generation IA</span>
        </SlideTitle>
        <SlideSubtitle>
          Tes grands-parents ont appris a coder. Tes parents ont appris a Google. Toi, tu as appris a demander a l&apos;IA.
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-10">
          <TileLayout columns={3}>
            <Tile title="Une Nouvelle Facon de Creer" index={0}>
              <p className="mb-3">
                Les jeunes ne se contentent plus de regarder et d&apos;ecouter. 
                Ils <HighlightText>creent des choses avec l&apos;IA en direct</HighlightText>.
              </p>
              <p className="text-muted-foreground text-xs">
                Un gamin a Dakar peut produire de la musique pro depuis sa chambre avec juste son telephone.
              </p>
            </Tile>
            
            <Tile title="L&apos;Art pour Tous" index={1}>
              <p className="mb-3">
                Avant, il fallait des outils chers pour faire de l&apos;art. 
                Maintenant <HighlightText>n&apos;importe qui avec un telephone peut creer</HighlightText>.
              </p>
              <p className="text-muted-foreground text-xs">
                Fini &ldquo;il faut de l&apos;argent pour etre artiste&rdquo; - juste ton imagination.
              </p>
            </Tile>
            
            <Tile title="Des Histoires de Partout" index={2}>
              <p className="mb-3">
                L&apos;IA aide les gens des petites villes et des pays eloignes 
                <HighlightText>a partager leurs histoires avec le monde entier</HighlightText>.
              </p>
              <p className="text-muted-foreground text-xs">
                Un ecrivain d&apos;un village peut maintenant toucher des lecteurs a Paris, Tokyo ou New York.
              </p>
            </Tile>
          </TileLayout>
        </SlideContent>

        <SlideContent delay={0.6} className="mt-8">
          <Quote
            text="Les jeunes d'aujourd'hui ne se contentent pas de regarder la culture se faire. Ils la construisent, avec l'IA comme boite a outils."
            author="Rapport UNESCO sur la Culture Numerique, 2025"
          />
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 6: LA LITTERATURE
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
          <Tag>Partie III</Tag>
        </motion.div>

        <SlideTitle>
          Les Livres & l&apos;Ecriture avec <span className="text-gold gold-underline">l&apos;IA</span>
        </SlideTitle>
        <SlideSubtitle>
          Quand la page blanche te fait peur, l&apos;IA peut etre ton coequipier
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-10">
          <TileLayout columns={3}>
            <Tile title="Adieu le Blocage de l&apos;Ecrivain" index={0}>
              <ul className="space-y-2">
                <ListItem>Tu es bloque? L&apos;IA te donne des idees</ListItem>
                <ListItem>Il te faut un personnage? L&apos;IA t&apos;aide a le construire</ListItem>
                <ListItem>Il te faut un rebondissement? L&apos;IA te propose des surprises</ListItem>
              </ul>
            </Tile>
            
            <Tile title="Parle Toutes les Langues" index={1}>
              <ul className="space-y-2">
                <ListItem>Traduis une histoire en 50 langues en un instant</ListItem>
                <ListItem>Des lecteurs partout peuvent profiter de ton travail</ListItem>
                <ListItem>Fini les barrieres linguistiques</ListItem>
              </ul>
            </Tile>
            
            <Tile title="Des Histoires qui Repondent" index={2}>
              <ul className="space-y-2">
                <ListItem>Des livres ou TU choisis ce qui se passe ensuite</ListItem>
                <ListItem>L&apos;histoire change selon tes choix</ListItem>
                <ListItem>Comme un jeu, mais avec des mots</ListItem>
              </ul>
            </Tile>
          </TileLayout>
        </SlideContent>

        <SlideContent delay={0.5} className="mt-8">
          <Card className="max-w-4xl mx-auto border-gold">
            <div className="flex items-start gap-4">
              <div>
                <h4 className="font-serif text-lg font-semibold mb-2">L&apos;idee Principale</h4>
                <p className="text-sm leading-relaxed">
                  L&apos;IA n&apos;ecrit pas <em>pour</em> toi, elle ecrit <em>avec</em> toi. 
                  Tu es le patron. L&apos;IA est l&apos;assistant.
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
// SLIDE 7: LE PIEGE DE L'ALGORITHME
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
          <Tag variant="warning">Attention</Tag>
        </motion.div>

        <SlideTitle>
          Le <span className="text-gold gold-underline">Piege</span> de l&apos;Algorithme
        </SlideTitle>
        <SlideSubtitle>
          L&apos;application sait ce que tu aimes. Mais est-ce qu&apos;elle sait ce qui est bon pour toi?
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-10">
          <div className="space-y-6">
            <WarningBox>
              <h4 className="font-serif text-lg font-semibold mb-2">Le Piege de Ne Voir Qu&apos;Une Seule Chose</h4>
              <p className="text-sm leading-relaxed">
                L&apos;algorithme te montre plus de ce que tu aimes deja. 
                Tu ne vois jamais de nouvelles idees, d&apos;opinions differentes, ou d&apos;art bizarre. 
                Tu vis dans une bulle sans le savoir.
              </p>
            </WarningBox>

            <WarningBox>
              <h4 className="font-serif text-lg font-semibold mb-2">Tout Commence a Se Ressembler</h4>
              <p className="text-sm leading-relaxed">
                Quand l&apos;IA fait de l&apos;art pour tout le monde, elle fait le meme genre d&apos;art. 
                Sur, ennuyeux et previsible. Le truc bizarre, fou et beau? Il est pousse de cote.
              </p>
            </WarningBox>

            <Card className="border-gold">
              <div className="flex items-start gap-4">
                <div>
                  <h4 className="font-serif text-lg font-semibold mb-2">Comment S&apos;En Sortir</h4>
                  <p className="text-sm leading-relaxed">
                    Tu as le pouvoir. Cherche de la musique bizarre. Lis des livres etranges. 
                    Regarde des choses que l&apos;algorithme ne te recommande pas. 
                    <strong> Ton gout est ta rebellion.</strong>
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
// SLIDE 8: CE QUI NOUS REND SPECIAUX
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
          <Tag>Partie IV</Tag>
        </motion.div>

        <SlideTitle>
          Ce Qui Nous Rend <span className="text-gold gold-underline">Speciaux</span>
        </SlideTitle>
        <SlideSubtitle>
          Tes erreurs, tes idees bizarres, tes sentiments - ca, c&apos;est ton superpouvoir
        </SlideSubtitle>
        
        <SlideContent delay={0.3} className="mt-10">
          <SplitLayout
            left={
              <Card>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-semibold">Les Erreurs Sont Belles</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    L&apos;IA fait les choses parfaitement a chaque fois. Mais le vrai art? 
                    Il vient des <HighlightText>accidents heureux</HighlightText>.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <ListItem>Une tache de peinture devient un chef-d&apos;oeuvre</ListItem>
                    <ListItem>Une note fausse devient une nouvelle melodie</ListItem>
                    <ListItem>Une faute d&apos;orthographe devient la meilleure partie d&apos;un poeme</ListItem>
                  </ul>
                </div>
              </Card>
            }
            right={
              <Card>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-semibold text-gold">Ton Gout Compte</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    Quand tout le monde peut faire de l&apos;art avec l&apos;IA, 
                    la personne qui <HighlightText>choisit ce qui est bon</HighlightText> devient le heros.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <ListItem>Le DJ qui choisit la bonne chanson</ListItem>
                    <ListItem>Le curateur qui dit &ldquo;ca compte&rdquo;</ListItem>
                    <ListItem>L&apos;editeur qui fait briller le texte</ListItem>
                  </ul>
                </div>
              </Card>
            }
          />
        </SlideContent>

        <SlideContent delay={0.5} className="mt-8">
          <Quote
            text="Dans un monde plein d'art fait par l'IA, la personne avec un bon gout devient le createur le plus precieux de tous."
            author="Ted Chiang"
            source="Exhalation: Nouvelles"
          />
        </SlideContent>
      </div>
    </Slide>
  )
}

// ============================================================
// SLIDE 9: CONCLUSION
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
            La <span className="text-gold">Grande Lecon</span>
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
              &ldquo;L&apos;IA ne remplacera pas les createurs. <br />
              <motion.span 
                className="text-gold font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Les createurs qui utilisent l&apos;IA
              </motion.span> remplaceront ceux qui ne le font pas.&rdquo;
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
                Utilise l&apos;IA pour t&apos;aider. Ne laisse pas elle te remplacer. <br />
                Cree avec <span className="text-gold font-semibold">courage et coeur</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
              className="mt-16"
            >
              <p className="text-cream font-serif text-4xl font-semibold mb-3">Merci!</p>
              <p className="text-cream/70 text-xl italic">Merci de votre attention.</p>
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
  { component: TitleSlide, title: "Titre" },
  { component: WhatIsAISlide, title: "Qu'est-ce que l'IA?" },
  { component: AlgorithmDeepDiveSlide, title: "Comment marche un algorithme?" },
  { component: CreativeRivalSlide, title: "L'IA peut-elle nous remplacer?" },
  { component: YouthCultureSlide, title: "La Generation IA" },
  { component: LiteratureSlide, title: "Ecrire avec l'IA" },
  { component: AlgorithmicCageSlide, title: "Le Piege de l'Algorithme" },
  { component: HumanCoreSlide, title: "Ce Qui Nous Rend Speciaux" },
  { component: ConclusionSlide, title: "Conclusion" }
]

// ============================================================
// SPEAKER NOTES
// ============================================================
export const speakerNotes: Record<number, string> = {
  0: `Bienvenue a tous!

Je m'appelle Abdoullah Ndao. Aujourd'hui, on va parler de quelque chose de tres excitant: comment les ordinateurs qui pensent, qu'on appelle l'Intelligence Artificielle, changent la facon dont on fait de l'art, on ecrit des histoires et on fait de la musique.

Ce n'est pas un cours ennuyeux. C'est une conversation amusante sur le futur.

On a des gens de tous les ages ici aujourd'hui, des jeunes aux adultes. Alors je vais garder les choses simples et claires.

Commençons!`,

  1: `D'abord, comprenons ce que sont l'IA et les algorithmes.

IA veut dire Intelligence Artificielle. C'est un programme d'ordinateur qui a lu des millions de livres, d'articles et de sites web. Il trouve des patterns, puis les copie. Il n'a pas de cerveau. Il ne ressent rien. Il trouve juste des patterns et les copie.

Pensez a ca comme ca: si vous lisiez 10 000 blagues sur les chats, vous pourriez en inventer une aussi. L'IA fait la meme chose, mais avec des millions de choses en meme temps.

Les algorithmes, c'est comme des recettes. Des etapes a suivre. Ton fil TikTok utilise un algorithme. YouTube aussi. Il regarde ce que tu aimes, puis te donne plus de la meme chose.

La chose la plus importante a retenir: L'IA est un outil, comme un crayon ou un pinceau. Elle n'a pas d'idees a elle. Elle copie ce que les humains ont fait avant.`,

  2: `Maintenant, entrons dans le vif du sujet: comment un algorithme fonctionne exactement?

ETAPE 1: Il t'observe. L'algorithme regarde tout ce que tu fais. Les videos que tu regardes, les likes que tu donnes, le temps que tu passes sur chaque post. Imagine un ami qui note tout ce que tu aimes, sauf que cet ami est un robot et qu'il ne dort jamais.

ETAPE 2: Il apprend. Il compare tes gouts a ceux de millions d'autres personnes. "Les gens qui aiment ca aiment aussi ca..." C'est comme quand ton ami te dit "Si t'aimes ce film, tu vas adorer celui-la", mais en version robot.

ETAPE 3: Il choisit pour toi. L'algorithme decide ce que tu vas voir en premier. Ce qui est en haut de ton fil n'est pas le plus important, c'est le plus "engageant" pour te garder scrolle. C'est comme un magasin qui met les bonbons a hauteur des yeux d'enfant.

ETAPE 4: Il cree ta bulle. Petit a petit, tu ne vois que ce que l'algorithme pense que tu aimes. Tu crois que tu choisis, mais c'est lui qui choisit pour toi. Comme un poisson dans un bocal qui croit que le bocal, c'est le monde entier.

L'algorithme ne travaille pas pour toi. Il travaille pour l'application, qui veut que tu restes le plus longtemps possible.`,

  3: `Maintenant, parlons de la grande question: Est-ce que l'IA peut remplacer la creativite humaine?

La reponse est non. Voici pourquoi.

D'un cote, on a ce que l'IA peut faire: lire des millions de livres en secondes, ecrire des poemes qui sonnent bien, dessiner dans n'importe quel style. C'est tres impressionnant.

De l'autre cote, on a ce que les humains peuvent faire: ressentir des emotions et les exprimer, creer quelque chose de jamais vu, faire des erreurs qui deviennent belles. L'IA ne peut pas faire ca.

L'IA copie. Les humains imaginent. Voila la difference.`,

  4: `Maintenant, parlons des jeunes et de l'IA.

Les jeunes d'aujourd'hui ne se contentent plus de regarder. Ils font des choses. Un gamin a Dakar peut produire de la musique pro depuis sa chambre. Un adolescent peut ecrire un livre et le traduire en 50 langues. Un artiste peut faire de l'art de galerie avec juste son telephone.

Avant, il fallait de l'argent et des outils chers pour etre artiste. Maintenant n'importe qui avec un telephone peut creer.

Et la meilleure partie? Les histoires des petites villes et des pays eloignes peuvent maintenant toucher des lecteurs partout. Fini les gardiens de la porte.`,

  5: `Parlons des livres et de l'ecriture avec l'IA.

Est-ce que tu as deja fixe une page blanche sans savoir quoi ecrire? Ca s'appelle le blocage de l'ecrivain. L'IA peut aider. Tu lui demandes des idees, et elle t'en donne. Tu lui demandes un personnage, et elle t'aide a le construire.

L'IA peut aussi traduire ton histoire en 50 langues instantanement. Un livre ecrit en wolof peut etre lu a Tokyo. Un poeme en francais peut etre lu en anglais.

Et le truc le plus cool? Les livres interactifs ou TU choisis ce qui se passe ensuite. Comme un jeu, mais avec des mots.

Retiens: L'IA n'ecrit pas pour toi. Elle ecrit avec toi. Tu es le patron. L'IA est l'assistant.`,

  6: `Maintenant, on doit parler du piege de l'algorithme.

Tu sais quand tu regardes une video sur YouTube, et apres il te recommande le meme type de video pendant 3 heures? C'est l'algorithme. Il te montre plus de ce que tu aimes deja. Tu ne vois jamais de nouvelles idees, d'opinions differentes, ou d'art bizarre. Tu vis dans une bulle sans le savoir.

Et quand l'IA fait de l'art pour tout le monde, elle fait le meme genre d'art. Sur, ennuyeux et previsible. Le truc bizarre, fou et beau? Il est pousse de cote.

Mais tu as le pouvoir! Cherche de la musique bizarre. Lis des livres etranges. Regarde des choses que l'algorithme ne te recommande pas. Ton gout est ta rebellion.`,

  7: `Enfin, parlons de ce qui rend les humains speciaux.

L'IA fait les choses parfaitement a chaque fois. Mais le vrai art? Il vient des accidents heureux. Une tache de peinture devient un chef-d'oeuvre. Une note fausse devient une nouvelle melodie. Une faute d'orthographe devient la meilleure partie d'un poeme.

Aussi, quand tout le monde peut faire de l'art avec l'IA, la personne qui choisit ce qui est bon devient le heros. Le DJ qui choisit la bonne chanson. Le curateur qui dit "ca compte". L'editeur qui fait briller le texte.

Ton gout de musique bizarre? Tes idees etranges? Tes sentiments desordonnes et beaux? Ca, c'est ton superpouvoir.`,

  8: `Alors qu'est-ce qu'on a appris aujourd'hui?

L'IA ne remplacera pas les createurs. Mais les createurs qui utilisent l'IA remplaceront ceux qui ne le font pas.

Utilise l'IA pour t'aider. Ne laisse pas elle te remacer. Cree avec courage et coeur.

Retiens: Tes imperfections sont ton superpouvoir. Ton gout est ta rebellion. Ta creativite est irremplacable.

Merci! Discutons!`
}
