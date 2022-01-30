import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const RedirectLink = ({ children, ...props }) => {
  return <RedirectLinkStyled {...props}>{children}</RedirectLinkStyled>
}

const RedirectLinkStyled = styled(Link)`
  margin: 1rem 0;
  font-weight: 700;
  text-decoration: underline;
  color: inherit;
  font-size: inherit;
`
