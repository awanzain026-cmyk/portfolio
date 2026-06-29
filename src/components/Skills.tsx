import { motion } from "framer-motion";
import {
  HiChip,
  HiCode,
  HiLightningBolt,
  HiCube,
  HiPencil,
  HiShare,
} from "react-icons/hi";
import { FaBrain, FaRocket } from "react-icons/fa";

const skills = [
  { name: "AI Agent Development", icon: FaBrain, color: "text-blue-400", bg: "bg-blue-500/10" },
  { name: "Prompt Engineering", icon: HiLightningBolt, color: "text-purple-400", bg: "bg-purple-500/10" },
  { name: "LangChain & Frameworks", icon: HiCube, color: "text-amber-400", bg: "bg-amber-500/10" },
  { name: "LLM Integration", icon: HiChip, color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { name: "Python Programming", icon: HiCode, color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { name: "AI Workflow Automation", icon: FaRocket, color: "text-rose-400", bg: "bg-rose-500/10" },
  { name: "API Development", icon: HiShare, color: "text-indigo-400", bg: "bg-indigo-500/10" },
  { name: "Tech Blogging", icon: HiPencil, color: "text-teal-400", bg: "bg-teal-500/10" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Technologies and expertise I work with
        </motion.p>

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              className="glass-card group rounded-2xl p-6"
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${skill.bg}`}
              >
                <skill.icon className={`text-xl ${skill.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:gradient-text transition-all">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
