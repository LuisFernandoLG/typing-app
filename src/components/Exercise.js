import { KeyBoard } from "./KeyBoard";
import { Quote } from "./Quote";
import { useKeyBoard } from "../hooks/useKeyBoard";

export const Exercise = ({ q }) => {
  const {
    keys,
    keyPressed,
    addKeyPressed,
    indexQuote,
    quote,
    wrongKeyPressed,
  } = useKeyBoard(q);
  return (
    <>
      <Quote quote={quote} indexQuote={indexQuote} />
      <KeyBoard
        keyWanted={quote[indexQuote]}
        keys={keys}
        keyPressed={keyPressed}
        addKeyPressed={addKeyPressed}
        wrongKeyPressed={wrongKeyPressed}
      />
    </>
  );
};
