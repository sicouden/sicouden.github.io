import Image from "next/image";
import { articles } from "@/content/blog";
import { projects } from "@/content/projects";
import { BlogCard } from "@/components/BlogCard";
import { ButtonLink } from "@/components/ButtonLink";
import { ManifestoBlock } from "@/components/ManifestoBlock";
import { MotionReveal } from "@/components/MotionReveal";
import { ProjectCard } from "@/components/ProjectCard";
import { QuoteBlock } from "@/components/QuoteBlock";
import { SectionHeader } from "@/components/SectionHeader";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const latestArticle = articles[0];

  return (
    <>
      <section className="bg-ink text-paper">
        <div className="mx-auto grid min-h-[calc(100vh-92px)] max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.08fr_0.92fr] md:items-center md:py-16 lg:px-8">
          <MotionReveal>
            <p className="mb-6 inline-flex border border-signal px-3 py-2 text-sm font-black uppercase text-signal">
              Portfolio / ethische houding  
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-[0.84] md:text-8xl lg:text-8xl">
               Het belang van bewust zijn met technologie.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-chalk md:text-2xl md:leading-9">
              Mijn naam is Simon. Ik studeer industriëel ingenieur elektronica-ICT aan de UGent, maar daarnaast ben ik ook bezig
              met hoe producten van deze ingenieursdiscipline ons als mens beïnvloeden. Deze site is een portfolio van mijn werk, en een (kleinschalig) manifest van mijn ethische houding tegenover technologie.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/portfolio">ontdek mijn werk</ButtonLink>
              <ButtonLink href="/ethical-views" variant="outlineDark">
                Lees mijn ethische houding
              </ButtonLink>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.12}>
            <div className="relative mx-auto max-w-xl border border-paper bg-paper p-3 shadow-editorial md:max-w-none">
              <Image
                src="/advocacy-grid.svg"
                alt="Abstract editorial grid in black, warm white, blue, and yellow."
                width={1200}
                height={900}
                priority
                className="h-auto w-full"
              />
              <div className="absolute -bottom-5 left-5 right-5 grid grid-cols-3 border border-ink bg-signal text-ink">
                {["embedded", "software", "ethics"].map((item) => (
                  <span
                    key={item}
                    className="border-r border-ink px-3 py-3 text-center text-xs font-black uppercase last:border-r-0"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="editorial-grid bg-paper py-20 text-ink md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start lg:px-8">
          <div>
            <div className="border-t border-ink pt-5">
              <p className="text-sm font-black uppercase text-ugent">Intro</p>
              <h2 className="mt-6 max-w-4xl text-4xl font-black leading-[0.95] md:text-6xl">
                Een portfolio van ontwerpen met de impliciete ethische houding
                zichtbaar.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                Ik geef om de positieve impact van technologie op mensen,
                vooral zij er het meest door geholpen kunnen worden. Daarom
                probeer ik altijd om de ethische houding die in mijn werk zit
                expliciet te maken: welke waarden, afwegingen, en
                verantwoordelijkheden zitten er achter de keuzes die ik maak?
              </p>
            </div>
            <MotionReveal className="mt-12">
              <QuoteBlock>
                Technische vooruitgang werkt alleen als die vooruitgang voor
                iedereen positief is, wat geen vanzelfsprekende uitkomst is.
              </QuoteBlock>
            </MotionReveal>
          </div>
          <MotionReveal delay={0.08}>
            <figure className="relative border border-ink bg-ink p-3 shadow-editorial">
              <Image
                src="/profile-simon.jpeg"
                alt="Simon in Parijs, peace-symbol pose voor een terras s'nachts"
                width={1381}
                height={1841}
                sizes="(min-width: 1024px) 420px, 100vw"
                className="aspect-[4/5] w-full object-cover object-[50%_38%]"
              />
              <figcaption className="grid grid-cols-[1fr_auto] border-x border-b border-ink bg-signal text-ink">
                <span className="px-3 py-3 text-xs font-black uppercase">
                  Simon / Parijs / Feb '26
                </span>
                <span
                  className="grid w-14 place-items-center border-l border-ink font-mono text-lg font-black"
                  aria-hidden="true"
                >
                  01
                </span>
              </figcaption>
            </figure>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-chalk py-20 text-ink md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Geselecteerde projecten"
            title="Projecten met een structuur, zowel technisch als ethisch."
            body="Een compact overzicht van projecten die mijn ontwerpbenadering illustreren: een combinatie van technische keuzes en 
            ethische afwegingen die samen een coherent geheel vormen."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                priority={index === 0}
              />
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/portfolio" variant="secondary">
              Zie volledige portfolio
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-paper md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Values"
            title="A working ethic for responsible systems."
            body="These principles frame the tone of the work: principled, concrete, and professional enough to sit beside technical decisions."
            invert
          />
          <div className="mt-12">
            <ManifestoBlock />
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 text-ink md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Latest essay"
            title="Long-form thinking, built for readability."
            body="Essays create room for the questions that do not fit inside a project card: judgment, incentives, maintenance, refusal, and trust."
          />
          <div className="mt-8">
            <BlogCard article={latestArticle} />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/blog" variant="secondary">
              Read the blog
            </ButtonLink>
            <ButtonLink href="/portfolio" variant="quiet">
              Explore projects
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
