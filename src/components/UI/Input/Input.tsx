import React, { FC, InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <>
      <input
        className={styles.input}
        {...props}
        autoComplete="off"
        required
      ></input>
    </>
  );
};

export default Input;
