import { motion } from "framer-motion";

const FinalCTASection = () => {
  const scrollToRSVP = () =>
    document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative py-32 px-5 bg-dark-950 overflow-hidden">
      <div
        className="orb orb-pulse absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 65%)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6,182,212,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow mb-8 block text-center">10 July 2026 · Lagos Island</span>

          <h2 className=" text-4xl sm:text-5xl md:text-[3.5rem] text-white leading-tight mb-6">
            The next era of Data Intelligence{" "}
            <span className="italic text-gray-200 font-light">begins in Lagos.</span>
          </h2>

          <p className="text-gray-200 text-xl mb-12 leading-relaxed">
            One thousand seats. One night.{" "}
            <span className="text-gray-300">Be in the room when the handover happens.</span>
          </p>

          <motion.button
            onClick={scrollToRSVP}
            className="inline-flex items-center gap-3 px-12 py-5 bg-primary-500 text-white font-bold text-sm tracking-[0.16em] uppercase rounded-xl hover:bg-primary-400 transition-colors duration-200 shadow-[0_0_48px_rgba(6,182,212,0.3)]"
            whileHover={{ scale: 1.04, boxShadow: "0 0 64px rgba(6,182,212,0.45)" }}
            whileTap={{ scale: 0.97 }}
          >
            Reserve My Seat
            <span className="text-lg leading-none">→</span>
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          viewport={{ once: true }}
        >
          {[
            { value: "1,000", label: "Curated Seats" },
            { value: "1", label: "Night Only" },
            { value: "Free", label: "For Approved Guests" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-gray-200 mb-1">{stat.value}</p>
              <p className="text-xs text-gray-200 tracking-widest uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;