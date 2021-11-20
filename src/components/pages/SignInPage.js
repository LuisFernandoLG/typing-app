import { useContext } from "react";
import { Redirect } from "react-router";
import styled from "styled-components";
import AuthContext from "../../contexts/AuthContext";
import { routes } from "../../routes";
import { SignInForm } from "../signIn/SignInForm";
import bg from "../../images/signIn.jpg";
import { Wrapper } from "../shareStyleComponents/Wrapper";

export const SignInPage = () => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) return <Redirect to={routes.HOME_PAGE} />;

  return (
    <SignInPageWrapper flex flex_jc_fs flex_ai_c>
      <Img src={bg} />

      <SignInForm />
    </SignInPageWrapper>
  );
};

const Img = styled.img`
  max-width: 50%;
  height: 100%;
  object-fit: cover;
`;

const SignInPageWrapper = styled(Wrapper)`
  height: 100vh;
  width: 100%;

  background: ${({ theme: { tertiaryColor } }) => tertiaryColor};
`;
