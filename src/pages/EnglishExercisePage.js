import { Layout } from '../layouts/Layout'
import { routesV3 } from '../routes'
import { Link, useParams } from 'react-router-dom'
import { AbcExercise } from '../components/exercises/AbcExercise'
import { useEffect, useState, useRef } from 'react'
import api from '../services/api'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { MecaExercise } from '../components/MecaExercise'
import { Button } from '../components/ui/Button'
import { ShorHandKey } from '../components/ShortHandKey'
import { AiOutlineEnter } from 'react-icons/ai'
import styled from 'styled-components'
import { Loader } from '../components/Loader'
import { toast } from 'react-toastify'
import { useSession } from '../hooks/useSession'
import { FingerLoader } from '../components/loaders/FingerLoader'

const exercisesTypes = {
  MECA_EXERCISE: 1,
  ABC_EXERCISE: 2
}

const initialIsDone = false

export const EnglishExercisePage = () => {
  const [allExercises, setAllExercises] = useState(null)
  const { courseId, exerciseId } = useParams()
  const [currentExercise, setCurrentExercise] = useState(null)
  const [exerciseIndex, setExerciseIndex] = useState(null)
  const [isDone, setIsDone] = useState(initialIsDone)
  const [isLoading, setIsLoading] = useState(true)

  const { user } = useSession()

  const setExerciseDone = ({ isCorrect }) => {
    setIsDone(true)

    if (isCorrect) {
      api()
        .markExerciseFromEnglishCourseCompleted({
          courseId,
          exerciseId,
          userId: user.id
        })
        .then((res) => {
          console.log(res)
        })
    }
  }
  const nextBtnRef = useRef(null)
  const homeBtnRef = useRef(null)

  const searchForExercise = ({ exerciseId }) => {
    return allExercises.find(({ id }) => id === exerciseId)
  }

  const searchForExerciseIndex = ({ exerciseId }) => {
    return allExercises.findIndex(({ id }) => id === exerciseId)
  }

  useEffect(() => {
    setIsLoading(true)
    api()
      .getCourse({ courseId: courseId })
      .then((data) => {
        setAllExercises(data.data)
      })
      .catch(() => {
        toast.error('Oops! Hubo un error.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  const isLastItem = () => {
    return allExercises.length - 1 === exerciseIndex
  }

  const goNext = () => {
    if (isLastItem()) homeBtnRef.current.click()
    else nextBtnRef.current.click()
  }

  useEffect(() => {
    if (allExercises !== null) {
      setExerciseFromURLParams()
    }
  }, [allExercises])

  const setExerciseFromURLParams = () => {
    const item = searchForExercise({ exerciseId: parseInt(exerciseId) })
    const index = searchForExerciseIndex({ exerciseId: parseInt(exerciseId) })

    setCurrentExercise(item)
    setExerciseIndex(index)
  }

  useEffect(() => {
    setIsDone(false)
    if (allExercises) {
      const newIndex = exerciseIndex + 1
      if (newIndex < allExercises.length) {
        setExerciseIndex(exerciseIndex + 1)
        setCurrentExercise(allExercises[exerciseIndex + 1])
      }
    }
  }, [exerciseId])

  if (isLoading) return <FlexContainer jc_c ai_c><FingerLoader/></FlexContainer>

  return (
    <Layout>
      <FlexContainer jc_c ai_c>
        {currentExercise === null
          ? (
          <Loader />
            )
          : (
          <>
            {currentExercise.exerciseType === exercisesTypes.ABC_EXERCISE
              ? (
              <AbcExercise
                abcExercise={currentExercise}
                setIsDone={setExerciseDone}
                goNext={goNext}
              />
                )
              : (
              <MecaExercise
                mecaExercise={currentExercise}
                setIsDone={setExerciseDone}
              />
                )}
          </>
            )}
      </FlexContainer>

      {isDone && (
        <>
          <FlexContainer jc_fe ai_c>
            {exerciseIndex === allExercises.length - 1 && (
              <ShorHandKey handleKeyDown={goNext} code='Enter'>
                <Link ref={homeBtnRef} to={routesV3.ENGLISH_PAGE.route}>
                  <Button primary={true} pd='1rem'>
                    Página principal{' '}
                    <EnterKeyShorCut>
                      <AiOutlineEnter />
                    </EnterKeyShorCut>
                  </Button>
                </Link>
              </ShorHandKey>
            )}
          </FlexContainer>

          <FlexContainer ai_fe jc_fe pd='1rem'>
            {exerciseIndex !== allExercises.length - 1 && (
              <ShorHandKey handleKeyDown={goNext} code='Enter'>
                <Link
                  ref={nextBtnRef}
                  to={`${
                    routesV3.ENGLISH_PAGE.subRoutes.ENGLISH_EXERCISE_PAGE.route
                  }/${courseId}/${allExercises[exerciseIndex + 1].id}`}>
                  <Button primary={true} pd='1rem'>
                    Siguiente{' '}
                    <EnterKeyShorCut>
                      <AiOutlineEnter />
                    </EnterKeyShorCut>
                  </Button>
                </Link>
              </ShorHandKey>
            )}
          </FlexContainer>
        </>
      )}
    </Layout>
  )
}

const EnterKeyShorCut = styled.span`
  margin-left: 0.5rem;
  padding: 0 0.5rem;
  font-size: 1.5rem;
  font-weight: 900;
  border-radius: 10px;
  color: ${({ theme: { fontColor } }) => fontColor};
  background: ${({ theme: { accentColor } }) => accentColor};
  border: 2px solid ${({ theme: { fontColor } }) => fontColor};
`
