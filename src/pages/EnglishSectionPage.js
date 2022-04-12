import { Layout } from '../layouts/Layout'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { routesV3 } from '../routes'
import { EnglishExercisesMockup } from '../constants/englishExercisesTest'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'

export const EnglishSectionPage = () => {
  return (
    <Layout>
      <Layout mg='1rem 0'>
        {EnglishExercisesMockup.map(({ id, categoryName, exercises }) => (
          <Layout key={id} mg="2rem 0">
            <Title>{categoryName}</Title>
            <GridContainer>
              {exercises.map((item) => (
                <Link
                  key={item.id}
                  to={`${routesV3.ENGLISH_PAGE.subRoutes.ENGLISH_EXERCISE_PAGE.route}/${id}/${item.id}`}>
                  <ExerciseBubble jc_c ai_c isDone={item.isDone}>
                    {item.name}
                  </ExerciseBubble>
                </Link>
              ))}
            </GridContainer>
          </Layout>
        ))}
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

  &:hover{
    transform: scale(1.05);
  }
`
