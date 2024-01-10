import { Menu as TMenu } from "../../../types/types.ts";
import classes from "./MenuButton.module.css";

type MenuButtonProps = {
  label: string;
  menu: TMenu;
};

function MenuButton({ label }: MenuButtonProps) {
  return (
    <div>
      <div className={classes.button}>{label}</div>
      {/*<Menu menuElements={menu.menuElements} />*/}
    </div>
  );
}

export default MenuButton;
