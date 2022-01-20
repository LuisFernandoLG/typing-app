import styled from "styled-components";
import { LoginButton } from "../LoginComponents/LoginButton";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { RedirectLink } from "../ui/RedirectLink";
import { FaHome, FaTrophy, FaChartBar, FaUserCircle } from "react-icons/fa";
import { routesV2 } from "../../routes";
import { Logo } from "./Logo";

export const NavBar = () => {
  return (
    <NavBarStyled as="nav" flex flex_ai_c flex_jc_sb gap="1rem">
      <Logo />
      <RedirectLink to={routesV2.LOGGED_APP.route}>Home</RedirectLink>
      <RedirectLink to={routesV2.LOGGED_APP.subPages.RANKING_PAGE.route}>
        Ranking
      </RedirectLink>
      <RedirectLink to={routesV2.LOGGED_APP.subPages.STADISTICS_PAGE.route}>
        Estadísticas
      </RedirectLink>
      <LoginButton />
    </NavBarStyled>
  );
};

const NavBarStyled = styled(Wrapper)`
  grid-column: 1 /-1;
  grid-row: 1 / span 1;
  width: 100%;

  padding: 1rem 2rem;

  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ theme: { bgColor } }) => bgColor};
  box-shadow: 0 0.2rem 30px -10px ${({ theme: { tertiaryColor } }) => tertiaryColor};
`;
