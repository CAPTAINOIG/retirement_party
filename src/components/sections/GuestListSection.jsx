import { motion } from "framer-motion";
import { guestTypes } from "../../utils/constants";

const ICONS = [
  <svg key="data" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 16l4-4 4 4 4-4" />
  </svg>,
  <svg key="finance" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-5.25h6M3.75 6.75h16.5a1.5 1.5 0 010 3H3.75a1.5 1.5 0 010-3z" />
  </svg>,
  <svg key="tech" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21M12 6.75a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5z" />
  </svg>,
  <svg key="community" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>,
];

const GuestListSection = () => (
  <section id="guest-list" className="relative py-28 px-5 bg-dark-950 overflow-hidden">
    <div
      className="orb orb-pulse absolute -left-32 top-1/4 w-96 h-96 pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)" }}
    />

    <div className="relative z-10 max-w-6xl mx-auto">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="eyebrow mb-5 block text-center">The Guest List</span>
        <h2 className="font-serif text-4xl md:text-5xl text-white max-w-2xl mx-auto leading-tight">
          If your title is on this list,{" "}
          <span className="text-white font-light">this Event is for you.</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {guestTypes.map((guest, i) => (
          <motion.div
            key={i}
            className="group relative p-7 rounded-2xl glass border border-white/[0.06] hover-lift cursor-default overflow-hidden flex flex-col gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ borderColor: "rgba(6,182,212,0.2)" }}
          >
            <div className="icon-ring text-primary-400">
              {ICONS[i]}
            </div>
            <h3 className="font-serif text-lg font-semibold text-white leading-snug">
              {guest.title}
            </h3>
            <p className="text-sm text-white leading-relaxed flex-1">
              {guest.description}
            </p>
            <div className="h-px bg-gradient-to-r from-primary-500/0 via-primary-500/20 to-primary-500/0 mt-2 group-hover:via-primary-500/40 transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GuestListSection;