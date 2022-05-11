import { useEffect, useState } from 'react'
import { CarAnimation } from '../components/CarAnimation'
import { DogAnimation } from '../components/DogAnimation'
import { Quote } from '../components/exercise/Quote'
import { FloatContainer } from '../components/FloatContainer'
import { randomIntFromInterval } from '../helpers/randomIntFromInterval'
import { useKeyBoardActivity } from '../hooks/useKeyBoardActivity'

const text =
  'Le gusta lo kinky nasty y aunque sea fancy se pone kranky si lo hago romantic.'

export const RicePage = () => {
  const { quote, sizeQuote, indexQuote } = useKeyBoardActivity({
    textQuote: text
  })
  const [progress, setProgress] = useState(0)
  const [botProgress, setBotProgress] = useState(0)

  useEffect(() => {
    setInterval(() => {
      const randomNumber = randomIntFromInterval(1, 5)
      if (botProgress < 100) setBotProgress((botProgress) => botProgress + randomNumber)
    }, 1000)
  }, [])

  useEffect(() => {
    const progress = (100 * indexQuote) / sizeQuote
    setProgress(progress)
  }, [indexQuote])

  return (
    <>
      <FloatContainer top='10%'>
        <Quote quote={quote} />
      </FloatContainer>

      <FloatContainer top='10%'>
        <DogAnimation color='#9199' opacity={0.7} percentagePosition={botProgress}/>
      </FloatContainer>

      <FloatContainer top='20%'>
        <DogAnimation opacity={1} color='red' percentagePosition={progress} />
      </FloatContainer>

      <CarAnimation percentagePosition={progress} />
    </>
  )
}
