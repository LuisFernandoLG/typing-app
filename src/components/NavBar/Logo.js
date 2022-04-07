import styled from 'styled-components'
import { BsKeyboard } from 'react-icons/bs'
import { FlexContainer } from '../shareStyleComponents/FlexContainer'

export const Logo = () => {
  return (
    <Container ai_c fjc_c>
      <BsKeyboard />
      <LogoName>Type And Type</LogoName>
    </Container>
  )
}

const Container = styled(FlexContainer)`


  cursor: pointer;
  
  font-size: 2.5rem;
  color: ${({ theme: { fontColor } }) => fontColor};

`

const LogoName = styled.h2`
margin-left:0.2em;
font-size: 0.5em;
font-weight: 600;
`
