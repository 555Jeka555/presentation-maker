import { v4 as uuidv4 } from "uuid";
import { Menu, MenuElement } from "../types/types.ts";

const fileMenuElements: MenuElement[] = [
  { id: uuidv4(), text: "Создать", onClick: () => {} },
  { id: uuidv4(), text: "Скачать", onClick: () => {} },
];
export const fileMenu: Menu = {
  menuElements: fileMenuElements,
};

const correctionMenuElements: MenuElement[] = [
  { id: uuidv4(), shortcut: "Ctrl+Z", text: "Отменить", onClick: () => {} },
  { id: uuidv4(), shortcut: "Ctrl+Y", text: "Повторить", onClick: () => {} },
];
export const correctionMenu: Menu = {
  menuElements: correctionMenuElements,
};
