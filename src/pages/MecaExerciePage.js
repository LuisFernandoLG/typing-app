/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FingerLoader } from '../components/loaders/FingerLoader'
import { MecaExercise } from '../components/MecaExercise'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { useSession } from '../hooks/useSession'
import api from '../services/api'

export const MecaExercisePage = () => {
  const { idQuote } = useParams()
  const [exercise, setExercise] = useState(null)

  const { user } = useSession()

  useEffect(() => {
    api()
      .getMecaExercise({ idQuote })
      .then((d) => {
        console.log({ d })
        setExercise(d.data)
      })
      .catch(() => {
        toast.error('Opps!, algo salió mal')
      })
  }, [])

  const setIsDone = ({ isCorrect }) => {
    if (isCorrect) {
      api().markMecExerciseAsCompleted({ mecaId: idQuote, userId: user.id }).then(() => {
        console.log('wooo')
      }).catch(() => {
        toast.error('Opps!, algo salió mal')
      })
    }
  }

  return (
    <>
      {exercise
        ? (
        <MecaExercise mecaExercise={exercise} setIsDone={setIsDone} />
          )
        : (
        <FlexContainer jc_c ai_c>
          <FingerLoader />
        </FlexContainer>
          )}
    </>
  )
}
