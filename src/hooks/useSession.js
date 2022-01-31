import { useContext, useEffect } from 'react'
import AuthContext from '../contexts/AuthContext'
import { useLinkRouter } from '../hooks/useLinkRouter'

export const useSession = () => {
  const { isAuth, setLogIn, setLogOut, user, authLoading } =
    useContext(AuthContext)
  const { goHomePage, goIndexPage } = useLinkRouter()

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

  return {
    handleLogOut,
    isAdmin,
    user,
    isAuth,
    handleLogIn,
    authLoading,
  }
}
