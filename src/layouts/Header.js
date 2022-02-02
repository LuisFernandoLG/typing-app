import styled from 'styled-components'
import { Logo } from '../components/NavBar/Logo'
import { NavBar } from '../components/NavBar/NavBar'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { ThemeSwitcher } from '../components/ThemeSwitcher'
import { Button } from '../components/ui/Button'
import { useLinkRouter } from '../hooks/useLinkRouter'
import { useSession } from '../hooks/useSession'
import { IoLogOutOutline } from 'react-icons/io5'
import { routesV2 } from '../routes'
import { Link } from 'react-router-dom'

export const Header = () => {
  const { isAuth, handleLogOut } = useSession()
  const { goLoginPage, goSignUpPage } = useLinkRouter()
  const indexPath = isAuth ? routesV2.LOGGED_APP.subPages.HOME_PAGE.route : routesV2.INDEX_PAGE.route

  return (
    <HeaderStyled as='header' jc_sb ai_c gap='0.5rem'>
      <Link to={indexPath}>
        <Logo />
      </Link>
      {isAuth && <NavBar />}

      <FlexContainer>
        {isAuth
          ? (
          <Button secondary={true} onClick={handleLogOut} pd='0.5rem'>
            <IoLogOutOutline />
          </Button>
            )
          : (
          <>
            <Button secondary={true} onClick={goLoginPage} pd='0.5rem 1.5rem'>
              Ingreso
            </Button>
            <Button primary={true} onClick={goSignUpPage} pd='0.5rem 1.5rem'>
              Registro
            </Button>
          </>
            )}
        <ThemeSwitcher />
      </FlexContainer>
    </HeaderStyled>
  )
}

const HeaderStyled = styled(FlexContainer)`
  padding: 1rem 1.5rem;
`
