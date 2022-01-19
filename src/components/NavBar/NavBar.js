import styled from "styled-components";
import { LoginButton } from "../LoginComponents/LoginButton";
import { Wrapper } from "../shareStyleComponents/Wrapper";

export const NavBar = () => {
  return (
    <NavBarStyled as="nav" flex flex_ai_c flex_jc_fe gap="1rem">
      <LoginButton />
    </NavBarStyled>
  );
};

const NavBarStyled = styled(Wrapper)`
  grid-column: 1 /-1;
  grid-row: 1 / span 1;

  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ theme: { tertiaryColor } }) => tertiaryColor};
`;
