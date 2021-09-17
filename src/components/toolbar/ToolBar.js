import styled from "styled-components";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { ToggleButton } from "../ToggleButton";

const KeyBoardIcon = () => <i className="far fa-keyboard" />;
const SpeakerIconEnable = () => <i className="fas fa-volume-up" />;
const SpeakerIconDisable = () => <i className="fas fa-volume-mute" />;

export const ToolBar = ({
  keyBoardVisibility,
  toggleKeyBoardVisibility,
  isEnableSound,
  toggleEnableSound,
}) => {
  return (
    <ToolBarStyled flex flex_jc_fe>
      <ToggleButton
        state={keyBoardVisibility}
        enableIcon={KeyBoardIcon}
        disableIcon={KeyBoardIcon}
        toggleFunction={toggleKeyBoardVisibility}
      />

      <ToggleButton
        state={isEnableSound}
        enableIcon={SpeakerIconEnable}
        disableIcon={SpeakerIconDisable}
        toggleFunction={toggleEnableSound}
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
