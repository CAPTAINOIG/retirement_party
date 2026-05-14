import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const SuccessView = ({ onRegisterAnother }) => (
  <div className="text-center py-10">
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-cyan-500/20"
    >
      <CheckCircleIcon className="h-16 w-16 text-cyan-400" />
    </motion.div>

    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-4 text-3xl font-bold text-white md:text-4xl font-sans"
    >
      Your seat is reserved! 🎉
    </motion.h3>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="text-gray-200 mb-8 text-lg leading-relaxed md:text-xl max-w-lg mx-auto font-sans"
    >
      Thank you for registering for The Retirement Party! We're excited to have you join us for this historic event.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="space-y-4 mb-8"
    >
      <p className="text-gray-300 text-base font-semibold font-sans">
        What's next?
      </p>
      <ul className="text-gray-400 mx-auto max-w-md space-y-3 text-left text-sm font-sans">
        <li className="flex items-start">
          <span className="bg-cyan-400 mt-2 mr-3 h-1.5 w-1.5 rounded-full flex-shrink-0"></span>
          You'll receive a confirmation email with venue details and event information
        </li>
        <li className="flex items-start">
          <span className="bg-cyan-400 mt-2 mr-3 h-1.5 w-1.5 rounded-full flex-shrink-0"></span>
          Event materials and exclusive content will be shared before July 10th
        </li>
        <li className="flex items-start">
          <span className="bg-cyan-400 mt-2 mr-3 h-1.5 w-1.5 rounded-full flex-shrink-0"></span>
          Connect with fellow data professionals at this exclusive gathering
        </li>
      </ul>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="space-y-4"
    >
      <p className="text-xs tracking-widest uppercase text-cyan-600 font-semibold font-sans">
        The Retirement Party · Lagos · 17 July 2026
      </p>
      
      {onRegisterAnother && (
        <button
          onClick={onRegisterAnother}
          className="px-8 py-3 text-base font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 font-sans"
        >
          Register Another Person
        </button>
      )}
    </motion.div>
  </div>
);

export default SuccessView;