import React, { FC, useState } from "react";
import LabelInput from "../UI/Input/LabelInput";
import Button from "../UI/Button/Button";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { useActions } from "../../hooks/useActions";
import styles from "./style.module.scss";

const LogIn: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassrord] = useState("");
  const { error } = useTypeSelector((state) => state.auth);
  const { login, setError } = useActions();

  function buttonClick(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      login(username, password);
    }
  }

  function submitForm(e: React.FormEvent) {
    e.preventDefault();
    login(username, password);
  }
  return (
    <>
        <h1 className="white">Войти</h1>
      <form
        className={styles.form_block}
        onSubmit={submitForm}
        onKeyDown={buttonClick}
      >
        <div className={styles.error_block}>{error}</div>
        <LabelInput
          label="Логин"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError("");
          }}
        />
        <LabelInput
          label="Пароль"
          type="password"
          value={password}
          onChange={(e) => {
            setPassrord(e.target.value);
            setError("");
          }}
        />
        <div className="center">
          <Button>{"Войти"}</Button>
        </div>
      </form>
    </>
  );
};

export default LogIn;
