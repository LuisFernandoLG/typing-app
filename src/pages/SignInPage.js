import { Redirect } from 'react-router'
import { routesV2 } from '../routes'
import { SignInForm } from '../components/signIn/SignInForm'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { useSession } from '../hooks/useSession'

export const SignInPage = () => {
  const { isAuth } = useSession()
  if (isAuth) return <Redirect to={routesV2.LOGGED_APP.subPages.HOME_PAGE} />

  return (
    <FlexContainer fd_c jc_se ai_c>
      <SignInForm />
    </FlexContainer>
  )
}
