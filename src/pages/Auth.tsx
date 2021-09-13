import React, { FC, useState } from "react";
import LogIn from "../components/AuthComponents/LogIn";
import SignIn from "../components/AuthComponents/SignIn";
import Button from "../components/IU/Button/Button";

const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  return (

    <div className="center column full_heigth ">
      <div className="top_right_corner margin">
        <Button onClick={() => setIsLogin(!isLogin)} color={"red"}>
          {isLogin ? "Я новый пользователь" : "У меня есть аккаунт"}
        </Button>
      </div>
      {isLogin ? (
        <>
          <LogIn />
        </>
      ) : (
        <>
          <SignIn />
        </>
      )}
    </div>

  );
};

export default Auth;
