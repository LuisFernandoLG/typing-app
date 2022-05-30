import { Outlet, NavLink } from 'react-router-dom'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { Button } from '../components/ui/Button'
import { useSession } from '../hooks/useSession'
import { Layout } from '../layouts/Layout'
import { routesV3 } from '../routes'

export const RicePage = () => {
  const { isAdmin } = useSession()
  return (
    <FlexContainer gap='2rem'>
      <FlexContainer fd_c gap='1rem'>
        <NavLink to={routesV3.RICE_PAGE.route}>
          <Button secondary>Inicio</Button>
        </NavLink>
        {isAdmin() && (
          <NavLink to={routesV3.RICE_PAGE.subRoutes.ADMIN_PAGE.route}>
            <Button secondary>Admin</Button>
          </NavLink>
        )}
      </FlexContainer>
      <Layout width='90%' mg="1rem 0">
        <Outlet />
      </Layout>
    </FlexContainer>
  )
}
