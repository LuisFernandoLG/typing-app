import { Navigate } from 'react-router-dom'
import { useSession } from '../hooks/useSession'
import { routesV3 } from '../routes'

export const PrivateRoute = ({ children }) => {
  const { isAuth } = useSession()
  return isAuth ? children : <Navigate to={routesV3.LOGIN_PAGE.route} />
}
