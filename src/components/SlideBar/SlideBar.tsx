import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MenuElement, Position } from "../../types/types.ts";
import Menu from "../common/Menu/Menu.tsx";
import SlidePreview from "../SlidePreview/SlidePreview.tsx";
import { useAppActions, useAppSelector } from "../../store/hooks.ts";
import classes from "./SlideBar.module.css";
import { useDragAndDropSlide } from "../../hooks/useDragAndDropSlide.ts";

function SlideBar() {
  const [positionMouse, setPositionMouse] = useState({ x: 0, y: 0 });
  const [opened, setOpened] = useState(false);
  const presentation = useAppSelector(state => state.presentation);
  const previewSlides = useAppSelector(state => state.presentation.slides);
  const {
    createCreateSlideAction,
    createDeleteSlideAction,
    createUpdateSlidesAction,
    createChangeOrderAction,
    createSetCurrentSlide,
  } = useAppActions();

  const dragged = useRef<number>(0);
  const draggedOver = useRef<number>(0);

  const handleSort = () => {
    const newElements = [...previewSlides].filter(
      slide => !presentation.selectSlides.some(selectedElement => selectedElement.id == slide.id)
    );
    newElements.splice(draggedOver.current, 0, ...presentation.selectSlides);
    createUpdateSlidesAction(newElements);
  };

  const onClose = () => {
    setOpened(false);
  };
  const handleRightClickSlideBar = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const position: Position = {
      x: event.clientX,
      y: event.clientY,
    };
    setPositionMouse(position);
    setOpened(true);
  };

  const slideBarMenuElements: MenuElement[] = [
    {
      id: uuidv4(),
      onClick: (): void => {
        createCreateSlideAction();
        setOpened(false);
      },
      text: "Новый слайд",
    },
    {
      id: uuidv4(),
      onClick: () => {
        createDeleteSlideAction();
        setOpened(false);
      },
      text: "Удалить слайд",
    },
  ];

  const { registerDndItem } = useDragAndDropSlide({
    onOrderChange: (from, to) => {
      createChangeOrderAction(from, to);
      createSetCurrentSlide(to);
    },
  });
  return (
    <div onContextMenu={handleRightClickSlideBar} className={classes["slide-bar"]}>
      {previewSlides.length > 0 &&
        previewSlides.map((slide, index) => (
          <div key={slide.id} className={classes.element}>
            <div className={classes.index}>{index + 1}</div>
            <div className={classes.wrapper}>
              <SlidePreview slide={slide} className={classes.slide} />
            </div>
          </div>
        ))}

      <Menu menuElements={slideBarMenuElements} position={positionMouse} opened={opened} onClose={onClose} />
    </div>
  );
}

export default SlideBar;
