import { useState, useEffect, useRef } from 'react'
import { useShortSound } from '../../hooks/useShortSound'
import { FlexContainer } from '../shareStyleComponents/FlexContainer'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { Layout } from '../../layouts/Layout'

export const AbcExercise = ({ abcExercise, results, setIsDone }) => {
  const [itemSelected, setItemSelected] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const [currentExercise, setCurrentExercise] = useState(null)
  const [playSuccesSound] = useShortSound({ soundPath: 'success.mp3' })
  const [playFailSound] = useShortSound({ soundPath: 'failure.mp3' })

  const option1 = useRef(null)
  const option2 = useRef(null)
  const option3 = useRef(null)

  useEffect(() => {
    if (itemSelected) {
      setIsDone({ isCorrect: itemSelected.isCorrect })
      // it
    }
  }, [itemSelected])

  useEffect(() => {
    updateExercise()
  }, [abcExercise])

  const updateExercise = () => {
    setCurrentExercise(abcExercise)
    setItemSelected(null)
  }

  const selectAnswer = ({ itemSelected }) => {
    setItemSelected(itemSelected)
    if (itemSelected.isCorrect) playSuccesSound()
    else playFailSound()
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
        <Title>{currentExercise?.question || <Skeleton width={'20%'} />}</Title>
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
