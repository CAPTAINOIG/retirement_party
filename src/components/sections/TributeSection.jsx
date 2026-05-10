import { motion } from "framer-motion";
import { TIMELINE } from "../../utils/constants";

const TributeSection = () => (
  <section
    id="about"
    className="relative py-28 px-5 bg-dark-950 overflow-hidden"
  >
    <div
      className="orb orb-pulse absolute -right-40 top-1/3 w-96 h-96 pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, rgba(241,196,15,0.07) 0%, transparent 70%)",
      }}
    />

    <div className="relative z-10 max-w-5xl mx-auto">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center mb-5">
          <span className="eyebrow">A Tribute</span>
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-[3.2rem] text-white mb-6 leading-tight">
          A decade of service.{" "}
          <span className="italic text-gray-400 font-light">
            One night of thanks.
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          For twenty years, the dashboard was the destination. Three tools
          shaped how Africa measured its business. On July 10th, we give them
          the send-off they deserve.
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-[calc(2rem)] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/10 via-gold-500/30 to-gold-500/10 -translate-x-1/2" />
        <div className="space-y-12">
          {TIMELINE.map((item, i) => {
            const isRight = i % 2 === 0;
            return (
              <motion.div
                key={i}
                className={`relative flex items-start gap-8 ${isRight ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
                initial={{ opacity: 0, x: isRight ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-60px" }}
              >
                <div className="relative z-10 flex-shrink-0 ml-[calc(2rem-0.5rem)] md:ml-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-4">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      item.isNew
                        ? "border-gold-400 bg-gold-500 shadow-[0_0_16px_rgba(241,196,15,0.6)]"
                        : "border-gold-600/50 bg-dark-700"
                    }`}
                  />
                </div>

                <div
                  className={`ml-6 md:ml-0 md:w-[45%] ${
                    isRight ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div
                    className={`p-6 rounded-2xl border transition-all duration-300 hover-lift ${
                      item.isNew ? "glass-gold" : "glass"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`text-2xl font-serif font-bold ${
                          item.isNew ? "text-gold-400" : "text-gray-500"
                        }`}
                      >
                        {item.tool}
                      </span>
                      {item.isNew && (
                        <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/20">
                          Now
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold tracking-[0.12em] uppercase text-gray-500 mb-2">
                      {item.era}
                    </p>
                    <p
                      className={`text-sm leading-relaxed ${item.isNew ? "text-gray-300" : "text-gray-500"}`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <motion.div
        className="mt-20 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="font-serif italic text-xl text-gray-400 leading-relaxed">
          "On July 10th in Lagos, we are throwing the tools that built the
          legacy Business Intelligence a proper retirement party. You are
          invited to the handover."
        </p>
      </motion.div>
    </div>
  </section>
);

export default TributeSection;
