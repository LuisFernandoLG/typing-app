import styled from "styled-components";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { ToggleButton } from "../exercise/ToggleButton";

const KeyBoardIcon = () => <i className="far fa-keyboard" />;
const SpeakerIconEnable = () => <i className="fas fa-volume-up" />;
const SpeakerIconDisable = () => <i className="fas fa-volume-mute" />;

export const ToolBar = ({
  isEnableSound,
  enableSound,
  disableSound,
  keyBoardVisibility,
  enableKeyboard,
  disableKeyBoard,
}) => {
  return (
    <ToolBarStyled flex flex_jc_fe>
      <ToggleButton
        state={keyBoardVisibility}
        enableIcon={KeyBoardIcon}
        disableIcon={KeyBoardIcon}
        enableFunction={enableKeyboard}
        disableFunction={disableKeyBoard}
      />

      <ToggleButton
        state={isEnableSound}
        enableIcon={SpeakerIconEnable}
        disableIcon={SpeakerIconDisable}
        enableFunction={enableSound}
        disableFunction={disableSound}
      />
    </ToolBarStyled>
  );
};

const ToolBarStyled = styled(Wrapper)`
  width: max-content;
  margin-left: auto;
  height: auto;
  padding: 0.5rem;
  border-radius: 0.5rem;

  background: ${({ theme: { disableColor } }) => disableColor};
`;
