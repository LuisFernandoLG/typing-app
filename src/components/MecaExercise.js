import { useKeyBoardActivity } from '../hooks/useKeyBoardActivity'
import { Quote } from './exercise/Quote'

const textQuote = 'Esto es una prueba'

export const MecaExercise = ({ mecaExercise }) => {
  const { quote, indexQuote, isExerciseCompleted } = useKeyBoardActivity({
    textQuote
  })
  return (
    <>
      {isExerciseCompleted
        ? (
        <p>Terminado bro</p>
          )
        : (
        <Quote quote={quote} indexQuote={indexQuote} />
          )}
    </>
  )
}
