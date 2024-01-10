import { ChangeEvent } from "react";
import { useAppActions } from "../../../store/hooks.ts";
import classes from "./InputColor.module.css";

type InputImageProps = {
  icon: string;
};

function InputColor({ icon }: InputImageProps) {
  const { createChangeColorAction } = useAppActions();

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    createChangeColorAction(event.target.value);
  };

  return (
    <div>
      <label className={classes.button} id="colorInput">
        <span className={"material-symbols-outlined"}>{icon}</span>
        <input className={classes.hidden} id="colorInput" type="color" onChange={handleImageChange} />
      </label>
    </div>
  );
}

export default InputColor;
