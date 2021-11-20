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
        <NavBarStyled as="nav" flex flex_jc_sb gap="1rem">
          <Logo />
          <NavLink to={routes.RANKING_PAGE} exact>
            Ranking
          </NavLink>
          <NavLink to={routes.STADISTICS_PAGE} exact>
            Mi puntaje
          </NavLink>

          <LoginButton />
        </NavBarStyled>
      )}
    </>
  );
};

const NavBarStyled = styled(Wrapper)`
  background: ${({ theme: { tertiaryColor } }) => tertiaryColor};

  padding: 0.5rem;

  .activatePage {
    color: ${({ theme: { secondaryColor } }) => secondaryColor};
    font-weight: 600;
  }
`;

// <div className="div">
{
  /* <NavLink exact to={routes.HOME_PAGE} activeClassName="activatePage">
Home
</NavLink>
<NavLink to={routes.CATEGORIES_PAGE} activeClassName="activatePage">
Categories
</NavLink>

<NavLink to={routes.NUM_PAD_PAGE} activeClassName="activatePage">
NumPad
</NavLink>

<NavLink to={routes.MY_EXERCISES_PAGE} activeClassName="activatePage">
Mis ejercicios
</NavLink>

<NavLink to={routes.SPELLING_PAGE} activeClassName="activatePage">
spelling
</NavLink>
</div> */
}
