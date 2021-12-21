import styled from "styled-components";
import { LoginForm } from "../LoginComponents/LoginForm";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { Redirect } from "react-router";
import { routes } from "../../routes";
import { fadeInAnimation } from "../../style/animations";
import { Link } from "react-router-dom";
import signImg from "../../images/webDeveloper.svg";

export const LoginPage = () => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) return <Redirect to={routes.HOME_PAGE} />;

  return (
    <Container flex flex_jc_se flex_ai_c>
      <Wrapper flex flex_dc flex_jc_c flex_ai_c>
        <LoginForm />
        <RedirectLink>
          ¿No estás registrado?
          <Link to={routes.SIGNUP_PAGE}>Regístrese aquí</Link>
        </RedirectLink>
      </Wrapper>
      <SignImg src={signImg} />
    </Container>
  );
};

const RedirectLink = styled.span`
  margin: 1rem 0;
  font-weight: 700;

  a {
    padding-left: 0.5rem;
    color: ${({ theme: { primaryColor } }) => primaryColor};
  }
`;

const Container = styled(Wrapper)`
  width: 100%;
  height: 100vh;
  animation: ${fadeInAnimation} 800ms ease;
`;

const SignImg = styled.img`
  height: 25rem;
`;
