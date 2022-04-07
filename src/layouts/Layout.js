import styled from 'styled-components'

export const Layout = ({ children, bgColor, width, height, mg, pd }) => {
  return (
    <LayoutStyled
      bgColor={bgColor}
      width={width}
      height={height}
      mg={mg}
      pd={pd}>
      {children}
    </LayoutStyled>
  )
}

const LayoutStyled = styled.div`
  ${({ mg }) => (mg ? `margin:${mg};` : null)}
  ${({ pd }) => (pd ? `padding:${pd};` : null)}
      ${({ width }) => (width ? `width:${width};` : null)}
`
