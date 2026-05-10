import { motion } from "framer-motion";

const Card = ({
  children,
  className = "",
  variant = "glass",
  hover = true,
  delay = 0,
  ...props
}) => {
  const variants = {
    glass: "glass-effect",
    solid: "bg-dark-800 border border-gray-700",
    transparent: "bg-transparent",
  };

  const classes = `
    p-6 rounded-xl transition-all duration-300
    ${variants[variant]}
    ${hover ? "hover-lift" : ""}
    ${className}
  `;

  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-50px" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
