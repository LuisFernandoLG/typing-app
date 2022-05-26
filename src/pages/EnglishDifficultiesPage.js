import styled from 'styled-components'
import nivel1 from '../images/ilustrations/Fitness_Outline.svg'
import nivel2 from '../images/ilustrations/Fitness3_Outline.svg'
import nivel3 from '../images/ilustrations/Fitness2_Outline.svg'

import shortid from 'shortid'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { Layout } from '../layouts/Layout'
import { Link } from 'react-router-dom'
import { routesV3 } from '../routes'

const difficulties = [
  {
    id: shortid(),
    name: 'Basico',
    img: nivel1
  },

  {
    id: shortid(),
    name: 'Intermedio',
    img: nivel2
  },
  {
    id: shortid(),
    name: 'Avanzado',
    img: nivel3
  }
]

export const EnglishDifficultiesPage = () => {
  return (
    <Layout width="100%">
      <MegaTitle>Aprende Ingles con Type and type</MegaTitle>
      <FlexContainer gap='1rem' pd="2rem 0" wrap={true} jc_c ai_c>
        {difficulties.map(({ id, name, img }, i) => (
            <Link key={id} to={`${routesV3.ENGLISH_PAGE.subRoutes.ENGLISH_DIFFICULTY.route}/${name}`}>
          <Card pd='2rem 0rem' fd_c jc_c ai_c>
            <img className='img' src={img} />
            <h4>{name}</h4>
          </Card>
            </Link>
        ))}
      </FlexContainer>
    </Layout>
  )
}

const Card = styled(FlexContainer)`
  background: ${({ theme: { accentColor } }) => accentColor};
  border-radius: 1rem;
  transition: transform 300ms ease;
  width: min-content;
  
  &:hover {
    transform: scale(1.002) translateY(-5%);
  }

  .img {
    width: 20rem;
    /* background: Red; */
    height: auto;
  }

  h4{
    color: ${({ theme: { fontColor } }) => fontColor};
    font-weight:600;
    font-size: 2rem;
  }
`

const MegaTitle = styled.h2`
  color: ${({ theme: { fontColor } }) => fontColor};
  font-size: 2rem;
  text-align: center;
  /* display:inline-block; */
`
