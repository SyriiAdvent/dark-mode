import { useEffect } from 'react'
import { useLocalStorage, setValue } from './useLocalStorage'

export const useDarkMode = (key, initialValue) => {
  const [storedValue, setstoredValue] = useLocalStorage('darkmode', Boolean)

  useEffect(() => {
    storedValue ? document.querySelector('body').classList.add('dark-mode')
      : document.querySelector('body').classList.remove('dark-mode')
  }, [storedValue])
  
  const toggleDarkMode = () => {
    setstoredValue(!storedValue)
  }
  return [storedValue, toggleDarkMode]
}