import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { FAQS } from "../../utils/constants";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative py-28 px-5 bg-dark-800 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow mb-5 block text-center">FAQ</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            Frequently Asked
          </h2>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${
                  isOpen
                    ? "border-gold-500/25 bg-dark-700/50"
                    : "border-white/[0.06] bg-dark-700/20 hover:border-white/10"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full px-7 py-6 flex items-center justify-between text-left gap-4 focus:outline-none group"
                >
                  <h3
                    className={`font-medium text-base transition-colors duration-200 ${
                      isOpen ? "text-gold-300" : "text-gray-200 group-hover:text-white"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "border-gold-400 bg-gold-500/10 text-gold-400 rotate-0"
                        : "border-gray-700 text-gray-500 group-hover:border-gray-500"
                    }`}
                  >
                    {isOpen ? (
                      <MinusIcon className="w-3.5 h-3.5" />
                    ) : (
                      <PlusIcon className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-7">
                        <div className="h-px bg-gradient-to-r from-gold-500/20 to-transparent mb-5" />
                        <p className="text-gray-400 leading-relaxed text-sm">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;