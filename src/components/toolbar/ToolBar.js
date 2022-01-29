import styled from 'styled-components'
import { Wrapper } from '../shareStyleComponents/Wrapper'

export const ToolBar = ({ children }) => {
  return (
    <ToolBarStyled flex flex_jc_fe>
      {children}
    </ToolBarStyled>
  )
}

const ToolBarStyled = styled(Wrapper)`
  width: max-content;
  margin-left: auto;
  height: auto;
  padding: 0.5rem;
  border-radius: 0.5rem;
`
