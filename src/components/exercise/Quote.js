import { useEffect, useState } from "react";
import { generate } from "shortid";
import styled, { keyframes } from "styled-components";
import { Wrapper } from "../shareStyleComponents/Wrapper";

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

const flickeringAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }`;

const NormalKey = styled.span`
  font-size: 2rem;
  font-weight: 700;
  margin: 0.5rem 0.1rem;
  transition: color 0.5s ease-in-out;
  white-space: pre-wrap;

  color: ${({ theme: { bgColor } }) => bgColor};
`;

const WantedKey = styled(NormalKey)`
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

const WrongKey = styled(NormalKey)`
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
    /* right: 50%; */
    background: ${({ theme: { errorColor } }) => errorColor};
  }
`;

const SucceedKey = styled(NormalKey)`
  color: ${({ theme: { secondaryColor } }) => secondaryColor};
`;

const QuoteStyled = styled(Wrapper)`
  padding: 1rem;
  display: flex;
`;

const Word = styled.div`
  margin: 0.2rem;
`;
