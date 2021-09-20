import React, { FC, useState } from "react";
import LogIn from "../components/AuthComponents/LogIn";
import SignIn from "../components/AuthComponents/SignIn";
import Button from "../components/UI/Button/Button";
import Auth from "../components/AuthComponents/Auth";

const AuthPage: FC = () => {
  return (
    <div className="center column full_heigth ">
      <Auth />
    </div>
  );
};

export default AuthPage;
