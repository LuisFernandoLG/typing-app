import { Layout } from '../layouts/Layout'
import { BackPageButton } from '../components/ui/BackPageButton'
import { routesV3 } from '../routes'
import { Link, useParams } from 'react-router-dom'
import { AbcExercise } from '../components/exercises/AbcExercise'
import { useEffect, useState } from 'react'
import api from '../services/api'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { Button } from 'style-components'
import { IoArrowForward } from 'react-icons/io5'
import { MecaExercise } from '../components/MecaExercise'

const setExercisesFromArray = ({ exers, courseId }) => {
  return exers.find(({ id }) => courseId === id).exercises
}

export const EnglishExercisePage = () => {
  const [allExercises, setAllExercises] = useState(null)
  const { courseId, exerciseId } = useParams()
  const [currentExercise, setCurrentExercise] = useState(null)
  const [exerciseIndex, setExerciseIndex] = useState(null)
  const [isDone, setIsDone] = useState(false)

  const setExerciseDone = () => setIsDone(true)

  const searchForExercise = ({ exerciseId }) =>
    allExercises.find(({ id }) => id === exerciseId)

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

  const Exercise = ({ exerciseType }) => {
    if (exerciseType === 'abcExercise') {
      return <AbcExercise abcExercise={currentExercise} setIsDone={setExerciseDone} />
    }
    if (exerciseType === 'mecaExercise') {
      return (
        <MecaExercise mecaExercise={currentExercise} setIsDone={setExerciseDone} />
      )
    }
  }

  return (
    <Layout>
      <BackPageButton backRoute={routesV3.ENGLISH_PAGE.route} />
      {currentExercise
        ? (
        <>
          <Exercise exerciseType={currentExercise.type} />

          {isDone
            ? (
            <>
              <FlexContainer jc_fs ai_c>
                {exerciseIndex === allExercises.length - 1 && (
                  <Link to={routesV3.ENGLISH_PAGE.route}>
                    <Button Button primary={true} pd='1rem'>
                      Página principal
                    </Button>
                  </Link>
                )}
              </FlexContainer>

              <FlexContainer ai_fe jc_fe pd='1rem'>
                {exerciseIndex !== allExercises.length - 1 && (
                  <Link
                    to={`${routesV3.ENGLISH_PAGE.route}/${
                      routesV3.ENGLISH_PAGE.subRoutes.ENGLISH_EXERCISE_PAGE
                        .route
                    }/${courseId}/${allExercises[exerciseIndex + 1].id}`}>
                    <Button Button primary={true} pd='1rem'>
                      Siguiente <IoArrowForward />{' '}
                    </Button>
                  </Link>
                )}
              </FlexContainer>
            </>
              )
            : null}
        </>
          )
        : (
        <p>Buscando</p>
          )}
    </Layout>
  )
}
