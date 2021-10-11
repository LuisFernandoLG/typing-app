import styled from "styled-components";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import rankIcon from "../../images/rank.png";
import creativeIcon from "../../images/creativity.png";
import barGraphIcon from "../../images/bargraph.png";
import { SideBarLink } from "./SideBarLink";

export const SideBar = () => {
  return (
    <SideBarContainer flex flex_dc gap="2rem">
      <SideBarLink
        icon={rankIcon}
        title="Ranking"
        description="Mira los mejores puntajes."
        linkPage="/"
      />

      <SideBarLink
        icon={creativeIcon}
        title="Creativo"
        description="Construye tus propios ejercicios!"
        linkPage="/"
      />

      <SideBarLink
        icon={barGraphIcon}
        title="Estadísticas"
        description="Echa un vistazo a tu puntaje."
        linkPage="/"
      />
    </SideBarContainer>
  );
};

const SideBarContainer = styled(Wrapper)`
  width: 30%;
  height: 100vh;

  margin: 2rem;
  border-radius: 1rem;

  box-shadow: 5px 5px 20px ${({ theme: { tertiaryColor } }) => tertiaryColor}; ;
`;
