import styled, { css, keyframes } from "styled-components";
import { keyTypes } from "../../../constants/keyTypes";

export const Key = ({ type, children }) => {
  return <KeyStyled type={type}>{children}</KeyStyled>;
};

const flickeringAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }`;

const wantedKeyStyles = css`
  color: ${({ theme: { tertiaryColor } }) => tertiaryColor};
  border: 2px solid ${({ theme: { tertiaryColor } }) => tertiaryColor};
`;

const wrongKeyStyles = css`
  color: ${({ theme: { errorColor } }) => errorColor};
`;

const succeedKeyStyles = css`
  color: ${({ theme: { successColor } }) => successColor};
`;

const untriedKeyStyles = css`
  color: ${({ theme: { disableColor } }) => disableColor};
`;

const KeyStyled = styled.span`
  border: 2px solid transparent;
  padding: 0 0.2rem;
  font-size: 2rem;
  transition: color 300ms ease-in-out;

  font-weight: 700;

  ${({ type }) => (type === keyTypes.WANTED_KEY ? wantedKeyStyles : null)}
  ${({ type }) => (type === keyTypes.UNDTRIED_KEY ? untriedKeyStyles : null)}
  ${({ type }) => (type === keyTypes.WRONG_KEY ? wrongKeyStyles : null)}
  ${({ type }) => (type === keyTypes.SUCCEED_KEY ? succeedKeyStyles : null)}
`;
