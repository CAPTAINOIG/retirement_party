import { useState, useRef, useEffect } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const CustomSelect = ({ 
  label, 
  error, 
  required = false, 
  options = [], 
  placeholder = 'Select an option',
  value,
  onChange,
  name,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (value) {
      const option = options.find(opt => opt.value === value)
      setSelectedOption(option)
    }
  }, [value, options])

  const handleSelect = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
    if (onChange) {
      onChange({
        target: {
          name,
          value: option.value
        }
      })
    }
  }

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-200">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`
            w-full px-4 py-3 bg-dark-700 border rounded-lg 
            transition-colors duration-200 text-left
            focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent
            flex items-center justify-between
            ${error 
              ? 'border-red-500 focus:ring-red-400' 
              : 'border-gray-600 focus:border-gold-400'
            }
            ${className}
          `}
        >
          <span className={selectedOption ? 'text-white' : 'text-gray-400'}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDownIcon 
            className={`w-5 h-5 text-gold-400 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute z-50 w-full mt-1 bg-dark-700 border border-gray-600 rounded-lg shadow-lg max-h-60 overflow-auto">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option)}
                className={`
                  w-full px-4 py-3 text-left hover:bg-gold-400 hover:text-dark-900 
                  transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg
                  ${selectedOption?.value === option.value 
                    ? 'bg-gold-400 text-dark-900' 
                    : 'text-white'
                  }
                `}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}
    </div>
  )
}

export default CustomSelect