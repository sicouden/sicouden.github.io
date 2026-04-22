import type { Metadata } from "next";
import { articles } from "@/content/blog";
import { BlogCard } from "@/components/BlogCard";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Essays and reflections on engineering, ethics, systems, and responsibility."
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-ink py-16 text-paper md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase text-signal">Blog</p>
          <h1 className="mt-6 max-w-5xl text-6xl font-black leading-[0.88] md:text-8xl">
            Essays for technical work with memory and consequence.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-chalk">
            A quiet place for position notes, project reflections, and
            long-form thinking. The writing favors readability over feed
            mechanics and careful argument over noise.
          </p>
        </div>
      </section>
      <section className="bg-paper py-16 text-ink md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Index"
            title="Readable, direct, and easy to expand."
            body="These notes treat engineering as a practice of memory: what happened, what mattered, what should be carried forward, and what should be questioned next."
          />
          <div className="mt-10">
            {articles.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
