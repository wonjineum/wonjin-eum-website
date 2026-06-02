"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowDown, ChevronDown, FileText } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";

type SocialLink = {
  label: string;
  href: string;
  icon: typeof FaGithub;
};

type Project = {
  name: string;
  stack: string[];
  description: string;
  githubUrl: string;
  image?: string;
  imageAlt?: string;
};

type ExperienceItem = {
  organization: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  image?: string;
  imageAlt?: string;
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "/resume.pdf" },
];

const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/wonjineum", icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/wonjineum", icon: FaLinkedinIn },
  { label: "Email", href: "mailto:we46@cornell.edu", icon: FaEnvelope },
  { label: "Resume", href: "/resume.pdf", icon: FileText },
];

const projects: Project[] = [
  {
    name: "Eatery",
    stack: ["Swift", "UIKit"],
    description:
      "Dining app with 40k downloads and 10k+ active Cornell users, designed to make campus food feel immediate and easy to navigate.",
    githubUrl: "https://github.com/cuappdev/eatery-blue-ios",
    image: "/project-eatery.jpg",
    imageAlt: "Eatery app preview",
  },
  {
    name: "NarcanSOS",
    stack: ["Java", "Swift", "Node.js"],
    description:
      "Overdose emergency response app partnered with a California nonprofit to shorten the distance between a crisis and help.",
    githubUrl: "https://github.com/wonjineum/NarcanSOS",
    image: "/project-narcansos.jpg",
    imageAlt: "NarcanSOS app preview",
  },
  {
    name: "Learning-Based Cache Eviction",
    stack: ["Rust", "PyTorch"],
    description:
      "Cornell Data Science research on ML-guided cache eviction policies, exploring how systems can adapt faster than static rules.",
    githubUrl: "https://github.com/CornellDataScience/adaptive-cache",
    image: "/project-cache-eviction.jpg",
    imageAlt: "Cache eviction research visual",
  },
  {
    name: "Giggle",
    stack: ["React", "Node.js", "PostgreSQL"],
    description:
      "AI and blockchain freelance marketplace that placed 5th in the Ramp x AppDev Hackathon, built as a cleaner path from idea to paid work.",
    githubUrl: "https://github.com/pranavbalakri/giggle",
    image: "/project-giggle.jpg",
    imageAlt: "Giggle marketplace preview",
  },
  {
    name: "Sustainable Fashion ML",
    stack: ["Python"],
    description:
      "CNN trained on 70k images and published as research, turning a large visual dataset into signals for more sustainable choices.",
    githubUrl: "https://github.com/wonjineum",
    image: "/project-fashion-ml.jpg",
    imageAlt: "Sustainable fashion research visual",
  },
];

