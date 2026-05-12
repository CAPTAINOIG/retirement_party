import { forwardRef } from "react";

const Input = forwardRef(
  ({ label, error, required = false, className = "", ...props }, ref) => {
    const inputClasses = `
    w-full px-4 py-3 bg-dark-700 border rounded-lg 
    transition-colors duration-200 
    focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent
    ${
      error
        ? "border-red-500 focus:ring-red-400"
        : "border-gray-600 focus:border-cyan-400"
    }
    ${className}
  `;

    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-gray-200">
            {label}
            {required && <span className="text-red-400 ml-1">*</span>}
          </label>
        )}
        <input ref={ref} className={inputClasses} {...props} />
        {error && <p className="text-red-400 text-sm">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
