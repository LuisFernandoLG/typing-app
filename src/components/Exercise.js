import { KeyBoard } from "./KeyBoard";
import { Quote } from "./Quote";
import { useKeyBoardActivity } from "../hooks/useKeyBoardActivity";
import { Score } from "./Score";
import { ToolBar } from "./toolbar/ToolBar";
import { useState } from "react";
import { useEffectKeySounds } from "../hooks/useEffectKeySounds";

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
  const [isEnableSound, setIsEnableSound] = useState(false);
  const [keyBoardVisibility, setKeyBoardVisibility] = useState(true);
  useEffectKeySounds(keyPressed, isEnableSound);

  const toggleEnableSound = () => setIsEnableSound(!isEnableSound);

  const toggleKeyBoardVisibility = () =>
    setKeyBoardVisibility(!keyBoardVisibility);

  if (isCompleted) return <Score results={results} />;

  return (
    <>
      <h2>IndexQuote:{indexQuote}</h2>
      {sizeQuote > 0 ? (
        <>
          <ToolBar
            keyBoardVisibility={keyBoardVisibility}
            toggleKeyBoardVisibility={toggleKeyBoardVisibility}
            isEnableSound={isEnableSound}
            toggleEnableSound={toggleEnableSound}
          />
          <Quote quote={quote} indexQuote={indexQuote} />
          {keyWanted !== null && keyBoardVisibility ? (
            <KeyBoard keyWanted={keyWanted} keyPressed={keyPressed} />
          ) : null}
        </>
      ) : null}
    </>
  );
};
