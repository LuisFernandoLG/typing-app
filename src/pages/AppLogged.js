import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { routesV2 } from "../routes";
import { NavBar } from "../components/NavBar/NavBar";

const AppLogged = () => {
  return (
    <GridWrapper>
      <NavBar />
      <SubPageContainer>
        <Switch>
          {Object.values(routesV2.LOGGED_APP.subPages).map(
            ({ id, route, component: Page, routeProps }) => (
              <Route
                key={`sub-page-${id}`}
                path={route}
                component={Page}
                {...routeProps}
              />
            )
          )}
        </Switch>
      </SubPageContainer>
    </GridWrapper>
  );
};

const SubPageContainer = styled.div`
  max-width: 1000px;
  width: 90%;
  margin: 0 auto;

  min-height: 90vh;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  gap: 2rem;

  background: ${({ theme: { bgColor } }) => bgColor};
`;

export default AppLogged;
