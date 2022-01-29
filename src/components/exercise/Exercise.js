import { KeyBoard } from './KeyBoard'
import { Quote } from './Quote'
import { useKeyBoardActivity } from '../../hooks/useKeyBoardActivity'
import { useEffect } from 'react'

export const Exercise = ({
  q,
  isKeyboardActive,
  markAsCompleted,
  setResults,
  isTimeOver,
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
  } = useKeyBoardActivity(q)

  useEffect(() => {
    if (isExerciseCompleted || isTimeOver) {
      markAsCompleted()
      calculateResults()
    }
  }, [isExerciseCompleted, isTimeOver])

  useEffect(() => {
    if (results !== null) setResults(results)
  }, [results])

  return (
    <>
      {sizeQuote && (
        <>
          <Quote quote={quote} indexQuote={indexQuote} />

          {isKeyboardActive && (
            <KeyBoard
              keyBoardVisibility={isKeyboardActive}
              keyWanted={keyWanted}
              keyPressed={keyPressed}
            />
          )}
        </>
      )}
    </>
  )
}
