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
        "bg-blue-500 text-white hover:bg-cyan-400 focus:ring-blue-500",
      secondary:
        "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white focus:ring-cyan-400",
      ghost: "text-gray-300 hover:text-cyan-400 focus:ring-gray-500",
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
