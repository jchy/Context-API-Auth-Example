import { createContext, useContext, useState } from "react";

export const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const handleLogin = () => {
    setAuth(true);
  };
  const handleLogOut = () => {
    setAuth(false);
  };

  let value = {
    auth,
    handleLogin,
    handleLogOut
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
