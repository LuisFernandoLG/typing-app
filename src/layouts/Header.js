import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Logo } from '../components/NavBar/Logo'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { Button } from '../components/ui/Button'
import { useLinkRouter } from '../hooks/useLinkRouter'
import { useSession } from '../hooks/useSession'
import { routesV2 } from '../routes'
import { Link } from 'react-router-dom'
import { ProfileMenu } from '../components/ProfileMenu'
import { ThemeSwitcher } from '../components/ThemeSwitcher'

export const Header = () => {
  const { isAuth } = useSession()
  const { goLoginPage, goSignUpPage } = useLinkRouter()
  const indexPath = isAuth
    ? routesV2.LOGGED_APP.subPages.CHOICE_PAGE.route
    : routesV2.INDEX_PAGE.route
  const headerRef = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      const headerHeigh = headerRef.current.clientHeight
      const scrollPosition = document.documentElement.scrollTop
      // console.log({ x: headerRef.current })
      if (scrollPosition > headerHeigh) headerRef.current.classList.add('hidden')
      else headerRef.current.classList.remove('hidden')
    })
  }, [])

  return (
    <HeaderStyled as='header' jc_sb ai_c gap='0.5rem' ref={headerRef}>
      <Link to={indexPath}>
        <Logo />
      </Link>
      <FlexContainer>
        <FlexContainer gap='1rem' jc_c ai_c>
          {isAuth
            ? (
            <>
              <ProfileMenu />
            </>
              )
            : (
            <>
              <Button secondary={true} onClick={goLoginPage} pd='1rem 2rem'>
                Ingreso
              </Button>
              <Button secondary={true} onClick={goSignUpPage} pd='1rem 2rem'>
                Registro
              </Button>
              <ThemeSwitcher />
            </>
              )}
        </FlexContainer>
      </FlexContainer>
    </HeaderStyled>
  )
}

const HeaderStyled = styled(FlexContainer)`


  padding: 0.5rem 1.5rem;
  position: sticky;
  top: 0;
  background: ${({ theme: { tertiaryColor } }) => tertiaryColor};
  /* background: #F7F5F2; */
  /* background: ${({ theme: { whiteColor } }) => whiteColor}; */
  /* background: #DFDFDE; */
  box-shadow: 0 0 40px -35px ${({ theme: { fontColor } }) => fontColor};
  /* border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem; */

  /* transition: background 300ms ease; */
  z-index: 900;
  transition: transform 300ms ease;

  
  &&&.hidden {
    transform: translateY(-100%);
  }

  
`
