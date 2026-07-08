import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Signature background element: large faint serif monogram, no blur orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
      >
        <span className="font-display text-[26rem] font-medium leading-none text-white/[0.025] sm:text-[34rem]">
          MZ
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-4 text-sm font-medium tracking-widest uppercase text-zinc-500"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-display mb-6 text-4xl font-medium leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Muhammad Zain</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
          >
            Accounting &amp; Finance Student{" "}
            <span className="text-zinc-500">|</span>{" "}
            <span className="gradient-text">Agentic AI Developer</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mx-auto mb-10 max-w-xl text-base text-zinc-500"
          >
            Building intelligent AI agents and financial models. Passionate about
            using AI to solve real-world problems and drive business decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="btn-press group flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-[#14120f] transition-colors hover:bg-[#dd934f]"
            >
              View My Work
              <HiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="gradient-border btn-press rounded-full px-8 py-3.5 text-sm font-semibold text-zinc-300 transition-colors hover:text-white"
            >
              Hire Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 flex items-center justify-center gap-6 text-sm text-zinc-600"
          >
            <span className="h-px w-12 bg-zinc-800" />
            <span>Scroll to explore</span>
            <span className="h-px w-12 bg-zinc-800" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
