import styled from "styled-components";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { SideBarLink } from "./SideBarLink";
import { routes } from "../../routes";
import {
  FaHome,
  FaTrophy,
  FaChartBar,
  FaBars,
  FaUserCircle,
} from "react-icons/fa";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

export const SideBar = ({ toggleIsOpen }) => {
  const { user } = useContext(AuthContext);
  const isAdmin = user.typeUser === 1 ? true : false;
  console.log({ user, isAdmin });

  return (
    <SideBarContainer flex flex_dc>
      <ToggleBtnVisibility onClick={toggleIsOpen}>
        <FaBars />
      </ToggleBtnVisibility>

      <SideBarLink
        icon={FaHome}
        title="Inicio"
        description="Volver al inicio"
        linkPage={routes.HOME_PAGE}
      />
      <SideBarLink
        icon={FaTrophy}
        title="Ranking"
        description="Mira los mejores puntajes."
        linkPage={routes.RANKING_PAGE}
      />

      <SideBarLink
        icon={FaChartBar}
        title="Estadísticas"
        description="Echa un vistazo a tu puntaje."
        linkPage={routes.STADISTICS_PAGE}
      />

      {isAdmin && (
        <SideBarLink
          icon={FaUserCircle}
          title="Admin"
          description="Panel de administrador"
          linkPage={routes.ADMIN_PAGE}
        />
      )}
    </SideBarContainer>
  );
};

const ToggleBtnVisibility = styled.div`
  width: min-content;
  padding: 1rem;
  margin-left: auto;
  cursor: pointer;
`;

const SideBarContainer = styled(Wrapper)`
  width: max-content;
  height: 100%;

  position: absolute;
  left: 0;
  top: 0;
  z-index: 500;

  border-top-right-radius: 1em;
  border-bottom-right-radius: 1em;
  overflow: hidden;

  box-shadow: 5px 5px 20px ${({ theme: { tertiaryColor } }) => tertiaryColor};
  background: ${({ theme: { bgColor } }) => bgColor};
`;
