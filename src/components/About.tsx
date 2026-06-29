import { motion } from "framer-motion";
import { HiAcademicCap, HiUser } from "react-icons/hi";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="section-heading"
          {...fadeInUp}
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>
        <motion.p className="section-subtitle" initial={fadeInUp.initial} whileInView={fadeInUp.whileInView} viewport={fadeInUp.viewport} transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}>
          Get to know who I am
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            className="glass-card rounded-2xl p-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10">
              <HiUser className="text-2xl text-blue-400" />
            </div>
            <h3 className="mb-4 text-xl font-semibold text-white">Who I Am</h3>
            <p className="leading-relaxed text-zinc-400">
              I&apos;m Muhammad Zain — a BS Accounting &amp; Finance student at Bahria
              University Karachi and an aspiring Agentic AI developer. I build
              intelligent AI agents, automation workflows, and digital tools that
              bridge finance and technology. I believe in using AI to create
              practical solutions that make a real impact.
            </p>
          </motion.div>

          <motion.div
            className="glass-card rounded-2xl p-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10">
              <HiAcademicCap className="text-2xl text-purple-400" />
            </div>
            <h3 className="mb-4 text-xl font-semibold text-white">Leadership</h3>
            <p className="leading-relaxed text-zinc-400">
              As the Class Representative of my batch, I bridge communication
              between students and faculty, organize academic activities, and
              foster a collaborative learning environment. This role has honed
              my leadership, communication, and organizational skills.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
