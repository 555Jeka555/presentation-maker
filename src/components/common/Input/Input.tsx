import { ChangeEvent, useState } from "react";
import { useAppActions } from "../../../store/hooks.ts";

type InputProps = {
  defaultValue?: string | number;
  placeholder?: string;
  className?: string;
};

function Input({ defaultValue, placeholder, className }: InputProps) {
  const [value, setValue] = useState(defaultValue);
  const { createChangeTitleAction } = useAppActions();

  const handleOnInput = (event: ChangeEvent<HTMLInputElement>) => {
    createChangeTitleAction(event.target.value);
    setValue(event.target.value);
  };

  return (
    <div>
      <input
        onChange={handleOnInput}
        value={value}
        className={className}
        defaultValue={value}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
