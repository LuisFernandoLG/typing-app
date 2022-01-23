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
  font-weight: 600;
  color: ${({ theme: { tertiaryColor } }) => tertiaryColor};
  position: relative;
  overflow: hidden;

  &::before {
    position: absolute;
    bottom: 0;
    left: -20%;
    content: " ";
    display: block;
    width: 0.3rem;
    height: 100%;
    border-radius: 1rem;
    animation: ${flickeringAnimation} 0.5s ease-in-out infinite alternate;
    background: ${({ theme: { secondaryColor } }) => secondaryColor};
  }
`;

const wrongKeyStyles = css`
  color: ${({ theme: { errorColor } }) => errorColor};
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 5%;
    bottom: 0;
    left: 0;
    background: ${({ theme: { errorColor } }) => errorColor};
  }
`;

const succeedKeyStyles = css`
  color: ${({ theme: { secondaryColor } }) => secondaryColor};
`;

const untriedKeyStyles = css`
  color: ${({ theme: { disableColor } }) => disableColor};
`;

const KeyStyled = styled.span`
  font-size: 2rem;
  font-weight: 700;
  margin: 0.5rem 0.1rem;
  transition: color 0.5s ease-in-out;
  white-space: pre-wrap;

  ${({ type }) => (type === keyTypes.WANTED_KEY ? wantedKeyStyles : null)}
  ${({ type }) => (type === keyTypes.UNDTRIED_KEY ? untriedKeyStyles : null)}
  ${({ type }) => (type === keyTypes.WRONG_KEY ? wrongKeyStyles : null)}
  ${({ type }) => (type === keyTypes.SUCCEED_KEY ? succeedKeyStyles : null)}
`;
