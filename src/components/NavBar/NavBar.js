import styled from 'styled-components'
import { Wrapper } from '../shareStyleComponents/Wrapper'
import { RedirectLink } from '../ui/RedirectLink'
import { routesV2 } from '../../routes'
import { useSession } from '../../hooks/useSession'
import {
  IoTrophy,
  IoBarChart,
  IoKeySharp,
  IoHomeSharp
} from 'react-icons/io5'

export const NavBar = () => {
  const { isAdmin } = useSession()

  return (
    <NavBarStyled as='nav' flex flex_ai_c flex_jc_c gap='1rem'>
      <RedirectLink to={routesV2.LOGGED_APP.subPages.HOME_PAGE.route}>
        <IoHomeSharp />
      </RedirectLink>
      <RedirectLink to={routesV2.LOGGED_APP.subPages.RANKING_PAGE.route}>
        <IoTrophy />
      </RedirectLink>
      <RedirectLink to={routesV2.LOGGED_APP.subPages.STADISTICS_PAGE.route}>
        <IoBarChart />
      </RedirectLink>

      {isAdmin() && (
        <RedirectLink to={routesV2.LOGGED_APP.subPages.ADMING_PAGE.route}>
          <IoKeySharp />
        </RedirectLink>
      )}
    </NavBarStyled>
  )
}

const NavBarStyled = styled(Wrapper)`
  z-index: 200;
  font-size: 1.5rem;
`
