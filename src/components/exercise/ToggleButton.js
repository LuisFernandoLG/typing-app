import { useRef } from "react";
import styled from "styled-components";
import { Wrapper } from "../shareStyleComponents/Wrapper";

export const ToggleButton = ({
  state,
  enableIcon: EnableIcon,
  disableIcon: DisableIcon,
  enableFunction,
  disableFunction,
}) => {
  let inputRef = useRef(null);

  const handleClick = () => {
    if (state) disableFunction();
    else enableFunction();
    inputRef.current.blur();
  };
  return (
    <ToggleButtonStyled>
      <input
        ref={inputRef}
        type="checkbox"
        defaultChecked={state}
        onClick={handleClick}
      />
      {state === true ? <EnableIcon /> : <DisableIcon />}
    </ToggleButtonStyled>
  );
};

const ToggleButtonStyled = styled(Wrapper)`
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
      color: ${({ theme: { primaryColor } }) => primaryColor};
      text-shadow: 0 0 0.5rem ${({ theme: { primaryColor } }) => primaryColor};
    }
  }
`;