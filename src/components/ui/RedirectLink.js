import { Link } from "react-router-dom";
import styled from "styled-components";

export const RedirectLink = ({ children, ...props }) => {
  return (
    <Link {...props}>
      <RedirectLinkStyled>{children}</RedirectLinkStyled>
    </Link>
  );
};

const RedirectLinkStyled = styled.span`
  margin: 1rem 0;
  font-weight: 700;
  text-decoration: underline;
  color: ${({ theme: { primaryColor } }) => primaryColor};
`;
