import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar/NavBar'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { BackPageButton } from '../components/ui/BackPageButton'
import { Layout } from '../layouts/Layout'
import { routesV3 } from '../routes'

export const MecaPage = () => {
  return (
    <Layout porRe={true}>
        <BackPageButton backRoute={routesV3.MENU_PAGE.route} text="Menú"/>
      <FlexContainer>
        <NavBar />
        <Layout width="100%">
        <Outlet />
        </Layout>
      </FlexContainer>
    </Layout>
  )
}
