import React, { FC } from "react";
import styles from "./styles.module.scss";

type UIButtonType = "blue" | "red";

interface IUIButton {
  color?: UIButtonType;
  children: string;
  onClick: () => void;
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
