import styled from 'styled-components'
import { Wrapper } from '../components/shareStyleComponents/Wrapper'
import { RedirectLink } from '../components/ui/RedirectLink'
import { FaGithub } from 'react-icons/fa'

const linkApp = 'https://github.com/LuisFernandoLG/typing-app'

export const Footer = () => {
  return (
    <FooterWrapper as='footer' flex flex_jc_c flex_ai_c>
      {/* <Wrapper> */}
      {/* <Tit  le>Type and Type</Tit> */}
      <ExternalLink href={linkApp} target='_blank' rel='noreferrer'>
        <FaGithub />
      </ExternalLink>
      {/* <Paragraph>
          Blvd. Tecnológico, Col. Guaymitas 23440 San José del Cabo, México
        </Paragraph> */}
      {/* </Wrapper> */}

      {/* <Wrapper>
        <Title>Contacto</Title>
        <Paragraph>support@typeandtype.com</Paragraph>
      </Wrapper> */}
    </FooterWrapper>
  )
}

const FooterWrapper = styled(Wrapper)`
  margin-top: 20rem;
  width: 100%;
  padding: 0.5rem;
  background: ${({ theme: { secondaryColor } }) => secondaryColor};
`

const Title = styled.h3`
  color: ${({ theme: { tertiaryColor } }) => tertiaryColor};
  font-weight: 400;
`
const Paragraph = styled.p``

const ExternalLink = styled.a`
  font-size: 2rem;
  color: ${({ theme: { bgColor } }) => bgColor};
`
