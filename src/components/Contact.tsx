import { motion } from "framer-motion";
import { HiMail, HiPhone, HiDownload } from "react-icons/hi";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const contactLinks = [
  {
    label: "Email",
    value: "muhammadzain@email.com",
    href: "mailto:muhammadzain@email.com",
    icon: HiMail,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/muhammadzain",
    href: "https://linkedin.com/in/muhammadzain",
    icon: FaLinkedin,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    label: "WhatsApp",
    value: "+92 300 1234567",
    href: "https://wa.me/923001234567",
    icon: FaWhatsapp,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
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

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group rounded-2xl p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${link.bg}`}
              >
                <link.icon className={`text-xl ${link.color}`} />
              </div>
              <h3 className="mb-1 text-sm font-medium text-zinc-500">
                {link.label}
              </h3>
              <p className="text-sm font-medium text-white group-hover:gradient-text transition-all">
                {link.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:from-blue-500 hover:to-purple-500"
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
