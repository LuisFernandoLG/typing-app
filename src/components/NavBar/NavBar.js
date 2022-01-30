import styled from 'styled-components'
import { LoginButton } from '../LoginComponents/LoginButton'
import { Wrapper } from '../shareStyleComponents/Wrapper'
import { RedirectLink } from '../ui/RedirectLink'
import { routesV2 } from '../../routes'
import { useSession } from '../../hooks/useSession'
import { FaHome, FaTools, FaRegChartBar, FaTrophy } from 'react-icons/fa'

export const NavBar = () => {
  const { isAdmin } = useSession()

  return (
    <NavBarStyled as='nav' flex flex_ai_c flex_jc_c gap='1rem'>
      <RedirectLink to={routesV2.LOGGED_APP.route}>
        <FaHome />
      </RedirectLink>
      <RedirectLink to={routesV2.LOGGED_APP.subPages.RANKING_PAGE.route}>
        <FaTrophy />
      </RedirectLink>
      <RedirectLink to={routesV2.LOGGED_APP.subPages.STADISTICS_PAGE.route}>
        <FaRegChartBar />
      </RedirectLink>

      {isAdmin && (
        <RedirectLink to={routesV2.LOGGED_APP.subPages.ADMING_PAGE.route}>
          <FaTools />
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
  font-size:1.5rem;
`
