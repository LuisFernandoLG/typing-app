import { useState, useEffect } from 'react'
import { Layout } from '../layouts/Layout'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { routesV3 } from '../routes'
// import { EnglishExercisesMockup } from '../constants/englishExercisesTest'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'

import api from '../services/api'
import { FingerLoader } from '../components/loaders/FingerLoader'

export const EnglishSectionPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [allExercises, setAllExercises] = useState([])

  useEffect(() => {
    api().getAllEnglishCourses().then((data) => {
      console.log({ data })
      setAllExercises(data.data)
    }).catch((error) => {
      console.log({ error })
    })
  }, [])

  return (
    <Layout>
      <Layout mg='1rem 0'>
        {allExercises.length === 0
          ? (
          <FlexContainer jc_c ai_c pd='15% 0'>
            <FingerLoader />
          </FlexContainer>
            )
          : (
              allExercises.map(({ courseId, description, categoryName, exercises }) => (
            <Layout key={courseId} mg='2rem 0'>
              <Title>{categoryName}</Title>
              <p>{description}</p>
              <GridContainer>
                {exercises.map((item, index) => (
                  <Link
                    key={item.id}
                    to={`${routesV3.ENGLISH_PAGE.subRoutes.ENGLISH_EXERCISE_PAGE.route}/${courseId}/${item.id}`}>
                    <ExerciseBubble jc_c ai_c isDone={false}>
                      {item.title}
                    </ExerciseBubble>
                  </Link>
                ))}
              </GridContainer>
            </Layout>
              ))
            )}
      </Layout>
    </Layout>
  )
}

const Title = styled.h2`
  color: ${({ theme: { fontColor } }) => fontColor};
  font-size: 2rem;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 10px;

  background: ${({ theme: { accentColor } }) => accentColor};
  /* backgrou */
`

const ExerciseBubble = styled(FlexContainer)`
  width: 100%;
  height: 100px;
  border-radius: 5rem;
  cursor: pointer;
  font-weight: 600;
  transition: transform 300ms ease;

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
