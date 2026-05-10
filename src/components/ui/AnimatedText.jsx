import { motion } from 'framer-motion'

const AnimatedText = ({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.8,
  ...props 
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true, margin: '-50px' }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedText