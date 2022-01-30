import styled from 'styled-components'
import { Wrapper } from '../shareStyleComponents/Wrapper'
import typeAndTypeIcon from '../../images/keyboard.png'
import { useLinkRouter } from '../../hooks/useLinkRouter'

export const Logo = () => {
  const { goIndexPage } = useLinkRouter()

  return (
    <Container flex flex_ai_c flex_jc_c onClick={goIndexPage}>
      <ImgLogo src={typeAndTypeIcon} alt='Type and Type' />
      {/* <AppName>Type And Type</AppName> */}
    </Container>
  )
}

const Container = styled(Wrapper)`
  cursor: pointer;
`

const AppName = styled.h2`
  font-size: 1em;
  color: ${({ theme: { fontColor } }) => fontColor};
`

const ImgLogo = styled.img`
  height: 3.5em;
`
