import { useEffect, useState } from 'react'

const getCurrentOSTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches

export const useThemeDetector = () => {
  const [isOSDarkMode, setIsOSDarkMode] = useState(getCurrentOSTheme)
  const changeTheme = () => {
    setIsOSDarkMode(getCurrentOSTheme())
  }

  useEffect(() => {
    const themeMatchMedia = window.matchMedia('(prefers-color-scheme: dark)')
    themeMatchMedia.addEventListener('change', changeTheme)
    return () => themeMatchMedia.removeEventListener('change', changeTheme)
  }, [])

  return { isOSDarkMode }
}
