import { Outlet, NavLink } from 'react-router-dom'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { Button } from '../components/ui/Button'
import { useSession } from '../hooks/useSession'
import { Layout } from '../layouts/Layout'
import { routesV3 } from '../routes'
import { IoKeySharp, IoHomeSharp } from 'react-icons/io5'
import styled from 'styled-components'

export const RicePage = () => {
  const { isAdmin } = useSession()
  return (
    <FlexContainer gap='2rem'>
      <FlexContainer fd_c gap='1rem' jc_fs ai_c>
        <StyledLink to={routesV3.RICE_PAGE.route}>
          <FlexContainer gap='0.5rem'>
            <IoHomeSharp />
            <Button secondary>Inicio</Button>
          </FlexContainer>
        </StyledLink>
        {isAdmin() && (
          <FlexContainer gap='0.5rem' jc_fs ai_c>
            <StyledLink to={routesV3.RICE_PAGE.subRoutes.ADMIN_PAGE.route}>
              <Button secondary>
                <IoKeySharp /> Admin
              </Button>
            </StyledLink>
          </FlexContainer>
        )}
      </FlexContainer>
      <Layout width='90%' mg='1rem 0'>
        <Outlet />
      </Layout>
    </FlexContainer>
  )
}

const StyledLink = styled(NavLink)`
  color: ${({ theme: { disableColor } }) => disableColor};

  .activated {
    opacity: 1;
    color: ${({ theme: { fontColor } }) => fontColor};
    border-bottom: 3px solid ${({ theme: { fontColor } }) => fontColor};
  }
`
