import { LoginForm } from '../components/LoginComponents/LoginForm'
import { Redirect } from 'react-router'
import { routesV2 } from '../routes'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { useSession } from '../hooks/useSession'

export const LoginPage = () => {
  const { isAuth } = useSession()
  if (isAuth) return <Redirect to={routesV2.LOGGED_APP.subPages.HOME_PAGE} />

  return (
    <FlexContainer fd_c jc_c ai_c>
      <LoginForm />
    </FlexContainer>
  )
}
