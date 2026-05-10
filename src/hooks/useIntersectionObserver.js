import { useState, useEffect } from 'react'

export const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ 
              ...prev, 
              [entry.target.id]: true 
            }))
          }
        })
      },
      { 
        threshold: 0.1,
        rootMargin: '50px',
        ...options 
      }
    )

    // Observe all elements with IDs
    const elementsToObserve = document.querySelectorAll('[id]')
    elementsToObserve.forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return isVisible
}