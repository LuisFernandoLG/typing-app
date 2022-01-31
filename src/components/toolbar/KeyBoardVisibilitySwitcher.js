import { Button, Input } from 'style-components'
import styled from 'styled-components'
import { Wrapper } from '../shareStyleComponents/Wrapper'

export const KeyBoardVisibilitySwitcher = ({
  keyBoardVisibility,
  toggleKeyBoardVisibility
}) => {
  return (
    <KeyBoardVisibilitySwitcherStyled>
      <input
        type="checkbox"
        defaultValue={keyBoardVisibility}
        onClick={toggleKeyBoardVisibility}
      />
      <i className="far fa-keyboard"></i>
    </KeyBoardVisibilitySwitcherStyled>
  )
}

const KeyBoardVisibilitySwitcherStyled = styled(Wrapper)`
  position: relative;
  width: fit-content;
  padding: 5px;
  border-radius: 1rem;

  i {
    color: ${({ theme: { secondaryColor } }) => secondaryColor};
    opacity: 0.5;
    pointer-events: none;
  }

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;

    opacity: 0;

    &:checked + i {
      opacity: 1;
      text-shadow: 0 0 0.5rem ${({ theme: { primaryColor } }) => primaryColor};
    }
  }
`
