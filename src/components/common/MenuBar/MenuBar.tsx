import { v4 as uuidv4 } from "uuid";
import Input from "../Input/Input.tsx";
import MenuButton from "../MenuButton/MenuButton.tsx";
import { Menu, MenuElement } from "../../../types/types.ts";
import { exportPdf } from "../../../utils/FileHandler.ts";
import { useAppSelector } from "../../../store/hooks.ts";
import classes from "./MenuBar.module.css";

type MenuBarProps = {
  presentationName: string;
};

function MenuBar({ presentationName }: MenuBarProps) {
  const presentation = useAppSelector(state => state.presentation);

  const fileMenuElements: MenuElement[] = [
    {
      id: uuidv4(),
      text: "Экспортировать в PDF",
      onClick: () => {
        exportPdf(presentation.name, presentation.slides);
      },
    },
  ];
  const fileMenu: Menu = {
    menuElements: fileMenuElements,
  };

  return (
    <div className={classes.menu}>
      <img className={classes["main-icon"]} alt={"main-icon"} src={"presentation_icon.png"} />
      <div className={classes["input-buttons"]}>
        <Input className={classes["presentation-input"]} defaultValue={presentationName} />
        <div className={classes.buttons}>
          <MenuButton label={"Файл"} menu={fileMenu} />
          {/*<MenuButton label={"Правка"} menu={correctionMenu} />*/}
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
