import { correctionMenu, fileMenu } from "../../../constants/MenuBar.ts";
import Input from "../Input/Input.tsx";
import MenuButton from "../MenuButton/MenuButton.tsx";
import classes from "./MenuBar.module.css";

type MenuBarProps = {
  presentationName: string;
};

function MenuBar({ presentationName }: MenuBarProps) {
  return (
    <div className={classes.menu}>
      <img className={classes["main-icon"]} alt={"main-icon"} src={"presentation_icon.png"} />
      <div className={classes["input-buttons"]}>
        <Input className={classes["presentation-input"]} defaultValue={presentationName} />
        <div className={classes.buttons}>
          <MenuButton label={"Файл"} menu={fileMenu} />
          <MenuButton label={"Правка"} menu={correctionMenu} />
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
