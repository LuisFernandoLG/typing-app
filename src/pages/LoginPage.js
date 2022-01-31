import { LoginForm } from '../components/LoginComponents/LoginForm'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { useSession } from '../hooks/useSession'
import { useLinkRouter } from '../hooks/useLinkRouter'

export const LoginPage = () => {
  const { isAuth } = useSession()
  const { goHomePage } = useLinkRouter()
  if (isAuth) goHomePage()

  return (
    <FlexContainer fd_c jc_c ai_c>
      <LoginForm />
    </FlexContainer>
  )
}
