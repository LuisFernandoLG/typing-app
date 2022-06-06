/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FingerLoader } from '../components/loaders/FingerLoader'
import { MecaExercise } from '../components/MecaExercise'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { BackPageButton } from '../components/ui/BackPageButton'
import { useSession } from '../hooks/useSession'
import { Layout } from '../layouts/Layout'
import { routesV3 } from '../routes'
import api from '../services/api'
import styled from 'styled-components'
// import { getPercentage } from '../helpers/getPercentage'
import { CircularProgressbar } from 'react-circular-progressbar'
import { Button } from '../components/ui/Button'

export const MecaExercisePage = () => {
  const { idQuote } = useParams()
  const [exercise, setExercise] = useState(null)
  const [results, setResults] = useState(null)
  const [percentage, setPercentage] = useState(0)

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

  const getPercentage = (num, total) => Math.trunc((num / total) * 100)

  const setIsDone = ({ isCorrect, results }) => {
    setResults(results)
    const v = getPercentage(results.succeed, results.succeed + results.failed)
    setPercentage(v)
    if (isCorrect) {
      api()
        .markMecExerciseAsCompleted({ mecaId: idQuote, userId: user.id })
        .then(() => {
          console.log('wooo')
        })
        .catch(() => {
          toast.error('Opps!, algo salió mal')
        })
    }
  }

  return (
    <Layout>
      <BackPageButton backRoute={routesV3.MECA_PAGE.route} />
      <FlexContainer jc_c ai_c>
        {exercise
          ? (
              results
                ? (
            <Card pd='2rem' fd_c jc_c ai_c gap="1rem">
              {' '}
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
              />
              <Link to={routesV3.MECA_PAGE.route}>
              <Button primary pd="1rem 3rem">Volver</Button>
              </Link>
            </Card>
                  )
                : (
            <MecaExercise mecaExercise={exercise} setIsDone={setIsDone} />
                  )
            )
          : (
          <FlexContainer jc_c ai_c>
            <FingerLoader />
          </FlexContainer>
            )}
      </FlexContainer>
    </Layout>
  )
}

const Card = styled(FlexContainer)`
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  background: ${({ theme: { accentColor } }) => accentColor};
  width: max-content;
`
