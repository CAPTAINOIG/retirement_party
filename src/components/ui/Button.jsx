import { forwardRef } from "react";
import { motion } from "framer-motion";

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className = "",
      disabled = false,
      loading = false,
      onClick,
      ...props
    },
    ref,
  ) => {
    const baseClasses =
      "font-semibold rounded-lg transition-all duration-300 hover-lift focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-900";

    const variants = {
      primary:
        "bg-gold-500 text-dark-900 hover:bg-gold-400 focus:ring-gold-500",
      secondary:
        "border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-dark-900 focus:ring-gold-500",
      ghost: "text-gray-300 hover:text-gold-400 focus:ring-gray-500",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${
      disabled || loading ? "opacity-50 cursor-not-allowed" : ""
    }`;

    return (
      <motion.button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        onClick={onClick}
        whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
        whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
        {...props}
      >
        {loading ? (
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            <span>Loading...</span>
          </div>
        ) : (
          children
        )}
      </motion.button>
    );
  },
);

Button.displayName = "Button";

export default Button;
