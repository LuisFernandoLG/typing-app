import { createContext, useState } from 'react'

import { themes as initialThemes } from '../style/theme'

const initialCurrentTheme = 'lightTheme'
const lightThemeKey = 'lightTheme'
const darkThemeKey = 'darkTheme'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themes, setThemes] = useState(initialThemes)
  const [currentTheme, setCurrentTheme] = useState(
    initialThemes[initialCurrentTheme]
  )

  const setDarkTheme = () => {
    setCurrentTheme(themes[darkThemeKey])
  }
  const setLightTheme = () => setCurrentTheme(themes[lightThemeKey])

  const values = {
    currentTheme,
    setDarkTheme,
    setLightTheme,
    setThemes
  }

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  )
}

export default ThemeProvider
export { ThemeContext }
