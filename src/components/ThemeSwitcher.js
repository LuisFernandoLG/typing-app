import { useToggle } from '../hooks/useToggle'
import { ToggleButton } from './exercise/ToggleButton'
import { IoMoon, IoSunny } from 'react-icons/io5'
import styled from 'styled-components'

export const ThemeSwitcher = () => {
  const [isDarkMode, toggleIsDarkMode] = useToggle(false)

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
