import { useContext } from 'react'
import AuthContext from '../contexts/AuthContext'
import { useLinkRouter } from '../hooks/useLinkRouter'

export const useSession = () => {
  const { isAuth, setLogIn, setLogOut, user, authLoading } =
    useContext(AuthContext)
  const { goIndexPage } = useLinkRouter()

  const handleLogOut = () => {
    setLogOut()
    goIndexPage()
  }

  const isAdmin = () => user.typeUser === 1

  const handleLogIn = ({ email, password }) => {
    setLogIn(email, password)
  }

  return {
    handleLogOut,
    isAdmin,
    user,
    isAuth,
    handleLogIn,
    authLoading
  }
}
