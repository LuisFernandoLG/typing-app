import { createContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";

const AuthContext = createContext();

const randomUser = {
  name: "Luis",
  email: "luis@gmail.com",
  password: "1234567890",
};

const initialAuth = localStorage.getItem("isAuth") || false;
const initialUser = JSON.parse(localStorage.getItem("user")) || {};

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(initialAuth);
  const [user, setUser] = useState(initialUser);

  const setLogIn = (email, password) => {
    setIsAuth(true);
    setUser({ email, password });
  };

  const setLogOut = () => {
    setIsAuth(false);
    setUser({});
  };

  useEffect(() => {
    if (isAuth) {
      localStorage.setItem("isAuth", JSON.stringify(isAuth));
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("isAuth");
      localStorage.removeItem("user");
    }
  }, [isAuth]);

  const data = { isAuth, setLogIn, setLogOut, user };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
