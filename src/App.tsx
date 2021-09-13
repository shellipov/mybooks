import React, {useEffect} from"react";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import { useActions } from './hooks/useActions';
import IUser from "./models/IUser"
import "./styles/main.scss";

function App() {

  const { setIsAuth, setUser } = useActions();

  useEffect(() => {
    if (localStorage.getItem("isAuth")) {
      setIsAuth(true);
      setUser({ username: localStorage.getItem("username" || "") } as IUser);
    }
  }, []);
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
