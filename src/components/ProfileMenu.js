import { useState } from 'react'
// import styled from 'styled-components'
import { defaultImgUser } from '../constants/defaultImgUser'
import { useSession } from '../hooks/useSession'
import { FloatContainer } from './FloatContainer'
import { MenuList } from './MenuList'
import { FlexContainer } from './shareStyleComponents/FlexContainer'
import { Image } from './ui/Image'

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
      <FlexContainer jc_c ai_c gap='1rem'>
        {/* <Name>Luis</Name> */}
        <Image
          onClick={() => (isMenuOpen ? closeMenu() : openMenu())}
          src={user?.imageProfile || defaultImgUser}
          width="50px"
          height="50px"
          cursorPointer={true}
        />
      </FlexContainer>
      {isMenuOpen && (
        <FloatContainer right='1rem'>
          <FlexContainer >
            <MenuList closeMenu={closeMenu} />
          </FlexContainer>
        </FloatContainer>
      )}
    </div>
  )
}

// const Name = styled.h2`
//   color: ${({ theme: { fontColor } }) => fontColor};
//   font-weight: 600;
// `

// const Photo = styled.img`
//   width: 55px;
//   height: 55px;
//   object-fit: cover;
//   border-radius: 5rem;
//   cursor: pointer;
//   border: 0.1875rem solid ${({ theme: { accentColor } }) => accentColor};

//   /* box-shadow: 2px 2px 5px 0 ${({ theme: { accentColor } }) =>
//     accentColor}; */

//   &:hover {
//     opacity: 0.7;
//   }
// `
