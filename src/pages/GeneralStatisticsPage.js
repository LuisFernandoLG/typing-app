/* eslint-disable multiline-ternary */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { GridContainer } from '../components/GridContainer'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { Layout } from '../layouts/Layout'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import api from '../services/api'
import { useSession } from '../hooks/useSession'
import { groupArrayOfObjects } from '../helpers/groupArrayOfObjects'
import { toast } from 'react-toastify'
import { FingerLoader } from '../components/loaders/FingerLoader'
import { BackPageButton } from '../components/ui/BackPageButton'
import { routesV3 } from '../routes'

const getPercentage = (num, total) => Math.trunc((num / total) * 100)

export const GeneralStatisticsPage = () => {
  const [dat, setDat] = useState(null)

  const { user } = useSession()

  const getGeneralProgress = (coursesByLevel) => {
    let numOfCompletedPerCourse = { done: 0, total: 0 }
    let formatedLevels = {}
    coursesByLevel.forEach((item) => {
      const nameLevel = item[0]
      const exercises = item[1]

      const exercisesByLevel = exercises.map(
        ({ title, isCompleted, isDone }) => ({
          title,
          isDone: (isCompleted || isDone) > 0,
          progress: (isCompleted || isDone) > 0 ? 100 : 0
        })
      )

      const numOfCompleted = exercisesByLevel.reduce(
        (prev, current, initial) => {
          if (current.isDone > 0) return prev + 1
          else return prev
        },
        0
      )

      const totalOfExercises = exercisesByLevel.length

      numOfCompletedPerCourse = {
        done: numOfCompletedPerCourse.done + numOfCompleted,
        total: numOfCompletedPerCourse.total + totalOfExercises
      }

      formatedLevels = {
        ...formatedLevels,
        [nameLevel]: exercisesByLevel
      }
    })

    return {
      progress: getPercentage(
        numOfCompletedPerCourse.done,
        numOfCompletedPerCourse.total
      ),
      courses: formatedLevels
    }
  }

  useEffect(() => {
    // api()
    //   .getMecaExercises({ userId: user.id })
    //   .then((data) => {
    //     const dataGroupedByDifficulty = groupArrayOfObjects({
    //       list: data.data,
    //       key: 'difficulty'
    //     })
    //     const arrayConverted = Object.entries(dataGroupedByDifficulty)
    //     console.log({ arrayConverted })
    //     const formatedMecaStats = getGeneralProgress(arrayConverted)

    //     setDat([
    //       ...dat,
    //       {
    //         category: 'meca',
    //         data: formatedMecaStats
    //       }
    //     ])
    //     // setExercisesByDifficulty(arrayConverted)
    //   })
    //   .catch((e) => {
    //     console.log({ e })
    //   })

    // Otra api
    // api()
    //   .getRicesAsMarked({ userId: user.id })
    //   .then((data) => {
    //     const dataGroupedByDifficulty = groupArrayOfObjects({
    //       list: data.data,
    //       key: 'difficulty'
    //     })
    //     const arrayConverted = Object.entries(dataGroupedByDifficulty)
    //     console.log({ arrayConverted })
    //     const riceStats = getGeneralProgress(arrayConverted)
    //     console.log({ riceStats })

    //     setDat([
    //       ...dat,
    //       {
    //         category: 'Ricee',
    //         data: riceStats
    //       }
    //     ])
    //     // setExercisesByDifficulty(arrayConverted)
    //   })
    //   .catch((e) => {
    //     console.log({ e })
    //   })

    // Appi english
    // api()
    //   .getAllEnglishCourses({ userId: user.id })
    //   .then((data) => {
    //     const y = isCourseStarted({ courses: data.data })
    //     const dataGroupedByDifficulty = groupArrayOfObjects({
    //       list: y,
    //       key: 'difficulty'
    //     })
    //     const arrayConverted = Object.entries(dataGroupedByDifficulty)
    //     const x = getEnglishByLevel(arrayConverted)
    //     console.log({ x })
    //     setDat([
    //       ...dat,
    //       {
    //         category: 'New english',
    //         data: x
    //       }
    //     ])
    //   })
    //   .catch((e) => {
    //     console.log({ e })
    //     toast.error('Oops! Hubo un error.')
    //   })

    Promise.all(
      [
        api().getAllEnglishCourses,
        api().getMecaExercises,
        api().getRicesAsMarked
        // eslint-disable-next-line node/no-callback-literal
      ].map((callback) => callback({ userId: user.id }))
    )
      .then((values) => {
        setDat([
          {
            category: 'Inglés',
            data: getEnglish(values[0])
          },
          {
            category: 'Aprende mecanografía',
            data: getMeca(values[1])
          },
          {
            category: 'Carreras',
            data: getMeca(values[2])
          }
        ])
      })
      .catch(() => {
        toast.error('Ups! Hubo un error')
      })
  }, [])

  const getEnglish = (data) => {
    const y = isCourseStarted({ courses: data.data })
    const dataGroupedByDifficulty = groupArrayOfObjects({
      list: y,
      key: 'difficulty'
    })
    const arrayConverted = Object.entries(dataGroupedByDifficulty)
    const x = getEnglishByLevel(arrayConverted)
    return x
  }

  const getMeca = (data) => {
    const dataGroupedByDifficulty = groupArrayOfObjects({
      list: data.data,
      key: 'difficulty'
    })
    const arrayConverted = Object.entries(dataGroupedByDifficulty)
    const stats = getGeneralProgress(arrayConverted)
    return stats
  }

  const getEnglishByLevel = (coursesByLevel) => {
    let numOfCompletedPerCourse = { done: 0, total: 0 }
    let formatedLevels = {}

    coursesByLevel.forEach((item) => {
      const nameLevel = item[0]
      const exercises = item[1]

      const exercisesByLevel = exercises.map(
        ({ completedExercises, totalExercises, categoryName }) => {
          numOfCompletedPerCourse = {
            done: numOfCompletedPerCourse.done + completedExercises,
            total: numOfCompletedPerCourse.total + totalExercises
          }
          return {
            title: categoryName,
            isDone: completedExercises === totalExercises,
            progress: getPercentage(completedExercises, totalExercises)
          }
        }
      )

      formatedLevels = {
        ...formatedLevels,
        [nameLevel]: exercisesByLevel
      }
    })

    return {
      progress: getPercentage(
        numOfCompletedPerCourse.done,
        numOfCompletedPerCourse.total
      ),
      courses: formatedLevels
    }
  }

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

  // if(da)

  return (
    <Layout width='100%'>
      <BackPageButton backRoute={routesV3.MENU_PAGE.route}/>
      <FlexContainer jc_c ai_c>
      <Title>Estadísticas generales</Title>
      </FlexContainer>
      {dat ? (
        dat.map(({ category, data }) => (
          <StatsBlock as='li' gap='2rem' mg='2rem'>
            <FlexContainer fd_c jc_c ai_st>
              <h1>{category}</h1>
              <CrystalCard height='100%'>
                <CircularProgressbar
                  value={data.progress}
                  text={`${data.progress}%`}
                />
              </CrystalCard>
            </FlexContainer>
            <FlexContainer fd_c gap='2rem'>
              {Object.entries(data.courses).map((course) => (
                <FlexContainer fd_c gap='0.5rem'>
                  <h2>{course[0]}</h2>
                  <LevelCard gap='1rem'>
                    {course[1].map(({ title, isDone, progress }) => (
                      <CrystalCard
                        fd_c
                        jc_c
                        ai_c
                        gap="0.5rem"
                        isDone={isDone}
                        minWidth='150px'
                        height='140px'>
                        <h5>{title}</h5>
                        <CircularProgressbar
                          value={progress}
                          text={`${progress}%`}
                        />
                      </CrystalCard>
                    ))}
                  </LevelCard>
                  {/* <p>Limite</p> */}
                </FlexContainer>
              ))}
            </FlexContainer>
          </StatsBlock>
        ))
      ) : (
        <FlexContainer jc_c ai_c pd='3rem 2rem'>
          <FingerLoader />
        </FlexContainer>
      )}
    </Layout>
  )
}

