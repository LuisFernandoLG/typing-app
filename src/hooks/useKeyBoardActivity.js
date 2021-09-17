import { useEffect, useReducer } from "react";
import { TYPES } from "../actions/KeyBoardActivityActions";
import {
  keyBoardActivityInitialState,
  KeyBoardActivityReducer,
} from "../reducers/KeyBoardActivityReducer";
const excludeKeysFromPressed = [
  "Control",
  "Shift",
  "CapsLock",
  "Alt",
  "Tab",
  "AltGraph",
  "shift right",
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "F11",
  "F12",
];

const specialKeys = {
  BACK_SPACE: "Backspace",
};

export const useKeyBoardActivity = (textQuote) => {
  const [state, dispatch] = useReducer(
    KeyBoardActivityReducer,
    keyBoardActivityInitialState
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    dispatch({ type: TYPES.ADD_QUOTE, payload: textQuote });
    return () => window.removeEventListener("keydown", () => {});
  }, []);

  const handleKeyDown = (e) => {
    let character = e.key;
    if (isExcludeKey(character)) return null;
    switch (character) {
      case specialKeys.BACK_SPACE: {
        dispatch({ type: TYPES.REMOVE_KEY_PRESSED });
        break;
      }
      default: {
        dispatch({ type: TYPES.ADD_KEY_PRESSED, payload: character });
      }
    }
  };

  const isExcludeKey = (character) => {
    return !excludeKeysFromPressed.every((item) => item !== character);
  };

  useEffect(() => {
    if (state.isCompleted) dispatch({ type: TYPES.CALCULATE_RESULTS });
  }, [state.isCompleted]);

  return {
    quote: state.quote,
    indexQuote: state.indexQuote,
    keyWanted: state.quote ? state.quote[state.indexQuote] : null,
    isCompleted: state.isCompleted,
    keyPressed: state.keyPressed,
    sizeQuote: state.sizeQuote,
    results: state.results,
  };
};
