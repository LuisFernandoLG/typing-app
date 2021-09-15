import { generate } from "shortid";
import { TYPES } from "../actions/KeyBoardActivityActions";

export const keyBoardActivityInitialState = {
  quote: null,
  sizeQuote: null,
  indexQuote: null,
  isCompleted: false,
};

export function KeyBoardActivityReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_KEY_PRESSED: {
      const characterWanted = state.quote[state.indexQuote].content;
      const characterPressed = action.payload;
      let newStatus =
        characterPressed === characterWanted ? "SUCCEED" : "FAILED";

      return {
        ...state,
        indexQuote: state.indexQuote + 1,
        keyPressed: { content: characterPressed, status: newStatus },
        quote: state.quote.map((keyElement, index) =>
          index === state.indexQuote
            ? {
                ...keyElement,
                status: newStatus,
                attempts: keyElement.attempts + 1,
              }
            : keyElement
        ),
      };
    }

    case TYPES.REMOVE_KEY_PRESSED: {
      if (state.indexQuote > 0)
        return {
          ...state,
          quote: state.quote.map((item) =>
            item.id === state.quote[state.indexQuote].id
              ? {
                  ...item,
                  status: "UNTRIED",
                }
              : item
          ),
          indexQuote: state.indexQuote - 1,
        };
    }

    case TYPES.MARK_AS_COMPLETED:
      return {
        ...state,
        isCompleted: true,
      };

    case TYPES.RESTART:
      return {
        ...state,
        indexQuote: 0,
        quote: state.quote.map((item) => ({
          ...item,
          status: "UNTRIED",
          attempts: 0,
        })),
      };

    case TYPES.ADD_QUOTE:
      return {
        ...state,
        indexQuote: 0,
        sizeQuote: action.payload.length - 1,
        quote: action.payload.split("").map((character) => ({
          id: generate(),
          content: character.toLowerCase(),
          status: "UNTRIED",
          attempts: 0,
        })),
      };

    default:
      return state;
  }
}
