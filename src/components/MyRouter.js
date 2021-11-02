import { HashRouter, Route, Switch } from "react-router-dom";
import { routes } from "../routes";
import { NavBar } from "./NavBar/NavBar";
import { ExercisePage } from "./pages/ExercisePage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { MyExercisesPage } from "./pages/MyExercisesPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { NumPadPage } from "./pages/NumPadPage";
import { PrivatePage } from "./pages/PrivatePage";
import { RankingPage } from "./pages/RankingPage";
import { StadisticsPage } from "./pages/StadisticsPage";
import { Wrapper } from "./shareStyleComponents/Wrapper";
import { SideBar } from "./SideBar/SideBar";

export const MyRouter = () => {
  return (
    <HashRouter>
      <NavBar />
      <Wrapper flex>
        <Switch>
          <Route path={routes.LOGIN_PAGE} component={LoginPage} />

          <Route
            path={`${routes.EXERCICE_PAGE}/:idQuote`}
            children={<PrivatePage component={ExercisePage} />}
          />
          <Route
            exact
            path={routes.RANKING_PAGE}
            children={<PrivatePage component={RankingPage} />}
          />
          <Route
            exact
            path={routes.STADISTICS_PAGE}
            children={<PrivatePage component={StadisticsPage} />}
          />
          <Route exact path={routes.NUM_PAD_PAGE} component={NumPadPage} />
          <Route
            exact
            path={routes.HOME_PAGE}
            children={<PrivatePage component={HomePage} />}
          />

          <Route to="*" component={NotFoundPage} />
        </Switch>
      </Wrapper>
    </HashRouter>
  );
};
