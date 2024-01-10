import { MouseEventHandler } from "react";
import classes from "./MenuElement.module.css";

type MenuElementProps = {
  text: string;
  shortcut?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function MenuElement({ text, shortcut, onClick }: MenuElementProps) {
  return (
    <span className={classes.body} onClick={onClick}>
      <span> {text} </span>
      {shortcut && <span> {shortcut} </span>}
    </span>
  );
}

export default MenuElement;
