import { useToggle } from '../hooks/useToggle'
import { ToggleButton } from './exercise/ToggleButton'
import { FaMoon, FaSun } from 'react-icons/fa'
import styled from 'styled-components'

export const ThemeSwitcher = () => {
  const [isDarkMode, toggleIsDarkMode] = useToggle(false)

  return (
    <ThemeSwitcherStyled>
      <ToggleButton
        state={isDarkMode}
        ToggleFunction={toggleIsDarkMode}
        enableIcon={FaMoon}
        disableIcon={FaSun}
      />
    </ThemeSwitcherStyled>
  )
}

const ThemeSwitcherStyled = styled.div`
  font-size: 2rem;
`
