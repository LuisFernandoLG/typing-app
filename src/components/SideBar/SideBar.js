import styled from "styled-components";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import rankIcon from "../../images/rank.png";
import creativeIcon from "../../images/creativity.png";
import barGraphIcon from "../../images/bargraph.png";
import { SideBarLink } from "./SideBarLink";
import { routes } from "../../routes";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

export const SideBar = () => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) return null;

  return (
    <SideBarContainer flex flex_dc gap="2rem">
      <SideBarLink
        icon={rankIcon}
        title="Ranking"
        description="Mira los mejores puntajes."
        linkPage={routes.RANKING_PAGE}
      />

      <SideBarLink
        icon={creativeIcon}
        title="Creativo"
        description="Construye tus propios ejercicios!"
        linkPage="/12"
      />

      <SideBarLink
        icon={barGraphIcon}
        title="Estadísticas"
        description="Echa un vistazo a tu puntaje."
        linkPage={routes.STADISTICS_PAGE}
      />
    </SideBarContainer>
  );
};

const SideBarContainer = styled(Wrapper)`
  width: max-content;
  height: max-content;

  margin: 0 2rem;
  border-radius: 1rem;

  box-shadow: 5px 5px 20px ${({ theme: { tertiaryColor } }) => tertiaryColor}; ;
`;
