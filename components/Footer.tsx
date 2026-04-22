import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-coal bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase text-signal">
            Portfolio / ethics / writing
          </p>
          <p className="mt-4 max-w-2xl text-2xl font-black leading-tight">
            Technical work with a clear view of the people, systems, and
            responsibilities around it.
          </p>
        </div>
        <div className="grid gap-3 text-sm font-bold uppercase text-chalk sm:grid-cols-2">
          <Link className="hover:text-signal" href="/portfolio">
            Work
          </Link>
          <Link className="hover:text-signal" href="/ethical-views">
            Ethical views
          </Link>
          <Link className="hover:text-signal" href="/blog">
            Essays
          </Link>
          <a className="hover:text-signal" href="mailto:hello@example.com">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
