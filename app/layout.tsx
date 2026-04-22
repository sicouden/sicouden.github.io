import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Simon - Systems, Ethics, Portfolio",
    template: "%s - Simon"
  },
  description:
    "A principled technical portfolio spanning embedded systems, software, hardware, research, and ethical reflections."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
