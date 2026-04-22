import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

type ProjectVisualProps = {
  project: Pick<Project, "title" | "category" | "accent" | "year">;
};

const accentClasses = {
  blue: "bg-ugent text-paper",
  yellow: "bg-signal text-ink",
  ink: "bg-ink text-paper"
};

export function ProjectVisual({ project }: ProjectVisualProps) {
  const initials = project.title
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden border border-ink bg-paper"
      aria-hidden="true"
    >
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
        {Array.from({ length: 16 }).map((_, index) => (
          <span key={index} className="border-b border-r border-ink/35" />
        ))}
      </div>
      <div
        className={cn(
          "absolute left-0 top-0 grid h-1/2 w-1/2 place-items-center font-display text-6xl font-black md:text-7xl",
          accentClasses[project.accent]
        )}
      >
        {initials}
      </div>
      <div className="absolute bottom-0 left-0 right-0 grid grid-cols-[1fr_auto] border-t border-ink bg-paper">
        <div className="p-4">
          <p className="text-xs font-black uppercase text-ugent">
            {project.category}
          </p>
          <p className="mt-1 text-lg font-black leading-none">{project.year}</p>
        </div>
        <div className="grid w-20 place-items-center border-l border-ink bg-signal font-mono text-xl font-black text-ink">
          #
        </div>
      </div>
    </div>
  );
}
