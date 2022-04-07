import { ToggleButton } from './exercise/ToggleButton'
import { IoMoon, IoSunny } from 'react-icons/io5'
import styled, { css } from 'styled-components'
import { useTheme } from '../hooks/useTheme'
import { FlexContainer } from './shareStyleComponents/FlexContainer'

export const ThemeSwitcher = ({ size }) => {
  const { toggleTheme, isDarkMode } = useTheme()

  return (
    <ThemeSwitcherStyled jc_c ai_c size={size}>
      <ToggleButton
        state={isDarkMode}
        ToggleFunction={toggleTheme}
        enableIcon={IoSunny}
        disableIcon={IoMoon}
      />
    </ThemeSwitcherStyled>
  )
}

const ThemeSwitcherStyled = styled(FlexContainer)`
  ${({ size }) =>
    size
      ? css`
          font-size: {size};
        `
      : null}
`
