import { CSSProperties, useEffect, useState } from "react";
import classNames from "classnames";
import Block from "../common/Block/Block.tsx";
import { Slide as TSlide } from "../../types/types.ts";
import { useAppSelector } from "../../store/hooks.ts";
import classes from "./Slide.module.css";

type SlideProps = {
  slide: TSlide;
  className?: string;
};

function Slide({ slide, className }: SlideProps) {
  const presentation = useAppSelector(state => state.presentation);
  const [background, setBackground] = useState(slide.background);

  const style: CSSProperties = {
    background: background,
  };

  useEffect(() => {
    if (presentation.currentSlide) {
      if (presentation.currentSlide.background[0] === "#") {
        setBackground(presentation.currentSlide.background);
      } else {
        const image = `url(${presentation.currentSlide.background})`;
        setBackground(image);
      }
    }
  }, [presentation]);

  return (
    <div className={classNames(classes.slide, className)} style={style}>
      {slide.objects.map(object => (
        <Block key={object.id} object={object} isWorkSpace={true}></Block>
      ))}
    </div>
  );
}

export default Slide;
