import { HashRouter, Route, Switch } from "react-router-dom";
import { routes } from "../routes";
import { ExercisePage } from "./pages/ExercisePage";
import { HomePage } from "./pages/HomePage";

export const MyRouter = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          path={`${routes.EXERCICE_PAGE}/:idQuote`}
          component={ExercisePage}
        />
        <Route exact path={routes.HOME_PAGE} component={HomePage} />
      </Switch>
    </HashRouter>
  );
};
