import React, { FC, useState } from "react";
import Login from "./LogIn";
import SignIn from "./SignIn";
import Button from "../UI/Button/Button";
import styles from "./style.module.scss";

const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <div className={styles.auth_container}>
      <div className={styles.auth_back_block}>
        <span className="margin"> У меня есть аккаунт</span>
        <Button color="red" onClick={() => setIsLogin(!isLogin)}>
          {"Войти"}
        </Button>
      </div>
      <div className={styles.auth_back_block}>
        <span className="margin"> Я новый пользователь</span>

        <Button onClick={() => setIsLogin(!isLogin)}>
          {"Зарегистрироваться"}
        </Button>
      </div>
      <div className={[styles.auth_front_block, isLogin ? styles.active : ""].join(" ")}>
        {isLogin ? <SignIn /> : <Login />}
      </div>
    </div>
  );
};

export default Auth;
