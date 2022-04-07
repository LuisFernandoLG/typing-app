import { LoginForm } from '../components/forms/LoginForm'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { useSession } from '../hooks/useSession'
import { Navigate } from 'react-router-dom'
import { routesV2 } from '../routes'

export const LoginPage = () => {
  const { isAuth } = useSession()
  if (isAuth) { return <Navigate to={routesV2.LOGGED_APP.subPages.CHOICE_PAGE.route} /> }

  return (
    <FlexContainer fd_c jc_c ai_c>
      <LoginForm />
    </FlexContainer>
  )
}
