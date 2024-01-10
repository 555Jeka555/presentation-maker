import MenuBar from "../common/MenuBar/MenuBar.tsx";
import ToolBar from "../ToolBar/ToolBar.tsx";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      <MenuBar />
      <ToolBar />
    </div>
  );
}

export default Header;
