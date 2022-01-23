import { Suspense } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { routesV2 } from "../routes";
import { Footer } from "../layouts/Footer";
import { PrivatePage } from "../pages/PrivatePage";
import ScrollToTop from "./ScrollToTop";
import { LazyLoading } from "../components/LazyLoading";

export const MyRouter = () => {
  return (
    <Suspense fallback={<LazyLoading />}>
      <HashRouter>
        <ScrollToTop>
          <Switch>
            {Object.values(routesV2).map(
              ({ id, route, component: Page, isPrivate, routeProps }) =>
                isPrivate ? (
                  <Route
                    key={`page-${id}`}
                    path={route}
                    children={<PrivatePage component={Page} />}
                    {...routeProps}
                  />
                ) : (
                  <Route
                    key={`page-${id}`}
                    path={route}
                    component={Page}
                    {...routeProps}
                  />
                )
            )}
          </Switch>
        </ScrollToTop>
        <Footer />
      </HashRouter>
    </Suspense>
  );
};
