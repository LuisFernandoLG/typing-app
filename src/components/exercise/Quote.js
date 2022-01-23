import { useEffect, useState } from "react";
import { generate } from "shortid";
import styled, { keyframes } from "styled-components";
import { keyTypes } from "../../constants/keyTypes";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { Key } from "./keysComponents/Key";

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
            {word.items.map(({ status, content }) => (
              <Key type={status}>{content}</Key>
            ))}
          </Word>
        ))}
    </QuoteStyled>
  );
};

const QuoteStyled = styled(Wrapper)`
  padding: 1rem;
  display: flex;
  background: ${({ theme: { primaryColor } }) => primaryColor};
  border-radius: ${({ theme: { border_radius } }) => border_radius};
  height: auto;
  margin: 2rem 0;
`;

const Word = styled.div`
  margin: 0.2rem;
`;
