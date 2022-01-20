import { useContext } from "react";
import { Redirect } from "react-router";
import AuthContext from "../contexts/AuthContext";
import { routes, routesV2 } from "../routes";

export const PrivatePage = ({ component: Component }) => {
  const { isAuth } = useContext(AuthContext);

  return (
    <>{isAuth ? <Component /> : <Redirect to={routesV2.LOGIN_PAGE.route} />}</>
  );
};
