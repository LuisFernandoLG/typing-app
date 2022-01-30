import { Redirect } from 'react-router'
import { routesV2 } from '../routes'
export const PrivatePage = ({ component: Component }) => {
  const { isAuth } = useSession()

  return (
    <>{isAuth ? <Component /> : <Redirect to={routesV2.LOGIN_PAGE.route} />}</>
  )
}
