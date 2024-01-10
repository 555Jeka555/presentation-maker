import { correctionMenu, fileMenu } from "../../../constants/MenuBar.ts";
import Input from "../Input/Input.tsx";
import MenuButton from "../MenuButton/MenuButton.tsx";
import { useAppSelector } from "../../../store/hooks.ts";
import classes from "./MenuBar.module.css";

function MenuBar() {
  const name = useAppSelector(state => state.presentation.name);

  return (
    <div className={classes.menu}>
      <div className={classes["input-buttons"]}>
        <Input className={classes["presentation-input"]} defaultValue={name} />
        <div className={classes.buttons}>
          <MenuButton label={"Файл"} menu={fileMenu} />
          <MenuButton label={"Правка"} menu={correctionMenu} />
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
