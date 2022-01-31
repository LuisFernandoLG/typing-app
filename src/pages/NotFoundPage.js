import { useHistory } from 'react-router'
import styled from 'styled-components'
import { routes, routesV2 } from '../routes'
import { Wrapper } from '../components/shareStyleComponents/Wrapper'

import notFound from '../images/notFoundPage.svg'
import { Button } from '../components/ui/Button'

export const NotFoundPage = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push(routesV2.LOGGED_APP.route)
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

const BackBtn = styled.button`
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 1rem;
  cursor: pointer;
`
