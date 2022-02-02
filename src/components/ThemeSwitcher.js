import { ToggleButton } from './exercise/ToggleButton'
import { IoMoon, IoSunny } from 'react-icons/io5'
import styled from 'styled-components'
import { useTheme } from '../hooks/useTheme'

export const ThemeSwitcher = () => {
  const { toggleTheme, isDarkMode } = useTheme()

  return (
    <ThemeSwitcherStyled>
      <ToggleButton
        state={isDarkMode}
        ToggleFunction={ toggleTheme }
        enableIcon={IoSunny}
        disableIcon={IoMoon}
      />
    </ThemeSwitcherStyled>
  )
}

const ThemeSwitcherStyled = styled.div`
  font-size: 2rem;
`
