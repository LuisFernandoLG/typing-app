import { useSession } from '../hooks/useSession'
import { ThemeSwitcher } from './ThemeSwitcher'
import { IoLogOut, IoSettingsSharp } from 'react-icons/io5'
import styled from 'styled-components'
import { FlexContainer } from './shareStyleComponents/FlexContainer'
import { Button } from './ui/Button'
import { useLinkRouter } from '../hooks/useLinkRouter'

export const MenuList = ({ closeMenu }) => {
  const { handleLogOut } = useSession()

  const { goToConfigProfilePage } = useLinkRouter()

  return (
    <FloatMenu flex flex_dc jc_fs ai_fs gap='1rem' onClick={closeMenu}>
      <Button
        secondary={true}
        onClick={handleLogOut}
        fontSize='1.2rem'>
        <FlexContainer gap='0.5rem' ai_c jc_fs>
          <IoLogOut /> Cerrar sesión
        </FlexContainer>
      </Button>

      <Button secondary={true} onClick={goToConfigProfilePage} fontSize='1.2rem'>
        <FlexContainer gap='0.5rem' jc_fs>
          <IoSettingsSharp /> Configuración
        </FlexContainer>
      </Button>

      <ThemeSwitcher size='5rem' />
    </FloatMenu>
  )
}

const FloatMenu = styled(FlexContainer)`
  position: absolute;
  right: 1rem;
  background: ${({ theme: { accentColor } }) => accentColor};
  padding: 1rem;
  border-radius: 10px;

  box-shadow: 0 0 10px -7px ${({ theme: { fontColor } }) => fontColor};
`
