import styled from 'styled-components'
import { Wrapper } from '../components/shareStyleComponents/Wrapper'
import { FaGithub } from 'react-icons/fa'

const linkApp = 'https://github.com/LuisFernandoLG/typing-app'

export const Footer = () => {
  return (
    <FooterWrapper as='footer' flex flex_jc_c flex_ai_c>
      <ExternalLink href={linkApp} target='_blank' rel='noreferrer'>
        <FaGithub />
      </ExternalLink>
    </FooterWrapper>
  )
}

const FooterWrapper = styled(Wrapper)`
  margin-top: 10rem;
  width: 100%;
  padding: 0.5rem;
  background: ${({ theme: { secondaryColor } }) => secondaryColor};
`

const ExternalLink = styled.a`
  font-size: 1.3rem;
  color: ${({ theme: { bgColor } }) => bgColor};
`
