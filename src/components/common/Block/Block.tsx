import { CSSProperties, MouseEvent, useEffect, useState } from "react";
import classNames from "classnames";
import { Image as TImage, Primitive as TPrimitive, Text as TText } from "../../../types/types.ts";
import useDragAndDrop from "../../../hooks/useDragAndDrop.ts";
import Image from "../Image/Image.tsx";
import Text from "../Text/Text.tsx";
import Primitive from "../Primitive/Primitive.tsx";
import { useAppActions, useAppSelector } from "../../../store/hooks.ts";
import classes from "./Block.module.css";

type BlockProps = {
  object: TPrimitive | TImage | TText;
  isWorkSpace: boolean;
};

function Block({ object, isWorkSpace }: BlockProps) {
  const presentation = useAppSelector(state => state.presentation);
  const [isSelect, setIsSelect] = useState(false);

  const {
    createSelectPrimitiveAction,
    createChangeTextAction,
    createDeletePrimitiveAction,
    createChangeRotationAction,
    createFocusPrimitiveAction,
  } = useAppActions();

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.ctrlKey) {
      createSelectPrimitiveAction(object);
    } else {
      createFocusPrimitiveAction(object);
    }
  };

  useDragAndDrop(`${object.id}-workspace`);

  const centerX = object.size.width / 2;
  const centerY = object.size.height / 2;

  const style: CSSProperties = {
    height: object.size.height,
    left: object.position.x,
    top: object.position.y,
    transform: `rotate(${object.rotation}deg)`,
    transformOrigin: `${centerX}px ${centerY}px`,
    width: object.size.width,
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    const enterKey = event.key;
    if (event.target.value !== undefined) {
      return;
    }

    if (object.type === "text") {
      createChangeTextAction(enterKey);
    }

    if (enterKey === "ArrowLeft") {
      createChangeRotationAction("left");
    } else if (enterKey === "ArrowRight") {
      createChangeRotationAction("right");
    }

    if (enterKey === "Delete" && presentation.currentSlide?.selectObjects.length !== 0) {
      createDeletePrimitiveAction();
    }
  };

  useEffect(() => {
    if (isWorkSpace) {
      window.addEventListener("keydown", handleKeyPress);
    }

    if (presentation.currentSlide?.selectObjects.includes(object)) {
      setIsSelect(true);
    } else {
      setIsSelect(false);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [object, isWorkSpace, presentation]);

  return (
    <div
      id={`${object.id}${isWorkSpace ? `-workspace` : ``}`}
      onMouseDown={handleClick}
      className={classNames(classes.block, isSelect ? classes.select : "")}
      style={style}
    >
      {object.type === "image" && <Image data={object.data} />}
      {object.type === "primitive" && <Primitive data={object.data} />}
      {object.type === "text" && <Text data={object.data} />}
    </div>
  );
}

export default Block;
