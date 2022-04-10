import styled from 'styled-components'
import notFound from '../images/notFoundPage.svg'
import { Button } from '../components/ui/Button'
import { useLinkRouter } from '../hooks/useLinkRouter'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'

export const NotFoundPage = () => {
  const { goIndexPage } = useLinkRouter()

  const handleClick = () => {
    goIndexPage()
  }

  return (
    <Container fd_c jc_c ai_c gap="1rem">
      <Image src={notFound} />
      <p>Vaya, no hemos podido encontrar lo que buscas.</p>
      <Button primary={true} onClick={handleClick}>
        Volver al inicio
      </Button>
    </Container>
  )
}

const Container = styled(FlexContainer)`
  margin: 0 auto;
  color:${({ theme: { fontColor } }) => fontColor};
`

const Image = styled.img``
