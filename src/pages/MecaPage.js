import { Outlet } from 'react-router-dom'
import { BackPageButton } from '../components/ui/BackPageButton'
import { routesV3 } from '../routes'

export const MecaPage = () => {
  return (
    <>
      <BackPageButton backRoute={routesV3.MENU_PAGE.route} />
      <Outlet/>
    </>
  )
}
