import { motion } from "framer-motion";
import { HiMail, HiPhone, HiDownload, HiPaperAirplane } from "react-icons/hi";
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

const contactLinks = [
  {
    label: "Email",
    value: "zainmalik.622aa@gmail.com",
    href: "mailto:zainmalik.622aa@gmail.com",
    icon: HiMail,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    label: "Phone",
    value: "+92 311 7780927",
    href: "tel:+923117780927",
    icon: HiPhone,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/muhammad-zain-359626291",
    href: "https://www.linkedin.com/in/muhammad-zain-359626291",
    icon: FaLinkedin,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    label: "WhatsApp",
    value: "+92 311 7780927",
    href: "https://wa.me/923117780927",
    icon: FaWhatsapp,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Let&apos;s connect and build something great together
        </motion.p>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-6 text-xl font-semibold text-white">
              Contact Information
            </h3>
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card group flex items-center gap-4 rounded-2xl p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${link.bg}`}
                >
                  <link.icon className={`text-lg ${link.color}`} />
                </div>
                <div className="min-w-0">
                  <p className="mb-0.5 text-xs font-medium text-zinc-500">
                    {link.label}
                  </p>
                  <p className="truncate text-sm font-medium text-white group-hover:gradient-text transition-all">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-6 text-xl font-semibold text-white">
              Send a Message
            </h3>
            <form
              action="https://formsubmit.co/zainmalik.622aa@gmail.com"
              method="POST"
              className="glass-card space-y-5 rounded-2xl p-6"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Message"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://your-portfolio.vercel.app/thanks.html"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:from-blue-500 hover:to-purple-500"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <HiPaperAirplane className="text-base" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="/Muhammad_Zain_CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiDownload />
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
