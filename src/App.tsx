import React, { useEffect } from "react";
import AppRouter from "./components/AppRouter";
import { HashRouter } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import { useActions } from "./hooks/useActions";
import IUser from "./models/IUser";
import {startUsers} from './constants'
import "./styles/main.scss";

function App() {
  const { setIsAuth, setUser } = useActions();

  useEffect(() => {
    if (localStorage.getItem("isAuth")) {
      setIsAuth(true);
      setUser({ username: localStorage.getItem("username" || "") } as IUser);
    }
    if (!localStorage.getItem("users")) {
      window.localStorage.setItem("users", JSON.stringify(startUsers));
    }
  }, []);

  return (
    <HashRouter>
      <Nav />
      <div className="container">
        <AppRouter />
      </div>
    </HashRouter>
  );
}

export default App;
