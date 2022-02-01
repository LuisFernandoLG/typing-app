import styled from 'styled-components'
import { Wrapper } from '../shareStyleComponents/Wrapper'
import { BsKeyboard } from 'react-icons/bs'

export const Logo = () => {
  return (
    <Container flex flex_ai_c flex_jc_c>
      <BsKeyboard />
    </Container>
  )
}

const Container = styled(Wrapper)`
  cursor: pointer;
  font-size: 4rem;
  color: ${({ theme: { fontColor } }) => fontColor};
`
