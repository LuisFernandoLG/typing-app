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
  }
  
  .activated{
    opacity: 1;
    color: ${({ theme: { fontColor } }) => fontColor};
    border-bottom: 3px solid ${({ theme: { fontColor } }) => fontColor};
  }
`
