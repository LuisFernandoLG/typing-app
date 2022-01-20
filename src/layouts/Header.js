import styled from "styled-components";

export const Header = ({ children }) => {
  return <HeaderStyled>{children}</HeaderStyled>;
};

const HeaderStyled = styled.header`
  padding: 1rem 2rem;
`;
