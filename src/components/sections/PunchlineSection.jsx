import { motion } from "framer-motion";
import { PUNCHLINES } from "../../utils/constants";

const PunchlineSection = () => (
  <section className="relative py-28 px-5 bg-dark-800 overflow-hidden">
    <div
      className="orb orb-pulse absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
      style={{ background: "radial-gradient(ellipse, rgba(241,196,15,0.05) 0%, transparent 70%)" }}
    />

    <div className="relative z-10 max-w-6xl mx-auto">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="eyebrow mb-5 block text-center">A Clean Shift</span>
        <h2 className="font-serif text-4xl md:text-5xl text-white">
          Plainly stated.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {PUNCHLINES.map((item, i) => (
          <motion.div
            key={i}
            className="group relative p-8 rounded-2xl glass border border-white/[0.06] hover-lift cursor-default overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ borderColor: "rgba(241,196,15,0.18)" }}
          >
            <div className="num-badge mb-6 select-none">
              {item.number}
            </div>
            <p className="text-gray-500 text-base leading-relaxed mb-3 line-through decoration-gray-700">
              {item.old}
            </p>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px flex-1 bg-gradient-to-r from-gold-500/40 to-transparent" />
              <span className="text-gold-500 text-lg">→</span>
            </div>
            <p className="text-white font-semibold text-base leading-relaxed">
              {item.new}
            </p>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-500/0 to-gold-500/0 group-hover:from-gold-500/[0.03] group-hover:to-gold-500/[0.06] transition-all duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PunchlineSection;