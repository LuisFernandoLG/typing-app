import styled from "styled-components";
import { LoginForm } from "../components/LoginComponents/LoginForm";
import { Wrapper } from "../components/shareStyleComponents/Wrapper";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Redirect } from "react-router";
import { routesV2 } from "../routes";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) return <Redirect to={routesV2.HOME_PAGE.route} />;

  return (
    <Container flex flex_jc_se flex_ai_c>
      <Wrapper flex flex_dc flex_jc_c flex_ai_c>
        <LoginForm />
        <RedirectLink>
          ¿No estás registrado?
          <Link to={routesV2.SIGN_UP_PAGE.route}>Regístrese aquí</Link>
        </RedirectLink>
      </Wrapper>
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
`;
