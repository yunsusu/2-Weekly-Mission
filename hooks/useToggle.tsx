import { useState } from "react";

export const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = (): void => {
    setValue((currentValue) => !currentValue);
  };

  return [value, toggleValue];
};
