import { lazy } from 'react'
import { generate } from 'shortid'
import { AdminPage } from './pages/AdminPage'
import { ChoicePage } from './pages/ChoicePage'
import { ConfigProgilePage } from './pages/ConfigProfilePage'
import { ExercisePage } from './pages/ExercisePage'
import { HomePage } from './pages/HomePage'
import { IndexPage } from './pages/IndexPage'
import { LoginPage } from './pages/LoginPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { RankingPage } from './pages/RankingPage'
import { RecoverPasswordPage } from './pages/RecoverPasswordPage'
import { SignInPage } from './pages/SignInPage'
import { StadisticsPage } from './pages/StadisticsPage'
const AppLogged = lazy(() => import('./pages/AppLogged'))

export const routesV2 = {
  INDEX_PAGE: {
    id: generate(),
    route: '/',
    name: 'index',
    component: IndexPage,
    isPrivate: false,
    routeProps: {}
  },
  RECOVER_PASSWORD_PAGE: {
    id: generate(),
    route: '/recuperar',
    name: 'recuperar contraseña',
    component: RecoverPasswordPage,
    isPrivate: false,
    routeProps: {}
  },
  LOGGED_APP: {
    id: generate(),
    route: '/*',
    name: 'app',
    component: AppLogged,
    isPrivate: true,
    routeProps: {},
    subPages: {
      HOME_PAGE: {
        id: generate(),
        route: '/app',
        name: 'home',
        component: HomePage,
        isPrivate: true,
        routeProps: {}
      },
      CHOICE_PAGE: {
        id: generate(),
        route: '/menu',
        name: 'choicePage',
        component: ChoicePage,
        isPrivate: true,
        routeProps: {}
      },
      ADMING_PAGE: {
        id: generate(),
        route: '/adminPage',
        name: 'admin',
        component: AdminPage,
        isPrivate: true,
        routeProps: {}
      },
      CONFIG_PROFILE_PAGE: {
        id: generate(),
        route: '/confi',
        name: 'confi',
        component: ConfigProgilePage,
        isPrivate: true,
        routeProps: {}
      },

      EXERCISE_PAGE: {
        id: generate(),
        route: '/item/:idQuote',
        routBaseParam: '/item',
        name: 'exercise',
        component: ExercisePage,
        isPrivate: true,
        routeProps: {}
      },
      RANKING_PAGE: {
        id: generate(),
        route: '/ranking',
        name: 'Ranking',
        component: RankingPage,
        isPrivate: true,
        routeProps: {}
      },
      STADISTICS_PAGE: {
        id: generate(),
        route: '/estadisticas',
        name: 'stadistics',
        component: StadisticsPage,
        isPrivate: true,
        routeProps: {}
      },
      NOT_FOUND_PAGE: {
        id: generate(),
        route: '*',
        name: 'Not Found Page',
        component: NotFoundPage,
        isPrivate: false,
        routeProps: {}
      }
    }
  },
  LOGIN_PAGE: {
    id: generate(),
    route: '/login',
    name: 'login',
    component: LoginPage,
    isPrivate: false,
    routeProps: {}
  },
  SIGN_UP_PAGE: {
    id: generate(),
    route: '/SignUp',
    name: 'Sign Up',
    component: SignInPage,
    isPrivate: false,
    routeProps: {}
  },
  NOT_FOUND_PAGE: {
    id: generate(),
    route: '*',
    name: 'Not Found Page',
    component: NotFoundPage,
    isPrivate: false,
    routeProps: {}
  }
}
