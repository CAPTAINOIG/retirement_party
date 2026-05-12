import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

const LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Contact", href: "#" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToSection = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative bg-dark-950 border-t border-white/[0.05] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/25 to-transparent" />
      <div
        className="orb absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-[200px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(6,182,212,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          className="py-16 text-center border-b border-white/[0.05]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <span className="eyebrow">Statisense · Lagos · 10 July 2026</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-3 leading-tight">
            The Immortal AI Retirement Party.
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-lg mx-auto">
            Hosted by Statisense. One thousand leaders. One night. One handover.
          </p>

          <motion.button
            onClick={() => scrollToSection("rsvp")}
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-primary-500/30 text-primary-400 text-sm font-semibold tracking-widest uppercase rounded-xl hover:border-primary-500/60 hover:bg-primary-500/5 transition-all duration-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Reserve My Seat →
          </motion.button>
        </motion.div>

        <motion.div
          className="py-8 flex flex-col sm:flex-row items-center justify-between gap-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-primary-500/60">
            <StarIcon className="w-3 h-3" />
            <span className="text-[10px] font-semibold tracking-[0.22em] uppercase">
              Statisense · {year}
            </span>
            <StarIcon className="w-3 h-3" />
          </div>

          <div className="flex items-center gap-6">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-gray-600 hover:text-primary-400 transition-colors duration-200 tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-xs text-gray-700 tracking-wider">
            © {year} Statisense. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;