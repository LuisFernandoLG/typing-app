import styled, { css } from 'styled-components'
import { Loader } from '../Loader'

export const Button = (
  { children, isLoading, onClick, primary, secondary, pd },
  props
) => {
  return (
    <ButtonStyled
      onClick={onClick}
      disabled={isLoading}
      primary={primary}
      secondary={secondary}
      pd={pd}
      {...props}>
      <Content> {isLoading ? <Loader /> : children} </Content>
      <BaseSizeHelper>{children}</BaseSizeHelper>
    </ButtonStyled>
  )
}

const primaryStyles = css`
  color: ${({ theme: { tertiaryColor } }) => tertiaryColor};
  background: ${({ theme: { primaryColor } }) => primaryColor};
  box-shadow: 0 0.4375rem 1.575rem -1.125rem ${({ theme: { tertiaryColor } }) => tertiaryColor};

  &:hover,
  &:focus {
    box-shadow: 0 0.4375rem 1.575rem -0.625rem ${({ theme: { secondaryColor } }) => secondaryColor};
  }
`

const secondaryStyles = css`
  color: ${({ theme: { disableColor } }) => disableColor};
  border: 3px solid ${({ theme: { bgColor } }) => bgColor};
  background: transparent;

  &:hover,
  &:focus {
  }
`

const ButtonStyled = styled.button`
  position: relative;
  ${({ pd }) =>
    pd
      ? css`
          padding: ${pd};
        `
      : 'padding: 1rem 2rem;'}

  border-radius: ${({ theme: { border_radius } }) => border_radius};
  transition: box-shadow 300ms ease;

  font-size: 1.2rem;
  font-weight: 600;
  user-select: none;
  cursor: pointer;

  ${({ isLoading }) => isLoading && `color:transparent;`}

  ${({ primary }) => (primary ? primaryStyles : null)} 
  ${({ secondary }) => (secondary ? secondaryStyles : null)}
`

const BaseSizeHelper = styled.span`
  opacity: 0;
`
const Content = styled.span`
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
`
