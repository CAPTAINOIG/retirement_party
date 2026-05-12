import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";
import { PARTICLES } from "../../utils/constants";

const HeroSection = () => {
  const scrollToRSVP = () =>
    document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });

  const scrollToAbout = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-950 pt-[68px]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="orb orb-pulse"
          style={{ width: 600, height: 600, top: "-15%", left: "-10%",
            background: "radial-gradient(circle, rgba(27,110,243,0.13) 0%, transparent 70%)" }}
        />
        <div
          className="orb orb-pulse"
          style={{ width: 500, height: 500, bottom: "-10%", right: "-8%", animationDelay: "3s",
            background: "radial-gradient(circle, rgba(27,110,243,0.09) 0%, transparent 70%)" }}
        />
        <div
          className="orb orb-pulse"
          style={{ width: 300, height: 300, top: "50%", left: "50%", transform: "translate(-50%,-50%)", animationDelay: "1.5s",
            background: "radial-gradient(circle, rgba(21,87,204,0.06) 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(27,110,243,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(27,110,243,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-transparent to-dark-950/60" />
      </div>

      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-400"
          style={{ left: p.left, top: p.top, width: 3, height: 3 }}
          animate={{ y: [0, -20, 0], opacity: [0.15, 0.7, 0.15] }}
          transition={{ duration: 4 + i * 0.3, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}

      <div className="relative z-10 text-center max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          className="flex items-center justify-center mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="eyebrow">The Retirement Party · Lagos · 10 July 2026</span>
        </motion.div>

        <motion.h1
          className="font-serif mb-10 leading-[1.1] tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="block text-4xl sm:text-5xl lg:text-[3.8rem] font-bold text-gray-300 mb-3">
            Pawa BI gave us a decade of dashboards.
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-[3.8rem] font-extrabold text-white">
            Immortal AI gives us{" "}
            <span className="primary-underline text-cyan-400">decisions</span>.
          </span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          This July in Lagos, we are honouring the tools that built modern
          business intelligence — and welcoming the era that replaces them.
          <br className="hidden sm:block" />
          <span className="text-gray-300 font-medium">
            {" "}One thousand Data Enthusiasts. One night. The handover begins.
          </span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
        >
          <motion.button
            onClick={scrollToRSVP}
            className="px-9 py-4 text-sm font-bold tracking-widest uppercase bg-blue-500 text-white rounded-xl hover:bg-cyan-400 transition-colors duration-200 shadow-[0_0_32px_rgba(34,211,238,0.28)]"
            whileHover={{ scale: 1.03, boxShadow: "0 0 48px rgba(34,211,238,0.45)" }}
            whileTap={{ scale: 0.97 }}
          >
            Reserve My Seat →
          </motion.button>

          <motion.button
            onClick={scrollToAbout}
            className="px-9 py-4 text-sm font-bold tracking-widest uppercase border border-cyan-400/30 text-cyan-400 rounded-xl hover:border-cyan-400/60 hover:bg-cyan-400/5 transition-all duration-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-2 text-cyan-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.05 }}
        >
          <StarIcon className="w-3 h-3" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-500">
            Curated guest list · 1,000 seats · No walk-ins
          </span>
          <StarIcon className="w-3 h-3" />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 bounce-y"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="flex flex-col items-center gap-1 text-gray-600">
          <span className="text-[10px] tracking-[0.18em] uppercase font-medium">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
