import styled from 'styled-components'
import { Wrapper } from '../shareStyleComponents/Wrapper'
export const SideBar = ({ isOpen }) => {
  return <SideBarContainer flex flex_dc isOpen={isOpen}></SideBarContainer>
}

const SideBarContainer = styled(Wrapper)`
  width: max-content;
  height: max-content;

  padding: 0.5rem;

  grid-column: 1 / span 1;
  grid-row: 1 / -1;

  font-size: 10px;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 500;

  border-top-right-radius: 1em;
  border-bottom-right-radius: 1em;
  overflow: hidden;

  box-shadow: 5px 5px 20px ${({ theme: { tertiaryColor } }) => tertiaryColor};
  background: ${({ theme: { bgColor } }) => bgColor};

  h2,
  p {
    transition: display 1s ease;
  }

  h2,
  p {
    display: none;
  }

  &:hover {
    h2,
    p {
      display: flex;
    }
  }
`
