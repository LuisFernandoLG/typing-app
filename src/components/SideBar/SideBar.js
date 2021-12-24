import styled, { css } from "styled-components";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { SideBarLink } from "./SideBarLink";
import { routes } from "../../routes";
import {
  FaHome,
  FaTrophy,
  FaChartBar,
  FaBars,
  FaUserCircle,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import { useContext, useEffect } from "react";
import AuthContext from "../../contexts/AuthContext";
import { Logo } from "../NavBar/Logo";

export const SideBar = ({ toggleIsOpen, isOpen }) => {
  const { user } = useContext(AuthContext);
  const isAdmin = user.typeUser === 1 ? true : false;
  console.log({ user, isAdmin });

  return (
    <SideBarContainer flex flex_dc isOpen={isOpen}>
      <Logo />

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

const SideBarContainer = styled(Wrapper)`
  width: max-content;
  height: max-content;

  padding: 0.5rem;

  grid-column: 1 / span 1;
  grid-row: 1 / -1;

  font-size: 10px;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 500;

  border-top-right-radius: 1em;
  border-bottom-right-radius: 1em;
  overflow: hidden;

  box-shadow: 5px 5px 20px ${({ theme: { tertiaryColor } }) => tertiaryColor};
  background: ${({ theme: { bgColor } }) => bgColor};

  h2,
  p {
    transition: display 1s ease;
  }

  h2,
  p {
    display: none;
  }

  &:hover {
    h2,
    p {
      display: flex;
    }
  }
`;
