import { useContext, useEffect } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { useThemeDetector } from './useThemeDetector'

const darkModeName = 'dark theme'
const lightModeName = 'light theme'

const getIsDarkMode = ({ currentTheme }) => currentTheme.name === darkModeName

const saveThemeToLocalStorage = ({ themeName }) => localStorage.setItem('theme', themeName)
const getThemeFromLocalStorage = () => localStorage.getItem('theme') || null

export const useTheme = () => {
  const { currentTheme, setDarkTheme, setLightTheme } = useContext(ThemeContext)
  const { isOSDarkMode } = useThemeDetector()

  useEffect(() => {
    if (getThemeFromLocalStorage()) return null
    if (isOSDarkMode) setDarkTheme()
    else setLightTheme()
  }, [isOSDarkMode])

  const toggleTheme = () => {
    if (getIsDarkMode({ currentTheme })) {
      setLightTheme()
      saveThemeToLocalStorage({ themeName: lightModeName })
    } else {
      setDarkTheme()
      saveThemeToLocalStorage({ themeName: darkModeName })
    }
  }

  useEffect(() => {
    if (getThemeFromLocalStorage() === darkModeName) setDarkTheme()
    if (getThemeFromLocalStorage() === lightModeName) setLightTheme()
  }, [])

  return {
    toggleTheme,
    isDarkMode: getIsDarkMode({ currentTheme }),
    currentTheme
  }
}
