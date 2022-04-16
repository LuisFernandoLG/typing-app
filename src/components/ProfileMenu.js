import { useState } from 'react'
import styled from 'styled-components'
import { defaultImgUser } from '../constants/defaultImgUser'
import { useSession } from '../hooks/useSession'
import { MenuList } from './MenuList'
export const ProfileMenu = () => {
  const { user } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const openMenu = () => {
    setIsMenuOpen(true)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div>
      <Photo onClick={() => isMenuOpen ? closeMenu() : openMenu()} src={user?.imageProfile || defaultImgUser} />
      {isMenuOpen && <MenuList closeMenu={closeMenu} />}
    </div>
  )
}

const Photo = styled.img`
  width: 55px;
  height: 55px;
  object-fit: cover;
  border-radius: 5rem;
  cursor: pointer;
  border: 0.1875rem solid ${({ theme: { accentColor } }) => accentColor};

  /* box-shadow: 2px 2px 5px 0 ${({ theme: { accentColor } }) => accentColor}; */

  &:hover {
    opacity: 0.7;
  }
`
