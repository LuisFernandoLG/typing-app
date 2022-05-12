import { Link } from 'react-router-dom'
import { generate } from 'shortid'
import styled, { keyframes } from 'styled-components'
// import { DogAnimation } from '../components/DogAnimation'

import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import { Image } from '../components/ui/Image'
import English2 from '../images/ilustrations/girl.svg'
import LearnMecaSvg from '../images/ilustrations/learn.svg'
import SpeedMecaSvg from '../images/ilustrations/speed.svg'
import CompetitionSvg from '../images/ilustrations/competition.svg'

import { Layout } from '../layouts/Layout'
import { routesV3 } from '../routes'

export const ChoicePage = () => {
  const choices = [
    {
      id: generate(),
      title: 'Aprende Mecanografía',
      description:
        'Aprende dónde colocar tus dedos al escribir mediante ejercicios básicos.',
      img: LearnMecaSvg,
      toLink: routesV3.MECA_PAGE.route
    },

    {
      id: generate(),
      title: 'Mejora tu velocidad',
      description:
        'Realiza los ejercicios que desees para practicar tu velocidad y sube tu nivel en el ranking.',
      img: SpeedMecaSvg,
      toLink: routesV3.MECA_TIME_PAGE.route
    },

    {
      id: generate(),
      title: 'Aprende inglés',
      description: 'Aprende vocabulario básico de diferentes temas.',
      img: English2,
      toLink: routesV3.ENGLISH_PAGE.route
    },

    {
      id: generate(),
      title: '¡Completa la carrera!',
      description: 'Completa una carrera en la pista de type and type',
      img: CompetitionSvg,
      toLink: routesV3.RICE_PAGE.route
    }
  ]

  return (
    <Layout mg="3rem 0">
      <GridContainer>
        {choices.map(({ id, title, img, toLink, description }) => (
          <LinkCard to={toLink} key={id}>
            <FlexContainer fd_c jc_c ai_c>
              <Title className='title'>{title}</Title>
              <Description>{description}</Description>
              <Image className='img' src={img} />
            </FlexContainer>
          </LinkCard>
        ))}
        </GridContainer>
        {/* <DogAnimation/> */}
    </Layout>
  )
}

const textclip = keyframes`
  to {
    background-position: 200% center;
  }

  `

const Title = styled.h2`
  color: ${({ theme: { fontColor } }) => fontColor};
  text-align: center;
  text-transform: uppercase;

  font-size: 2rem;
`
const Description = styled.p`
  color: ${({ theme: { fontColor } }) => fontColor};
  text-align: center;
  line-height: 1.5rem;
  margin: 1rem 0;
  `

const LinkCard = styled(Link)`
  background: ${({ theme: { accentColor } }) => accentColor};
  padding: 2rem;
  border-radius: 1rem;
  transition: transform 300ms ease;
  width: 100%;
  
  &:hover {
    transform: scale(1.002) translateY(-5%);
    /* background: ${({ theme: { secondaryGradient } }) => secondaryGradient}; */
    

    .title {
      

      background-image: ${({ theme: { primaryGradient } }) => primaryGradient};
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

      animation: ${textclip} 2s linear infinite;
    }
  }

  .img {
    width: 70%;
    height: auto;
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 350px));
  gap: 2rem;
  justify-content: center;
`
