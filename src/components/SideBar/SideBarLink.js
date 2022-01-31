import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Wrapper } from '../shareStyleComponents/Wrapper'

export const SideBarLink = ({ icon: Icon, title, description, linkPage }) => {
  return (
    <WrapperSideBarLink>
      <NavLink to={linkPage} activeClassName="active" exact>
        <LinkContainer flex gap="1em" flex_jc_fs flex_ai_c>
          <Icon />
          <Wrapper flex flex_dc flex_jc_c gap="0.5em">
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Wrapper>
        </LinkContainer>
      </NavLink>
    </WrapperSideBarLink>
  )
}

const WrapperSideBarLink = styled.div`
  position: relative;

  .active::after {
    content: "";
    position: absolute;
    top: 0;
    width: 0.3em;
    height: 100%;
    background: ${({ theme: { primaryColor } }) => primaryColor};
    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
  }

  .active > div > svg {
    color: ${({ theme: { primaryColor } }) => primaryColor};
  }
  .active > div > div > h2 {
    color: ${({ theme: { primaryColor } }) => primaryColor};
  }
  .active > div > div > p {
    color: ${({ theme: { primaryColor } }) => primaryColor};
  }
`

const LinkContainer = styled(Wrapper)`
  width: 100%;
  padding: 1.5em;

  transition: background 300ms ease;

  &:hover {
    background: ${({ theme: { tertiaryColor } }) => tertiaryColor};
  }

  svg {
    color: ${({ theme: { secondaryColor } }) => secondaryColor};
    font-size: 2.5em;
  }
`

const Title = styled.h2`
  font-size: 2em;
  color: ${({ theme: { secondaryColor } }) => secondaryColor}; ;
`
const Description = styled.p`
  font-size: 1em;
  color: ${({ theme: { secondaryColor } }) => secondaryColor}; ;
`
