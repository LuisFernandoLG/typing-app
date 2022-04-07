import { Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { routesV2 } from '../routes'
import { Footer } from '../layouts/Footer'
import { PrivatePage } from '../pages/PrivatePage'
import { ScrollToTop } from './ScrollToTop'
import { LazyLoading } from '../components/LazyLoading'
import { Header } from '../layouts/Header'
import styled from 'styled-components'
import { Layout } from '../layouts/Layout'

export const MyRouter = () => {
  return (
    <Suspense fallback={<LazyLoading />}>
      <HashRouter>
        <Header />
        <ScrollToTop />
        <ViewportHeighFixer>
          <Layout mg='2rem 3rem'>
            <Routes>
              {Object.values(routesV2).map(
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
              )}
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
