import { generate } from "shortid";
import styled, { keyframes } from "styled-components";
import { Wrapper } from "./shareStyleComponents/Wrapper";

export const Quote = ({ quote, indexQuote }) => {
  const getTypeKey = (item) => {
    if (item.id === quote[indexQuote].id)
      return <WantedKey key={item.id}>{item.key}</WantedKey>;

    if (item.succeed === null)
      return <NormalKey key={item.id}>{item.key}</NormalKey>;

    if (item.succeed) {
      if (item.visited === 1)
        return <SucceedKey key={item.id}>{item.key}</SucceedKey>;
      else return <CorrectedKey key={item.id}>{item.key}</CorrectedKey>;
    } else return <WrongKey key={item.id}>{item.key}</WrongKey>;
  };

  const getWords = () => {
    let words = [];
    let word = [];
    const sizeQuote = quote.length - 1;

    quote.forEach((item, i) => {
      if (item.key === " " || sizeQuote === i) {
        word.push(item);
        words.push(word);
        word = [];
      } else word.push(item);
    });

    return words;
  };

  return (
    <QuoteStyled flex flex_jc_c>
      {getWords().map((word) => (
        <Word>{word.map((letter) => getTypeKey(letter))}</Word>
      ))}
    </QuoteStyled>
  );
};

const courtinAnimation = (color) => keyframes`
0%{
  opacity: 0.2;
}
100%{
  opacity: 1;

}
`;

const NormalKey = styled.span`
  font-size: 1.5rem;
  margin: 0.2rem 0.1rem;
  padding: 0 0.1rem;
  transition: color 0.5s ease;
  white-space: pre-wrap;

  color: ${({ theme: { primaryColor } }) => primaryColor};
  animation: ${courtinAnimation()} 1s ease forwards;
`;

const WantedKey = styled(NormalKey)`
  font-weight: 600;
  color: ${({ theme: { tertiaryColor } }) => tertiaryColor};
  position: relative;
  overflow: hidden;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    content: " ";
    display: block;
    width: 100%;
    height: 5px;
    background: ${({ theme: { tertiaryColor } }) => tertiaryColor};
  }
`;

const WrongKey = styled(NormalKey)`
  background: ${({ theme: { errorColor } }) => errorColor};
`;

const CorrectedKey = styled(NormalKey)`
  background: ${({ theme: { correctedColor } }) => correctedColor};
`;

const SucceedKey = styled(NormalKey)`
  background: ${({ theme: { successColor } }) => successColor};
`;

const QuoteStyled = styled(Wrapper)`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
`;

const Word = styled.div`
  margin: 0.2rem;
`;
