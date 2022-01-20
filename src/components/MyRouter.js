import { HashRouter, Route, Switch } from "react-router-dom";
import { routes, routesV2 } from "../routes";
import { Footer } from "../layouts/Footer";
import AppLogged from "../pages/AppLogged";
import { LoginPage } from "../pages/LoginPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { PrivatePage } from "../pages/PrivatePage";
import ScrollToTop from "./ScrollToTop";
import { Wrapper } from "./shareStyleComponents/Wrapper";

export const MyRouter = () => {
  return (
    <HashRouter>
      <Wrapper flex>
        <ScrollToTop>
          <Switch>
            {Object.values(routesV2).map(
              ({
                id,
                route,
                component: PageComponent,
                isPrivate,
                routeProps,
              }) =>
                isPrivate ? (
                  <Route
                    key={`page-${id}`}
                    path={route}
                    children={<PrivatePage component={PageComponent} />}
                    {...routeProps}
                  />
                ) : (
                  <Route
                    key={`page-${id}`}
                    path={route}
                    component={PageComponent}
                    {...routeProps}
                  />
                )
            )}
          </Switch>
        </ScrollToTop>
      </Wrapper>
      <Footer />
    </HashRouter>
  );
};
