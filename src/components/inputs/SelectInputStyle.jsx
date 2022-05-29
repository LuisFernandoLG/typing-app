import styled from 'styled-components'

export const SelectInput = styled.select`
padding: 1rem;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  background: ${({ theme: { accentColor } }) => accentColor};
  font-weight: 600;

`
