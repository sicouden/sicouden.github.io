import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { ButtonLink } from "@/components/ButtonLink";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Tag } from "@/components/Tag";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="bg-ink py-16 text-paper md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[0.95fr_1.05fr] md:items-end lg:px-8">
          <div>
            <Link
              href="/portfolio"
              className="text-sm font-black uppercase text-signal hover:text-paper"
            >
              &lt;- All projects
            </Link>
            <div className="mt-8 flex flex-wrap gap-2">
              <Tag tone="yellow">{project.category}</Tag>
              <Tag tone="dark">{project.status}</Tag>
              <Tag tone="dark">{project.year}</Tag>
            </div>
            <h1 className="mt-8 text-6xl font-black leading-[0.86] md:text-8xl">
              {project.title}
            </h1>
          </div>
          <ProjectVisual project={project} />
        </div>
      </section>
      <section className="bg-paper py-16 text-ink md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-[0.32fr_0.68fr] lg:px-8">
          <aside className="border-t border-ink pt-5">
            <p className="text-sm font-black uppercase text-ugent">
              Technologies
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </aside>
          <div className="grid gap-8">
            {[
              ["Problem", project.problem],
              ["Approach", project.approach],
              ["Outcome", project.outcome]
            ].map(([label, body]) => (
              <section key={label} className="border-t border-line pt-6">
                <p className="text-sm font-black uppercase text-ugent">
                  {label}
                </p>
                <p className="mt-4 max-w-3xl text-2xl font-black leading-tight md:text-4xl">
                  {body}
                </p>
              </section>
            ))}
            <div className="pt-4">
              <ButtonLink href="/portfolio" variant="secondary">
                Back to portfolio
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
