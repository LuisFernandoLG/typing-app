import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { FingerLoader } from '../components/loaders/FingerLoader'
import { groupArrayOfObjects } from '../helpers/groupArrayOfObjects'
import { useSession } from '../hooks/useSession'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import api from '../services/api'
import styled from 'styled-components'
import { Layout } from '../layouts/Layout'
import { GridContainer } from '../components/GridContainer'

export const EnglishStadisticsPage = () => {
  const [allExercises, setAllExercises] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(true)
  const { user } = useSession()

  const isCourseStarted = ({ courses }) => {
    const startedCourses = []
    courses.forEach((course) => {
      const isAnyExerciseStarted = course.exercises.some(
        ({ isDone }) => isDone > 0
      )
      return startedCourses.push({
        ...course,
        isStarted: isAnyExerciseStarted,
        completedExercises: getCompleted(course.exercises),
        totalExercises: getTotal(course.exercises)
      })
    })
    return startedCourses
  }

  const getCompleted = (exercises) =>
    exercises.reduce((sum, { isDone }) => {
      if (isDone) return sum + 1
      else return sum
    }, 0)

  const getTotal = (exercises) =>
    exercises.reduce((sum, { isDone }) => {
      return sum + 1
    }, 0)

  useEffect(() => {
    setIsLoading(true)
    api()
      .getAllEnglishCourses({ userId: user.id })
      .then((data) => {
        const x = isCourseStarted({ courses: data.data })
        const dataGroupedByDifficulty = groupArrayOfObjects({
          list: x,
          key: 'difficulty'
        })
        const arrayConverted = Object.entries(dataGroupedByDifficulty)
        setAllExercises(arrayConverted)
        console.log({ arrayConverted })
      })
      .catch((e) => {
        console.log({ e })
        toast.error('Oops! Hubo un error.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <Layout>
      {isLoading
        ? (
        <FlexContainer jc_c ai_c>
          <FingerLoader />
        </FlexContainer>
          )
        : (
            allExercises.map((level, i) => (
          <Card fd_c pd='2rem' key={i}>
            <MegaTitle>{level[0]}</MegaTitle>
            <br />
            <GridContainer autoFill={true} minMax='2rem, 150px' gap='0.5rem'>
              {level[1].map((course, i_2) => (
                <FlexContainer fd_c jc_c ai_c pd='0.5rem' key={`${i_2}-ti`}>
                  <Title>{course.categoryName}</Title>
                  <ExerciseBubble
                    jc_c
                    ai_c
                    isDone={
                      course.completedExercises === course.totalExercises
                    }>
                    {course.completedExercises} / {course.totalExercises}
                  </ExerciseBubble>
                </FlexContainer>
              ))}
            </GridContainer>
          </Card>
            ))
          )}
    </Layout>
  )
}

const MegaTitle = styled.h2`
  color: ${({ theme: { fontColor } }) => fontColor};
  font-size: 2rem;
  width: 6.25rem;
`
const ExerciseBubble = styled(FlexContainer)`
  /* width: 6.25rem; */
  /* height: 6.25rem; */
  border-radius: 5rem;
  cursor: pointer;
  font-weight: 600;
  text-align: center;
  transition: transform 300ms ease;

  padding: 1rem;

  ${({ theme: { successColor, fontColor, accentColor }, isDone }) =>
    isDone
      ? `
      background:${successColor};
      color:${fontColor};`
      : `
      background:${accentColor};
      color:${fontColor};
      border: 3px dashed ${fontColor};
  `}

  &:hover {
    transform: scale(1.05);
  }
`

const Title = styled.h3`
  color: ${({ theme: { fontColor } }) => fontColor};
  font-size: 1.5rem;
  width: 6.25rem;
`
const Card = styled(FlexContainer)`
  padding: 3rem 2rem;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  background: ${({ theme: { tertiaryColor } }) => tertiaryColor};
  transition: background-image 300ms ease;
  position: relative;
  overflow: hidden;

  margin: 1rem 0;
`
