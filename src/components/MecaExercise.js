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
import { Layout } from '../layouts/Layout'

const textQuote = 'Hola, bievenido a type and type, esta es una aplicacion para aprender mecanogerafia shido'
// const initialUpdateQuote = () => null

export const MecaExercise = ({ mecaExercise, setIsDone }) => {
  const { quote, indexQuote, isExerciseCompleted, keyWanted, keyPressed, results, updateQuote } =
    useKeyBoardActivity({
      textQuote: mecaExercise?.textContent || textQuote
    })

  const setIsDoneDefault = () => {
    return quote
  }

  useEffect(() => {
    if (mecaExercise) {
      if (mecaExercise?.textContent) updateQuote({ newQuote: mecaExercise.textContent })
    }
  }, [mecaExercise])

  useEffect(() => {
    if (results && isExerciseCompleted) {
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
    <Layout>
          <Quote quote={quote} indexQuote={indexQuote}/>
          <Container jc_c ai_c>
          <KeyBoard keyPressed={keyPressed} keyWanted={keyWanted} />
          <FlexContainer jc_c ai_c>
            <Hand className='leftHand' src={leftHand[keyWanted.content] || leftHand.none} />
            <Hand className='rightHand' src={rightHand[keyWanted.content] || rightHand.none} />
          </FlexContainer>
          </Container>

    </Layout>
  )
}

const Container = styled(FlexContainer)`
position: relative;
width:min-content;
/* background: red; */
margin:0 auto;
`
const Hand = styled.img`
  width: 25em;
  height: 25em;
  position:absolute;
  top:-20%;

  &&.leftHand{
    left:-10%;
    /* right:0; */
  }
  &&.rightHand{
    right:-10%;
  }


`
