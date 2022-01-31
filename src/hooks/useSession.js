import { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'
import { routesV2 } from '../routes'
import { useLinkRouter } from '../hooks/useLinkRouter'

export const useSession = () => {
  const { isAuth, setLogIn, setLogOut, user, authLoading } =
    useContext(AuthContext)
  const { goHomePage, goIndexPage } = useLinkRouter()

  let history = useHistory()

  const handleLogOut = () => {
    setLogOut()
    goIndexPage()
  }

  const isAdmin = () => {
    return user.typeUser === 1
  }

  const handleLogIn = ({ email, password }) => {
    setLogIn(email, password)
  }

  useEffect(() => {
    if (isAuth) goHomePage()
  }, [isAuth])

  return {
    handleLogOut,
    isAdmin,
    user,
    isAuth,
    handleLogIn,
    authLoading,
  }
}
