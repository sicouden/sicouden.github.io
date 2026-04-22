type QuoteBlockProps = {
  children: React.ReactNode;
  cite?: string;
  invert?: boolean;
};

export function QuoteBlock({ children, cite, invert = false }: QuoteBlockProps) {
  return (
    <figure
      className={
        invert
          ? "border-l-8 border-signal bg-coal p-6 text-paper md:p-10"
          : "border-l-8 border-ugent bg-chalk p-6 text-ink md:p-10"
      }
    >
      <blockquote className="text-2xl font-black leading-tight md:text-4xl">
        {children}
      </blockquote>
      {cite ? (
        <figcaption className="mt-5 text-sm font-bold uppercase text-muted">
          {cite}
        </figcaption>
      ) : null}
    </figure>
  );
}
