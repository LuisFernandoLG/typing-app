import { Navigate } from 'react-router-dom'
import { routesV2 } from '../routes'
import { SignInForm } from '../components/forms/SignInForm'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { useSession } from '../hooks/useSession'

export const SignInPage = () => {
  const { isAuth } = useSession()
  if (isAuth) return <Navigate to={routesV2.LOGGED_APP.subPages.CHOICE_PAGE.route} />

  return (
    <FlexContainer fd_c jc_se ai_c>
      <SignInForm />
    </FlexContainer>
  )
}
