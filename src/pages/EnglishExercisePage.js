import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../components/ui/Button'
import { Layout } from '../layouts/Layout'
import { IoArrowForward } from 'react-icons/io5'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { useState } from 'react'
import { EnglishExercisesMockup } from '../constants/englishExercisesTest'

const searchLocalExercise = ({ categoryId, exerciseId }) => {
  const categoryIndex = EnglishExercisesMockup.findIndex(({ id }) => categoryId === id)
  //   console.log(EnglishExercisesMockup[categoryIndex])
  const itemFound = EnglishExercisesMockup[categoryIndex].exercises.find(({ id }) => id === exerciseId)
  return itemFound
}

export const EnglishExercisePage = () => {
  const [itemSelected, setItemSelected] = useState(null)
  const { categoryId, exerciseId } = useParams()
  // eslint-disable-next-line no-unused-vars
  const [currentExercise, setCurrentExercise] = useState(searchLocalExercise({ categoryId: parseInt(categoryId), exerciseId: parseInt(exerciseId) }))

  const selectAnswer = ({ itemSelected }) => {
    console.log(itemSelected)
    setItemSelected(itemSelected)
  }

  return (
    <Layout>
      <Layout>
        <Title>{currentExercise.title}</Title>
        <FlexContainer fd_c jc_c ai_c gap='1rem' mg='1rem'>
          {currentExercise.answers.map((item) => (
            <Answer
              pd='2rem 5rem'
              key={item.id}
              className={
                itemSelected
                  ? itemSelected.id === item.id
                    ? itemSelected.isCorrect
                      ? 'yes'
                      : 'no'
                    : null
                  : null
              }
              onClick={() => selectAnswer({ itemSelected: item })}>
              {item.content}
            </Answer>
          ))}
        </FlexContainer>
      </Layout>

      {itemSelected && (
        <FlexContainer ai_fe jc_fe pd='1rem'>
          <Button primary={true} pd='1rem'>
            Siguiente <IoArrowForward />{' '}
          </Button>
        </FlexContainer>
      )}
    </Layout>
  )
}

const Title = styled.h2`
  color: ${({ theme: { fontColor } }) => fontColor};
  text-align: center;
  font-weight: 600;
`
const Answer = styled(FlexContainer)`
  user-select: none;
  background: ${({ theme: { accentColor } }) => accentColor};
  color: ${({ theme: { fontColor } }) => fontColor};
  cursor: pointer;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1.5rem;

  transition: transform 300ms ease;

  &.yes {
    background: ${({ theme: { successColor } }) => successColor};
    color: ${({ theme: { fontColor } }) => fontColor};
}

&.no {
    background: ${({ theme: { errorColor } }) => errorColor};
    color: ${({ theme: { fontColor } }) => fontColor};
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    /* transform: scale(0.95); */
  }
`
