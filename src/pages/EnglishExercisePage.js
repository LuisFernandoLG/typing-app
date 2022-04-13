import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../components/ui/Button'
import { Layout } from '../layouts/Layout'
import { IoArrowForward } from 'react-icons/io5'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { useState, useEffect, useRef } from 'react'
import { EnglishExercisesMockup } from '../constants/englishExercisesTest'
import { routesV3 } from '../routes'
import Skeleton from 'react-loading-skeleton'
import { BackPageButton } from '../components/ui/BackPageButton'
import { ShorHandKey } from '../components/ShortHandKey'
import { EnterKey } from '../components/shortHandKeys/EnterKey'
import { FloatContainer } from '../components/FloatContainer'
import { useShortSound } from '../hooks/useShortSound'

const setExercisesFromArray = ({ categoryId }) => {
  return EnglishExercisesMockup.find(({ id }) => categoryId === id).exercises
}

export const EnglishExercisePage = () => {
  // Get all exericses
  const [exercises, setExercises] = useState(null)
  const { categoryId, exerciseId } = useParams()
  const [itemSelected, setItemSelected] = useState(null)
  const [currentExercise, setCurrentExercise] = useState()
  const [exerciseIndex, setExerciseIndex] = useState(null)
  const nextBtnRef = useRef(null)
  const homeBtnRef = useRef(null)
  const [playSuccesSound] = useShortSound({ soundPath: 'success.mp3' })
  const [playFailSound] = useShortSound({ soundPath: 'failure.mp3' })

  const option1 = useRef(null)
  const option2 = useRef(null)
  const option3 = useRef(null)

  const searchForExercise = ({ exerciseId }) =>
    exercises.find(({ id }) => id === exerciseId)

  const searchForExerciseIndex = ({ exerciseId }) => {
    return exercises.findIndex(({ id }) => id === exerciseId)
  }

  useEffect(
    () =>
      setExercises(setExercisesFromArray({ categoryId: parseInt(categoryId) })),
    []
  )

  useEffect(() => {
    if (exercises !== null) {
      const item = searchForExercise({ exerciseId: parseInt(exerciseId) })
      const index = searchForExerciseIndex({ exerciseId: parseInt(exerciseId) })
      setCurrentExercise(item)
      setExerciseIndex(index)
    }
  }, [exercises])

  // const goNext = () => {
  //   }
  // }

  useEffect(() => {
    setItemSelected(null)
    if (exercises) {
      const newIndex = exerciseIndex + 1
      if (newIndex < exercises.length) {
        setExerciseIndex(exerciseIndex + 1)
        setCurrentExercise(exercises[exerciseIndex + 1])
      }
    }
  }, [exerciseId])

  const selectAnswer = ({ itemSelected }) => {
    if (itemSelected.isCorrect) playSuccesSound()
    else playFailSound()
    setItemSelected(itemSelected)
  }

  const isLastItem = () => {
    return exercises.length - 1 === exerciseIndex
  }

  const handleKeyDown = () => {
    if (isLastItem()) {
      homeBtnRef.current.click()
    } else {
      nextBtnRef.current.click()
    }
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
    <Layout>
      <BackPageButton backRoute={routesV3.ENGLISH_PAGE.route} />
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

          <FlexContainer jc_fs ai_c>
            {exerciseIndex === exercises.length - 1 && (
              <Link to={routesV3.ENGLISH_PAGE.route} ref={homeBtnRef}>
                <Button Button primary={true} pd='1rem'>
                  Página principal
                </Button>
              </Link>
            )}
          </FlexContainer>

          <FlexContainer ai_fe jc_fe pd='1rem'>
            {exerciseIndex !== exercises.length - 1 && (
              <Link
                to={`${routesV3.ENGLISH_PAGE.route}/${
                  routesV3.ENGLISH_PAGE.subRoutes.ENGLISH_EXERCISE_PAGE.route
                }/${categoryId}/${exercises[exerciseIndex + 1].id}`}
                ref={nextBtnRef}>
                <Button Button primary={true} pd='1rem'>
                  Siguiente <IoArrowForward />{' '}
                </Button>
              </Link>
            )}
          </FlexContainer>
        </>
        // </Link>
      )}
    </Layout>
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
