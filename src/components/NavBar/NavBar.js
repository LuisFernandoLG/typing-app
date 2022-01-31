import styled from 'styled-components'
import { Wrapper } from '../shareStyleComponents/Wrapper'
import { RedirectLink } from '../ui/RedirectLink'
import { routesV2 } from '../../routes'
import { useSession } from '../../hooks/useSession'
import {
  IoHomeOutline,
  IoTrophyOutline,
  IoBarChartOutline,
  IoKeyOutline
} from 'react-icons/io5'

export const NavBar = () => {
  const { isAdmin } = useSession()

  return (
    <NavBarStyled as='nav' flex flex_ai_c flex_jc_c gap='1rem'>
      <RedirectLink to={routesV2.LOGGED_APP.route}>
        <IoHomeOutline />
      </RedirectLink>
      <RedirectLink to={routesV2.LOGGED_APP.subPages.RANKING_PAGE.route}>
        <IoTrophyOutline />
      </RedirectLink>
      <RedirectLink to={routesV2.LOGGED_APP.subPages.STADISTICS_PAGE.route}>
        <IoBarChartOutline />
      </RedirectLink>

      {isAdmin && (
        <RedirectLink to={routesV2.LOGGED_APP.subPages.ADMING_PAGE.route}>
          <IoKeyOutline />
        </RedirectLink>
      )}
    </NavBarStyled>
  )
}

const NavBarStyled = styled(Wrapper)`
  grid-column: 1 /-1;
  grid-row: 1 / span 1;
  width: 100%;

  z-index: 200;
  color: ${({ theme: { disableColor } }) => disableColor};
  font-size: 1.5rem;
`
