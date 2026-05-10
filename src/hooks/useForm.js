import { useState } from 'react'

export const useForm = (initialState = {}) => {
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateField = (name, value, rules = {}) => {
    if (rules.required && !value.trim()) {
      return 'This field is required'
    }
    
    if (rules.email && value && !/\S+@\S+\.\S+/.test(value)) {
      return 'Please enter a valid email address'
    }
    
    return ''
  }

  const validateForm = (validationRules = {}) => {
    const newErrors = {}
    
    Object.keys(validationRules).forEach(field => {
      const error = validateField(field, formData[field], validationRules[field])
      if (error) {
        newErrors[field] = error
      }
    })
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (onSubmit, validationRules = {}) => {
    setIsSubmitting(true)
    
    if (!validateForm(validationRules)) {
      setIsSubmitting(false)
      return false
    }
    
    try {
      await onSubmit(formData)
      return true
    } catch (error) {
      console.error('Form submission error:', error)
      return false
    } finally {
      setIsSubmitting(false)
    }
  }

  const reset = () => {
    setFormData(initialState)
    setErrors({})
    setIsSubmitting(false)
  }

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    reset,
    setFormData,
    setErrors
  }
}