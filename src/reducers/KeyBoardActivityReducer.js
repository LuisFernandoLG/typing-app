import { generate } from 'shortid'
import { TYPES } from '../actions/KeyBoardActivityActions'
import { keyTypes } from '../constants/keyTypes'
import { groupInwordsGroup } from '../helpers/groupInWords'

export const keyBoardActivityInitialState = {
  quote: [],
  sizeQuote: null,
  indexQuote: 0,
  isCompleted: false,
  results: null,
}

export function KeyBoardActivityReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_KEY_PRESSED: {
      const characterWanted = state.quote[state.indexQuote].content
      const characterPressed = action.payload
      let newStatus =
        characterPressed === characterWanted
          ? keyTypes.SUCCEED_KEY
          : keyTypes.WRONG_KEY
      let newIndexQuote =
        state.indexQuote === state.sizeQuote
          ? state.indexQuote
          : state.indexQuote + 1

      let isCompleted = state.indexQuote === state.sizeQuote

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
                attempts: keyElement.attempts + 1,
              }
            : index === state.indexQuote + 1
            ? {
                ...keyElement,
                status: keyTypes.WANTED_KEY,
              }
            : keyElement
        ),
      }
    }

    case TYPES.REMOVE_KEY_PRESSED: {
      if (state.indexQuote > 0)
        return {
          ...state,
          quote: state.quote.map((item, index) =>
            item.id === state.quote[state.indexQuote].id
              ? {
                  ...item,
                  status: keyTypes.UNDTRIED_KEY,
                }
              : index === state.indexQuote - 1
              ? {
                  ...item,
                  status: keyTypes.WANTED_KEY,
                }
              : item
          ),
          indexQuote: state.indexQuote - 1,
        }
      else {
        return state
      }
    }

    case TYPES.MARK_AS_COMPLETED:
      return {
        ...state,
        isCompleted: true,
      }

    case TYPES.RESTART:
      return {
        ...state,
        indexQuote: 0,
        quote: state.quote.map((item) => ({
          ...item,
          status: keyTypes.UNDTRIED_KEY,
          attempts: 0,
        })),
      }

    case TYPES.ADD_QUOTE: {
      const keys = action.payload.split('').map((character, i) => ({
        id: generate(),
        content: character.toLowerCase(),
        status: i === 0 ? keyTypes.WANTED_KEY : keyTypes.UNDTRIED_KEY,
        attempts: 0,
      }))

      return {
        ...state,
        indexQuote: 0,
        sizeQuote: action.payload.length - 1,
        quote: keys,
      }
    }

    case TYPES.CALCULATE_RESULTS: {
      let resTemplate = {
        succeed: 0,
        failed: 0,
      }

      return {
        ...state,
        results: state.quote.reduce(
          (prev, item, _) =>
            item.status === keyTypes.SUCCEED_KEY
              ? { ...prev, succeed: prev.succeed + 1 }
              : { ...prev, failed: prev.failed + 1 },
          resTemplate
        ),
      }
    }

    default:
      return state
  }
}
