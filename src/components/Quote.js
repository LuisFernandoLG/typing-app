import { useEffect, useState } from "react";
import { generate } from "shortid";
import styled, { keyframes } from "styled-components";
import { Wrapper } from "./shareStyleComponents/Wrapper";

export const Quote = ({ quote, indexQuote }) => {
  const [words, setWords] = useState(null);

  useEffect(() => {
    const dividedWords = getWords();
    setWords(dividedWords);
  }, []);

  useEffect(() => {
    if (words === null) return;
    updateKey();
  }, [indexQuote]);

  const updateKey = () => {
    let subIndex = 0;

    const copyWords = words.map((item) => {
      return {
        id: item.id,
        items: item.items.map((subItem) => {
          const temp = quote[subIndex];
          temp.id = subItem.id;
          subIndex++;
          return temp;
        }),
      };
    });

    setWords(copyWords);
  };

  // const updateKey = () => {
  //   const copyWords = words.map((item) => {
  //     return {
  //       ...item,
  //       items: item.items.map((subItem) => {
  //         console.log(subItem.id === quote[indexQuote].id);
  //         return subItem.id === quote[indexQuote].id
  //           ? quote[indexQuote]
  //           : subItem;
  //       }),
  //     };
  //   });

  //   setWords(copyWords);
  // };

  const getTypeKey = (item) => {
    if (item.id === quote[indexQuote].id)
      return <WantedKey key={item.id}>{item.content}</WantedKey>;
    switch (item.status) {
      case "SUCCEED":
        return <SucceedKey key={item.id}>{item.content}</SucceedKey>;
      case "FAILED":
        return <WrongKey key={item.id}>{item.content}</WrongKey>;
      case "UNTRIED":
        return <NormalKey key={item.id}>{item.content}</NormalKey>;
    }
  };

  const getWords = () => {
    let xwords = [];
    let word = { id: null, items: [] };
    const sizeQuote = quote.length - 1;

    quote.forEach((item, i) => {
      if (item.key === " " || sizeQuote === i) {
        word.items.push(item);
        word.id = generate();
        xwords.push(word);
        word = { id: null, items: [] };
      } else word.items.push(item);
    });

    return xwords;
  };

  return (
    <QuoteStyled flex flex_jc_c>
      {words &&
        words.map((word) => (
          <Word key={word.id}>
            {word.items.map((letter) => getTypeKey(letter))}
          </Word>
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
