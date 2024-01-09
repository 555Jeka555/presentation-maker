import React, { CSSProperties, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { Slide as TSlide } from "../../types/types.ts";
import { useAppActions, useAppSelector } from "../../store/hooks.ts";
import classes from "./SlidePreview.module.css";
import BlockPreview from "../common/BlockPreview/BlockPreview.tsx";
import { RegisterDndItemFn } from "../../hooks/useDragAndDropSlide.ts";

type SlideProps = {
  slide: TSlide;
  className?: string;
  registerDndItem: RegisterDndItemFn;
};

function SlidePreview({ slide, className, registerDndItem }: SlideProps) {
  const [background, setBackground] = useState(slide.background);
  const presentation = useAppSelector(state => state.presentation);
  const [selectedSlides] = useState([...presentation.selectSlides]);
  const [isSelect, setIsSelect] = useState(selectedSlides.includes(slide));
  const { createSelectSlideAction, createSelectOneSlideAction } = useAppActions();
  const ref = useRef<HTMLDivElement>(null);

  const handleLeftClickSlide = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.ctrlKey) {
      createSelectSlideAction(slide);
    } else {
      createSelectOneSlideAction(slide);
    }
  };

  const style: CSSProperties = {
    background: background,
  };

  useEffect(() => {
    presentation.selectSlides.map(selectSlide => {
      if (selectSlide === slide) {
        if (selectSlide.background[0] === "#") {
          setBackground(selectSlide.background);
        } else {
          const image = `url(${selectSlide.background})`;
          setBackground(image);
        }
      }
    });

    if (presentation.selectSlides.includes(slide)) {
      return setIsSelect(true);
    } else {
      setIsSelect(false);
    }

    const { onDragStart } = registerDndItem!(presentation.slides.indexOf(slide)!, { elementRef: ref });

    const onMouseDown = (event: MouseEvent) => {
      onDragStart({
        onDrag: dragEvent => {
          ref.current!.style.position = "relative";
          ref.current!.style.zIndex = "1";
          ref.current!.style.top = `${dragEvent.clientY - event.clientY}px`;
        },
        onDrop: () => {
          ref.current!.style.position = "";
          ref.current!.style.zIndex = "";
          ref.current!.style.top = "";
        },
      });
    };
    ref.current!.addEventListener("mousedown", onMouseDown);

    return () => ref.current?.removeEventListener("mousedown", onMouseDown);
  }, [presentation]);

  return (
    <div ref={ref} id={slide.id}>
      <div
        className={classNames(classes.slide, className, isSelect ? classes.select : "")}
        style={style}
        onClick={handleLeftClickSlide}
      >
        {slide.objects.map(object => (
          <BlockPreview key={object.id} object={object} isWorkSpace={false} />
        ))}
      </div>
    </div>
  );
}

export default SlidePreview;
