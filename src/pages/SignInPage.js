import { useContext } from "react";
import { Redirect } from "react-router";
import AuthContext from "../contexts/AuthContext";
import { routes, routesV2 } from "../routes";
import { SignInForm } from "../components/signIn/SignInForm";
import { FlexContainer } from "../components/shareStyleComponents/FlexContainer";
import { RedirectLink } from "../components/ui/RedirectLink";

export const SignInPage = () => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) return <Redirect to={routes.HOME_PAGE} />;

  return (
    <FlexContainer flex_dc flex_jc_se flex_ai_c pd="5rem 1rem" gap="1rem">
      <SignInForm />
      <RedirectLink to={routesV2.LOGIN_PAGE.route}>Iniciar sesión</RedirectLink>
    </FlexContainer>
  );
};
