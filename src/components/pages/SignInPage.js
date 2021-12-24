import { useContext } from "react";
import { Redirect } from "react-router";
import styled from "styled-components";
import AuthContext from "../../contexts/AuthContext";
import { routes } from "../../routes";
import { SignInForm } from "../signIn/SignInForm";
import { ReactComponent as FormImg } from "../../images/form.svg";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { Link } from "react-router-dom";

export const SignInPage = () => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) return <Redirect to={routes.HOME_PAGE} />;

  return (
    <SignInPageWrapper flex flex_jc_se flex_ai_c>
      <Wrapper flex flex_dc flex_ai_c>
        <SignInForm />
        <RedirectLink>
          ¿Ya tienes una cuenta?
          <Link to={routes.LOGIN_PAGE}>Iniciar sesión</Link>
        </RedirectLink>
      </Wrapper>
      <FormImg />
    </SignInPageWrapper>
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

// const FormImg = styled.div`
//   height: 25rem;
// `;

const SignInPageWrapper = styled(Wrapper)`
  width: 100%;
  padding: 2rem 0;
  background: ${({ theme: { bgColor } }) => bgColor};
`;
