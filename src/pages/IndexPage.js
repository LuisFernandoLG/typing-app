import { useEffect } from 'react'
import styled from 'styled-components'
import { Quote } from '../components/exercise/Quote'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { Button } from '../components/ui/Button'
import { useKeyBoardActivity } from '../hooks/useKeyBoardActivity'

const textQuote = 'Hola, bievenido a type and type'

export const IndexPage = () => {
  const { quote, indexQuote, isExerciseCompleted, reset } = useKeyBoardActivity(
    {
      textQuote,
    }
  )

  return (
    <FlexContainer fd_c ai_c gap='2rem'>
      <FlexContainer fd_c ai_c>
        <Title>Mejora tu escritura</Title>
        <SubTitle>¡Comienza a teclear!</SubTitle>
        <Paragraph>¡Diviértete!</Paragraph>
      </FlexContainer>

      {isExerciseCompleted ? (
        <FlexContainer fd_c gap='1rem'>
          <Button primary onClick={reset}>
            Registrarse
          </Button>
          <Button secondary onClick={reset}>
            Intentar de nuevo
          </Button>
        </FlexContainer>
      ) : (
        <Quote quote={quote} indexQuote={indexQuote} />
      )}
    </FlexContainer>
  )
}

const Title = styled.h1`
  font-weight: 700;
  font-size: 3rem;

  /* background: -webkit-linear-gradient(
      to right,
      ${({ theme: { primaryColor } }) => primaryColor} 0%,
      ${({ theme: { secondaryColor } }) => secondaryColor} 100%
      );
      background: -moz-linear-gradient(
          to right,
          ${({ theme: { primaryColor } }) => primaryColor} 0%,
          ${({ theme: { secondaryColor } }) => secondaryColor} 100%
  ); */
  background: linear-gradient(
    to right,
    ${({ theme: { primaryColor } }) => primaryColor} 0%,
    ${({ theme: { secondaryColor } }) => secondaryColor} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const SubTitle = styled.h2`
  font-weight: 600;
  font-size: 2rem;
`
const Paragraph = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  color: ${({ theme: { fontColor } }) => fontColor};
  /* color: red; */
`
