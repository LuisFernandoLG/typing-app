import { useContext, useEffect } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { useThemeDetector } from './useThemeDetector'

const getIsDarkMode = ({ currentTheme }) => currentTheme.name === 'dark Theme'

export const useTheme = () => {
  const { currentTheme, setDarkTheme, setLightTheme } = useContext(ThemeContext)
  const { isOSDarkMode } = useThemeDetector()

  useEffect(() => {
    if (isOSDarkMode) setDarkTheme()
    else setLightTheme()
  }, [isOSDarkMode])

  const toggleTheme = () => {
    if (getIsDarkMode({ currentTheme })) setLightTheme()
    else setDarkTheme()
  }

  return {
    toggleTheme,
    isDarkMode: getIsDarkMode({ currentTheme }),
    currentTheme
  }
}
