import styled from "styled-components";
import { LoginButton } from "../LoginComponents/LoginButton";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { RedirectLink } from "../ui/RedirectLink";
import { routesV2 } from "../../routes";
import { Logo } from "./Logo";
import { useSession } from "../../hooks/useSession";

export const NavBar = () => {
  const { isAdmin } = useSession();

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

      {isAdmin && (
        <RedirectLink to={routesV2.LOGGED_APP.subPages.ADMING_PAGE.route}>
          Admin
        </RedirectLink>
      )}

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
  z-index: 200;
  background: ${({ theme: { bgColor } }) => bgColor};
  box-shadow: 0 0.2rem 20px -15px ${({ theme: { secondaryColor } }) => secondaryColor};
`;
