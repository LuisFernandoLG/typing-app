import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'
// import { Logo } from '../components/NavBar/Logo'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'

const linkApp = 'https://github.com/LuisFernandoLG/typing-app'

export const Footer = () => {
  return (
    <FooterWrapper as='footer' jc_c ai_c>
      <ExternalLink disabled href={linkApp} target='_blank' rel='noreferrer'>
        <FaGithub />
      </ExternalLink>
      </FooterWrapper>
  )
}

const FooterWrapper = styled(FlexContainer)`
  /* margin-top: 10rem; */
  width: 100%;
  padding: 0.5rem;
  background: ${({ theme: { secondaryColor } }) => secondaryColor};
`

const ExternalLink = styled.a`
  font-size: 1.3rem;
  color: ${({ theme: { bgColor } }) => bgColor};
`
