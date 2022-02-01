import { Navigate } from 'react-router-dom'
import { useSession } from '../hooks/useSession'
import { routesV2 } from '../routes'
export const PrivatePage = ({ children }) => {
  const { isAuth } = useSession()

  return (
    <>{isAuth ? children : <Navigate to={routesV2.LOGIN_PAGE.route} />}</>
  )
}
