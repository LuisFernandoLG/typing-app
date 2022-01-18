import { KeyBoard } from "./KeyBoard";
import { Quote } from "./Quote";
import { useKeyBoardActivity } from "../hooks/useKeyBoardActivity";
import { ToolBar } from "./toolbar/ToolBar";
import { useEffect } from "react";
import { useEffectKeySounds } from "../hooks/useEffectKeySounds";
import { useToggleKeyBoardButtons } from "../hooks/useToggleKeyBoardButtons";

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

  const {
    isEnableSound,
    enableSound,
    disableSound,
    keyBoardVisibility,
    enableKeyboard,
    disableKeyBoard,
  } = useToggleKeyBoardButtons();
  useEffectKeySounds(keyPressed, isEnableSound);

  useEffect(() => {
    if (isTimeOver || isCompleted) calculateResults();
  }, [isTimeOver, isCompleted]);

  useEffect(() => {
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
            isEnableSound={isEnableSound}
            enableSound={enableSound}
            disableSound={disableSound}
            keyBoardVisibility={keyBoardVisibility}
            enableKeyboard={enableKeyboard}
            disableKeyBoard={disableKeyBoard}
          />
          <Quote quote={quote} indexQuote={indexQuote} />

          <KeyBoard
            keyBoardVisibility={keyBoardVisibility}
            keyWanted={keyWanted}
            keyPressed={keyPressed}
          />
        </>
      ) : null}
    </>
  );
};
