import React, { FC, ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

type UIButtonType = "blue" | "red";

interface IUIButton extends ButtonHTMLAttributes<HTMLButtonElement>  {
  color?: UIButtonType;
  children: string;
  onClick?: () => void;
}

const Button: FC<IUIButton> = ({ children, color = "blue", ...props }) => {
  const colors = {
    blue: styles.blue,
    red: styles.red,
  };

  return (
    <button className={`${styles.button} ${colors[color]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
