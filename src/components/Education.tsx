import { motion } from "framer-motion";
import { HiAcademicCap, HiLocationMarker, HiCalendar } from "react-icons/hi";

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="gradient-text">Education</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My academic journey
        </motion.p>

        <motion.div
          className="glass-card rounded-2xl p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10">
            <HiAcademicCap className="text-2xl text-blue-400" />
          </div>

          <h3 className="mb-2 text-xl font-semibold text-white">
            Bachelor of Science in Accounting &amp; Finance
          </h3>
          <p className="mb-4 text-base text-zinc-300">
            Bahria University, Karachi Campus
          </p>

          <div className="mb-4 flex flex-wrap gap-4 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <HiCalendar className="text-blue-400" />
              2025 – Present
            </span>
            <span className="flex items-center gap-1.5">
              <HiLocationMarker className="text-purple-400" />
              Karachi, Pakistan
            </span>
          </div>

          <p className="leading-relaxed text-zinc-400">
            Currently in Semester 1, actively engaged in coursework covering
            Accounting, Finance, Business Mathematics, and Microeconomics.
            Serving as the Class Representative, fostering academic excellence
            and collaboration among peers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
