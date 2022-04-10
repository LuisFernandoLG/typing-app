import styled from 'styled-components'
import { Wrapper } from '../shareStyleComponents/Wrapper'
import { RedirectLink } from '../ui/RedirectLink'
import { useSession } from '../../hooks/useSession'
import {
  IoTrophy,
  IoBarChart,
  IoKeySharp,
  IoHomeSharp
} from 'react-icons/io5'
import { FlexContainer } from '../shareStyleComponents/FlexContainer'
import { routesV3 } from '../../routes'

export const NavBar = () => {
  const { isAdmin } = useSession()

  return (
    <Container pd="1rem" mg="1rem 2rem 0 0">
    <NavBarStyled as='nav' flex flex_dc flex_ai_fs flex_jc_fs gap='1rem'>
      <RedirectLink to={routesV3.MECA_PAGE.route}>
        <IoHomeSharp />
      </RedirectLink>
      <RedirectLink to={routesV3.MECA_PAGE.subRoutes.RANKING_PAGE.route}>
        <IoTrophy />
      </RedirectLink>
      <RedirectLink to={routesV3.MECA_PAGE.subRoutes.STATS_PAGE.route}>
        <IoBarChart />
      </RedirectLink>

      {isAdmin() && (
        <RedirectLink to={routesV3.MECA_PAGE.subRoutes.ADMIN_PAGE.route}>
          <IoKeySharp />
        </RedirectLink>
      )}
    </NavBarStyled>
    </Container>
  )
}

const NavBarStyled = styled(Wrapper)`
  flex-grow: 1;
  `

const Container = styled(FlexContainer)`
background: ${({ theme: { accentColor } }) => accentColor};
border-radius: 10px;
height: min-content;


position: sticky;
top: 120px;
`
