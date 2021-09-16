import { KeyBoard } from "./KeyBoard";
import { Quote } from "./Quote";
import { useKeyBoardActivity } from "../hooks/useKeyBoardActivity";
import { Score } from "./Score";

export const Exercise = ({ q }) => {
  const {
    indexQuote,
    quote,
    keyWanted,
    keyPressed,
    isCompleted,
    sizeQuote,
    results,
  } = useKeyBoardActivity(q);

  if (isCompleted) return <Score results={results} />;

  return (
    <>
      <h2>IndexQuote:{indexQuote}</h2>
      {sizeQuote > 0 ? (
        <>
          <Quote quote={quote} indexQuote={indexQuote} />
          {keyWanted !== null ? (
            <KeyBoard keyWanted={keyWanted} keyPressed={keyPressed} />
          ) : null}
        </>
      ) : null}
    </>
  );
};
