import styled from "styled-components";
import { Wrapper } from "./shareStyleComponents/Wrapper";
import UserIcon from "../images/user_icon.png";

export const LoginButton = () => {
  return (
    <Container padding="0.5rem" flex flex_ai_c>
      <LoginIcon src={UserIcon} />
      <LoginBtn>Cerrar sesión</LoginBtn>
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
