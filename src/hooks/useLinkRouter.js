import { useNavigate } from 'react-router-dom'
import { routesV2 } from '../routes'

export const useLinkRouter = () => {
  const navigate = useNavigate()

  const goHomePage = () => navigate(routesV2.LOGGED_APP.subPages.HOME_PAGE.route)
  const goToConfigProfilePage = () => navigate(routesV2.LOGGED_APP.subPages.CONFIG_PROFILE_PAGE.route)
  const goLoginPage = () => navigate(routesV2.LOGIN_PAGE.route)
  const goSignUpPage = () => navigate(routesV2.SIGN_UP_PAGE.route)
  const goIndexPage = () => navigate(routesV2.INDEX_PAGE.route)
  const reloadPage = () => navigate(0)
  const goToEnglishHomePage = () => navigate(routesV2.LOGGED_APP.subPages.ENGLISH_SECTION_PAGE.route)
  const goToChoicePage = () => navigate(routesV2.LOGGED_APP.subPages.CHOICE_PAGE.route)

  return {
    goHomePage,
    goLoginPage,
    goSignUpPage,
    goIndexPage,
    reloadPage,
    goToConfigProfilePage,
    goToEnglishHomePage,
    goToChoicePage
  }
}
