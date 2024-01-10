import React, { CSSProperties, useEffect, useState } from "react";
import Block from "../common/Block/Block.tsx";
import { Slide as TSlide } from "../../types/types.ts";
import { useAppActions, useAppSelector } from "../../store/hooks.ts";
import classes from "./SlidePreview.module.css";

type SlideProps = {
  slide: TSlide;
  className?: string;
};

function SlidePreview({ slide, className }: SlideProps) {
  const [background, setBackground] = useState(slide.background);
  const presentation = useAppSelector(state => state.presentation);
  const [selectedSlides] = useState([...presentation.selectSlides]);
  const [isSelect, setIsSelect] = useState(selectedSlides.includes(slide));
  const { createSelectSlideAction, createSelectOneSlideAction } = useAppActions();

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

    return;
  }, [presentation, slide]);

  return (
    <div>
      <div
        className={`${classes.slide} ${className} ${isSelect ? classes.select : ""}`}
        style={style}
        onClick={handleLeftClickSlide}
      >
        {slide.objects.map(object => (
          <Block key={object.id} object={object} isWorkSpace={false} />
        ))}
      </div>
    </div>
  );
}

export default SlidePreview;
