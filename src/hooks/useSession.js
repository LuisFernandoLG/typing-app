import { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { routesV2 } from "../routes";

export const useSession = () => {
  const { setLogOut } = useContext(AuthContext);
  let history = useHistory();

  const handleLogOut = () => {
    setLogOut();
    history.push(routesV2.LOGIN_PAGE.route);
  };

  return {
    handleLogOut,
  };
};
