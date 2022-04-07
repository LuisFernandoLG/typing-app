import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'
// import { Logo } from '../components/NavBar/Logo'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'

const linkApp = 'https://github.com/LuisFernandoLG/typing-app'

export const Footer = () => {
  return (
    <FooterWrapper as='footer' jc_c ai_c>
      <Layout>
        {/* <Logo /> */}
      </Layout>
      <ExternalLink href={linkApp} target='_blank' rel='noreferrer'>
        <FaGithub />
      </ExternalLink>
    </FooterWrapper>
  )
}

const FooterWrapper = styled(FlexContainer)`
  margin-top: 10rem;
  width: 100%;
  padding: 0.5rem;
  background: ${({ theme: { secondaryColor } }) => secondaryColor};
`

const Layout = styled.div`
  /* background: ${({ theme: { primaryColor } }) => primaryColor}; */
  /* opacity: 0.6; */
  border-radius: 10px;
  padding: 0.5rem;
`

const ExternalLink = styled.a`
  font-size: 1.3rem;
  color: ${({ theme: { bgColor } }) => bgColor};
`
