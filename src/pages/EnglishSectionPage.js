import { useState, useEffect } from 'react'
import { Layout } from '../layouts/Layout'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { routesV3 } from '../routes'
// import { EnglishExercisesMockup } from '../constants/englishExercisesTest'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'

import api from '../services/api'
// import { FingerLoader } from '../components/loaders/FingerLoader'
// import { getArrayBySize } from '../helpers/getArrayBySize'
import Skeleton from 'react-loading-skeleton'
// import { BackPageButton } from '../components/ui/BackPageButton'

export const EnglishSectionPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [allExercises, setAllExercises] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    api()
      .getAllEnglishCourses()
      .then((data) => {
        setAllExercises(data.data)
      })
      .catch(() => {
        //
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <Layout mg='1rem 0'>
      {/* <BackPageButton backRoute={routesV3.MENU_PAGE.route} /> */}

      {(allExercises || [1, 2, 3, 4]).map(
        ({ courseId, description, categoryName, exercises }) => (
          <Layout key={courseId} mg='2rem 0'>
            <Title>{isLoading ? <Skeleton /> : categoryName}</Title>
            <Description>{isLoading ? <Skeleton /> : description}</Description>
            <GridContainer>
              {(exercises || [1, 2, 3, 4, 4, 5, 6]).map((item) =>
                item.id
                  ? (
                  <Link
                    key={item?.id}
                    to={`${routesV3.ENGLISH_PAGE.subRoutes.ENGLISH_EXERCISE_PAGE.route}/${courseId}/${item?.id}`}>
                    <ExerciseBubble jc_c ai_c isDone={false}>
                      {item?.title}
                    </ExerciseBubble>
                  </Link>
                    )
                  : (
                  <Skeleton circle width='6.25rem' height='6.25rem' />
                    )
              )}
            </GridContainer>
          </Layout>
        )
      )}
    </Layout>
  )
}

const Title = styled.h2`
  color: ${({ theme: { fontColor } }) => fontColor};
  font-size: 2rem;
  width: 6.25rem;
`

const Description = styled.p`
  color: ${({ theme: { fontColor } }) => fontColor};
  font-size: 1rem;
  margin: 0.5rem 0;
  width: 300px;
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
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 5rem;
  cursor: pointer;
  font-weight: 600;
  text-align: center;
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
