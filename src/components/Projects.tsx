import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";

const projects = [
  {
    title: "FinSight — AI Financial Dashboard",
    description:
      "A full-featured financial management dashboard built with Next.js. Supports multi-currency (PKR/USD/GBP/AED), inventory tracking, receivables & payables management, AI-powered business insights, PDF report export, and interactive charts. Designed for small businesses with a dark glassmorphism UI.",
    image: "/finsight.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "AI", "Recharts", "PDF Export"],
    links: {
      live: "https://fin-sight-beta-pink.vercel.app",
      github: "https://github.com/awanzain026-cmyk/FinSight",
    },
  },
  {
    title: "BizFlow — AI Business Suite",
    description:
      "A complete business management suite for Pakistani entrepreneurs. Features AI-powered invoice generation with professional PDF export, client management with payment tracking, expense logging with category analytics, and intelligent business insights. Built with GST support, WhatsApp sharing, and interactive Recharts dashboards.",
    image: "/bizflow.png",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "AI (sodeom)", "Recharts", "jsPDF"],
    links: {
      live: "https://biz-flow-3bha.vercel.app",
      github: "https://github.com/awanzain026-cmyk/BizFlow",
    },
  },
  {
    title: "NexBot — AI Chatbot Builder",
    description:
      "A SaaS platform where any business owner can create a custom AI chatbot for their website in minutes — without coding. Features a 4-step wizard builder, real-time preview with GPT-4o responses, analytics dashboard, and one-click website embed. Demo includes Ahmad's Restaurant with full menu, hours, and FAQ handling.",
    image: "/nexbot.png",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "GPT-4o (Sodeom)", "Recharts"],
    links: {
      github: "https://github.com/awanzain026-cmyk/NexBot",
    },
  },
  {
    title: "TriageDesk — AI Support Console",
    description:
      "A real-time AI-powered customer support triage system with a multi-agent pipeline. Features intent classification, sentiment monitoring, policy validation, resolution execution, communication drafting, and escalation handling — all orchestrated autonomously. Built for enterprise-grade support operations.",
    image: "/triagedesk.png",
    tags: ["AI Agents", "Multi-Agent Pipeline", "Sentiment Analysis", "Real-Time", "TypeScript", "Next.js"],
    links: {
      live: "https://triagedesk.thetrillioniar.me",
      github: "https://github.com/TriageDesk/TriageDesk",
    },
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A glimpse of my work and initiatives
        </motion.p>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => {
            const hasImage = "image" in project;
            const hasLinks = "links" in project;
            return (
              <motion.div
                key={project.title}
                variants={item}
                className="glass-card group rounded-2xl flex flex-col overflow-hidden"
              >
                {hasImage && (
                  <div className="relative aspect-video overflow-hidden bg-dark-card">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                    {hasImage ? (
                      <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                      </svg>
                    ) : (
                      <project.icon className="text-xl text-blue-400" />
                    )}
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-white group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-zinc-800/50 px-3 py-1 text-xs font-medium text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {hasLinks && (
                    <div className="flex gap-3">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-xs font-semibold text-white transition-all hover:from-blue-500 hover:to-purple-500"
                        >
                          <HiExternalLink className="text-sm" />
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gradient-border inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold text-zinc-300 transition-colors hover:text-white"
                      >
                        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        Source Code
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
