import { Route, Routes } from 'react-router-dom'
import { Layout } from '../layouts/Layout'
import { routesV2 } from '../routes'

const AppLogged = () => {
  return (
    <Layout>
          <Routes>
            {Object.values(routesV2.LOGGED_APP.subPages).map(
              ({ id, route, component: Page, routeProps }) => (
                <Route
                  key={`sub-page-${id}`}
                  path={route}
                  element={<Page />}
                  {...routeProps}
                />
              )
            )}
          </Routes>
    </Layout>
  )
}

export default AppLogged
