import { useSession } from '../hooks/useSession'
import { ThemeSwitcher } from './ThemeSwitcher'
import { IoLogOut, IoSettingsSharp } from 'react-icons/io5'
// import styled from 'styled-components'
import { FlexContainer } from './shareStyleComponents/FlexContainer'
import { Button } from './ui/Button'

import { Link } from 'react-router-dom'
import { routesV3 } from '../routes'
import { Image } from './ui/Image'
import styled from 'styled-components'
// import { FloatContainer } from './FloatContainer'

export const MenuList = ({ closeMenu }) => {
  const { handleLogOut, user } = useSession()

  return (
    <Container>
      <FlexContainer flex flex_dc jc_fs ai_fs gap='1rem' onClick={closeMenu}>
        <FlexContainer jc_c ai_c gap='0.5rem'>
          <Image
            src={user.imageProfile}
            width='50px'
            height='50px'
            coloredOutline
          />
          <Name>{user.name}</Name>
        </FlexContainer>

        <Button secondary={true} onClick={handleLogOut} fontSize='1.2rem'>
          <FlexContainer gap='0.5rem' ai_c jc_fs>
            <IoLogOut /> Cerrar sesión
          </FlexContainer>
        </Button>

        <Link to={routesV3.CONFIG_PAGE.route}>
          <Button secondary={true} fontSize='1.2rem'>
            <FlexContainer gap='0.5rem' jc_fs>
              <IoSettingsSharp /> Configuración
            </FlexContainer>
          </Button>
        </Link>

        <ThemeSwitcher size='5rem' />
      </FlexContainer>
    </Container>
  )
}

const Name = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme: { fontColor } }) => fontColor};
  `
const Container = styled.div`
background:red;
border-radius: ${({ theme: { borderRadius } }) => borderRadius};
background: ${({ theme: { tertiaryColor } }) => tertiaryColor};
outline: 1.12px solid ${({ theme: { bgColor } }) => bgColor};
padding:1rem;

/* border| */
`
