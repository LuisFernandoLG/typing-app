import { useContext } from "react";
import { Redirect } from "react-router";
import styled from "styled-components";
import AuthContext from "../../contexts/AuthContext";
import { routes } from "../../routes";
import { SignInForm } from "../signIn/SignInForm";
import bg from "../../images/signIn.jpg";
import { Wrapper } from "../shareStyleComponents/Wrapper";
import { FooterLogo } from "../FooterLogo";
import { NavLink } from "react-router-dom";

export const SignInPage = () => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) return <Redirect to={routes.HOME_PAGE} />;

  return (
    <SignInPageWrapper flex flex_jc_fs flex_ai_c>
      <WrapperTexts flex flex_dc flex_jc_se flex_ai_c>
        <Img src={bg} />
        <Filter />
        <FooterLogo />
        <Paragraph>
          Type and type es una herramienta que le permite al usuario mejorar sus
          habilidades en mecanografía con retos desafiantes.
        </Paragraph>
      </WrapperTexts>
      <WrapperForm flex flex_dc flex_ai_c flex_jc_c gap="1rem">
        <SignInForm />
        <span>
          ¿Ya tienes una cuenta?
          <NavLink to={routes.LOGIN_PAGE}>Inicie sesión</NavLink>
        </span>
      </WrapperForm>
    </SignInPageWrapper>
  );
};

const WrapperForm = styled(Wrapper)`
  width: 50%;

  span > a {
    padding-left: 0.2rem;
    color: ${({ theme: { primaryColor } }) => primaryColor};
    font-weight: 600;
  }
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0 3rem;
`;

const WrapperTexts = styled(Wrapper)`
  position: relative;
  width: 50%;
  height: 100%;
`;

const Img = styled.img`
  /* max-width: 50%; */
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -10;
  position: absolute;
`;
const Filter = styled.div`
  max-width: %;
  position: absolute;
  top: 0;
  z-index: -5;
  width: 100%;
  height: 100%;

  opacity: 0.5;

  background: ${({ theme: { primaryColor } }) => primaryColor};
`;

const SignInPageWrapper = styled(Wrapper)`
  height: 100vh;
  width: 100%;

  /* background: ${({ theme: { tertiaryColor } }) => tertiaryColor}; */
`;
