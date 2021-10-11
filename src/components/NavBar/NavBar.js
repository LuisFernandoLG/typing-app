import styled from "styled-components";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { CategorySelect } from "./CategorySelect";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";

export const NavBar = () => {
  return (
    <NavBarStyled as="nav" flex flex_jc_sb gap="1rem">
      <Logo />
      <SearchBar />
      <CategorySelect />
    </NavBarStyled>
  );
};

const NavBarStyled = styled(Wrapper)`
  /* margin: 1rem 0; */
  background: ${({ theme: { tertiaryColor } }) => tertiaryColor};

  padding: 1.5rem;

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
