import { generate } from 'shortid'
import { TYPES } from '../actions/KeyBoardActivityActions'
import { keyTypes } from '../constants/keyTypes'

export const keyBoardActivityInitialState = ({ textQuote }) => ({
  textQuote: textQuote,
  quote: textQuote.split('').map((character, i) => ({
    id: generate(),
    content: character,
    status: i === 0 ? keyTypes.WANTED_KEY : keyTypes.UNDTRIED_KEY,
    attempts: 0
  })),
  sizeQuote: textQuote.length - 1,
  indexQuote: 0,
  isCompleted: false,
  results: []
})

export function KeyBoardActivityReducer (state, action) {
  switch (action.type) {
    case TYPES.ADD_KEY_PRESSED: {
      const characterWanted = state.quote[state.indexQuote].content
      const characterPressed = action.payload
      const newStatus =
        characterPressed === characterWanted
          ? keyTypes.SUCCEED_KEY
          : keyTypes.WRONG_KEY
      const newIndexQuote =
        state.indexQuote === state.sizeQuote
          ? state.indexQuote
          : state.indexQuote + 1

      const isCompleted = state.indexQuote === state.sizeQuote

      return {
        ...state,
        isCompleted: isCompleted,
        indexQuote: newIndexQuote,
        keyPressed: { content: characterPressed, status: newStatus },
        quote: state.quote.map((keyElement, index) =>
          index === state.indexQuote
            ? {
                ...keyElement,
                status: newStatus,
                attempts: keyElement.attempts + 1
              }
            : index === state.indexQuote + 1
              ? {
                  ...keyElement,
                  status: keyTypes.WANTED_KEY
                }
              : keyElement
        )
      }
    }

    case TYPES.REMOVE_KEY_PRESSED: {
      if (state.indexQuote > 0) {
        return {
          ...state,
          quote: state.quote.map((item, index) =>
            item.id === state.quote[state.indexQuote].id
              ? {
                  ...item,
                  status: keyTypes.UNDTRIED_KEY
                }
              : index === state.indexQuote - 1
                ? {
                    ...item,
                    status: keyTypes.WANTED_KEY
                  }
                : item
          ),
          indexQuote: state.indexQuote - 1
        }
      } else {
        return state
      }
    }

    case TYPES.MARK_AS_COMPLETED:
      return {
        ...state,
        isCompleted: true
      }

    case TYPES.RESTART:
      return keyBoardActivityInitialState({ textQuote: state.textQuote })

    case TYPES.ADD_QUOTE: {
      const keys = action.payload.split('').map((character, i) => ({
        id: generate(),
        content: character.toLowerCase(),
        status: i === 0 ? keyTypes.WANTED_KEY : keyTypes.UNDTRIED_KEY,
        attempts: 0
      }))

      return {
        ...state,
        indexQuote: 0,
        sizeQuote: action.payload.length - 1,
        quote: keys
      }
    }

    case TYPES.CALCULATE_RESULTS: {
      const resTemplate = {
        succeed: 0,
        failed: 0
      }

      return {
        ...state,
        results: state.quote.reduce(
          (prev, item, _) =>
            item.status === keyTypes.SUCCEED_KEY
              ? { ...prev, succeed: prev.succeed + 1 }
              : { ...prev, failed: prev.failed + 1 },
          resTemplate
        )
      }
    }

    case TYPES.UPDATE_QUOTE: {
      return keyBoardActivityInitialState({ textQuote: action.payload })
    }

    default:
      return state
  }
}
