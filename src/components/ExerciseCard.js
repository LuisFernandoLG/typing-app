import styled from "styled-components";
import { Wrapper } from "./shareStyleComponents/Wrapper";

export const ExerciseCard = ({ author, quote }) => {
  return (
    <ExerciseCardStyled>
      <Quote>{quote}</Quote>
      <Author>{author}</Author>
    </ExerciseCardStyled>
  );
};

const ExerciseCardContainer = styled(Wrapper)``;

const ExerciseCardStyled = styled.figure`
  padding: 1rem;
  font-size: 1.2rem;

  height: 15.625rem;
  opacity: 0.3;
  transition: opacity 200ms ease-out;
  /* transition: font-weight 1s ease; */

  &:hover {
    box-shadow: 0 0 20px red;
    opacity: 1;
  }

  /* &:hover > blockquote {
    font-weight: 600;
  } */

  text-align: center;
  line-height: 1.6rem;
`;

const Quote = styled.blockquote`
  overflow: hidden;
  font-size: 1rem;
  height: 80%;
`;

const Author = styled.figcaption`
  overflow: hidden;
  height: 20%;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme: { tertiaryColor } }) => tertiaryColor};
`;
