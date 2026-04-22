import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectFilter } from "@/components/ProjectFilter";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Technical portfolio projects across embedded systems, software, hardware, and research."
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-ink py-16 text-paper md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase text-signal">
            Portfolio
          </p>
          <h1 className="mt-6 max-w-5xl text-6xl font-black leading-[0.88] md:text-8xl">
            Technical work with enough context to be understood.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-chalk">
            A CV-ready index of projects across embedded systems, software,
            hardware, and research, presented through problem, approach, and
            outcome instead of surface polish alone.
          </p>
        </div>
      </section>
      <section className="bg-paper py-16 text-ink md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Filter"
            title="Select by domain without losing the editorial rhythm."
            body="Each domain asks for a different kind of discipline: precision in firmware, clarity in software, repeatability in hardware, and restraint in research."
          />
          <div className="mt-10">
            <ProjectFilter projects={projects} />
          </div>
        </div>
      </section>
    </>
  );
}
