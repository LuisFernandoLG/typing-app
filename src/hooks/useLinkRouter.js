import { useHistory } from 'react-router-dom'
import { routesV2 } from '../routes'

export const useLinkRouter = () => {
  let history = useHistory()

  const goHomePage = () =>
    history.push(routesV2.LOGGED_APP.subPages.HOME_PAGE.route)
  const goLoginPage = () => history.push(routesV2.LOGIN_PAGE.route)
  const goSignUpPage = () => history.push(routesV2.SIGN_UP_PAGE.route)
  const goIndexPage = () => history.push(routesV2.INDEX_PAGE.route)

  return {
    goHomePage,
    goLoginPage,
    goSignUpPage,
    goIndexPage,
  }
}
