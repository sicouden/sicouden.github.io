import { principles } from "@/content/values";

export function ManifestoBlock() {
  return (
    <div className="grid border border-ink bg-paper md:grid-cols-4">
      {principles.map((principle) => (
        <section
          key={principle.label}
          className="min-h-72 border-b border-ink p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
        >
          <p className="font-mono text-sm font-black text-ugent">
            {principle.label}
          </p>
          <h3 className="mt-8 text-2xl font-black leading-none">
            {principle.title}
          </h3>
          <p className="mt-5 text-base leading-7 text-muted">
            {principle.body}
          </p>
        </section>
      ))}
    </div>
  );
}
