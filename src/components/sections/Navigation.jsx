import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EVENT_INFO, NAVIGATION_ITEMS } from "../../utils/constants";
import statisenseLogo from "../../assets/statisense.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-dark-900/90 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex justify-between items-center h-[68px]">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-2.5 focus:outline-none group"
              aria-label="Go to top"
            >
              <img
                src={statisenseLogo}
                alt="Statisense"
                className="h-8 w-8 object-contain flex-shrink-0"
              />
              <span className="text-white font-bold text-base tracking-tight leading-none">
                statisense
              </span>
            </button>

            <div className="hidden md:flex items-center gap-8">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-white hover:text-white transition-colors duration-200 focus:outline-none"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <motion.a
                href="https://tix.africa/discover/retirepawabi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white flex items-center gap-2 px-4 py-2.5 text-[0.75rem] font-bold tracking-[0.1em] text-black rounded-full hover:bg-gray-200 transition-colors duration-200 focus:outline-none sm:px-5"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="hidden xs:inline">Get Ticket</span>
                <span className="lg:hidden md:hidden sm:block">Get Ticket</span>
                <span className="opacity-70">→</span>
              </motion.a>

              <button
                className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors focus:outline-none"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span
                    className={`h-px w-full bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
                  />
                  <span
                    className={`h-px w-full bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
                  />
                  <span
                    className={`h-px w-full bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-dark-950/95 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="relative z-10 flex flex-col items-center justify-center h-full gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
            >
              {NAVIGATION_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-bold text-3xl text-white/80 hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.a
                href="https://tix.africa/discover/retirepawabi"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-8 py-3 bg-white text-black font-bold rounded-lg text-sm tracking-wider uppercase hover:bg-cyan-400 transition-colors text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                Get Ticket →
              </motion.a>
              <motion.button
                onClick={() => scrollToSection("rsvp")}
                className="mt-2 px-8 py-3 bg-blue-500 text-white font-bold rounded-lg text-sm tracking-wider uppercase hover:bg-cyan-400 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Reserve My Seat →
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
