import styled from 'styled-components'

export const FloatContainer = ({ right, left, top, bottom, children }) => {
  return (
    <StyledFloatContainer right={right} left={left} top={top} bottom={bottom}>
      {children}
    </StyledFloatContainer>
  )
}

const StyledFloatContainer = styled.div`
  position: absolute;
  ${({ top }) => (top ? `top:${top};` : null)}
  ${({ right }) => (right ? `right:${right};` : null)}
  ${({ bottom }) => (bottom ? `bottom:${bottom};` : null)}
  ${({ left }) => (left ? `left:${left};` : null)}
  z-index: 300;
`