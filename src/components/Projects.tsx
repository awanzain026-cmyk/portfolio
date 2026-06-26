import { motion } from "framer-motion";
import { HiCode, HiDocumentText, HiAcademicCap } from "react-icons/hi";

const projects = [
  {
    title: "Grade Tracker System",
    description:
      "A comprehensive system for tracking and analyzing student grades across multiple subjects. Features automated GPA calculation, performance trends, and progress reports.",
    icon: HiDocumentText,
    tags: ["Excel", "VBA", "Data Analysis"],
  },
  {
    title: "CR Feedback Form",
    description:
      "An anonymous digital feedback platform that enables students to share concerns and suggestions with their Class Representative, ensuring every voice is heard.",
    icon: HiCode,
    tags: ["Forms", "Data Collection", "Communication"],
  },
  {
    title: "Study Apps Collection",
    description:
      "A curated set of study tools and applications designed to help fellow students manage their academic schedules, track assignments, and prepare for exams efficiently.",
    icon: HiAcademicCap,
    tags: ["Productivity", "Education", "Planning"],
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
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              className="glass-card group rounded-2xl p-6 flex flex-col"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                <project.icon className="text-xl text-blue-400" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white group-hover:gradient-text transition-all">
                {project.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-800/50 px-3 py-1 text-xs font-medium text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
