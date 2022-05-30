import { lazy } from 'react'
import { generate } from 'shortid'
import { AdminPage } from './pages/AdminPage'
import { ChoicePage } from './pages/ChoicePage'
import { ConfigProgilePage } from './pages/ConfigProfilePage'
import { EnglishExercisePage } from './pages/EnglishExercisePage'
import { EnglishSectionPage } from './pages/EnglishSectionPage'
import { ExercisePage } from './pages/ExercisePage'
import { HomePagex } from './pages/HomePage'
import { IndexPage } from './pages/IndexPage'
import { LoginPage } from './pages/LoginPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { RankingPage } from './pages/RankingPage'
import { RecoverPasswordPage } from './pages/RecoverPasswordPage'
import { SignInPage } from './pages/SignInPage'
import { StadisticsPage } from './pages/StadisticsPage'
const AppLogged = lazy(() => import('./pages/AppLogged'))

export const routesV3 = {
  HOME_PAGE: {
    route: '/'
  },
  LOGIN_PAGE: {
    route: '/sesion'
  },
  SIGNUP_PAGE: {
    route: '/registro'
  },
  RECOVER_PASS_PAGE: {
    route: '/recuperar'
  },
  MENU_PAGE: {
    route: '/menu'
  },
  CONFIG_PAGE: {
    route: 'confi'
  },

  MECA_PAGE: {
    route: '/meca',
    subpages: {
      EXERCISE: {
        route: 'item',
        routeWithParams: 'item/:idQuote'
      }
    }
  },

  MECA_TIME_PAGE: {
    route: '/mecatime',
    subRoutes: {
      RANKING_PAGE: {
        route: 'ranking'
      },

      STATS_PAGE: {
        route: 'stats'
      },
      ADMIN_PAGE: {
        route: 'admin'
      },
      EXERCISE_PAGE: {
        route: 'item',
        routeWithParams: 'item/:idQuote'
      }
    }
  },

  ENGLISH_PAGE: {
    route: '/english',
    subRoutes: {
      ENGLISH_EXERCISE_PAGE: {
        route: '/english/item',
        routeWithParams: 'item/:courseId/:exerciseId'
      },

      ENGLISH_LEVELS: {
        route: 'dificultades'
      },
      ENGLISH_DIFFICULTY: {
        route: '/english/dificultad',
        routeWithParams: 'dificultad/:dificultad'
      },

      ENGLISH_ADMIN_PAGE: {
        route: 'admin',
        subRoutes: {

          // {/* TODO routes are mixed, it can be better */}
          ENGLISH_EXERCISE_ADMIN_PAGE: {
            route: '/english/course',
            routeWithParams: 'course/:courseId'
          }
        }
      },
      ENGLISH_STATS_PAGE: {
        route: 'stats'
      }
    }
  },
  RICE_PAGE: {
    route: '/carrera',
    subRoutes: {
      RICE_EXERCISE_PAGE: {
        route: 'item',
        routeWithParams: 'item/:riceId'
      }
    }
  }
}

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
        component: HomePagex,
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

      ENGLISH_SECTION_PAGE: {
        id: generate(),
        route: '/english',
        name: 'ingles',
        component: EnglishSectionPage,
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
      ENGLISH_EXERCISE_PAGE: {
        id: generate(),
        route: '/english/:courseId/:exerciseId',
        routBaseParam: '/english',
        name: 'EnglishExercise',
        component: EnglishExercisePage,
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
