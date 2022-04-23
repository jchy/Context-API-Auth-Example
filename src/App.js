import { useContext } from "react";
import { AppContext } from "./AppContext";
import "./styles.css";

export default function App() {
  const { auth, handleLogin, handleLogOut } = useContext(AppContext);

  console.log(auth, handleLogOut, handleLogin);

  return (
    <div className="App">
      <h1>Auth Context</h1>
      <button onClick={auth ? handleLogOut : handleLogin}>
        {auth ? "LogOut" : "LogIn"}
      </button>
    </div>
  );
}
