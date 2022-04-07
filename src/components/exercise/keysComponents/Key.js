import styled, { css } from 'styled-components'
import { keyTypes } from '../../../constants/keyTypes'

export const Key = ({ type, children }) => {
  return <KeyStyled type={type}>{children}</KeyStyled>
}

const wantedKeyStyles = css`
  color: ${({ theme: { fontColor } }) => fontColor};
  border: 2px solid ${({ theme: { secondaryColor } }) => secondaryColor};
  background: ${({ theme: { primaryColor } }) => primaryColor};
  border-radius: 0.325rem;
`

const wrongKeyStyles = css`
  color: ${({ theme: { errorColor } }) => errorColor};
`

const succeedKeyStyles = css`
  color: ${({ theme: { successColor } }) => successColor};
`

const untriedKeyStyles = css`
  color: ${({ theme: { fontColor } }) => fontColor};
`

const KeyStyled = styled.span`
  border: 2px solid transparent;
  padding: 0 0.2em;
  font-size: 1em;
  transition: color 300ms ease-in-out;
  user-select: none;

  font-weight: 600;

  ${({ type }) => (type === keyTypes.WANTED_KEY ? wantedKeyStyles : null)}
  ${({ type }) => (type === keyTypes.UNDTRIED_KEY ? untriedKeyStyles : null)}
  ${({ type }) => (type === keyTypes.WRONG_KEY ? wrongKeyStyles : null)}
  ${({ type }) => (type === keyTypes.SUCCEED_KEY ? succeedKeyStyles : null)}
`
