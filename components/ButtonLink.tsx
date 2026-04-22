import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "quiet" | "outlineDark";
};

export function ButtonLink({
  href,
  children,
  variant = "primary"
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-3 rounded-[4px] border px-5 py-3 text-sm font-black uppercase transition focus:outline-none focus-visible:ring-4 focus-visible:ring-ugent focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
        variant === "primary" &&
          "border-signal bg-signal text-ink hover:border-paper hover:bg-paper",
        variant === "secondary" &&
          "border-ink bg-ink text-paper hover:border-ugent hover:bg-ugent",
        variant === "quiet" &&
          "border-line bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-paper",
        variant === "outlineDark" &&
          "border-paper bg-transparent text-paper hover:border-signal hover:bg-signal hover:text-ink"
      )}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="font-mono">
        -&gt;
      </span>
    </Link>
  );
}
