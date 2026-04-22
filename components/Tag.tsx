import { cn } from "@/lib/utils";

type TagProps = {
  children: React.ReactNode;
  tone?: "dark" | "light" | "blue" | "yellow";
};

export function Tag({ children, tone = "light" }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center rounded-[3px] border px-2.5 py-1 text-xs font-bold uppercase",
        tone === "dark" && "border-coal bg-coal text-paper",
        tone === "light" && "border-line bg-paper text-ink",
        tone === "blue" && "border-ugent bg-ugent text-paper",
        tone === "yellow" && "border-signal bg-signal text-ink"
      )}
    >
      {children}
    </span>
  );
}
