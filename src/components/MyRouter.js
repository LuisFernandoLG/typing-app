import { HashRouter, Route, Switch } from "react-router-dom";
import { routes } from "../routes";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar/NavBar";
import { AdminPage } from "./pages/AdminPage";
import AppLogged from "./pages/AppLogged";
import { ExercisePage } from "./pages/ExercisePage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { NumPadPage } from "./pages/NumPadPage";
import { PrivatePage } from "./pages/PrivatePage";
import { RankingPage } from "./pages/RankingPage";
import { SignInPage } from "./pages/SignInPage";
import { StadisticsPage } from "./pages/StadisticsPage";
import ScrollToTop from "./ScrollToTop";
import { Wrapper } from "./shareStyleComponents/Wrapper";
import { SideBar } from "./SideBar/SideBar";

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
