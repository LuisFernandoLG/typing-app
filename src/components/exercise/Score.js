import styled from 'styled-components'
import { BubbleScore } from './BubbleScore'
import { FaUndo } from 'react-icons/fa'
import { Wrapper } from '../shareStyleComponents/Wrapper'
import { Button } from '../ui/Button'
import { useEffect } from 'react'
import { getPercentage } from '../../helpers/getPercentage'
import { useSession } from '../../hooks/useSession'
import { useFetch } from '../../hooks/useFetch'
import { endpoints } from '../signIn/api'
import { useLinkRouter } from '../../hooks/useLinkRouter'

const getPutScoreOptions = ({
  pointsScored,
  userId,
  currentExercise,
  timeTaken
}) => ({
  method: 'POST',
  body: JSON.stringify({
    total_score: pointsScored,
    user_id: userId,
    exercise_id: currentExercise.id,
    time_taken: timeTaken
  })
})

const getSuccessfulPercentage = ({ results }) =>
  Math.trunc((results.succeed * 100) / (results.succeed + results.failed))

export const Score = ({ results, currentExercise, timeTaken }) => {
  const { fetchData } = useFetch()
  const { user } = useSession()
  const { goHomePage, reloadPage } = useLinkRouter()

  const percentageScored = getSuccessfulPercentage({ results })
  const pointsScored = getPercentage({
    percentage: percentageScored,
    maxPoints: currentExercise.points
  })

  useEffect(() => {
    const options = getPutScoreOptions({
      pointsScored,
      currentExercise,
      userId: user.id,
      timeTaken
    })
    fetchData(endpoints.score, options)
  }, [])

  return (
    <ScoreContainer flex flex_jc_c flex_dc flex_ai_c gap='1rem'>
      <BubbleScore percentage={percentageScored} />
      <Points>{pointsScored} Puntos</Points>
      <Button primary={true} onClick={goHomePage} pd="1rem 2rem">
        Volver al inicio
      </Button>
      <Button secondary={true} onClick={reloadPage} pd="1rem 2rem">
        <FaUndo />
      </Button>
    </ScoreContainer>
  )
}

const ScoreContainer = styled(Wrapper)`
  margin: 1rem;
  background: ${({ theme: { accentColor } }) => accentColor};
  

  padding: 2rem;
  border-radius: 1rem;
`

const Points = styled.p`
  text-align: center;
  font-weight: 800;
`
