import { motion } from "framer-motion";
import {
  HiCalculator,
  HiChartBar,
  HiBriefcase,
  HiLightningBolt,
  HiGlobe,
  HiChip,
} from "react-icons/hi";

const skills = [
  { name: "Accounting", icon: HiCalculator, color: "text-blue-400", bg: "bg-blue-500/10" },
  { name: "Financial Analysis", icon: HiChartBar, color: "text-purple-400", bg: "bg-purple-500/10" },
  { name: "Business Mathematics", icon: HiBriefcase, color: "text-amber-400", bg: "bg-amber-500/10" },
  { name: "Microeconomics", icon: HiGlobe, color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { name: "Microsoft Excel", icon: HiChip, color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { name: "Leadership & Communication", icon: HiLightningBolt, color: "text-rose-400", bg: "bg-rose-500/10" },
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
          Tools and expertise I bring to the table
        </motion.p>

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
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
