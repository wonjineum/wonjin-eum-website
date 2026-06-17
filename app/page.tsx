"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowDown, ChevronDown, FileText } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "").replace(/\s+/g, "");
}

function LogoInline({
  src,
  href,
  ariaLabel,
}: {
  src: string;
  href?: string;
  ariaLabel?: string;
}) {
  const [errored, setErrored] = useState(false);

  useEffect(() => setErrored(false), [src]);

  const content = errored ? null : (
    <img
      src={src}
      alt={ariaLabel ?? "logo"}
      onError={() => setErrored(true)}
      style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 6 }}
    />
  );

  const wrapperStyle: React.CSSProperties = {
    display: "inline-block",
    verticalAlign: "middle",
    width: 24,
    height: 24,
    marginRight: 4,
  };

  const placeholder = <span style={{ width: "100%", height: "100%", display: "inline-block", backgroundColor: "#f59e0b", borderRadius: 6 }} />;

  return href ? (
    <a href={href} aria-label={ariaLabel} style={wrapperStyle}>
      {content ?? placeholder}
    </a>
  ) : (
    <span aria-label={ariaLabel} style={wrapperStyle}>
      {content ?? placeholder}
    </span>
  );
}

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

type Sticker = {
  src: string;
  alt: string;
  tip: string;
  top: number;
  left: number;
  rotate: string;
  shape: "square" | "circle";
  size: number;
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

const stickers: Sticker[] = [
  {
    src: "/sticker-appdev.png",
    alt: "Cornell AppDev",
    tip: "Cornell AppDev — iOS & web dev club. PM on Eatery, the campus dining app with 40k+ downloads.",
    top: 130,
    left: 200,
    rotate: "-8deg",
    shape: "square",
    size: 112,
  },
  {
    src: "/sticker-cds.png",
    alt: "Cornell Data Science",
    tip: "Cornell Data Science — researching ML-guided cache eviction policies with Rust + PyTorch.",
    top: 150,
    left: 370,
    rotate: "5deg",
    shape: "square",
    size: 112,
  },
  {
    src: "/sticker-cornell.png",
    alt: "Cornell University",
    tip: "Cornell University — studying CS in the College of Engineering, Class of 2027.",
    top: 100,
    left: 710,
    rotate: "6deg",
    shape: "circle",
    size: 120,
  },
  {
    src: "/sticker-ccodp.png",
    alt: "CCODP",
    tip: "Central Coast Overdose Prevention — nonprofit working to reduce overdose deaths. Built NarcanSOS in partnership with them.",
    top: 400,
    left: 160,
    rotate: "4deg",
    shape: "square",
    size: 112,
  },
  {
    src: "/sticker-cayuga.png",
    alt: "Cayuga Healthcare",
    tip: "Cayuga Healthcare Consulting — Cornell consulting club focused on healthcare strategy and innovation.",
    top: 325,
    left: 250,
    rotate: "-3deg",
    shape: "square",
    size: 112,
  },
  {
    src: "/sticker-boarding.png",
    alt: "Boarding Pass",
    tip: "Always moving — between Ithaca, LA, Seoul, and wherever comes next.",
    top: 380,
    left: 500,
    rotate: "3deg",
    shape: "square",
    size: 112,
  },
  {
    src: "/sticker-ithaca.png",
    alt: "Ithaca",
    tip: "Ithaca, NY — home of gorges, cold winters, and Cornell.",
    top: 230,
    left: 700,
    rotate: "-10deg",
    shape: "circle",
    size: 76,
  },
  {
    src: "/sticker-monterey.png",
    alt: "Monterey",
    tip: "Monterey, CA — where I grew up, on the coast.",
    top: 215,
    left: 615,
    rotate: "10deg",
    shape: "circle",
    size: 76,
  },
  {
    src: "/sticker-korea.png",
    alt: "Korea",
    tip: "Born and raised in South Korea — the kimchi, the trains, the Han River always calling me back.",
    top: 230,
    left: 530,
    rotate: "-10deg",
    shape: "circle",
    size: 76,
  },
  {
    src: "/sticker-linkedin.png",
    alt: "LinkedIn",
    tip: "LinkedIn — Full Stack Engineering Intern, built a Chrome extension using LLMs for clothing sustainability scoring.",
    top: 400,
    left: 680,
    rotate: "-10deg",
    shape: "square",
    size: 112,
  },
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
  const stickerWallRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = stickerWallRef.current;

    if (!container) {
      return undefined;
    }

    const tooltip = container.querySelector<HTMLDivElement>("#sticker-tooltip");

    if (!tooltip) {
      return undefined;
    }

    const hideTooltip = () => {
      tooltip.style.opacity = "0";
      tooltip.style.visibility = "hidden";
    };

    const positionTooltip = (sticker: HTMLElement) => {
      const containerRect = container.getBoundingClientRect();
      const stickerRect = sticker.getBoundingClientRect();
      const tooltipWidth = tooltip.offsetWidth || 320;
      const tooltipHeight = tooltip.offsetHeight || 72;
      const centeredLeft = stickerRect.left - containerRect.left + stickerRect.width / 2;
      const centeredTop = stickerRect.top - containerRect.top - 14;
      const clampedLeft = Math.min(
        Math.max(centeredLeft, tooltipWidth / 2 + 16),
        containerRect.width - tooltipWidth / 2 - 16,
      );
      const clampedTop = Math.max(centeredTop - tooltipHeight, 18);

      tooltip.style.left = `${clampedLeft}px`;
      tooltip.style.top = `${clampedTop}px`;
    };

    const showTooltip = (event: MouseEvent) => {
      const sticker = event.currentTarget as HTMLElement;
      const tip = sticker.dataset.tip;

      if (!tip) {
        return;
      }

      tooltip.textContent = tip;
      tooltip.style.visibility = "visible";
      tooltip.style.opacity = "1";
      positionTooltip(sticker);
    };

    const moveTooltip = (event: MouseEvent) => {
      positionTooltip(event.currentTarget as HTMLElement);
    };

    const stickers = Array.from(container.querySelectorAll<HTMLElement>(".sticker"));

    stickers.forEach((sticker) => {
      sticker.addEventListener("mouseenter", showTooltip);
      sticker.addEventListener("mousemove", moveTooltip);
      sticker.addEventListener("mouseleave", hideTooltip);
    });

    hideTooltip();

    return () => {
      stickers.forEach((sticker) => {
        sticker.removeEventListener("mouseenter", showTooltip);
        sticker.removeEventListener("mousemove", moveTooltip);
        sticker.removeEventListener("mouseleave", hideTooltip);
      });
    };
  }, []);

  return (
    <main className="relative overflow-hidden bg-white text-[#111111]">
      <div className="pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/80 to-transparent" />

      <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/80 backdrop-blur-xl transition-opacity duration-300">
        <div className="mx-auto flex max-w-6xl flex-row items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
          <a
            href="#home"
            className="font-[family-name:var(--font-geist)] inline-flex items-center gap-3 text-sm font-semibold tracking-[0.18em] text-zinc-950 transition-colors hover:text-amber-700"
          >
            <span>Wonjin Eum</span>
          </a>

          <nav aria-label="Primary" className="flex flex-wrap items-center gap-2 text-sm">
            {navItems.map((item) => (
              <a
                key={item.label}
                className="font-[family-name:var(--font-unbounded)] rounded-full px-4 py-2 text-zinc-600 transition-colors hover:bg-[#fff8dd] hover:text-zinc-950"
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
        className="relative mx-auto min-h-[calc(100vh-4.5rem)] w-full max-w-6xl scroll-mt-24 px-6 py-3 sm:px-10 lg:px-16 lg:py-2"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        <div className="grid min-h-[calc(100vh-9rem)] items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-3xl">
            <motion.p
              className="font-[family-name:var(--font-unbounded)] mb-5 text-xs uppercase tracking-[0.35em] text-amber-700/80"
              variants={fadeUp}
              transition={fadeTransition}
            >
              Software Developer
            </motion.p>
            <motion.h1
              className="max-w-3xl text-5xl font-semibold tracking-tight text-[#111111] sm:text-7xl lg:text-[6rem] lg:leading-[0.9]"
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
                  className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:text-[#111111] hover:shadow-[0_16px_36px_rgba(0,0,0,0.05)]"
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
          className="font-[family-name:var(--font-unbounded)] mx-auto mt-8 inline-flex flex-col items-center gap-2 pb-2 text-[0.65rem] uppercase tracking-[0.35em] text-zinc-500"
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

      <motion.section
        id="about"
        className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
      >
        <motion.p className="mx-auto mt-6 max-w-5xl text-left text-2xl sm:text-3xl leading-[3rem] font-medium text-[#111111]" variants={fadeUp} transition={fadeTransition}>
          Hello! I&apos;m Wonjin — a 👩🏻‍💻 <strong className="font-bold">software developer</strong> always craving to use my technical skills to create 🌎 <strong className="font-bold">real-world impact</strong>.
        </motion.p>

        <motion.p className="mx-auto mt-6 max-w-5xl text-left text-2xl sm:text-3xl leading-[3rem] font-medium text-[#111111]" variants={fadeUp} transition={fadeTransition}>
          Currently, I am studying CS at <span className="inline whitespace-nowrap"><LogoInline src="/cornell-logo.jpg" ariaLabel="Cornell" /> <strong className="font-bold">Cornell University</strong></span>, building <span className="inline whitespace-nowrap"><LogoInline src="/project-narcansos.jpg" href="#narcansos" ariaLabel="NarcanSOS" /> tools</span>  that <strong className="font-bold">save lives</strong>, and shipping <span className="inline whitespace-nowrap"><LogoInline src="/project-eatery.jpg" href="#eatery" ariaLabel="Eatery" /> apps </span> with <strong className="font-bold">tens of thousands of users</strong>.
        </motion.p>

        <motion.p className="mx-auto mt-6 max-w-5xl text-left text-2xl sm:text-3xl leading-[3rem] font-medium text-[#111111]" variants={fadeUp} transition={fadeTransition}>
          Outside of the computer screen, you'll find me on an ⛰️ outdoor trail somewhere, saying 👋 hi to strangers, or hunting for the best ☕️ iced coffee on campus!
        </motion.p>
      </motion.section>

      <Section id="projects" label="Projects">
        <div className="grid gap-5">
          {projects.map((project, index) => (
            <motion.article
              id={slugify(project.name)}
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
        <div ref={stickerWallRef} className="mx-auto flex max-w-5xl flex-col items-center gap-8">
          <div className="relative w-full overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-[#f4f4f4] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.08)] sm:p-6">
            <div className="relative mx-auto" style={{ width: 1008, height: 738 }}>
              <svg aria-hidden="true" viewBox="0 0 560 410" width="1008" height="738" className="absolute inset-0 drop-shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
                <defs>
                  <radialGradient id="laptopGradient" cx="50%" cy="35%" r="75%">
                    <stop offset="0%" stopColor="#e8e8e8" />
                    <stop offset="100%" stopColor="#c0c0c0" />
                  </radialGradient>
                  <linearGradient id="laptopSheen" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
                    <stop offset="52%" stopColor="#ffffff" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0.06" />
                  </linearGradient>
                </defs>

                <rect x="62" y="36" width="436" height="286" rx="34" fill="url(#laptopGradient)" />
                <rect x="62" y="36" width="436" height="286" rx="34" fill="url(#laptopSheen)" opacity="0.65" />
                <rect x="78" y="50" width="404" height="250" rx="28" fill="none" stroke="#ffffff" strokeOpacity="0.35" />

                <g transform="translate(262, 168) scale(1.1)" fill="#888" opacity="0.35">
                  <path d="M26.4 4.2c1.6-2 2.7-4.8 2.4-7.6-2.3.1-5.1 1.5-6.8 3.5-1.5 1.7-2.8 4.5-2.4 7.1 2.5.2 5.2-1.3 6.8-3z" />
                  <path d="M28.7 8c-3.7-.2-6.9 2.1-8.7 2.1-1.8 0-4.5-2-7.5-1.9-3.8.1-7.4 2.2-9.3 5.6-4 6.9-1 17.1 2.8 22.7 1.9 2.8 4.2 5.8 7.2 5.7 2.9-.1 4-1.9 7.5-1.9 3.5 0 4.5 1.9 7.5 1.8 3.1-.1 5.1-2.8 7-5.6 2.2-3.2 3.1-6.3 3.1-6.4-.1 0-6-2.3-6-9 0-5.6 4.6-8.3 4.8-8.5-2.6-3.9-6.7-4.3-8.4-4.6z" />
                </g>
              </svg>

              <div
                id="sticker-tooltip"
                className="pointer-events-none invisible absolute z-30 max-w-[20rem] -translate-x-1/2 rounded-2xl border border-zinc-200 bg-white/95 px-4 py-3 text-sm leading-6 text-zinc-700 opacity-0 shadow-[0_20px_60px_rgba(0,0,0,0.14)] backdrop-blur transition-opacity duration-150"
                style={{ left: "50%", top: "50%" }}
              />

              {stickers.map((sticker) => (
                <div
                  key={sticker.alt}
                  className="sticker absolute overflow-hidden shadow-[0_10px_24px_rgba(0,0,0,0.15)] transition-transform duration-200 hover:scale-105"
                  style={{
                    top: sticker.top,
                    left: sticker.left,
                    width: sticker.size,
                    height: sticker.size,
                    transform: `rotate(${sticker.rotate})`,
                    borderRadius: sticker.shape === "circle" ? "50%" : "1.1rem",
                  }}
                  data-tip={sticker.tip}
                >
                  <Image
                    src={sticker.src}
                    alt={sticker.alt}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") || href.startsWith("/") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") || href.startsWith("/") ? undefined : "noreferrer"}
                className="group inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:text-zinc-950 hover:shadow-[0_16px_36px_rgba(0,0,0,0.05)]"
              >
                <Icon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </Section>

      <footer className="border-t border-zinc-100 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center sm:px-10 lg:px-16">
          <p className="font-[family-name:var(--font-unbounded)] text-xs uppercase tracking-[0.3em] text-zinc-400">Wonjin Eum © 2026</p>
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
        <p className="font-[family-name:var(--font-unbounded)] text-xs uppercase tracking-[0.34em] text-amber-700/80">{label}</p>
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
