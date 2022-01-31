import styled from 'styled-components'
import { Wrapper } from '../shareStyleComponents/Wrapper'
import { useLinkRouter } from '../../hooks/useLinkRouter'
import { BsKeyboard } from 'react-icons/bs'

export const Logo = () => {
  const { goIndexPage } = useLinkRouter()

  return (
    <Container flex flex_ai_c flex_jc_c onClick={goIndexPage}>
      <BsKeyboard />
    </Container>
  )
}

const Container = styled(Wrapper)`
  cursor: pointer;
  font-size: 4rem;
  color: ${({ theme: { fontColor } }) => fontColor};
`
