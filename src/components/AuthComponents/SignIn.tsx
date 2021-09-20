import React, { FC, useState } from "react";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import LabelInput from "../UI/Input/LabelInput";
import { useActions } from "../../hooks/useActions";
import Button from "../UI/Button/Button";
import styles from "./style.module.scss";

const Signin: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassrord] = useState("");
  const [confirmPassword, setConfirmPassrord] = useState("");
  const { error } = useTypeSelector((state) => state.auth);
  const { signin, setError } = useActions();

  function buttonClick(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      signin(username, password, confirmPassword);
    }
  }

  function submitForm(e: React.FormEvent) {
    e.preventDefault();
    signin(username, password, confirmPassword);
  }
  return (
    <>
      <div className="margin">
        <h1 className="white">Регистрация</h1>
      </div>
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
        <LabelInput
          label="Повторите пароль"
          type="password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassrord(e.target.value);
            setError("");
          }}
        />
        <div className="center">
          <Button color="red">{"Зарегистрироваться"}</Button>
        </div>
      </form>
    </>
  );
};

export default Signin;
