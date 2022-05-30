import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BotHead } from '../components/BotHead'
import { CarAnimation } from '../components/CarAnimation'
import { DogAnimation } from '../components/DogAnimation'
import { Quote } from '../components/exercise/Quote'
import { FloatContainer } from '../components/FloatContainer'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { Button } from '../components/ui/Button'
import { WinMan } from '../components/WinMan'
import { randomIntFromInterval } from '../helpers/randomIntFromInterval'
import { useKeyBoardActivity } from '../hooks/useKeyBoardActivity'
import { keyTypes } from '../constants/keyTypes'
import { Link } from 'react-router-dom'
import { routesV3 } from '../routes'
// text, neckColor, difficultyId,

const speeds = {
  1: 1000,
  2: 600,
  3: 100
}

export const RiceExercise = ({ exercise, setIsDone }) => {
  const { quote, sizeQuote, indexQuote, keyPressed, retrace } =
      useKeyBoardActivity({
        textQuote: exercise.description
      })
  const [progress, setProgress] = useState(0)
  const [botProgress, setBotProgress] = useState(0)
  const [isUserWinner, setIsUserWinner] = useState(null)

  const increaseBotProgress = () => {
    const randomNumber = randomIntFromInterval(1, 5)
    if (botProgress < 100) {
      setBotProgress((botProgress) => botProgress + randomNumber)
    }
  }

  let intervalBotID

  useEffect(() => {
    intervalBotID = setInterval(increaseBotProgress, speeds[exercise.difficultyId])
    return () => {
      clearInterval(intervalBotID)
    }
  }, [])

  useEffect(() => {
    if (isUserWinner) return 0
    if (progress >= 100) {
      setIsUserWinner(true)
      clearInterval(intervalBotID)
      if (setIsDone) setIsDone({ isUserWinner: true })
    }
  }, [progress])

  useEffect(() => {
    if (isUserWinner) return 0
    if (botProgress >= 100) {
      setIsUserWinner(false)
      clearInterval(intervalBotID)
      if (setIsDone) setIsDone({ isUserWinner: false })
    }
  }, [botProgress])

  //   console.log({})

  useEffect(() => {
    if (!keyPressed) return 0
    const progress = (100 * indexQuote) / sizeQuote
    if (keyPressed.status === keyTypes.WRONG_KEY) retrace()
    else setProgress(progress)
  }, [keyPressed])

  // eslint-disable-next-line multiline-ternary
  return isUserWinner === null ? (
      <>
        <FloatContainer top='10%' left='0' right='0'>
          <Quote quote={quote} />
        </FloatContainer>

        <FloatContainer top='10%'>
          <DogAnimation
            color={exercise.neckColor}
            opacity={0.7}
            percentagePosition={botProgress}
          />
        </FloatContainer>

        <FloatContainer top='20%'>
          <DogAnimation opacity={1} color='red' percentagePosition={progress} />
        </FloatContainer>

        <CarAnimation percentagePosition={progress} />
      </>
  ) : (
      <FlexContainer jc_c ai_c>
        <WinnerCard
          fd_c
          jc_c
          ai_c
          gap='1rem'
          pd='3rem 1rem'
          success={isUserWinner}>
          {isUserWinner ? <WinMan /> : <BotHead />}
          <h2 className='title'>
            {isUserWinner ? 'Felicidades' : 'Sigue intentándolo'}
          </h2>
          <p className='description'>
            {isUserWinner
              ? (
              <span>
                ¡Sigue así! <br /> No te rindas
              </span>
                )
              : (
              <span>
                ¡Tú puedes! <br /> No te rindas
              </span>
                )}
          </p>
          <Link to={routesV3.RICE_PAGE.route}>
            <Button primary={isUserWinner} pd='1rem'>
              Volver al inicio
            </Button>
          </Link>

        </WinnerCard>
      </FlexContainer>
  )
}

const WinnerCard = styled(FlexContainer)`
    border-radius: ${({ theme: { borderRadius } }) => borderRadius};
    background: ${({ theme: { accentColor } }) => accentColor};
    width: max-content;
  
    svg {
      width: 70%;
      height: min-content;
    }
  
    .title,
    .description {
      text-align: center;
      line-height: 1.5rem;
    }
  
    .title {
      color: ${({ theme: { primaryColor, errorColor }, success }) =>
        success ? primaryColor : errorColor};
    }
  
    .description {
      color: ${({ theme: { fontColor } }) => fontColor};
    }
  `
