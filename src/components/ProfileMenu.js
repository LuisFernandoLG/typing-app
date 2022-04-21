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
          <FloatContainer top="4rem" right="1rem">
            <MenuList closeMenu={closeMenu} />
        </FloatContainer>
      )}
    </div>
  )
}
