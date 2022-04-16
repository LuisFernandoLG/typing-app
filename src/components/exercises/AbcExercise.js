// import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useShortSound } from '../../hooks/useShortSound'
// import { EnglishExercisesMockup } from '../../constants/englishExercisesTest'
import { FlexContainer } from '../shareStyleComponents/FlexContainer'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { ShorHandKey } from '../ShortHandKey'
import { FloatContainer } from '../FloatContainer'
// import { routesV3 } from '../../routes'
// import { Button } from '../ui/Button'
import { Layout } from '../../layouts/Layout'
import { EnterKey } from '../shortHandKeys/EnterKey'

// const setExercisesFromArray = ({ courseId }) => {
//   return EnglishExercisesMockup.find(({ id }) => courseId === id).exercises
// }

export const AbcExercise = ({ abcExercise, results, setIsDone, goNext }) => {
  const [itemSelected, setItemSelected] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const [currentExercise, setCurrentExercise] = useState(abcExercise)
  const [playSuccesSound] = useShortSound({ soundPath: 'success.mp3' })
  const [playFailSound] = useShortSound({ soundPath: 'failure.mp3' })

  const option1 = useRef(null)
  const option2 = useRef(null)
  const option3 = useRef(null)

  useEffect(() => {
    setCurrentExercise(abcExercise)
    setItemSelected(null)
  }, [abcExercise])

  // const searchForExercise = ({ exerciseId }) =>
  //   exercises.find(({ id }) => id === exerciseId)

  // const searchForExerciseIndex = ({ exerciseId }) => {
  //   return exercises.findIndex(({ id }) => id === exerciseId)
  // }

  // useEffect(
  //   () =>
  //     setExercises(setExercisesFromArray({ courseId: parseInt(courseId) })),
  //   []
  // )

  // useEffect(() => {
  //   if (exercises !== null) {
  //     const item = searchForExercise({ exerciseId: parseInt(exerciseId) })
  //     const index = searchForExerciseIndex({ exerciseId: parseInt(exerciseId) })
  //     setCurrentExercise(item)
  //     setExerciseIndex(index)
  //   }
  // }, [exercises])

  // const goNext = () => {
  //   }
  // }

  useEffect(() => {
    if (itemSelected) setIsDone()
  }, [itemSelected])

  const selectAnswer = ({ itemSelected }) => {
    setItemSelected(itemSelected)
    if (itemSelected.isCorrect) playSuccesSound()
    else playFailSound()
  }

  const handleKeyDown = () => {
    goNext()
  }

  const handleKeyDownOptions = (e) => {
    if (e.code === 'Digit1') option1.current.click()
    if (e.code === 'Digit2') option2.current.click()
    if (e.code === 'Digit3') option3.current.click()
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDownOptions)

    return () => window.removeEventListener('keydown', handleKeyDownOptions)
  }, [])

  const getRef = ({ index }) => {
    if (index === 0) return option1
    if (index === 1) return option2
    if (index === 2) return option3
  }

  return (
    <>
      <Layout>
        <Title>{currentExercise?.title || <Skeleton width={'20%'} />}</Title>
        <FlexContainer fd_c jc_c ai_c gap='1rem' mg='1rem'>
          {(currentExercise?.answers || [1, 2, 3]).map((item, index) => (
            <Answer
              ref={getRef({ index })}
              tabIndex={index + 1}
              type='button'
              key={item?.id}
              disabled={!!itemSelected}
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
              <span className='num-option'>{index + 1}</span>
              {item?.content}
            </Answer>
          ))}
        </FlexContainer>
      </Layout>

      {itemSelected && (
        <>
          <FloatContainer right='10%' top='35%'>
            <FlexContainer fd_c ai_c jc_c>
              <ShorHandKey
                handleKeyDown={handleKeyDown}
                code={'Enter'}
                textLeyend='Presionar enter para continuar'>
                <EnterKey />
              </ShorHandKey>
            </FlexContainer>
          </FloatContainer>
        </>
        // </Link>
      )}
    </>
  )
}

const Title = styled.h2`
  color: ${({ theme: { fontColor } }) => fontColor};
  text-align: center;
  font-weight: 600;
`
const Answer = styled.button`
  &:focus {
    outline: 5px solid ${({ theme: { disableColor } }) => disableColor};
  }
  min-width: 28.25rem;
  padding: 2rem 3rem;
  user-select: none;
  background: ${({ theme: { accentColor } }) => accentColor};
  color: ${({ theme: { fontColor } }) => fontColor};
  cursor: pointer;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1.5rem;

  transition: transform 300ms ease;
  position: relative;

  .num-option {
    padding: 0 0.5rem;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    border-radius: 10px;
    color: ${({ theme: { bgColor } }) => bgColor};
    border: 2px solid ${({ theme: { tertiaryColor } }) => tertiaryColor};
  }

  &.yes {
    background: ${({ theme: { successColor } }) => successColor};
    color: ${({ theme: { fontColor } }) => fontColor};
  }

  &.no {
    background: ${({ theme: { errorColor } }) => errorColor};
    color: ${({ theme: { fontColor } }) => fontColor};
  }

  &.yes,
  &.no {
    pointer-events: none;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    /* transform: scale(0.95); */
  }
`
