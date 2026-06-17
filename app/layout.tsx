import type { Metadata } from "next";
import { Geist, Unbounded } from "next/font/google";
import "./globals.css";


const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wonjin Eum | Portfolio",
  description:
    "Wonjin Eum's personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and framer-motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${unbounded.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}