import styled, { css } from 'styled-components'
import { Loader } from '../Loader'
import { FlexContainer } from '../shareStyleComponents/FlexContainer'

export const Button = (
  { children, isLoading, onClick, primary, secondary, pd, fontSize },
  props
) => {
  return (
    <ButtonStyled
      onClick={onClick}
      disabled={isLoading}
      primary={primary}
      secondary={secondary}
      fontSize={fontSize}
      pd={pd}
      {...props}>
      <Content jc_c ai_c> {isLoading ? <Loader /> : children} </Content>
      <BaseSizeHelper jc_c ai_c>{children}</BaseSizeHelper>
    </ButtonStyled>
  )
}

const primaryStyles = css`
  color: ${({ theme: { fontColor } }) => fontColor};
  background: ${({ theme: { primaryColor } }) => primaryColor};
  
  &:hover,
  &:focus {
    /* box-shadow: 0 0.4375rem 1.575rem -1.125rem ${({ theme: { accentColor } }) => accentColor}; */
    box-shadow: 0 0.4375rem 1.575rem -0.625rem ${({ theme: { secondaryColor } }) => secondaryColor};
  }
`

const secondaryStyles = css`
  color: ${({ theme: { disableColor } }) => disableColor};
  background: transparent;

  &:hover,
  &:focus {
    color: ${({ theme: { fontColor } }) => fontColor};
  }
`

const ButtonStyled = styled.button`
  user-select: none;
  position: relative;
  ${({ pd }) =>
    pd
      ? css`
          padding: ${pd};
        `
      : null}

  border-radius: ${({ theme: { border_radius } }) => border_radius};
  transition: box-shadow 300ms ease, color 300ms ease;

  ${({ fontSize }) => fontSize ? `font-size: ${fontSize}` : 'font-size: 1.2rem'};
  
  font-weight: 600;
  user-select: none;
  cursor: pointer;

  ${({ isLoading }) => isLoading && 'color:transparent;'}

  ${({ primary }) => (primary ? primaryStyles : null)} 
  ${({ secondary }) => (secondary ? secondaryStyles : null)}
`

const BaseSizeHelper = styled(FlexContainer)`
  opacity: 0;
`
const Content = styled(FlexContainer)`
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
`
