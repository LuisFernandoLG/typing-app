import { useState, useEffect } from 'react'
import { Layout } from '../layouts/Layout'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import { routesV3 } from '../routes'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'

import api from '../services/api'
import Skeleton from 'react-loading-skeleton'
import { useSession } from '../hooks/useSession'
import { toast } from 'react-toastify'
import { BackPageButton } from '../components/ui/BackPageButton'
import { difficulties } from '../constants/difficulties'

export const EnglishSectionPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [allExercises, setAllExercises] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { user } = useSession()
  // eslint-disable-next-line no-unused-vars
  const [diffText, setDiffText] = useState('')

  const { dificultad } = useParams()

  const filterCourseByDifficulty = ({ courses }) =>
    courses.filter(({ difficulty }) => difficulty === dificultad)

  useEffect(() => {
    setIsLoading(true)
    api()
      .getAllEnglishCourses({ userId: user.id })
      .then((data) => {
        const filteredDataByDifficulty = filterCourseByDifficulty({
          courses: data.data
        })
        setAllExercises(filteredDataByDifficulty)
        // setAllExercises(data.data)
        console.log({ data: data.data })
        const dif = difficulties.find(({ name }) => name === dificultad)
        setDiffText(dif.name)
      })
      .catch(() => {
        toast.error('Oops! Hubo un error.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <Layout mg='0 1rem'>
      <BackPageButton text='Atrás' backRoute={routesV3.ENGLISH_PAGE.route}/>
      <MegaTitle>{dificultad}</MegaTitle>
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
                    to={`${routesV3.ENGLISH_PAGE.subRoutes.ENGLISH_EXERCISE_PAGE.route}/${diffText}/${courseId}/${item?.id}`}>
                    <ExerciseBubble jc_c ai_c isDone={item?.isDone}>
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

const Title = styled.h3`
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

const MegaTitle = styled.h2`
  color: ${({ theme: { fontColor } }) => fontColor};
  font-size: 3rem;
  width: 6.25rem;
`
