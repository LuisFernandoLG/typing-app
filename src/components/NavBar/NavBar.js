import { useContext } from "react";
import styled from "styled-components";
import AuthContext from "../../contexts/AuthContext";
import { LoginButton } from "../LoginButton";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { Logo } from "./Logo";

export const NavBar = () => {
  const { isAuth } = useContext(AuthContext);

  // if (!isAuth) return null;

  return (
    <NavBarStyled as="nav" flex flex_jc_sb gap="1rem">
      <Logo />

      <LoginButton />
    </NavBarStyled>
  );
};

const NavBarStyled = styled(Wrapper)`
  /* margin: 1rem 0; */
  /* margin-bottom: 2rem; */
  background: ${({ theme: { tertiaryColor } }) => tertiaryColor};

  padding: 0.5rem;

  .activatePage {
    color: ${({ theme: { secondaryColor } }) => secondaryColor};
    font-weight: 600;
  }

  a {
    background: ${({ theme: { primaryColor } }) => primaryColor};
    color: ${({ theme: { textColor } }) => textColor};
    padding: 0.5rem;
    border-radius: 0.5rem;
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
