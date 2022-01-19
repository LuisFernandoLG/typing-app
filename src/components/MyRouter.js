import { HashRouter, Route, Switch } from "react-router-dom";
import { routes } from "../routes";
import { Footer } from "../layouts/Footer";
import AppLogged from "../pages/AppLogged";
import { LoginPage } from "../pages/LoginPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { PrivatePage } from "../pages/PrivatePage";
import { SignInPage } from "../pages/SignInPage";
import ScrollToTop from "./ScrollToTop";
import { Wrapper } from "./shareStyleComponents/Wrapper";

export const MyRouter = () => {
  return (
    <HashRouter>
      <Wrapper flex>
        <ScrollToTop>
          <Switch>
            <Route path={routes.LOGIN_PAGE} component={LoginPage} />
            <Route path={routes.SIGNUP_PAGE} component={SignInPage} />
            <Route
              path={routes.APP}
              children={<PrivatePage component={AppLogged} />}
            />
            <Route to="*" component={NotFoundPage} />
          </Switch>
        </ScrollToTop>
      </Wrapper>
      <Footer />
    </HashRouter>
  );
};
