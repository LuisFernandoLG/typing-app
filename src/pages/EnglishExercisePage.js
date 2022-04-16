import { Layout } from '../layouts/Layout'
import { BackPageButton } from '../components/ui/BackPageButton'
import { routesV3 } from '../routes'
import { Link, useParams } from 'react-router-dom'
import { AbcExercise } from '../components/exercises/AbcExercise'
import { useEffect, useState, useRef } from 'react'
import api from '../services/api'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
// import { IoArrowForward } from 'react-icons/io5'
import { MecaExercise } from '../components/MecaExercise'
import { Button } from '../components/ui/Button'
import { FingerLoader } from '../components/loaders/FingerLoader'
// import { FloatContainer } from '../components/FloatContainer'
import { ShorHandKey } from '../components/ShortHandKey'
// import { EnterKey } from '../components/shortHandKeys/EnterKey'
import { AiOutlineEnter } from 'react-icons/ai'
import styled from 'styled-components'

const setExercisesFromArray = ({ exers, courseId }) => {
  return exers.find(({ id }) => courseId === id).exercises
}

const initialIsDone = false

export const EnglishExercisePage = () => {
  const [allExercises, setAllExercises] = useState(null)
  const { courseId, exerciseId } = useParams()
  const [currentExercise, setCurrentExercise] = useState(null)
  const [exerciseIndex, setExerciseIndex] = useState(null)
  const [isDone, setIsDone] = useState(initialIsDone)

  const setExerciseDone = () => setIsDone(true)
  const nextBtnRef = useRef(null)
  const homeBtnRef = useRef(null)

  const searchForExercise = ({ exerciseId }) =>
    allExercises.find(({ id }) => id === exerciseId)

  useEffect(() => {
    console.log({ isDone })
  }, [isDone])

  const searchForExerciseIndex = ({ exerciseId }) => {
    return allExercises.findIndex(({ id }) => id === exerciseId)
  }

  useEffect(() => {
    const getData = async () => {
      const x = await api().getAllEnglishExercises({
        couseId: 1,
        exerciseId: 2
      })

      const exercisesFromCourseId = setExercisesFromArray({
        exers: x.data,
        courseId: parseInt(courseId)
      })

      setAllExercises(exercisesFromCourseId)
    }

    getData()
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
      const item = searchForExercise({ exerciseId: parseInt(exerciseId) })
      const index = searchForExerciseIndex({ exerciseId: parseInt(exerciseId) })
      setCurrentExercise(item)
      setExerciseIndex(index)
    }
  }, [allExercises])

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

  return (
    <Layout>
      <BackPageButton backRoute={routesV3.ENGLISH_PAGE.route} />
      {currentExercise
        ? (
        <>
          <FlexContainer jc_c ai_c>
            {currentExercise.type === 'abcExercise' && (
              <AbcExercise
                abcExercise={currentExercise}
                setIsDone={setExerciseDone}
                goNext={goNext}
              />
            )}

            {currentExercise.type === 'mecaExercise' && (
              <MecaExercise
                mecaExercise={currentExercise}
                setIsDone={setExerciseDone}
              />
            )}
          </FlexContainer>

          {isDone
            ? (
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
                      to={`${routesV3.ENGLISH_PAGE.route}/${
                        routesV3.ENGLISH_PAGE.subRoutes.ENGLISH_EXERCISE_PAGE
                          .route
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
              )
            : null}
        </>
          )
        : (
        <FlexContainer jc_c ai_c pd='15% 0'>
          <FingerLoader />
        </FlexContainer>
          )}
    </Layout>
  )
}

const EnterKeyShorCut = styled.span`
margin-left: 0.5rem;
  padding:0 0.5rem;
  font-size:1.5rem;
  font-weight:900;
  border-radius: 10px;
  color: ${({ theme: { fontColor } }) => fontColor};
  background: ${({ theme: { accentColor } }) => accentColor};
  border: 2px solid ${({ theme: { fontColor } }) => fontColor};
`
