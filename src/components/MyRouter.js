import { Suspense } from 'react'
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
import { HomePage } from '../pages/HomePage'
import { RankingPage } from '../pages/RankingPage'
import { StadisticsPage } from '../pages/StadisticsPage'
import { MecaPage } from '../pages/MecaPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { AdminPage } from '../pages/AdminPage'
import { EnglishSectionPage } from '../pages/EnglishSectionPage'
import { ExercisePage } from '../pages/ExercisePage'
import { ConfigProgilePage as ConfigProfilePage } from '../pages/ConfigProfilePage'
import { EnglishPage } from '../pages/EnglishPage'
import { EnglishExercisePage } from '../pages/EnglishExercisePage'

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

              <Route path={routesV3.MENU_PAGE.route} element={<ChoicePage />} />
              <Route
                path={routesV3.CONFIG_PAGE.route}
                element={<ConfigProfilePage />}
              />

              <Route path={routesV3.MECA_PAGE.route} element={<MecaPage />}>
                <Route index element={<HomePage />} />
                <Route
                  path={`${routesV3.MECA_PAGE.subRoutes.EXERCISE_PAGE.route}/:idQuote`}
                  element={<ExercisePage />}
                />
                <Route
                  path={routesV3.MECA_PAGE.subRoutes.RANKING_PAGE.route}
                  element={<RankingPage />}
                />
                <Route
                  path={routesV3.MECA_PAGE.subRoutes.STATS_PAGE.route}
                  element={<StadisticsPage />}
                />
                <Route
                  path={routesV3.MECA_PAGE.subRoutes.ADMIN_PAGE.route}
                  element={<AdminPage />}
                />
                <Route
                  path={routesV2.NOT_FOUND_PAGE.route}
                  element={<NotFoundPage />}
                />
              </Route>

              <Route
                path={routesV3.ENGLISH_PAGE.route}
                element={<EnglishPage />}>
                <Route index element={<EnglishSectionPage />} />
                <Route
                  path={`${routesV3.ENGLISH_PAGE.subRoutes.ENGLISH_EXERCISE_PAGE.route}/:categoryId/:exerciseId`}
                  element={<EnglishExercisePage />}
                />
              </Route>

              <Route
                path={routesV2.NOT_FOUND_PAGE.route}
                element={<NotFoundPage />}
              />

              {/* <Route path={routesV2.NOT_FOUND_PAGE} element={<NotFoundPage/>}/> */}
              {/* {Object.values(routesV2).map(
                ({ id, route, component: Page, isPrivate, routeProps }) =>
                  isPrivate
                    ? (
                    <Route
                      key={`page-${id}`}
                      path={route}
                      {...routeProps}
                      element={
                        <PrivatePage>
                          <Page />
                        </PrivatePage>
                      }
                    />
                      )
                    : (
                    <Route
                      key={`page-${id}`}
                      path={route}
                      element={<Page />}
                      {...routeProps}
                    />
                      )
              )} */}
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
