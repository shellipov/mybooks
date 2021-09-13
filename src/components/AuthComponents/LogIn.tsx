import React, { FC, useState } from "react";
import LabelInput from "../IU/Input/LabelInput";
import Button from "../IU/Button/Button";
import {useTypeSelector} from '../../hooks/useTypeSelector'
import { useActions } from "../../hooks/useActions";
import styles from "./style.module.scss";

const LogIn: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassrord] = useState("");
  const {error} = useTypeSelector(state => state.auth)
  const { login } = useActions();

  function fetchData() {
    login(username, password);
  }
  return (
    <>
      <div className="margin">
        <h1>Войти</h1>
      </div>
      <div className={styles.auth_block}>
        <div className={styles.error_block}>
          {error}
        </div>
        <LabelInput
          label="Логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <LabelInput
          label="Пароль"
          type="password"
          value={password}
          onChange={(e) => setPassrord(e.target.value)}
        />
        <div className="center">
          <Button onClick={fetchData}>{"Войти"}</Button>
        </div>
      </div>
    </>
  );
};

export default LogIn;
