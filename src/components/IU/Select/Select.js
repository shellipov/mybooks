import React from "react";
import styles from "./styles.module.scss";

const Select = ({ defaultValue, options, value, onChange }) => {
  return (
    <select
      value={JSON.stringify(value)}
      onChange={(e) => onChange(JSON.parse(e.target.value))}
      className={styles.select}
    >
      <option disabled>{defaultValue}</option>
      {options.map((option) => (
        <option key={option.name} value={JSON.stringify(option.value)}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
