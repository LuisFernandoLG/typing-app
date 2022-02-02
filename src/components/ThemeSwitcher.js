import { ToggleButton } from './exercise/ToggleButton'
import { IoMoon, IoSunny } from 'react-icons/io5'
import styled from 'styled-components'
import { useTheme } from '../hooks/useTheme'
import { FlexContainer } from './shareStyleComponents/FlexContainer'

export const ThemeSwitcher = () => {
  const { toggleTheme, isDarkMode } = useTheme()

  return (
    <ThemeSwitcherStyled jc_c ai_c>
      <ToggleButton
        state={isDarkMode}
        ToggleFunction={ toggleTheme }
        enableIcon={IoSunny}
        disableIcon={IoMoon}
      />
    </ThemeSwitcherStyled>
  )
}

const ThemeSwitcherStyled = styled(FlexContainer)`
  font-size: 2rem;
`
