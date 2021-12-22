import styled from "styled-components";
import { LoginButton } from "../LoginButton";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { Logo } from "./Logo";
import { FaBars } from "react-icons/fa";

export const NavBar = ({ toggleIsOpen }) => {
  return (
    <NavBarStyled as="nav" flex flex_ai_c flex_jc_sb gap="1rem">
      <MenuBtn onClick={toggleIsOpen}>
        <FaBars />
      </MenuBtn>
      <Logo />
      <LoginButton />
    </NavBarStyled>
  );
};

const MenuBtn = styled.button`
  padding: 0.5rem;
  cursor: pointer;
  background: transparent;
`;

const NavBarStyled = styled(Wrapper)`
  grid-column: 1 /-1;
  grid-row: 1 / span 1;

  position: sticky;
  top: 0;
  /* left: 0; */
  z-index: 100;
  background: ${({ theme: { tertiaryColor } }) => tertiaryColor};

  padding: 0.5rem;
`;
