import styled, { css } from "styled-components";
import { Loader } from "../Loader";

export const Button = (
  { children, isLoading, onClick, primary, secondary },
  props
) => {
  return (
    <ButtonStyled
      onClick={onClick}
      disabled={isLoading}
      primary={primary}
      secondary={secondary}
      {...props}
    >
      <Content> {isLoading ? <Loader /> : children} </Content>
      <BaseSizeHelper>{children}</BaseSizeHelper>
    </ButtonStyled>
  );
};

const primaryStyles = css`
  color: ${({ theme: { primaryColor } }) => primaryColor};
  background: ${({ theme: { secondaryColor } }) => secondaryColor};

  &:hover,
  &:focus {
    background: ${({ theme: { secondaryColor } }) => secondaryColor};
    box-shadow: 0 0.4375rem 1.575rem -0.625rem ${({ theme: { secondaryColor } }) => secondaryColor};
  }
`;

const secondaryStyles = css`
  color: ${({ theme: { bgColor } }) => bgColor};
  background: ${({ theme: { primaryColor } }) => primaryColor};
  border: 3px solid ${({ theme: { bgColor } }) => bgColor};

  &:hover,
  &:focus {
    color: ${({ theme: { primaryColor } }) => primaryColor};
    background: ${({ theme: { tertiaryColor } }) => tertiaryColor};
  }
`;

const ButtonStyled = styled.button`
  position: relative;
  padding: 1rem 2rem;

  transition: background 300ms ease, box-shadow 300ms ease;
  border-radius: ${({ theme: { border_radius } }) => border_radius};

  font-size: 1.2rem;
  font-weight: 700;
  user-select: none;
  cursor: pointer;

  ${({ isLoading }) => isLoading && `color:transparent;`}

  ${({ primary }) => (primary ? primaryStyles : null)} 
  ${({ secondary }) => (secondary ? secondaryStyles : null)}
`;

const BaseSizeHelper = styled.span`
  opacity: 0;
`;
const Content = styled.span`
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
`;
