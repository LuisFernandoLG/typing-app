import { useEffect } from 'react'
import { useToggle } from '../hooks/useToggle'
import { ToggleButton } from './exercise/ToggleButton'
import { IoMoon, IoSunny } from 'react-icons/io5'
import styled from 'styled-components'
import { useTheme } from '../hooks/useTheme'

export const ThemeSwitcher = () => {
  const [isDarkMode, toggleIsDarkMode] = useToggle(false)
  const { setDarkTheme, setLightTheme } = useTheme()

  useEffect(() => {
    console.log(isDarkMode)
    if (isDarkMode) setDarkTheme()
    else setLightTheme()
  }, [isDarkMode])

  return (
    <ThemeSwitcherStyled>
      <ToggleButton
        state={isDarkMode}
        ToggleFunction={toggleIsDarkMode}
        enableIcon={IoMoon}
        disableIcon={IoSunny}
      />
    </ThemeSwitcherStyled>
  )
}

const ThemeSwitcherStyled = styled.div`
  font-size: 2rem;
`
