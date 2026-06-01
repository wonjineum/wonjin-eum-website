"use client";

import Image from "next/image";
import { useState } from "react";
import { FaEnvelope, FaFileArrowDown, FaGithub, FaLinkedinIn } from "react-icons/fa6";

export default function Home() {
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl items-start px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="grid w-full items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(240px,0.8fr)] lg:gap-16 lg:items-center">
          <div className="max-w-3xl animate-[hero-fade-in_700ms_ease-out_both]">
            <h1 className="text-5xl font-semibold tracking-tight text-zinc-950 sm:text-7xl lg:text-[5.75rem] lg:leading-[0.95]">
              Hi! I&apos;m Wonjin.
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
              <a
                className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition-colors duration-200 hover:border-zinc-300 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                href="https://github.com/wonjineum"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="h-4 w-4" aria-hidden="true" />
                <span className="pointer-events-none absolute top-[calc(100%+0.6rem)] rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  GitHub
                </span>
              </a>
              <a
                className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition-colors duration-200 hover:border-zinc-300 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                href="https://www.linkedin.com/in/wonjineum"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-4 w-4" aria-hidden="true" />
                <span className="pointer-events-none absolute top-[calc(100%+0.6rem)] rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  LinkedIn
                </span>
              </a>
              <a
                className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition-colors duration-200 hover:border-zinc-300 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                href="mailto:we46@cornell.edu"
                aria-label="Email"
              >
                <FaEnvelope className="h-4 w-4" aria-hidden="true" />
                <span className="pointer-events-none absolute top-[calc(100%+0.6rem)] rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  Email
                </span>
              </a>
              <a
                className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition-colors duration-200 hover:border-zinc-300 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="Resume"
              >
                <FaFileArrowDown className="h-4 w-4" aria-hidden="true" />
                <span className="pointer-events-none absolute top-[calc(100%+0.6rem)] rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  Resume
                </span>
              </a>
            </div>
          </div>

          <div className="animate-[hero-fade-in_700ms_ease-out_120ms_both] lg:justify-self-end">
            <div className="relative mx-auto h-[260px] w-[260px] overflow-hidden rounded-full border border-zinc-200 bg-zinc-50 shadow-[0_24px_80px_rgba(0,0,0,0.08)] sm:h-[300px] sm:w-[300px]">
              {!hasImageError ? (
                <Image
                  src="/headshot.jpeg"
                  alt="Wonjin Eum portrait"
                  fill
                  unoptimized
                  priority
                  className="object-cover"
                  onError={() => setHasImageError(true)}
                />
              ) : (
                <div className="flex h-full w-full items-end bg-[radial-gradient(circle_at_top,_#f4f4f5_0%,_#ffffff_52%,_#e4e4e7_100%)] p-6">
                  <div className="w-full rounded-3xl border border-white/70 bg-white/80 p-5 text-sm text-zinc-600 backdrop-blur-sm">
                    Add your headshot at <span className="font-medium text-zinc-950">public/headshot.jpeg</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
