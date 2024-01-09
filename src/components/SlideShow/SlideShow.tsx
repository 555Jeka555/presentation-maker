import classes from "./SlideShow.module.css";
import { useAppActions, useAppSelector } from "../../store/hooks.ts";
import { useEffect, useState } from "react";
import Slide from "../Slide/Slide.tsx";

type SlideShowProps = {
  setIsSlideShow: React.Dispatch<React.SetStateAction<boolean>>;
};

function SlideShow({ setIsSlideShow }: SlideShowProps) {
  const presentation = useAppSelector(state => state.presentation);
  const { createChangeSlideShowModeAction, createShowPrevSlideAction, createShowNextSlideAction } = useAppActions();
  const [currentSlide, setCurrentSlide] = useState(presentation.currentSlide);
  const handleKeyPress = (event: KeyboardEvent) => {
    const enterKey = event.key;
    if (event.target.value !== undefined) {
      return;
    }

    if (enterKey === "F2") {
      createChangeSlideShowModeAction();
      setIsSlideShow(presentation.isSlideShow);
    } else if (enterKey === "ArrowDown") {
      createShowNextSlideAction();
      setCurrentSlide(presentation.currentSlide);
    } else if (enterKey === "ArrowUp") {
      createShowPrevSlideAction();
      setCurrentSlide(presentation.currentSlide);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [presentation]);

  return <div className={classes.slide__show}>{currentSlide ? <Slide slide={currentSlide} /> : <div></div>}</div>;
}

export default SlideShow;
