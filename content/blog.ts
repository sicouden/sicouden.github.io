export type ArticleBlock =
  | { type: "paragraph"; content: string }
  | { type: "heading"; content: string }
  | { type: "quote"; content: string; cite?: string }
  | { type: "list"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  blocks: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "engineering-as-public-behavior",
    title: "Engineering as Public Behavior",
    excerpt:
      "A short reflection on why technical systems should be evaluated by the behaviors they make normal.",
    date: "2026-03-12",
    readingTime: "5 min read",
    category: "Ethics",
    blocks: [
      {
        type: "paragraph",
        content:
          "Technical work is never just a private act of implementation. Every interface, default, alert, and data path teaches someone what is normal, urgent, optional, or invisible."
      },
      {
        type: "paragraph",
        content:
          "That is why I think about engineering as public behavior. A system does not need a large audience to have public consequences. It only needs to change the conditions under which people make decisions."
      },
      {
        type: "heading",
        content: "The question behind the feature"
      },
      {
        type: "paragraph",
        content:
          "Before asking whether a feature works, I want to ask what kind of relationship it creates. Does it invite reflection or urgency? Does it preserve agency or quietly narrow it? Does it make the responsible person more capable, or merely more accountable for something they cannot inspect?"
      },
      {
        type: "quote",
        content:
          "Good engineering is not the absence of friction. It is the careful placement of friction where judgment matters."
      },
      {
        type: "list",
        items: [
          "Make uncertainty visible where decisions are consequential.",
          "Prefer reversible defaults when harm is plausible.",
          "Treat documentation as part of the user experience, not a postscript."
        ]
      },
      {
        type: "paragraph",
        content:
          "These notes set the tone for the kind of essays this site carries: practical, technically literate, and serious about consequences."
      }
    ]
  },
  {
    slug: "debugging-the-invisible",
    title: "Debugging the Invisible",
    excerpt:
      "How instrumentation, naming, and failure states can make small systems easier to trust.",
    date: "2026-01-28",
    readingTime: "7 min read",
    category: "Systems",
    blocks: [
      {
        type: "paragraph",
        content:
          "The hardest bugs are often the ones that were never given a name. A system without a vocabulary for partial failure forces every diagnosis to begin from confusion."
      },
      {
        type: "paragraph",
        content:
          "In embedded and distributed systems, visibility is not polish. It is a design requirement. Logs, health states, and diagnostic surfaces are the bridge between an elegant theory and a maintainable reality."
      },
      {
        type: "heading",
        content: "Signals before stories"
      },
      {
        type: "paragraph",
        content:
          "When a system fails, teams tell stories. The better the instrumentation, the shorter and more accurate those stories become. That is where engineering discipline begins to feel humane: it reduces guesswork for the people who inherit the problem."
      },
      {
        type: "quote",
        content:
          "A visible failure is still a failure. An invisible one becomes culture."
      },
      {
        type: "paragraph",
        content:
          "That is the kind of thinking I want to bring into telemetry, test fixtures, firmware observability, and the everyday discipline of making systems easier to maintain."
      }
    ]
  },
  {
    slug: "against-default-extraction",
    title: "Against Default Extraction",
    excerpt:
      "A position note on restraint, consent, and designing technical systems that do less on purpose.",
    date: "2025-11-04",
    readingTime: "4 min read",
    category: "Position",
    blocks: [
      {
        type: "paragraph",
        content:
          "A mature technical culture should be able to say that some data should not be collected, some optimizations should not be pursued, and some capabilities should remain deliberately inconvenient."
      },
      {
        type: "paragraph",
        content:
          "Restraint is not a lack of ambition. It is a form of architectural clarity: the decision to keep power legible, bounded, and contestable."
      },
      {
        type: "heading",
        content: "Designing for refusal"
      },
      {
        type: "paragraph",
        content:
          "Systems that respect people must make refusal possible without punishment. That means meaningful opt-outs, honest defaults, and interfaces that do not hide the cost of participation behind convenience."
      },
      {
        type: "list",
        items: [
          "Collect the minimum useful signal.",
          "Keep sensitive inferences out of casual interfaces.",
          "Design deletion, correction, and appeal as first-class flows."
        ]
      }
    ]
  }, 
  {
    slug: "mijn-eerste-website",
    title: "De eerste stap: een website?",
    excerpt:
      "De motivatie achter dit project, en wat voor waarde ik zie in het bloggen over de ingenieursdisplines.",
    date: "2026-04-18",
    readingTime: "x min lezen",
    category: "Meta",
    blocks: [
      {
        type: "paragraph",
        content:
          "Stappen doen we altijd met een richting, een doel. In mijn 22e levensjaar besloot ik dat ik wilde schrijven. Ik wilde mijn gedachten over techniek en ethiek delen, en een plek creëren waar ik die gedachten in de toekomst zou kunnen terugvinden."
      }
    ]
  }
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
