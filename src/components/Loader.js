import styled, { keyframes } from "styled-components";

export const Loader = () => {
  return (
    <LoaderStyled>
      <span class="loader"></span>
    </LoaderStyled>
  );
};

const rotate = keyframes`
  0% {
    transform: rotate(0); }
  100% {
    transform: rotate(360deg);`;

const LoaderStyled = styled.div`
  height: 0.9em;
  width: 0.9em;
  color: ${({ theme: { bgColor } }) => bgColor};
  position: relative;
  display: inline-block;
  border: 0.1em solid;
  border-radius: 20rem;
  border-top-color: transparent;
  animation: ${rotate} 1s linear infinite;
`;
