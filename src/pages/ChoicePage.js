
import { Link } from 'react-router-dom'
import { generate } from 'shortid'
import styled from 'styled-components'
import English2 from '../images/english2.png'
import { routesV2 } from '../routes'
// import SpeedImg from '../images/clock.png'
// import SLiberty from '../images/sliberty.png'

export const ChoicePage = () => {
  const choices = [
    {
      id: generate(),
      title: 'Aprende Mecanografía',
      img: English2,
      toLink: routesV2.LOGGED_APP.subPages.HOME_PAGE.route
    },

    {
      id: generate(),
      title: 'Mejora tu velocidad',
      img: English2,
      toLink: '/'
    },
    {
      id: generate(),
      title: 'Aprende inglés',
      img: English2,
      toLink: routesV2.LOGGED_APP.subPages.ENGLISH_SECTION_PAGE.route
    }
  ]

  return (
    <div>
      <GridContainer>
        {choices.map(({ id, title, img, toLink }) => (
          <LinkCard to={toLink} key={id}>
            <h3 className='title'>{title}</h3>
            <img className='img' src={img} />
          </LinkCard>
        ))}
      </GridContainer>
    </div>
  )
}

const LinkCard = styled(Link)`
background:${({ theme: { accentColor } }) => accentColor};
padding:2rem;
border-radius: 1rem;
transition: transform 300ms ease;

&:hover{
  transform: scale(1.05);
}

.title{
  text-align:center;
  color:${({ theme: { fontColor } }) => fontColor};
}

.img{
  width: 70%;
  height: auto;
}
`

const GridContainer = styled.div`
width:100%;
display:grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
gap:2rem;
`
