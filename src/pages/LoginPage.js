import { LoginForm } from "../components/LoginComponents/LoginForm";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Redirect } from "react-router";
import { routesV2 } from "../routes";
import { RedirectLink } from "../components/ui/RedirectLink";
import { FlexContainer } from "../components/shareStyleComponents/FlexContainer";

export const LoginPage = () => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) return <Redirect to={routesV2.LOGGED_APP.route} />;

  return (
    <FlexContainer flex_dc flex_jc_se flex_ai_c pd="5rem 1rem" gap="1rem">
      <LoginForm />
      <RedirectLink to={routesV2.SIGN_UP_PAGE.route}>Registrarse</RedirectLink>
    </FlexContainer>
  );
};
