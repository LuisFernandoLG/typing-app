import styled from 'styled-components'
import { FlexContainer } from './shareStyleComponents/FlexContainer'

export const MenuNavigator = () => {
  return (
    <div>
        <MenuContainer>
{/*
      {routeHistory.map(({ id, name, route }) => (
          <RouteMenu key={id} to={route}>
          {name}
        </RouteMenu> */}
      </MenuContainer>
    </div>
  )
}

const MenuContainer = styled(FlexContainer)`
 background: ${({ theme: { whiteColor } }) => whiteColor}; 
 width: max-content;
 padding: 0.5rem 1rem;
 border-radius: 10px;

a:nth-child(odd)  { background: ${({ theme: { disableColor } }) => disableColor}; }
a:nth-child(even)  { background: ${({ theme: { bgColor } }) => bgColor}; }
`

// const RouteMenu = styled(Link)`
//     font-size: 0.7rem;
//   color: ${({ theme: { fontColor } }) => fontColor};
//   padding:0.5em 1.5em;
//   position:relative;
//   font-weight:600;

//   transition:background 300ms ease;

//   &::after{
//       position:absolute;
//       background: inherit;
//       content: "";
//       display:block;
//       top:0;
//       right:-14%;
//       z-index: 60;

//       clip-path: polygon(100% 50%, 0 0, 0 100%);
//       width: 15%;
//       height: 100%;

//   }

// `
