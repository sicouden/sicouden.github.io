import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/ArticleLayout";
import { articles, getArticle } from "@/content/blog";

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  return <ArticleLayout article={article} />;
}
