import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
// import { NavBar } from '../components/NavBar/NavBar'
// import { Layout } from '../layouts/Layout'
// import { MenuNavigator } from '../components/MenuNavigator'
import { routesV2 } from '../routes'

const AppLogged = () => {
  return (
    <GridWrapper>
      {/* <MenuNavigator/> */}
        {/* <NavBar /> */}

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
    </GridWrapper>
  )
}

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  gap: 2rem;
`

export default AppLogged
