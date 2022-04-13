import { Link } from 'react-router-dom'
import { generate } from 'shortid'
import styled from 'styled-components'
import { FlexContainer } from '../components/shareStyleComponents/FlexContainer'
import English2 from '../images/english2.png'
import { Layout } from '../layouts/Layout'
import { routesV3 } from '../routes'

export const ChoicePage = () => {
  const choices = [
    {
      id: generate(),
      title: 'Mejora tu velocidad',
      img: English2,
      toLink: routesV3.MECA_TIME_PAGE.route
    },

    {
      id: generate(),
      title: 'Aprende Mecanografía',
      img: English2,
      toLink: routesV3.MECA_PAGE.route
    },
    {
      id: generate(),
      title: 'Aprende inglés',
      img: English2,
      toLink: routesV3.ENGLISH_PAGE.route
    }
  ]

  return (
    <Layout>
      <GridContainer>
        {choices.map(({ id, title, img, toLink }) => (
          <LinkCard to={toLink} key={id}>
            <FlexContainer fd_c jc_c ai_c>
              <h3 className='title'>{title}</h3>
              <img className='img' src={img} />
            </FlexContainer>
          </LinkCard>
        ))}
      </GridContainer>
    </Layout>
  )
}

const LinkCard = styled(Link)`
  background: ${({ theme: { accentColor } }) => accentColor};
  padding: 2rem;
  border-radius: 1rem;
  transition: transform 300ms ease;

  &:hover {
    transform: scale(1.05);
  }

  .title {
    text-align: center;
    color: ${({ theme: { fontColor } }) => fontColor};
  }

  .img {
    width: 70%;
    height: auto;
  }
`

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`
