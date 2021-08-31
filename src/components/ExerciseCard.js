import styled from "styled-components";

export const ExerciseCard = ({ author, quote }) => {
  return (
    <ExerciseCardStyled>
      <Quote>{quote}</Quote>
      <Author>{author}</Author>
    </ExerciseCardStyled>
  );
};

const ExerciseCardStyled = styled.figure`
  padding: 1rem;
  font-size: 1.2rem;

  height: 100%;
  opacity: 0.3;
  animation: opacity 1s ease;

  &:hover {
    box-shadow: 0 0 20px red;
    opacity: 1;
  }

  text-align: center;
  line-height: 1.5rem;
`;

const Quote = styled.blockquote`
  font-size: 1rem;
`;

const Author = styled.figcaption`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme: { tertiaryColor } }) => tertiaryColor};
`;
