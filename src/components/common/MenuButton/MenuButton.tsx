import { useRef, useState } from "react";
import { Menu as TMenu, Position } from "../../../types/types.ts";
import Menu from "../Menu/Menu.tsx";
import classes from "./MenuButton.module.css";

type MenuButtonProps = {
  label: string;
  menu: TMenu;
};

function MenuButton({ label, menu }: MenuButtonProps) {
  const [positionMouse, setPositionMouse] = useState({ x: 0, y: 0 });
  const [opened, setOpened] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const onClose = () => {
    setOpened(false);
  };

  const handleLeftClickSlideBar = () => {
    if (!buttonRef.current) return;

    const position: Position = {
      x: buttonRef.current.offsetLeft,
      y: buttonRef.current.offsetTop + buttonRef.current.offsetTop / 1.5,
    };
    setPositionMouse(position);
    setOpened(true);
  };

  return (
    <div ref={buttonRef} onClick={handleLeftClickSlideBar}>
      <div className={classes.button}>{label}</div>
      <Menu menuElements={menu.menuElements} position={positionMouse} opened={opened} onClose={onClose} />
    </div>
  );
}

export default MenuButton;
