import styled from 'styled-components'
// import notFound from '../images/notFoundPage.svg'
import { Button } from '../components/ui/Button'
import { useLinkRouter } from '../hooks/useLinkRouter'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { Layout } from '../layouts/Layout'

export const NotFoundPage = () => {
  const { goIndexPage } = useLinkRouter()

  const handleClick = () => {
    goIndexPage()
  }

  return (
    <Layout>
      <Container fd_c jc_c ai_c gap='1rem'>
        <Title>¿Dónde andas amigo?</Title>
        <p>No hemos podido encontrar lo que buscas.</p>
        <Button primary={true} onClick={handleClick} pd="1rem">
          Volver al inicio
        </Button>
      </Container>
    </Layout>
  )
}

const Container = styled(FlexContainer)`
  margin: 0 auto;
  color: ${({ theme: { fontColor } }) => fontColor};
`

const Title = styled.h2`
  color: ${({ theme: { fontColor } }) => fontColor};
`
