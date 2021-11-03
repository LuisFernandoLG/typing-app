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
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) return <Redirect to={routes.HOME_PAGE} />;

  return (
    <Container flex flex_jc_c flex_ai_c flex_dc>
      <Filter />
      <BackGround src={backgroundImg} />
      <LoginForm />
      <RedirectLink>
        ¿Aún no tienes una cuenta?
        <Link to={routes.SIGNUP_PAGE}>Registrece aquí</Link>
      </RedirectLink>
      <FooterLogo />
    </Container>
  );
};

const RedirectLink = styled.span`
  margin: 1rem 0;
  font-weight: 700;

  a {
    color: #a1db39;
  }
`;

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
  position: relative;
  animation: ${fadeInAnimation} 800ms ease;
`;
