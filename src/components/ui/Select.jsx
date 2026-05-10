import { forwardRef } from "react";

const Select = forwardRef(
  (
    {
      label,
      error,
      required = false,
      options = [],
      placeholder = "Select an option",
      className = "",
      ...props
    },
    ref,
  ) => {
    const selectClasses = `
    w-full px-4 py-3 bg-dark-700 border rounded-lg 
    transition-colors duration-200 
    focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent
    text-white
    ${
      error
        ? "border-red-500 focus:ring-red-400"
        : "border-gray-600 focus:border-gold-400"
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
        <select ref={ref} className={selectClasses} {...props}>
          <option value="" className="bg-dark-700 text-gray-300">
            {placeholder}
          </option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-dark-700 text-white"
            >
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="text-red-400 text-sm">{error}</p>}
      </div>
    );
  },
);

Select.displayName = "Select";

export default Select;
