import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
// import { BackPageButton } from '../components/ui/BackPageButton'
import { useSession } from '../hooks/useSession'
import { Layout } from '../layouts/Layout'
import { routesV3 } from '../routes'

const EnglishPage = () => {
  const { isAdmin } = useSession()

  return (
    <Layout porRe={true}>

      <FlexContainer>
        <FlexContainer fd_c pd='1rem' gap='1rem'>
          <StyledLink
            to={routesV3.ENGLISH_PAGE.route}
            className={({ isActive }) => (isActive ? 'activated' : null)}>
            Home
          </StyledLink>

          <StyledLink
            to={routesV3.ENGLISH_PAGE.subRoutes.ENGLISH_STATS_PAGE.route}
            className={({ isActive }) => (isActive ? 'activated' : null)}>
            Stats
          </StyledLink>

          {isAdmin() && (
            <StyledLink
              to={routesV3.ENGLISH_PAGE.subRoutes.ENGLISH_ADMIN_PAGE.route}
              className={({ isActive }) => (isActive ? 'activated' : null)}>
              Admin
            </StyledLink>
          )}

        </FlexContainer>
        <Layout width='100%'>
          <Outlet />
        </Layout>
      </FlexContainer>
    </Layout>
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

export default EnglishPage
