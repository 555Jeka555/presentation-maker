import { ChangeEvent } from "react";
import Option from "../Option/Option.tsx";
import { Option as TOption } from "../../../types/types.ts";
import { useAppActions } from "../../../store/hooks.ts";

type SelectProps = {
  options: TOption[];
  className?: string;
};

function Select({ className, options }: SelectProps) {
  const { createChangeFontFamilyAction } = useAppActions();

  const handleChooseFontFamily = (event: ChangeEvent): void => {
    createChangeFontFamilyAction(event.target.value);
  };

  return (
    <select onChange={event => handleChooseFontFamily(event)} className={className}>
      {options.map(option => (
        <Option key={option.id} option={option} />
      ))}
    </select>
  );
}

export default Select;
