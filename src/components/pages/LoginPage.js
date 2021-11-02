import styled from "styled-components";
import { LoginForm } from "../LoginComponents/LoginForm";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import backgroundImg from "../../images/loginBackground.jpg";
import { FooterLogo } from "../FooterLogo";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { Redirect } from "react-router";
import { routes } from "../../routes";
import { fadeInAnimation } from "../../style/animations";

export const LoginPage = () => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) return <Redirect to={routes.HOME_PAGE} />;

  return (
    <Container flex flex_jc_c flex_ai_c>
      <Filter />
      <BackGround src={backgroundImg} />
      <LoginForm />
      <FooterLogo />
    </Container>
  );
};

const BackGround = styled.img`
  position: absolute;
  top: 0;
  z-index: -2;
  width: 100%;
  height: 100vh;

  object-fit: cover;

  background: red;
`;

const Filter = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;

  opacity: 0.5;

  background: ${({ theme: { primaryColor } }) => primaryColor};
`;

const Container = styled(Wrapper)`
  width: 100%;
  /* background: ${({ theme: { primaryColor } }) => primaryColor}; */

  position: relative;
  animation: ${fadeInAnimation} 800ms ease;
`;