const LevelCard = styled(FlexContainer)`
  max-width: 50rem;
  overflow-x: auto;
  padding: 0 0 1rem 0;
  background: ${({ theme: { bgColor } }) => bgColor};
  padding: 1rem;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
`

const CrystalCard = styled(FlexContainer)`
  width: ${({ width }) => width || '200px'};
  min-width: ${({ minWidth }) => minWidth || '200px'};
  height: ${({ height }) => height || '200px'};

  .CircularProgressbar-path {
    stroke: ${({ theme: { secondaryGradient } }) => secondaryGradient};
  }
  .CircularProgressbar-trail {
    stroke: ${({ theme: { tertiaryColor } }) => tertiaryColor};
  }
  .CircularProgressbar-text {
    stroke: ${({ theme: { fontColor } }) => fontColor};
  }

  background: rgba(0, 0, 0, 0.8);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);

  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  padding: 1.5rem;

  ${({ isDone, theme: { successColor } }) =>
    isDone ? `background-color:${successColor};` : null}
`

const StatsBlock = styled(FlexContainer)`
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  /* &&&:nth-child(odd) { */
  padding: 2rem;
  background: ${({ theme: { accentColor } }) => accentColor};
  /* } */
  
  h1,h2,h3,h4,h5{
    color: ${({ theme: { fontColor } }) => fontColor};

  }
`

const Title = styled.h3`
  color: ${({ theme: { fontColor } }) => fontColor};
  font-size: 2rem;
  text-align: center;
`
