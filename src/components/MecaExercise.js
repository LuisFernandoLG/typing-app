import { useEffect } from 'react'
import { useKeyBoardActivity } from '../hooks/useKeyBoardActivity'
import { Quote } from './exercise/Quote'
import styled from 'styled-components'

import rightFingers from '../images/fingers/rightFingers.png'
import rightThumbFinger from '../images/fingers/rightThumbFinger.png'
import rightIndexFinger from '../images/fingers/rightIndexFinger.png'
import rightMiddleFinger from '../images/fingers/rightMiddleFinger.png'
import rightRingFinger from '../images/fingers/rightRingFinger.png'
import rightLittleFinger from '../images/fingers/rightLittleFinger.png'

import leftIndexFinger from '../images/fingers/leftIndexFinger.png'
import leftMiddleFinger from '../images/fingers/leftMiddleFinger.png'
import leftRingFinger from '../images/fingers/leftRingFinger.png'
import leftLittleFinger from '../images/fingers/leftLittleFinger.png'
import leftFingers from '../images/fingers/leftFingers.png'
import { FlexContainer } from './shareStyleComponents/FlexContainer'
import { KeyBoard } from './exercise/KeyBoard'

const textQuote = 'qweruiopasdklñzxcnm'

export const MecaExercise = ({ mecaExercise, setIsDone }) => {
  const { quote, indexQuote, isExerciseCompleted, keyWanted, keyPressed, results } =
    useKeyBoardActivity({
      textQuote: textQuote || mecaExercise?.content
    })

  const setIsDoneDefault = () => {
    return quote
  }

  useEffect(() => {
    if (results) {
      if (setIsDone) {
        setIsDone()
      } else setIsDoneDefault()
    }
  }, [isExerciseCompleted, results])

  const rightHand = {
    none: rightFingers,
    // right Thumb
    ' ': rightThumbFinger,

    // rightIndex
    y: rightIndexFinger,
    u: rightIndexFinger,
    h: rightIndexFinger,
    j: rightIndexFinger,
    m: rightIndexFinger,
    n: rightIndexFinger,

    // right middle
    i: rightMiddleFinger,
    k: rightMiddleFinger,

    // right ring
    o: rightRingFinger,
    l: rightRingFinger,

    // right little
    p: rightLittleFinger,
    ñ: rightLittleFinger
  }

  const leftHand = {
    none: leftFingers,
    // ' ': leftThumbFinger,

    // left index
    r: leftIndexFinger,
    t: leftIndexFinger,
    f: leftIndexFinger,
    g: leftIndexFinger,
    v: leftIndexFinger,
    b: leftIndexFinger,

    // left middle
    e: leftMiddleFinger,
    d: leftMiddleFinger,
    c: leftMiddleFinger,

    // left ring
    w: leftRingFinger,
    s: leftRingFinger,
    x: leftRingFinger,

    // left little
    q: leftLittleFinger,
    a: leftLittleFinger,
    z: leftLittleFinger
  }

  return (
    <>
      {isExerciseCompleted
        ? (
        <p></p>
          )
        : (
        <>
          <Quote quote={quote} indexQuote={indexQuote} />
          <KeyBoard keyPressed={keyPressed} keyWanted={keyWanted} />
          <FlexContainer jc_c ai_c>
            <Hand src={leftHand[keyWanted.content] || leftHand.none} />
            <Hand src={rightHand[keyWanted.content] || rightHand.none} />
          </FlexContainer>
        </>
          )}
    </>
  )
}

const Hand = styled.img`
  width: 400px;
  height: 400px;
  transform: translateY(-200px);

  /* position: absolute; */
`
