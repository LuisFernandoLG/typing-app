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
    opacity: 0.3;
    /* padding:0.5rem; */
    /* border-radius:10px; */
  }

  .activated{
    opacity: 1;
    /* background: ${({ theme: { disableColor } }) => disableColor}; */
    /* color: ${({ theme: { fontColor } }) => fontColor}; */
    /* box-shadow:0 0 10px -4px${({ theme: { disableColor } }) => disableColor}; */
    border-bottom: 3px solid ${({ theme: { disableColor } }) => disableColor};s;
  }
`
