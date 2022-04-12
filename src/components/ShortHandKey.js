import { useEffect } from 'react'
import styled from 'styled-components'
import { FlexContainer } from './shareStyleComponents/FlexContainer'
export const ShorHandKey = ({ children, code, handleKeyDown, textLeyend }) => {
  const InternalHandleKeyDown = (e) => {
    if (code === e.code) handleKeyDown()
  }

  useEffect(() => {
    window.addEventListener('keydown', InternalHandleKeyDown)

    return () => window.removeEventListener('keydown', InternalHandleKeyDown)
  }, [])

  return (
    <FlexContainer fd_c ai_c jc_c>
      <div>{children}</div> <TextLeyend>{textLeyend}</TextLeyend>
    </FlexContainer>
  )
}

const TextLeyend = styled.p`
  text-align: center;
  color: ${({ theme: { fontColor } }) => fontColor};
`
