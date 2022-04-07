import { useRef } from 'react'
import styled from 'styled-components'
import { FlexContainer } from '../shareStyleComponents/FlexContainer'

export const ToggleButton = ({
  state,
  enableIcon: EnableIcon,
  disableIcon: DisableIcon,
  ToggleFunction
}) => {
  const inputRef = useRef(null)

  const handleClick = () => {
    ToggleFunction()
    inputRef.current.blur()
  }

  return (
    <ToggleButtonStyled jc_c ai_c>
      <input
        ref={inputRef}
        type='checkbox'
        defaultChecked={state}
        onClick={handleClick}
      />
      {state === true ? <EnableIcon /> : <DisableIcon />}
    </ToggleButtonStyled>
  )
}

const ToggleButtonStyled = styled(FlexContainer)`
  font-size:inherit;
  position: relative;
  width: fit-content;
  padding: 5px;
  border-radius: 1rem;
  color: ${({ theme: { fontColor } }) => fontColor};

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;

    opacity: 0;
  }

`
