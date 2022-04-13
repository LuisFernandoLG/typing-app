import { useNavigate } from 'react-router-dom'
import { routesV2, routesV3 } from '../routes'

export const useLinkRouter = () => {
  const navigate = useNavigate()

  const goHomePage = () => navigate(routesV3.MECA_TIME_PAGE.route)
  const goToConfigProfilePage = () => navigate(routesV2.LOGGED_APP.subPages.CONFIG_PROFILE_PAGE.route)
  const goLoginPage = () => navigate(routesV3.LOGIN_PAGE.route)
  const goSignUpPage = () => navigate(routesV3.SIGNUP_PAGE.route)
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
