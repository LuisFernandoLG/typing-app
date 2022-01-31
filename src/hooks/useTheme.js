import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export const useTheme = () => {
  const { currentTheme, setDarkTheme, setLightTheme } = useContext(ThemeContext)
  return {
    currentTheme,
    setDarkTheme,
    setLightTheme,
  }
}
