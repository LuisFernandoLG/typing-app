import { useContext } from "react";
import { Redirect } from "react-router";
import AuthContext from "../../contexts/AuthContext";
import { routes } from "../../routes";

export const SignUpPage = () => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) return <Redirect to={routes.HOME_PAGE} />;

  return (
    <div>
      <h2>Página de registro</h2>
    </div>
  );
};
