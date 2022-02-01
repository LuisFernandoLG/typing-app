import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const RedirectLink = ({ children, ...props }) => {
  return (
    <RedirectLinkStyled>
      <NavLink
        end
        {...props}
        className={({ isActive }) => (isActive ? 'activated' : null)}>
        {children}
      </NavLink>
    </RedirectLinkStyled>
  )
}

const RedirectLinkStyled = styled.li`
  font-weight: 700;
  font-size: 1.8rem ;
  position:relative;
  
  a{
    color: ${({ theme: { disableColor } }) => disableColor};
    padding:0.2rem;
    
  }
  
  .activated{
    color: ${({ theme: { fontColor } }) => fontColor};
    /* background:${({ theme: { primaryColor } }) => primaryColor}; */

    /* display:flex;
    justify-content: center;
    align-items: center;
    padding:0.2rem;
    border-radius: 10rem; */
  
    /* &::before{
      position:absolute;
      content:"";
      display:block;
      width: 2rem;
      height:2rem;
      border-radius:10rem;
      left:0;
      top:0;
      z-index:-1;
      opacity: 0.4;
    } */
  }
`
