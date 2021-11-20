import { KeyBoard } from "./KeyBoard";
import { Quote } from "./Quote";
import { useKeyBoardActivity } from "../hooks/useKeyBoardActivity";
import { Score } from "./Score";
import { ToolBar } from "./toolbar/ToolBar";
import { useEffect, useState } from "react";
import { useEffectKeySounds } from "../hooks/useEffectKeySounds";

export const Exercise = ({
  q,
  isTimeOver,
  setIsCompleted,
  isCompleted,
  setResults,
}) => {
  const {
    indexQuote,
    quote,
    keyWanted,
    keyPressed,
    isExerciseCompleted,
    sizeQuote,
    results,
    calculateResults,
  } = useKeyBoardActivity(q);
  const [isEnableSound, setIsEnableSound] = useState(true);
  const [keyBoardVisibility, setKeyBoardVisibility] = useState(true);
  useEffectKeySounds(keyPressed, isEnableSound);

  const toggleEnableSound = () => setIsEnableSound(!isEnableSound);

  const toggleKeyBoardVisibility = () =>
    setKeyBoardVisibility(!keyBoardVisibility);

  useEffect(() => {
    if (isTimeOver || isCompleted) calculateResults();
  }, [isTimeOver, isCompleted]);

  useEffect(() => {
    console.log(results);
    if (results) setResults(results);
  }, [results]);

  useEffect(() => {
    if (isExerciseCompleted) setIsCompleted(true);
  }, [isExerciseCompleted]);

  return (
    <>
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