const experience: ExperienceItem[] = [
  {
    organization: "LinkedIn",
    role: "Full Stack Engineering Intern",
    period: "Sep 2025 – Present",
    location: "Ithaca, NY",
    bullets: [
      "Developed a Chrome extension using LLMs to score clothing sustainability and recommend eco-friendly alternatives.",
      "Collaborated with LinkedIn engineers and mentors through professional workshops to design scalable product features.",
      "Presented the product at LinkedIn HQ, incorporating user feedback and iterating on computer vision improvements.",
    ],
    imageAlt: "LinkedIn internship photo",
    image: "/experience-linkedin.png",
  },
  {
    organization: "Curate",
    role: "Software Engineering Intern",
    period: "Jun 2026 – Aug 2026",
    location: "Los Angeles, CA",
    bullets: [
      "Built a customer-facing AI chat tool using LLM APIs and full-stack development for clients to access knowledge bases.",
      "Developed internal sales pipeline automations for the CEO to streamline restaurant client acquisition workflows.",
      "Participated in onboarding client meetings to iterate on product features and drive restaurant partner growth.",
    ],
    imageAlt: "Curate internship photo",
    image: "/experience-curate.jpg",
  },
  {
    organization: "CGBio USA",
    role: "Data Analytics Intern",
    period: "Mar 2025 – Mar 2025",
    location: "Irvine, CA",
    bullets: [
      "Contributed to securing the FDA Humanitarian Device Exemption approval for a new biomedical device, Novosis.",
      "Conducted competitive analysis and market research about incidence rates of non-union surgeries in long-bone fractures.",
      "Compiled data demonstrating that radius shaft bone fractures occur in fewer than 8,000 cases annually in the US.",
    ],
    imageAlt: "CGBio internship photo",
    image: "/experience-cgbio.jpg",
  },
  {
    organization: "Daewoong Pharmaceutical",
    role: "AI Drug Discovery Intern",
    period: "Mar 2025 – Mar 2025",
    location: "South Korea",
    bullets: [
      "Supported AI-assisted drug discovery workflows by helping structure and review data for model-driven analysis.",
      "Worked across research and engineering conversations to make experimental outputs easier to use in practice.",
      "Contributed to a fast-moving environment focused on turning biomedical research into usable systems.",
    ],
    imageAlt: "Daewoong internship photo",
    image: "/experience-daewoong.jpg",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const fadeTransition = { duration: 0.6 } as const;

export default function Home() {
  const [openExperience, setOpenExperience] = useState<Set<string>>(() => new Set());

  return (
    <main className="relative overflow-hidden bg-[#fffef9] text-zinc-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,221,142,0.28),_transparent_28%),linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,252,244,0.9)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/80 to-transparent" />

      <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
          <a
            href="#home"
            className="inline-flex items-center gap-3 self-start text-sm font-semibold tracking-[0.18em] text-zinc-950 transition-colors hover:text-amber-700"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-xs tracking-[0.22em] text-amber-700 shadow-sm">
              WE
            </span>
            <span>Wonjin Eum</span>
          </a>

          <nav aria-label="Primary" className="flex flex-wrap items-center gap-2 text-sm">
            {navItems.map((item) => (
              <a
                key={item.label}
                className="rounded-full px-4 py-2 text-zinc-600 transition-colors hover:bg-[#fff8dd] hover:text-zinc-950"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <motion.section
        id="home"
        className="relative mx-auto min-h-[calc(100vh-4.5rem)] w-full max-w-6xl scroll-mt-24 px-6 py-10 sm:px-10 lg:px-16 lg:py-14"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        <div className="grid min-h-[calc(100vh-9rem)] items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-3xl">
            <motion.p
              className="mb-5 text-xs uppercase tracking-[0.35em] text-amber-700/80"
              variants={fadeUp}
              transition={fadeTransition}
            >
              Portfolio
            </motion.p>
            <motion.h1
              className="max-w-3xl text-5xl font-semibold tracking-tight text-zinc-950 sm:text-7xl lg:text-[6rem] lg:leading-[0.9]"
              variants={fadeUp}
              transition={fadeTransition}
            >
              Hi! I&apos;m Wonjin.
            </motion.h1>

            <motion.div
              className="mt-10 flex flex-wrap gap-3 sm:mt-12"
              variants={fadeUp}
              transition={fadeTransition}
            >
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") || href.startsWith("/") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") || href.startsWith("/") ? undefined : "noreferrer"}
                  aria-label={label}
                  className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:text-zinc-950 hover:shadow-[0_16px_36px_rgba(0,0,0,0.05)]"
                >
                  <Icon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div className="justify-self-center lg:justify-self-end" variants={fadeUp} transition={fadeTransition}>
            <div className="relative mx-auto flex aspect-square w-[260px] items-center justify-center rounded-full border border-zinc-200 bg-white p-4 shadow-[0_24px_80px_rgba(0,0,0,0.06)] sm:w-[320px] lg:w-[360px]">
              <div className="absolute inset-4 rounded-full border border-amber-200/80" />
              <div className="relative h-full w-full overflow-hidden rounded-full bg-zinc-100">
                <Image
                  src="/headshot.jpeg"
                  alt="Wonjin Eum portrait"
                  fill
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 360px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.a
          className="mx-auto mt-8 inline-flex flex-col items-center gap-2 pb-2 text-[0.65rem] uppercase tracking-[0.35em] text-zinc-500"
          href="#about"
          variants={fadeUp}
          transition={fadeTransition}
        >
          <motion.span animate={{ y: [0, 5, 0], opacity: [0.55, 1, 0.55] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}>
            <ArrowDown className="h-4 w-4" />
          </motion.span>
          <span>Scroll</span>
        </motion.a>
      </motion.section>

      <Section id="about" label="About">
        <motion.p className="mx-auto max-w-5xl text-center text-2xl leading-10 text-zinc-700 sm:text-3xl sm:leading-[1.55]" variants={fadeUp} transition={fadeTransition}>
          I&apos;m Wonjin, a student at Cornell University studying Computer Science! 
          <span className="my-3 block h-px w-full bg-amber-200/0" />
          Whether through building tools that save lives or shipping apps with tens of thousands of users, I always
          crave to use my technical skills to create real-world impact.
          <span className="my-3 block h-px w-full bg-amber-200/0" />
          Outside of building things, you&apos;ll find me on an outdoor trail somewhere, saying hi to
          strangers, or hunting for the best iced coffee on campus.
        </motion.p>
      </Section>

      <Section id="projects" label="Projects">
        <div className="grid gap-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              className="group overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-[0_22px_60px_rgba(0,0,0,0.05)]"
              variants={fadeUp}
              transition={{ ...fadeTransition, delay: index * 0.07 }}
            >
              <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
                <div className="flex flex-col justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight text-zinc-950 sm:text-3xl">
                      {project.name}
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-200 bg-[#fff8dd] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-zinc-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-all duration-300 hover:border-amber-300 hover:text-zinc-950"
                    >
                      <FaGithub className="h-4 w-4" />
                      Github
                    </a>
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
                  </div>
                </div>

                <PhotoCard src={project.image} alt={project.imageAlt ?? project.name} />
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="experience" label="Experience">
        <div className="relative pl-0 lg:pl-6">
          <div className="absolute left-4 top-2 bottom-2 hidden w-px bg-zinc-200 lg:block" />
          <div className="space-y-4">
            {experience.map((item, index) => {
              const isOpen = openExperience.has(item.organization);

              return (
                <motion.div
                  key={item.organization}
                  className="relative rounded-[2rem] border border-zinc-200 bg-white shadow-[0_1px_0_rgba(0,0,0,0.02)]"
                  variants={fadeUp}
                  transition={{ ...fadeTransition, delay: index * 0.1 }}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenExperience((current) => {
                        const next = new Set(current);

                        if (next.has(item.organization)) {
                          next.delete(item.organization);
                        } else {
                          next.add(item.organization);
                        }

                        return next;
                      })
                    }
                    className="grid w-full gap-5 p-5 text-left sm:p-7 lg:grid-cols-[auto_1.1fr_auto_auto] lg:items-center lg:gap-6 lg:pl-10"
                    aria-expanded={isOpen}
                  >
                    <PhotoCard src={item.image} alt={item.imageAlt ?? item.organization} variant="experience" />

                    <div>
                      <p className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                        {item.organization}
                      </p>
                      <p className="mt-2 text-lg font-medium text-amber-900">
                        {item.role}
                      </p>
                    </div>

                    <div className="text-sm text-zinc-500 sm:text-base">
                      <p>{item.period}</p>
                      <p className="mt-1">{item.location}</p>
                    </div>

                    <div className="flex justify-start lg:justify-end">
                      <span className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300 ${isOpen ? "border-amber-300 bg-[#fff8dd] text-zinc-950" : "border-zinc-200 bg-white text-zinc-500"}`}>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      </span>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key={`${item.organization}-details`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-6 border-t border-zinc-100 p-5 sm:p-7 lg:pl-10">
                          <div className="space-y-4 text-base leading-7 text-zinc-700 sm:text-lg">
                            {item.bullets.map((bullet) => (
                              <div key={bullet} className="flex gap-3">
                                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                                <p>{bullet}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section id="contact" label="Contact">
        <div className="relative z-10 mx-auto max-w-4xl rounded-[2.25rem] border border-zinc-200 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.04)] sm:p-8">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-700/80">Let&apos;s connect!</p>
          <p className="mt-4 max-w-2xl text-2xl leading-10 text-zinc-700 sm:text-3xl sm:leading-[1.55]">
            If you want to talk about product, research, travel, or whatever comes next, reach out.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") || href.startsWith("/") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") || href.startsWith("/") ? undefined : "noreferrer"}
                className="flex items-center justify-between rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-700 transition-all duration-300 hover:border-amber-300 hover:text-zinc-950"
              >
                <span className="flex items-center gap-3">
                  <Icon className="h-4 w-4" />
                  {label}
                </span>
                <ChevronDown className="h-4 w-4 -rotate-90 text-zinc-400" />
              </a>
            ))}
          </div>
        </div>
      </Section>

      <footer className="border-t border-zinc-100 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center sm:px-10 lg:px-16">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Wonjin Eum © 2026</p>
        </div>
      </footer>
    </main>
  );
}

function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
      <div className="mb-10 flex items-center gap-4">
        <p className="text-xs uppercase tracking-[0.34em] text-amber-700/80">{label}</p>
        <span className="h-px flex-1 bg-gradient-to-r from-amber-200 via-zinc-200 to-transparent" />
      </div>
      {children}
    </section>
  );
}

function PhotoCard({
  src,
  alt,
  variant = "project",
}: {
  src?: string;
  alt: string;
  variant?: "project" | "experience";
}) {
  const isExperience = variant === "experience";

  return (
    <div
      className={`relative overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-[#fff8dd] shadow-[0_16px_40px_rgba(0,0,0,0.04)] ${
        isExperience ? "w-full" : "mx-auto w-full max-w-[320px] lg:max-w-[300px]"
      }`}
      style={{ aspectRatio: isExperience ? "1 / 1" : "4 / 3", minHeight: isExperience ? 96 : 180 }}
    >
      {src ? (
        <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
      ) : null}
    </div>
  );
}
