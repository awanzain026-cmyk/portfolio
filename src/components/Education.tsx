import { motion } from "framer-motion";
import { HiAcademicCap, HiLocationMarker, HiCalendar } from "react-icons/hi";

const educationData = [
  {
    degree: "Bachelor of Science in Accounting & Finance",
    institution: "Bahria University, Karachi Campus",
    period: "2025 – Present",
    description:
      "Currently in Semester 1. Actively engaged in coursework covering Accounting, Finance, and Business Studies. Serving as Class Representative, fostering academic excellence and collaboration among peers.",
  },
  {
    degree: "Intermediate (Pre-Engineering)",
    institution: "Bahria College Karsaz, Karachi",
    period: "2023 – 2025",
    description:
      "Completed intermediate education with a focus on Physics, Chemistry, and Mathematics. Developed strong analytical and problem-solving skills.",
  },
  {
    degree: "Matriculation (Computer Science)",
    institution: "School Name, Karachi",
    period: "2021 – 2023",
    description:
      "Completed matriculation with Computer Science as a major. Built a foundation in programming, logic, and computational thinking.",
  },
];

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

        <div className="relative">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-transparent" />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="relative mb-8 pl-16"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="absolute left-4 top-1 flex h-5 w-5 items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/20" />
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="mb-1 text-lg font-semibold text-white">
                  {edu.degree}
                </h3>
                <p className="mb-3 text-sm text-zinc-300">{edu.institution}</p>

                <div className="mb-3 flex flex-wrap gap-4 text-xs text-zinc-500">
                  <span className="flex items-center gap-1.5">
                    <HiCalendar className="text-blue-400" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <HiLocationMarker className="text-purple-400" />
                    Karachi, Pakistan
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-zinc-400">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
