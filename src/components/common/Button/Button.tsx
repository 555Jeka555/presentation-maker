import { ChangeEventHandler, MouseEventHandler, RefObject } from "react";
import classes from "./Button.module.css";

type ButtonProps = {
  text?: string;
  icon?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  fileInput?: RefObject<HTMLInputElement>;
};

function Button({ text, icon, onClick, onChange, fileInput }: ButtonProps) {
  const isIconButton = icon && !text;
  const isTextButton = text && !icon;
  let classNameTypeButton = "";
  if (isIconButton) {
    classNameTypeButton = "button_icon";
  } else if (isTextButton) {
    classNameTypeButton = "button_text";
  }

  return (
    <div>
      <input type="file" accept="image/*" ref={fileInput} style={{ display: "none" }} onChange={onChange} />
      <button type="button" className={classes.button + " " + classNameTypeButton} onClick={onClick}>
        {isIconButton && <span className={classes.icon + " " + "material-symbols-outlined"}>{icon}</span>}
        {isTextButton && <span className={classes.text}>{text}</span>}
      </button>
    </div>
  );
}

export default Button;
