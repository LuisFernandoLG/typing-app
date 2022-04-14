import { useKeyBoardActivity } from '../../hooks/useKeyBoardActivity'
import { Quote } from '../exercise/Quote'

export const MecaExercise = ({ text, results }) => {
  const { quote } = useKeyBoardActivity({ textQuote: text })
  return (
    <>
      <Quote quote={quote} />
    </>
  )
}
