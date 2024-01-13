import { useState } from "react";

const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => {
    setValue((currentValue) => !currentValue);
  };

  return [value, toggleValue];
};
