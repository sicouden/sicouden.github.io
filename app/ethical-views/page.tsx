import type { Metadata } from "next";
import { ethicalThemes } from "@/content/values";
import { ButtonLink } from "@/components/ButtonLink";
import { ManifestoBlock } from "@/components/ManifestoBlock";
import { MotionReveal } from "@/components/MotionReveal";
import { QuoteBlock } from "@/components/QuoteBlock";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Ethical Views",
  description:
    "A principled position page on ethics, technology, society, and responsibility."
};

export default function EthicalViewsPage() {
  return (
    <>
      <section className="bg-ink py-16 text-paper md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase text-signal">
            Ethical views
          </p>
          <h1 className="mt-6 max-w-5xl text-6xl font-black leading-[0.88] md:text-8xl">
            Technology should be judged by the power it creates.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-chalk">
            My ethical position starts from a simple premise: technical systems
            are part of public life, even when they are small, local, or hidden
            behind infrastructure.
          </p>
        </div>
      </section>

      <section className="bg-paper py-16 text-ink md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Position"
            title="A short manifesto for responsible technical practice."
            body="These principles are deliberately concrete. They connect values to design choices, documentation habits, defaults, and the limits of what should be automated."
          />
          <div className="mt-12">
            <ManifestoBlock />
          </div>
        </div>
      </section>

      <section className="bg-chalk py-16 text-ink md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[0.35fr_0.65fr] lg:px-8">
          <aside className="border-t border-ink pt-5">
            <p className="text-sm font-black uppercase text-ugent">
              Themes
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              A compact map of the questions I want my technical work to keep
              asking, especially when speed or novelty becomes persuasive.
            </p>
          </aside>
          <div className="grid gap-6">
            {ethicalThemes.map((theme, index) => (
              <MotionReveal key={theme.title} delay={index * 0.04}>
                <section className="border-t border-ink bg-paper p-6 md:p-8">
                  <h2 className="text-3xl font-black leading-none md:text-5xl">
                    {theme.title}
                  </h2>
                  <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
                    {theme.body}
                  </p>
                </section>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-paper md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[0.95fr_1.05fr] md:items-center lg:px-8">
          <QuoteBlock invert>
            I want to build systems that are legible enough to question,
            maintainable enough to trust, and restrained enough to deserve use.
          </QuoteBlock>
          <div>
            <h2 className="text-4xl font-black leading-none md:text-6xl">
              Ethics belongs in the architecture, not just the afterword.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-chalk">
              That means choosing clearer interfaces, better failure states,
              careful documentation, and project boundaries that make room for
              human judgment.
            </p>
            <div className="mt-8">
              <ButtonLink href="/blog">Read essays</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
