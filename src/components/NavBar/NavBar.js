import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../../contexts/AuthContext";
import { routes } from "../../routes";
import { LoginButton } from "../LoginButton";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { Logo } from "./Logo";

export const NavBar = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <>
      {isAuth && (
        <NavBarStyled as="nav" flex flex_ai_c flex_jc_sb gap="1rem">
          <Logo />
          <NavLink
            activeClassName={"activatePage"}
            to={routes.RANKING_PAGE}
            exact
          >
            Ranking
          </NavLink>
          <NavLink
            activeClassName={"activatePage"}
            to={routes.STADISTICS_PAGE}
            exact
          >
            Mi puntaje
          </NavLink>

          <LoginButton />
        </NavBarStyled>
      )}
    </>
  );
};

const NavBarStyled = styled(Wrapper)`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ theme: { tertiaryColor } }) => tertiaryColor};

  padding: 0.5rem;

  a {
    font-weight: 700;
    color: ${({ theme: { secondaryColor } }) => secondaryColor};
    padding: 0.5rem;
  }

  .activatePage {
    color: ${({ theme: { secondaryColor } }) => secondaryColor};

    border-bottom: 0.2rem solid ${({ theme: { primaryColor } }) => primaryColor};
    padding: 0.5rem;
  }
`;
