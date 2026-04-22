type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  body?: string;
  invert?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  body,
  invert = false
}: SectionHeaderProps) {
  return (
    <div className="grid gap-6 border-t border-current pt-5 md:grid-cols-[0.7fr_1.3fr]">
      <p
        className={
          invert
            ? "text-sm font-black uppercase text-signal"
            : "text-sm font-black uppercase text-ugent"
        }
      >
        {eyebrow}
      </p>
      <div>
        <h2 className="max-w-4xl text-4xl font-black leading-[0.95] md:text-6xl">
          {title}
        </h2>
        {body ? (
          <p
            className={
              invert
                ? "mt-5 max-w-2xl text-lg leading-8 text-chalk"
                : "mt-5 max-w-2xl text-lg leading-8 text-muted"
            }
          >
            {body}
          </p>
        ) : null}
      </div>
    </div>
  );
}
