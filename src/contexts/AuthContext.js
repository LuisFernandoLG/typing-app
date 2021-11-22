import { createContext, useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { toast } from "react-toastify";
import { endpoints } from "../components/signIn/api";

const AuthContext = createContext();

const randomUser = {
  name: "Luis",
  email: "luis@gmail.com",
  password: "1234567890",
};

const initialAuth = JSON.parse(localStorage.getItem("isAuth")) || false;
const initialUser = JSON.parse(localStorage.getItem("user")) || {};

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(initialAuth);
  const [user, setUser] = useState(initialUser);
  const { fetchData, loading, data, fetchErrors } = useFetch();

  const setLogIn = (email, password) => {
    let options = {
      method: "POST",
      body: JSON.stringify({ email, password }),
      "Content-Type": "application/json",
    };
    fetchData(endpoints.logIn, options);
  };

  useEffect(() => {
    if (data) {
      if (data.status === "202") {
        toast.error(data.statusText);
      }
      if (data.status === "201") {
        setIsAuth(true);
        setUser(data.data.user);
      }
    }
  }, [data]);

  useEffect(() => {
    if (fetchErrors) {
      toast.error("Algo salió mal :(");
    }
  }, [fetchErrors]);

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

  const values = { isAuth, setLogIn, setLogOut, user, authLoading: loading };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
