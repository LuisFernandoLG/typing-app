import { Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { routesV2 } from '../routes'
import { Footer } from '../layouts/Footer'
import { PrivatePage } from '../pages/PrivatePage'
// import ScrollToTop from './ScrollToTop'
import { LazyLoading } from '../components/LazyLoading'
import { Header } from '../layouts/Header'

export const MyRouter = () => {
  return (
    <Suspense fallback={<LazyLoading />}>
      <HashRouter>
        <Header />
        {/* <ScrollToTop> */}
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
        {/* </ScrollToTop> */}
        <Footer />
      </HashRouter>
    </Suspense>
  )
}
