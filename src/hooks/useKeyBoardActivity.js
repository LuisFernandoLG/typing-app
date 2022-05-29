import { useEffect, useReducer } from 'react'
import { TYPES } from '../actions/KeyBoardActivityActions'
import {
  keyBoardActivityInitialState,
  KeyBoardActivityReducer
} from '../reducers/KeyBoardActivityReducer'
const excludeKeysFromPressed = [
  'Control',
  'Shift',
  'CapsLock',
  'Alt',
  'Tab',
  'AltGraph',
  'shift right',
  'F1',
  'F2',
  'F3',
  'F4',
  'F5',
  'F6',
  'F7',
  'F8',
  'F9',
  'F10',
  'F11',
  'F12',
  'Dead'
]

const specialKeys = {
  BACK_SPACE: 'Backspace'
}

export const useKeyBoardActivity = ({ textQuote }) => {
  const [state, dispatch] = useReducer(
    KeyBoardActivityReducer,
    keyBoardActivityInitialState({ textQuote })
  )

  const handleKeyDown = (e) => {
    const character = e.key
    if (isExcludeKey(character)) return null
    switch (character) {
      case specialKeys.BACK_SPACE: {
        dispatch({ type: TYPES.REMOVE_KEY_PRESSED })
        break
      }
      default: {
        dispatch({ type: TYPES.ADD_KEY_PRESSED, payload: character })
      }
    }
  }

  const reset = () => dispatch({ type: TYPES.RESTART })

  const isExcludeKey = (character) =>
    !excludeKeysFromPressed.every((item) => item !== character)

  const calculateResults = () => dispatch({ type: TYPES.CALCULATE_RESULTS })

  const updateQuote = ({ newQuote }) => dispatch({ type: TYPES.UPDATE_QUOTE, payload: newQuote })

  const retrace = () => dispatch({ type: TYPES.REMOVE_KEY_PRESSED })

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return {
    quote: state.quote,
    indexQuote: state.indexQuote,
    keyWanted: state.quote ? state.quote[state.indexQuote] : null,
    isExerciseCompleted: state.isCompleted,
    keyPressed: state.keyPressed,
    sizeQuote: state.sizeQuote,
    results: state.results,
    calculateResults,
    updateQuote,
    retrace,
    reset
  }
}
