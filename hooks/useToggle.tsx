import { useState } from "react";

export const useToggle = <T extends boolean>(initialValue: T): [T, () => void] => {
  const [value, setValue] = useState<T>(initialValue);

  const toggleValue = () => {
    setValue((currentValue) => !currentValue as T);
  };

  return [value, toggleValue];
};
