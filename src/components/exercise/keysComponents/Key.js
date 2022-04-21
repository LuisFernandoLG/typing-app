import styled, { css } from 'styled-components'
import { keyTypes } from '../../../constants/keyTypes'
import { FlexContainer } from '../../shareStyleComponents/FlexContainer'

export const Key = ({ type, children }) => {
  return <KeyStyled type={type} jc_c ai_c>{children}</KeyStyled>
}

const wantedKeyStyles = css`
  color: ${({ theme: { fontColor } }) => fontColor};
  outline: 3px solid ${({ theme: { fontColor } }) => fontColor};
  /* background: ${({ theme: { primaryColor } }) => primaryColor}; */
  `

const wrongKeyStyles = css`
  color: ${({ theme: { fontColor } }) => fontColor};
  background: ${({ theme: { errorColor } }) => errorColor};
`

const succeedKeyStyles = css`
  color: ${({ theme: { fontColor } }) => fontColor};
  background: ${({ theme: { successColor } }) => successColor};
`

const untriedKeyStyles = css`
  color: ${({ theme: { fontColor } }) => fontColor};
`

const KeyStyled = styled(FlexContainer)`
  display:block;
  border: 2px solid transparent;
  padding: 0 0.02em;
  font-size: 1.5em;
  transition: color 300ms ease-in-out;
  user-select: none;
  margin:0 0.5px;
  min-height:3rem; 
  min-width:1.3625rem;
  
  border-radius: 0.325rem;
  font-weight: 600;

  display:flex;
  justify-content: center;
  align-items: center;

  ${({ type }) => (type === keyTypes.WANTED_KEY ? wantedKeyStyles : null)}
  ${({ type }) => (type === keyTypes.UNDTRIED_KEY ? untriedKeyStyles : null)}
  ${({ type }) => (type === keyTypes.WRONG_KEY ? wrongKeyStyles : null)}
  ${({ type }) => (type === keyTypes.SUCCEED_KEY ? succeedKeyStyles : null)}
`
