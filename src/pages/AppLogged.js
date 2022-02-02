import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { routesV2 } from '../routes'

const AppLogged = () => {
  return (
    <GridWrapper>
      <SubPageContainer>
        <Routes>
          {Object.values(routesV2.LOGGED_APP.subPages).map(
            ({ id, route, component: Page, routeProps }) => (
              <Route
                key={`sub-page-${id}`}
                path={route}
                element={<Page/>}
                {...routeProps}
              />
            )
          )}
        </Routes>
      </SubPageContainer>
    </GridWrapper>
  )
}

const SubPageContainer = styled.div`
  max-width: 1000px;
  width: 90%;
  margin: 0 auto;

  min-height: 90vh;
`

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  gap: 2rem;
`

export default AppLogged
