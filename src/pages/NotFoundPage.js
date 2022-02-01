import styled from 'styled-components'
import { Wrapper } from '../components/shareStyleComponents/Wrapper'

import notFound from '../images/notFoundPage.svg'
import { Button } from '../components/ui/Button'
import { useLinkRouter } from '../hooks/useLinkRouter'

export const NotFoundPage = () => {
  const { goHomePage } = useLinkRouter()

  const handleClick = () => {
    goHomePage()
  }

  return (
    <Container flex flex_dc flex_jc_c flex_ai_c>
      <Image src={notFound} />
      <p>Vaya, no hemos podido encontrar lo que buscas.</p>
      <Button primary={true} onClick={handleClick}>
        Volver al inicio
      </Button>
    </Container>
  )
}

const Container = styled(Wrapper)`
  margin: 0 auto;
`

const Image = styled.img``
