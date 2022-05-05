import { lazy, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Footer } from '../layouts/Footer'
import { ScrollToTop } from './ScrollToTop'
import { LazyLoading } from '../components/LazyLoading'
import { Header } from '../layouts/Header'
import styled from 'styled-components'
import { Layout } from '../layouts/Layout'
import { IndexPage } from '../pages/IndexPage'
import { routesV2, routesV3 } from '../routes'
import { LoginPage } from '../pages/LoginPage'
import { SignInPage } from '../pages/SignInPage'
import { RecoverPasswordPage } from '../pages/RecoverPasswordPage'
import { ChoicePage } from '../pages/ChoicePage'
import { HomePagex } from '../pages/HomePage'
import { RankingPage } from '../pages/RankingPage'
import { StadisticsPage } from '../pages/StadisticsPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { AdminPage } from '../pages/AdminPage'
import { ExercisePage } from '../pages/ExercisePage'
import { ConfigProgilePage as ConfigProfilePage } from '../pages/ConfigProfilePage'
import { EnglishExercisePage } from '../pages/EnglishExercisePage'
// import { MecaExercise } from './MecaExercise'
// import { EnglishPage } from '../pages/EnglishPage'
import { EnglishSectionPage } from '../pages/EnglishSectionPage'
import { PrivateRoute } from '../pages/PrivateRoute'
import { MecaPage } from '../pages/MecaPage'
import { EnglishAdminPage } from '../pages/EnglishAdminPage'
import { EnglishStadisticsPage } from '../pages/EnglishStadistics'
import { RicePage } from '../pages/RicePage'

const MecaTimePage = lazy(() => import('../pages/MecaTimePage'))
const EnglishPage = lazy(() => import('../pages/EnglishPage'))
// const MecaPage = lazy(() => import('../pages/MecaTimePage'))

export const MyRouter = () => {
  return (
    <Suspense fallback={<LazyLoading />}>
      <HashRouter>
        <Header />
        <ScrollToTop />
        <ViewportHeighFixer>
          <Layout mg='2rem 3rem'>
            <Routes>
              <Route path='/' index element={<IndexPage />} />
              <Route path={routesV3.LOGIN_PAGE.route} element={<LoginPage />} />
              <Route
                path={routesV3.RECOVER_PASS_PAGE.route}
                element={<RecoverPasswordPage />}
              />
              <Route
                path={routesV3.SIGNUP_PAGE.route}
                element={<SignInPage />}
              />

              <Route
                path={routesV3.MENU_PAGE.route}
                element={
                  <PrivateRoute>
                    <ChoicePage />
                  </PrivateRoute>
                }
              />
              <Route
                path={routesV3.CONFIG_PAGE.route}
                element={
                  <PrivateRoute>
                    <ConfigProfilePage />
                  </PrivateRoute>
                }
              />

              <Route
                path={routesV3.MECA_TIME_PAGE.route}
                element={
                  <PrivateRoute>
                    <MecaTimePage />
                  </PrivateRoute>
                }>

                <Route index element={<HomePagex />} />
                <Route
                  path={`${routesV3.MECA_TIME_PAGE.subRoutes.EXERCISE_PAGE.routeWithParams}`}
                  element={<ExercisePage />}
                />
                <Route
                  path={routesV3.MECA_TIME_PAGE.subRoutes.RANKING_PAGE.route}
                  element={<RankingPage />}
                />
                <Route
                  path={routesV3.MECA_TIME_PAGE.subRoutes.STATS_PAGE.route}
                  element={<StadisticsPage />}
                />
                <Route
                  path={routesV3.MECA_TIME_PAGE.subRoutes.ADMIN_PAGE.route}
                  element={<AdminPage />}
                />
                <Route
                  path={routesV2.NOT_FOUND_PAGE.route}
                  element={<NotFoundPage />}
                />
              </Route>

              <Route
                path={routesV3.MECA_PAGE.route}
                element={
                  <PrivateRoute>
                    <MecaPage />
                  </PrivateRoute>
                }
              />

              <Route
                path={routesV3.ENGLISH_PAGE.route}
                element={
                  <PrivateRoute>
                    <EnglishPage />
                  </PrivateRoute>
                }>

                <Route index element={<EnglishSectionPage />} />
                <Route
                  path={`${routesV3.ENGLISH_PAGE.subRoutes.ENGLISH_EXERCISE_PAGE.routeWithParams}`}
                  element={<EnglishExercisePage />}
                />
                <Route path={routesV3.ENGLISH_PAGE.subRoutes.ENGLISH_ADMIN_PAGE.route} element={<EnglishAdminPage/>}/>
                <Route path={routesV3.ENGLISH_PAGE.subRoutes.ENGLISH_STATS_PAGE.route} element={<EnglishStadisticsPage/>}/>
              </Route>

              <Route
                path={routesV3.RICE_PAGE.route}
                element={
                  <PrivateRoute>
                    <RicePage />
                  </PrivateRoute>
                }>

                </Route>

              <Route
                path={routesV2.NOT_FOUND_PAGE.route}
                element={<NotFoundPage />}
              />
            </Routes>
          </Layout>
        </ViewportHeighFixer>
        <Footer />
      </HashRouter>
    </Suspense>
  )
}

const ViewportHeighFixer = styled.div`
  min-height: 80vh;
`
