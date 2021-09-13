import React, { FC, InputHTMLAttributes } from "react";
import Input from "./Input";
import styles from "./styles.module.scss";

interface IUIInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  children?: React.ReactElement;
  visible?: boolean;
}

const LabelInput: FC<IUIInput> = ({
  label = "Добавьте заголовок",
  visible = true,
  children,
  ...props
}) => {
  return (
    <label className={styles.label}>
      {label}
      <Input {...props} />
      {children}
    </label>
  );
};

export default LabelInput;
