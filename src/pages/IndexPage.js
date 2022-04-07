import styled from 'styled-components'
import { Quote } from '../components/exercise/Quote'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { Button } from '../components/ui/Button'
import { useKeyBoardActivity } from '../hooks/useKeyBoardActivity'
import { useLinkRouter } from '../hooks/useLinkRouter'
import { useSession } from '../hooks/useSession'
import { Navigate } from 'react-router-dom'
import { routesV2 } from '../routes'

const textQuote = 'Hola, bienvenido a type and type'

export const IndexPage = () => {
  const { isAuth } = useSession()
  const { goSignUpPage } = useLinkRouter()
  const { quote, indexQuote, isExerciseCompleted, reset } = useKeyBoardActivity(
    {
      textQuote
    }
  )

  if (isAuth) { return <Navigate to={routesV2.LOGGED_APP.subPages.CHOICE_PAGE.route} /> }
  return (
    <FlexContainer fd_c ai_c gap='2rem'>
      <FlexContainer fd_c ai_c>
        <Title>Mejora tu velocidad</Title>
        <SubTitle>¡Comienza a teclear!</SubTitle>
        <Paragraph>⌨️</Paragraph>
      </FlexContainer>

      {isExerciseCompleted
        ? (
        <FlexContainer fd_c gap='1rem'>
          <Button primary onClick={goSignUpPage} pd="1rem 2rem">
            Registrarse
          </Button>
          <Button secondary onClick={reset} pd="1rem 2rem">
            Intentar de nuevo
          </Button>
        </FlexContainer>
          )
        : (
        <Quote quote={quote} indexQuote={indexQuote} />
          )}
    </FlexContainer>
  )
}

const Title = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  background: ${({ theme: { primaryGradient } }) => primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const SubTitle = styled.h2`
  font-weight: 600;
  font-size: 2rem;
  color: ${({ theme: { fontColor } }) => fontColor};
`
const Paragraph = styled.p`
  font-weight: 400;
  font-size: 2rem;
  color: ${({ theme: { fontColor } }) => fontColor};
`
