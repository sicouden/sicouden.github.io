import Link from "next/link";
import type { Article } from "@/content/blog";
import { ReadingProgress } from "@/components/ReadingProgress";
import { QuoteBlock } from "@/components/QuoteBlock";
import { Tag } from "@/components/Tag";

type ArticleLayoutProps = {
  article: Article;
};

export function ArticleLayout({ article }: ArticleLayoutProps) {
  return (
    <>
      <ReadingProgress />
      <article className="bg-paper text-ink">
        <header className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-4xl">
            <Link
              href="/blog"
              className="text-sm font-black uppercase text-ugent hover:text-ink"
            >
              &lt;- All essays
            </Link>
            <div className="mt-8 flex flex-wrap gap-2">
              <Tag tone="yellow">{article.category}</Tag>
              <Tag>{article.readingTime}</Tag>
              <Tag>{article.date}</Tag>
            </div>
            <h1 className="mt-8 text-5xl font-black leading-[0.9] md:text-7xl lg:text-8xl">
              {article.title}
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-muted md:text-2xl md:leading-9">
              {article.excerpt}
            </p>
          </div>
        </header>
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-20 sm:px-6 md:grid-cols-[0.28fr_0.72fr] lg:px-8">
          <aside className="hidden border-t border-ink pt-5 text-sm font-bold uppercase text-muted md:block">
            <p>Essay note</p>
            <p className="mt-3 text-ink">
              Written for careful reading rather than rapid scrolling.
            </p>
          </aside>
          <div className="article-prose">
            {article.blocks.map((block, index) => {
              if (block.type === "heading") {
                return <h2 key={index}>{block.content}</h2>;
              }

              if (block.type === "quote") {
                return (
                  <QuoteBlock key={index} cite={block.cite}>
                    {block.content}
                  </QuoteBlock>
                );
              }

              if (block.type === "list") {
                return (
                  <ul key={index}>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }

              return <p key={index}>{block.content}</p>;
            })}
          </div>
        </div>
      </article>
    </>
  );
}
