import { CSSProperties, useRef } from "react";
import { Menu as TMenu, Position } from "../../../types/types.ts";
import MenuElement from "../MenuElement/MenuElement.tsx";
import { useOutsideClick } from "../../../hooks/useOutsideClick.ts";
import classes from "./Menu.module.css";

type MenuProps = {
  position: Position;
  opened: boolean;
  onClose: () => void;
} & TMenu;

function Menu({ menuElements, position, opened, onClose }: MenuProps) {
  const ref = useRef(null);

  useOutsideClick(ref, onClose, opened);
  if (!opened) return null;

  const positionStyle: CSSProperties = {
    left: `${position.x}px`,
    top: `${position.y}px`,
  };

  return (
    <div ref={ref} className={classes.body} style={positionStyle}>
      {menuElements.map(menuElement => (
        <MenuElement
          key={menuElement.id}
          text={menuElement.text}
          shortcut={menuElement.shortcut}
          onClick={menuElement.onClick}
        />
      ))}
    </div>
  );
}

export default Menu;
