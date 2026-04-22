"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/ethical-views", label: "Ethical Views" },
  { href: "/blog", label: "Blog" }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-coal bg-ink text-paper">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-[3px] focus:bg-signal focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
      >
        Skip to content
      </a>
      <nav
        className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="group flex items-center gap-3 text-base font-black uppercase focus:outline-none focus-visible:ring-4 focus-visible:ring-signal"
          aria-label="Go to homepage"
        >
          <span className="grid h-9 w-9 place-items-center bg-signal text-ink">
            S
          </span>
          <span className="leading-none">
            Simon
            <span className="block text-xs font-bold text-signal">
              Systems + Ethics
            </span>
          </span>
        </Link>
        <div className="flex flex-wrap gap-2">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-[3px] border px-3 py-2 text-sm font-bold uppercase transition focus:outline-none focus-visible:ring-4 focus-visible:ring-signal",
                  isActive
                    ? "border-signal bg-signal text-ink"
                    : "border-transparent text-chalk hover:border-chalk hover:bg-chalk hover:text-ink"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
