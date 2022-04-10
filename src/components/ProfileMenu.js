import { useState } from 'react'
import styled from 'styled-components'
import IramPhoto from '../images/photos/iram.jpeg'
import { MenuList } from './MenuList'

export const ProfileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const openMenu = () => {
    setIsMenuOpen(true)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div>
      <Photo onClick={openMenu} src={IramPhoto} />
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
