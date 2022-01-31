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

const app = '/app'

export const routes = {
  LOGIN_PAGE: '/logIn',
  SIGNUP_PAGE: '/signUp',
  ADMIN_PAGE: '/admin',
  HOME_PAGE: app,
  EXERCICE_PAGE: `${app}/exercise`,
  RANKING_PAGE: `${app}/ranking`,
  STADISTICS_PAGE: `${app}/estadisticas`
}

export const routesV2 = {
  INDEX_PAGE: {
    id: 0,
    route: '/',
    name: 'index',
    component: IndexPage,
    isPrivate: false,
    routeProps: {
      exact: true
    }
  },
  LOGGED_APP: {
    id: 10,
    route: `${app}`,
    name: 'app',
    component: AppLogged,
    isPrivate: true,
    routeProps: {
      exact: false
    },
    subPages: {
      HOME_PAGE: {
        id: 1,
        route: `${app}`,
        name: 'home',
        component: HomePage,
        isPrivate: true,
        routeProps: {
          exact: true
        }
      },
      ADMING_PAGE: {
        id: 3,
        route: `${app}/adminPage`,
        name: 'admin',
        component: AdminPage,
        isPrivate: true,
        routeProps: {
          exact: true
        }
      },
      EXERCISE_PAGE: {
        id: 4,
        route: `${app}/item/:idQuote`,
        routBaseParam: `${app}/item`,
        name: 'exercise',
        component: ExercisePage,
        isPrivate: true,
        routeProps: {
          exact: false
        }
      },
      RANKING_PAGE: {
        id: 6,
        route: `${app}/ranking`,
        name: 'Ranking',
        component: RankingPage,
        isPrivate: true,
        routeProps: {
          exact: true
        }
      },
      STADISTICS_PAGE: {
        id: 6,
        route: `${app}/resultados`,
        name: 'Stadistics',
        component: StadisticsPage,
        isPrivate: true,
        routeProps: {
          exact: true
        }
      }
    }
  },
  LOGIN_PAGE: {
    id: 2,
    route: '/login',
    name: 'login',
    component: LoginPage,
    isPrivate: false,
    routeProps: {
      exact: true
    }
  },
  SIGN_UP_PAGE: {
    id: 7,
    route: '/SignUp',
    name: 'Sign Up',
    component: SignInPage,
    isPrivate: false,
    routeProps: {
      exact: true
    }
  },
  NOT_FOUND_PAGE: {
    id: 5,
    route: '*',
    name: 'Not Found Page',
    component: NotFoundPage,
    isPrivate: false,
    routeProps: {
      exact: false
    }
  }
}
