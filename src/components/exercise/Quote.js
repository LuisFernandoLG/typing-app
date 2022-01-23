import { useEffect, useState } from "react";
import { generate } from "shortid";
import styled from "styled-components";
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
    let word = { id: generate(), items: [] };
    const sizeQuote = quote.length - 1;

    quote.forEach((item, i) => {
      if (item.content === " ") {
        word.items.push(item);
        xwords.push(word);
        word = { id: generate(), items: [] };
      } else if (sizeQuote === i) {
        word.items.push(item);
        xwords.push(word);
      } else {
        word.items.push(item);
      }
    });

    console.log(xwords);
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
  background: ${({ theme: { primaryColor } }) => primaryColor};
  border-radius: ${({ theme: { border_radius } }) => border_radius};

  max-height: 213px;
  overflow-y: scroll;
  margin: 2rem 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const Word = styled.div`
  margin: 0.5rem 0;
`;
