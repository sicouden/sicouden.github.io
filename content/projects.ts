export type ProjectCategory =
  | "Ingebedde systemen"
  | "Software"
  | "Hardware"
  | "Moraalwetenschap";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  tags: string[];
  year: string;
  status: "Prototype" | "Research" | "Production" | "Master thesis" | "Bachelor thesis";
  accent: "blue" | "yellow" | "ink";
  externalUrl?: string;
};

export const projectCategories: Array<ProjectCategory | "All"> = [
  "All",
  "Ingebedde systemen",
  "Software",
  "Hardware",
  "Moraalwetenschap"
];

export const projects: Project[] = [
  {
    slug: "Master-thesis",
    title: "Laag-complexe coherente optische ontvanger",
    category: "Ingebedde systemen",
    summary:
      "Een FPGA-gebaseerde coherent optische ontvanger voor intra-datacenter communicatie, ontworpen voor lage complexiteit.",
    problem:
      "Most small sensing deployments fail quietly: batteries drift, radios degrade, and operators only notice after the data is already compromised.",
    approach:
      "I structured the firmware around explicit health states, conservative wake cycles, and diagnostic packets that make failure modes visible before they become incidents.",
    outcome:
      "The result is a maintainable embedded prototype with lower power draw, clearer telemetry, and a cleaner path from lab testing to field deployment.",
    tags: ["VHDL", "Coherente optica", "Systeemontwerp","FPGA"],
    year: "2026",
    status: "Master thesis",
    accent: "blue"
  },
  {
    slug: "bachelor-thesis",
    title: "Water-kwaliteitsmonitor IoT-systeem",
    category: "Ingebedde systemen",
    summary:
      "Het ontwerp en validatie van een robuust water-kwaliteitsmonitorsysteem voor regenwaterzuivering in DR Congo.",
    problem:
      "Automation interfaces often optimize for speed while hiding uncertainty from the person expected to carry responsibility for the decision.",
    approach:
      "I designed a React interface around traceable states, review checkpoints, and plain-language escalation cues instead of opaque status lights.",
    outcome:
      "The dashboard reframes automation as assistance: useful, fast, and bounded by a human-readable accountability layer.",
    tags: ["C++", "Python", "Relationele databases", "UI"],
    year: "2025",
    status: "Bachelor thesis",
    accent: "yellow"
  },
  {
    slug: "Homeserver als spotify-clone",
    title: "Homeserver als spotify-clone",
    category: "Software",
    summary:
      "Een muziek-streamingdienst gebouwd op een oude laptop, gebaseerd op de Navidrome-API.",
    problem:
      "Manual board checks were slow, inconsistent, and difficult to explain when a failure happened outside the expected path.",
    approach:
      "I separated power, measurement, and fixture logic into replaceable modules with labeled diagnostics and repeatable scripts.",
    outcome:
      "The fixture reduced ambiguity during bring-up and created a stronger bridge between hardware debugging and software logs.",
    tags: ["Docker-compose", "Linux-serverbeheer", "Documentation"],
    year: "2025",
    status: "Production",
    accent: "blue"
  },
  {
    slug: "Sociiale-determinanten",
    title: "Sociale determinanten van moraal: Art & Morality",
    category: "Moraalwetenschap",
    summary:
      "A research notebook mapping design choices to social consequences in small-scale technical systems.",
    problem:
      "Ethical analysis is often added after implementation, when the core affordances have already hardened.",
    approach:
      "I built a lightweight review framework for early project phases: stakeholders, failure incentives, reversibility, and consent surfaces.",
    outcome:
      "The notes provide a reusable lens for deciding what should be built, what should be constrained, and what should be refused.",
    tags: ["Ethiek", "Onderzoek", "Systematisch denken"],
    year: "2024",
    status: "Research",
    accent: "ink"
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
