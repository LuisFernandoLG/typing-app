import styled from "styled-components";
import { Wrapper } from "./shareStyleComponents/Wrapper";
import UserIcon from "../images/user_icon.png";
import AuthContext from "../contexts/AuthContext";
import { useContext } from "react";
import { useHistory } from "react-router";
import { routes } from "../routes";

export const LoginButton = () => {
  const { setLogOut } = useContext(AuthContext);
  let history = useHistory();

  const handleClick = () => {
    setLogOut();
    history.push(routes.LOGIN_PAGE);
  };

  return (
    <Container padding="0.5rem" flex flex_ai_c>
      <LoginBtn onClick={handleClick}>Cerrar sesión</LoginBtn>
    </Container>
  );
};

const Container = styled(Wrapper)`
  cursor: pointer;
`;

const LoginBtn = styled.button`
  font-weight: 600;
  background: transparent;
  cursor: pointer;
`;

const LoginIcon = styled.img`
  width: 20px;
`;