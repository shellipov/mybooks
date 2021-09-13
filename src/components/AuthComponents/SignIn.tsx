import React, { FC } from "react";
import LabelInput from "../IU/Input/LabelInput";
import Button from "../IU/Button/Button";
import styles from "./style.module.scss";

const Signin: FC = () => {
  function fetchData() {}
  return (
    <>
      <div className="margin">
        <h1>Регистрация</h1>
      </div>
      <div className={styles.auth_block}>
        <LabelInput label="Логин" />
        <LabelInput label="Пароль" type="password" />
        <LabelInput label="Повторите пароль" type="password" />
        <div className="center">
          <Button onClick={fetchData}>{"Зарегистрироваться"}</Button>
        </div>
      </div>
    </>
  );
};

export default Signin;
