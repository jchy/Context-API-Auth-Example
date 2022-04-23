import { createContext, useContext, useState } from "react";

export const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  let authUser = JSON.parse(localStorage.getItem("auth"));

  if (authUser) {
    authUser = authUser;
  } else {
    authUser = false;
  }
  const [auth, setAuth] = useState(authUser);

  const handleLogin = () => {
    setAuth(true);
    localStorage.setItem("auth", JSON.stringify(true));
  };
  const handleLogOut = () => {
    setAuth(false);
    // localStorage.clear();
    localStorage.removeItem("auth");
  };

  let value = {
    auth,
    handleLogin,
    handleLogOut
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
