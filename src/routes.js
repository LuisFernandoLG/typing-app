import { lazy } from 'react'
import { AdminPage } from './pages/AdminPage'
import { ExercisePage } from './pages/ExercisePage'
import { HomePage } from './pages/HomePage'
import { IndexPage } from './pages/IndexPage'
import { LoginPage } from './pages/LoginPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { RankingPage } from './pages/RankingPage'
import { SignInPage } from './pages/SignInPage'
import { StadisticsPage } from './pages/StadisticsPage'
const AppLogged = lazy(() => import('./pages/AppLogged'))

export const routesV2 = {
  INDEX_PAGE: {
    id: 0,
    route: '/home',
    name: 'index',
    component: IndexPage,
    isPrivate: false,
    routeProps: {}
  },
  LOGGED_APP: {
    id: 10,
    route: '/*',
    name: 'app',
    component: AppLogged,
    isPrivate: true,
    routeProps: {},
    subPages: {
      HOME_PAGE: {
        id: 1,
        route: '/',
        name: 'home',
        component: HomePage,
        isPrivate: true,
        routeProps: {}
      },
      ADMING_PAGE: {
        id: 3,
        route: 'adminPage',
        name: 'admin',
        component: AdminPage,
        isPrivate: true,
        routeProps: {}
      },
      EXERCISE_PAGE: {
        id: 4,
        route: 'item/:idQuote',
        routBaseParam: '/item',
        name: 'exercise',
        component: ExercisePage,
        isPrivate: true,
        routeProps: {}
      },
      RANKING_PAGE: {
        id: 6,
        route: 'ranking',
        name: 'Ranking',
        component: RankingPage,
        isPrivate: true,
        routeProps: {}
      },
      STADISTICS_PAGE: {
        id: 6,
        route: 'estadisticas',
        name: 'stadistics',
        component: StadisticsPage,
        isPrivate: true,
        routeProps: {}
      }
    }
  },
  LOGIN_PAGE: {
    id: 2,
    route: '/login',
    name: 'login',
    component: LoginPage,
    isPrivate: false,
    routeProps: {}
  },
  SIGN_UP_PAGE: {
    id: 7,
    route: '/SignUp',
    name: 'Sign Up',
    component: SignInPage,
    isPrivate: false,
    routeProps: {}
  },
  NOT_FOUND_PAGE: {
    id: 5,
    route: '*',
    name: 'Not Found Page',
    component: NotFoundPage,
    isPrivate: false,
    routeProps: {}
  }
}
