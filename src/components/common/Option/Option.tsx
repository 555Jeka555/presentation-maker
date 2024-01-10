import { CSSProperties } from "react";
import { Option } from "../../../types/types.ts";
import classes from "./Option.module.css";

type OptionProps = {
  option: Option;
};

function Option({ option }: OptionProps) {
  const style: CSSProperties = {
    fontFamily: option.value,
  };

  return (
    <option style={style} className={classes.option} value={option.value}>
      {option.label}
    </option>
  );
}

export default Option;
