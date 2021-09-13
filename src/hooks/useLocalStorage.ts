import { useEffect, useState } from "react";

export const useLocalStorage = (defaultVal: any, key: string) => {
  const [value, setValue] = useState(() => {
    const tempValue = window.localStorage.getItem(key);
    return tempValue !== null ? JSON.parse(tempValue) : defaultVal;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
