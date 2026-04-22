import Link from "next/link";
import type { Project } from "@/content/projects";
import { MotionReveal } from "@/components/MotionReveal";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Tag } from "@/components/Tag";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <MotionReveal>
      <article className="group relative grid h-full overflow-hidden rounded-[6px] border border-ink bg-paper transition hover:-translate-y-1 hover:shadow-editorial">
        <ProjectVisual project={project} />
        <div className="flex h-full flex-col p-5 md:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <Tag tone={priority ? "yellow" : "blue"}>{project.category}</Tag>
            <Tag>{project.status}</Tag>
          </div>
          <h3 className="mt-6 text-2xl font-black leading-none">
            <Link
              href={`/portfolio/${project.slug}`}
              className="outline-none after:absolute after:inset-0 focus-visible:ring-4 focus-visible:ring-ugent"
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-4 flex-1 text-base leading-7 text-muted">
            {project.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </article>
    </MotionReveal>
  );
}
