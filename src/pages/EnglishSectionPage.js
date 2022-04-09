import { Layout } from '../layouts/Layout'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { routesV2 } from '../routes'
import { EnglishExercisesMockup } from '../constants/englishExercisesTest'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'

export const EnglishSectionPage = () => {
  return (
    <Layout>
      {EnglishExercisesMockup.map(({ id, categoryName, exercises }) => (
        <Layout key={id}>
          <Title>{categoryName}</Title>
          <GridContainer>
            {exercises.map((item) => (
              <Link
                key={item.id}
                to={`${routesV2.LOGGED_APP.subPages.ENGLISH_EXERCISE_PAGE.routBaseParam}/${id}/${item.id}`}>
                <ExerciseBubble jc_c ai_c>
                  {item.name}
                </ExerciseBubble>
              </Link>
            ))}
          </GridContainer>
        </Layout>
      ))}
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
`

const ExerciseBubble = styled(FlexContainer)`
  width: 100%;
  height: 100px;
  color: ${({ theme: { fontColor } }) => fontColor};
  background: ${({ theme: { accentColor } }) => accentColor};
  border-radius: 5rem;
  cursor: pointer;

  &:nth-child(0) {
    background: ${({ theme: { successColor } }) => successColor};
    color: ${({ theme: { bgColor } }) => bgColor};
  }
`
