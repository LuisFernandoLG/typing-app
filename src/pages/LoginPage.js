import { LoginForm } from '../components/LoginComponents/LoginForm'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { useSession } from '../hooks/useSession'
import { Redirect } from 'react-router-dom'
import { routesV2 } from '../routes'

export const LoginPage = () => {
  const { isAuth } = useSession()
  if (isAuth) { return <Redirect to={routesV2.LOGGED_APP.subPages.HOME_PAGE.route} /> }

  return (
    <FlexContainer fd_c jc_c ai_c>
      <LoginForm />
    </FlexContainer>
  )
}
