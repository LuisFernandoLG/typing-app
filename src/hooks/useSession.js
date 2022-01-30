import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'
import { routesV2 } from '../routes'

export const useSession = () => {
  const { setLogOut, user, isAuth } = useContext(AuthContext)
  let history = useHistory()

  const handleLogOut = () => {
    setLogOut()
    history.push(routesV2.LOGIN_PAGE.route)
  }

  const isAdmin = () => {
    return user.typeUser === 1
  }

  return {
    handleLogOut,
    isAdmin,
    user,
    isAuth,
  }
}
