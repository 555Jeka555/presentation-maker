import { useEffect, useRef } from "react";
import { useAppActions } from "../store/hooks.ts";

type Coords = { startX: number; startY: number; lastX: number; lastY: number };

function useDragAndDrop(id: string) {
  const { createMovePrimitivesAction } = useAppActions();
  const isClicked = useRef<boolean>(false);
  const coords = useRef<Coords>({ startX: 0, startY: 0, lastX: 0, lastY: 0 });
  useEffect(() => {
    const target = document.getElementById(id);
    if (target === null) throw new Error("Element with given id doesn't exist");

    const container = target.parentElement;
    if (container === null) throw new Error("target element must have a parent");

    const onMouseDown = (event: MouseEvent) => {
      isClicked.current = true;
      coords.current.startX = event.clientX;
      coords.current.startY = event.clientY;
    };

    const onMouseUp = () => {
      isClicked.current = false;
      createMovePrimitivesAction(id, { x: target.offsetLeft, y: target.offsetTop });
      coords.current.lastX = target.offsetLeft;
      coords.current.lastY = target.offsetTop;
    };

    const onMouseMove = (event: MouseEvent) => {
      if (!isClicked.current) return;

      const nextX = event.clientX - coords.current.startX + coords.current.lastX;
      const nextY = event.clientY - coords.current.startY + coords.current.lastY;

      target.style.left = `${nextX}px`;
      target.style.top = `${nextY}px`;
    };

    target.addEventListener("mousedown", onMouseDown);
    target.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);

    return () => {
      target.removeEventListener("mousedown", onMouseDown);
      target.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
    };
  }, [id]);
}

export default useDragAndDrop;
