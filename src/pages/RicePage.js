import { Outlet, NavLink } from 'react-router-dom'
import { routesV3 } from '../routes'

export const RicePage = () => {
  return <>
  <div>
    <NavLink to={routesV3.RICE_PAGE.route}>Home</NavLink>
    <NavLink to={routesV3.RICE_PAGE.subRoutes.ADMIN_PAGE.route}>AdminPage</NavLink>
  </div>
  <Outlet/>
  </>
}
