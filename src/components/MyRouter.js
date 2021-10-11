import { HashRouter, Route, Switch } from "react-router-dom";
import { routes } from "../routes";
import { NavBar } from "./NavBar/NavBar";
import { CategoriesPage } from "./pages/CategoriesPage";
import { ExercisePage } from "./pages/ExercisePage";
import { HomePage } from "./pages/HomePage";
import { MyExercisesPage } from "./pages/MyExercisesPage";
import { NumPadPage } from "./pages/NumPadPage";
import { SpellingPage } from "./pages/SpellingPage";

export const MyRouter = () => {
  return (
    <HashRouter>
      <NavBar />
      <Switch>
        <Route
          path={`${routes.EXERCICE_PAGE}/:idQuote`}
          component={ExercisePage}
        />
        <Route exact path={routes.CATEGORIES_PAGE} component={CategoriesPage} />
        <Route exact path={routes.NUM_PAD_PAGE} component={NumPadPage} />
        <Route exact path={routes.SPELLING_PAGE} component={SpellingPage} />
        <Route
          exact
          path={routes.MY_EXERCISES_PAGE}
          component={MyExercisesPage}
        />
        <Route exact path={routes.HOME_PAGE} component={HomePage} />
      </Switch>
    </HashRouter>
  );
};
