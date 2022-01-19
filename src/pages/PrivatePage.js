import { useContext } from "react";
import { Redirect } from "react-router";
import AuthContext from "../contexts/AuthContext";
import { routes } from "../routes";

export const PrivatePage = ({ component: Component }) => {
  const { isAuth } = useContext(AuthContext);

  return <>{isAuth ? <Component /> : <Redirect to={routes.LOGIN_PAGE} />}</>;
};
