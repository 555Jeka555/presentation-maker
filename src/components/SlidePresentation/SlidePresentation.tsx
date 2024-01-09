import { CSSProperties, useEffect, useState } from "react";
import classNames from "classnames";
import { Slide as TSlide } from "../../types/types.ts";
import { useAppSelector } from "../../store/hooks.ts";
import classes from "./SlidePresentation.module.css";
import BlockPreview from "../common/BlockPreview/BlockPreview.tsx";

type SlideProps = {
  slide: TSlide;
  className?: string;
};

function SlidePresentation({ slide, className }: SlideProps) {
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
        <BlockPreview key={object.id} object={object} isWorkSpace={true}></BlockPreview>
      ))}
    </div>
  );
}

export default SlidePresentation;
