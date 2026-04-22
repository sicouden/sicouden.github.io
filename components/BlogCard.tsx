import Link from "next/link";
import type { Article } from "@/content/blog";
import { MotionReveal } from "@/components/MotionReveal";
import { Tag } from "@/components/Tag";

type BlogCardProps = {
  article: Article;
};

export function BlogCard({ article }: BlogCardProps) {
  return (
    <MotionReveal>
      <article className="group relative grid gap-6 border-t border-ink py-8 md:grid-cols-[0.35fr_1fr]">
        <div className="flex flex-wrap items-start gap-2 md:block">
          <Tag tone="yellow">{article.category}</Tag>
          <p className="mt-0 text-sm font-bold uppercase text-muted md:mt-4">
            {article.date}
          </p>
          <p className="text-sm font-bold uppercase text-muted md:mt-1">
            {article.readingTime}
          </p>
        </div>
        <div>
          <h2 className="max-w-3xl text-3xl font-black leading-none md:text-5xl">
            <Link
              href={`/blog/${article.slug}`}
              className="outline-none group-hover:text-ugent focus-visible:ring-4 focus-visible:ring-ugent"
            >
              {article.title}
            </Link>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            {article.excerpt}
          </p>
        </div>
      </article>
    </MotionReveal>
  );
}
