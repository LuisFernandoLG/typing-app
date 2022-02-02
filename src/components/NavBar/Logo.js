import styled from 'styled-components'
import { BsKeyboard } from 'react-icons/bs'
import { FlexContainer } from '../shareStyleComponents/FlexContainer'

export const Logo = () => {
  return (
    <Container ai_c fjc_c>
      <BsKeyboard />
    </Container>
  )
}

const Container = styled(FlexContainer)`
  cursor: pointer;
  font-size: 4rem;
  color: ${({ theme: { fontColor } }) => fontColor};
`
