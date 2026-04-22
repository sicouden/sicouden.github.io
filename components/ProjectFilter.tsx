"use client";

import { useMemo, useState } from "react";
import {
  projectCategories,
  type Project,
  type ProjectCategory
} from "@/content/projects";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/ProjectCard";

type ProjectFilterProps = {
  projects: Project[];
};

type Category = ProjectCategory | "All";

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const visibleProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2 border-y border-line py-4"
        aria-label="Project category filters"
      >
        {projectCategories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-[3px] border px-4 py-2 text-sm font-black uppercase transition focus:outline-none focus-visible:ring-4 focus-visible:ring-ugent",
                isActive
                  ? "border-ink bg-ink text-paper"
                  : "border-line bg-paper text-ink hover:border-ugent hover:bg-ugent hover:text-paper"
              )}
              aria-pressed={isActive}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            priority={index === 0}
          />
        ))}
      </div>
    </div>
  );
}
