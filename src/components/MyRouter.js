import { HashRouter, Route, Switch } from "react-router-dom";
import { routes } from "../routes";
import { NavBar } from "./NavBar/NavBar";
import { ExercisePage } from "./pages/ExercisePage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { MyExercisesPage } from "./pages/MyExercisesPage";
import { NumPadPage } from "./pages/NumPadPage";
import { RankingPage } from "./pages/RankingPage";
import { StadisticsPage } from "./pages/StadisticsPage";
import { Wrapper } from "./shareStyleComponents/Wrapper";
import { SideBar } from "./SideBar/SideBar";

export const MyRouter = () => {
  return (
    <HashRouter>
      <NavBar />
      <Wrapper flex>
        <SideBar />
        <Switch>
          <Route path={routes.LOGIN_PAGE} component={LoginPage} />

          <Route
            path={`${routes.EXERCICE_PAGE}/:idQuote`}
            component={ExercisePage}
          />
          <Route exact path={routes.RANKING_PAGE} component={RankingPage} />
          <Route
            exact
            path={routes.STADISTICS_PAGE}
            component={StadisticsPage}
          />
          <Route exact path={routes.NUM_PAD_PAGE} component={NumPadPage} />
          <Route exact path={routes.HOME_PAGE} component={HomePage} />
        </Switch>
      </Wrapper>
    </HashRouter>
  );
};
